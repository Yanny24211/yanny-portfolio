import "./styles.css";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import githubLogoWhite from "../../assets/githubLogoWhite.svg";
import githubLogoBlack from "../../assets/githubLogoBlack.svg";
import resumeSymbolWhite from "../../assets/resumeSymbolWhite.svg";
import resumeSymbolBlack from "../../assets/resumeSymbolBlack.svg";
import linkedInSymbolBlack from "../../assets/linkedinBlack.svg";
import linkedInSymbolWhite from "../../assets/linkedinWhite.svg";
import profilePic from "../../assets/profilePic.png";
import uniLogo from "../../assets/TMU_logo.png";
import ibLogo from "../../assets/ibLogo.png";
import lfLogo from "../../assets/logicFusionLogo.png";
import mhirjLogo from "../../assets/mhirj.png";
import { OrbitControls, Wireframe } from "three/examples/jsm/Addons.js";
const WINDOW_WIDTH = 1920;
const technologyDescriptions = {
  arduino:
    "An open-source electronics platform based on simple hardware and flexible software, ideal for rapid prototyping of IoT devices and embedded systems. Arduino empowers developers to bring interactive physical computing projects to life using sensors, actuators, and microcontrollers",
  azure:
    "Microsoft Azure is a leading cloud computing platform offering a wide range of services including virtual machines, AI, DevOps, and serverless computing. It’s a go-to solution for scalable enterprise applications, hybrid cloud environments, and end-to-end digital transformation",
  c: "A foundational systems programming language known for speed, memory efficiency, and low-level hardware control. C underpins modern operating systems, embedded firmware, and performance-critical applications, making it essential for software engineers working close to the hardware",
  docker:
    "A powerful containerization platform that enables consistent software deployment across development, testing, and production. Docker is central to DevOps, microservices architecture, and cloud-native development, allowing developers to build once and run anywhere",
  electron:
    "A framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS. Electron powers popular tools like VS Code and Figma, offering native capabilities with a web development experience for fast desktop app development",
  es: "A highly scalable open-source search and analytics engine designed for fast full-text search, log analysis, and real-time data visualization. Widely used in monitoring, business intelligence, and information retrieval systems, Elasticsearch excels at handling massive data volumes",
  express:
    "A minimal and flexible Node.js web application framework that streamlines API development and server-side logic. Express is widely adopted for its simplicity, scalability, and robust middleware ecosystem, making it a top choice for RESTful services and microservices",
  flask:
    "A lightweight Python web framework perfect for building APIs and web apps quickly. Flask offers simplicity and extensibility, making it ideal for data science dashboards, machine learning interfaces, and scalable backend services",
  git: "An essential distributed version control system that allows teams to collaborate efficiently on code. Git tracks changes, enables branching workflows, and integrates seamlessly with CI/CD pipelines, forming the backbone of modern software development practices",
  java: "A mature, object-oriented programming language known for its platform independence, security, and robustness. Java is widely used in enterprise-level applications, Android development, and high-performance systems in finance, healthcare, and telecom",
  javascript:
    "A dynamic, high-level language that drives interactivity and logic on the web. JavaScript is used across the stack—client-side with frameworks like React and server-side via Node.js—making it indispensable for full-stack development",
  kubernetes:
    "An open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. Kubernetes is crucial for building resilient, scalable cloud-native apps and is a core technology in modern DevOps workflows",
  lua: "A lightweight, high-performance scripting language often embedded in games, real-time applications, and embedded systems. Lua is prized for its speed, simplicity, and ability to extend host applications with custom logic.",
  mui: "A React UI framework implementing Google’s Material Design system. MUI accelerates front-end development with ready-to-use components, consistent theming, and accessibility features, enabling polished and responsive user interfaces",
  mysql:
    "A widely adopted open-source relational database known for reliability, performance, and ease of use. MySQL supports complex queries and large-scale data storage, serving as a backbone for countless web and enterprise applications",
  nodejs:
    "A JavaScript runtime built on Chrome’s V8 engine, enabling fast, scalable server-side applications. Node.js powers real-time apps, APIs, and microservices with non-blocking I/O, making it a favorite for modern full-stack development",
  react:
    "A declarative, component-based JavaScript library for building fast, dynamic user interfaces. Developed by Meta, React simplifies state management and DOM rendering, enabling scalable front-end architectures and seamless user experiences",
  redux:
    "A predictable state container for JavaScript applications, often used with React to manage complex app state. Redux enhances maintainability and debugging by centralizing state logic and enabling time-travel debugging and consistent behavior",
  vite: "A lightning-fast build tool and development server that dramatically improves the front-end development experience. Designed with modern JavaScript frameworks in mind, Vite offers instant hot module replacement and optimized builds for production",
  threejs:
    "Three.js is a JavaScript 3D library used to create interactive, high-performance 3D content in the browser using WebGL. It enables the rendering of complex scenes with custom geometries, lighting, animations, and camera controls, making it ideal for building immersive visual experiences and modern web interfaces (aka floating green donut)",
};

const skillLogos = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
});

const projectPictures = import.meta.glob("../../assets/projects/*.png", {
  eager: true,
});
const fileNames = Object.keys(skillLogos).map((path) => {
  const parts = path.split("/");
  return parts[parts.length - 1].slice(0, -4);
});
// console.log(skillLogos);

const projectImagesJson = Object.keys(projectPictures).flatMap((path) => {
  const parts = path.split("/");
  return {
    [parts[parts.length - 1].slice(0, -4)]: projectPictures[path].default,
  };
});
const projectImages = Object.assign({}, ...projectImagesJson);
const imageIconsList = Object.values(skillLogos);

// console.log(fileNames);
function Homepage() {
  const [selectedSkill, setSelectedSkill] = useState();
  const [showSkillPopup, setShowSkillPopup] = useState(false);
  const [screenSmall, setScreenSmall] = useState(
    window.innerWidth > WINDOW_WIDTH * 0.5,
  );

  const canvasRef = useRef(null);
  const [projects, setProjects] = useState(null);
  const closePopup = () => setShowSkillPopup(false);
  const [atTop, setAtTop] = useState(true);
  const navbarStyle = {
    width: screenSmall ? "auto" : "68px",
    borderRadius: screenSmall ? "10px" : "100px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  });

  useEffect(() => {
    fetch("https://api.github.com/users/Yanny24211/repos")
      .then((res) => res.json())
      .then((data) => {
        const portfolioItems = data.filter((item) => item.topics[0]);
        setProjects(portfolioItems);
        console.log(portfolioItems);
      });
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      document.documentElement.clientWidth /
        document.documentElement.clientHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(ambientLight);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    );
    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = screenSmall
      ? new THREE.TorusGeometry(12, 3, 16, 100)
      : new THREE.TorusGeometry(8, 3, 10, 70);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4caf50,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);
    const lastScrollY = window.scrollY;

    function animate() {
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.02;
      torus.rotation.z += 0.02;
      renderer.render(scene, camera);
    }
    function rotateTorus() {
      const currentPosition = window.scrollY;
      if (currentPosition > lastScrollY) {
        torus.rotation.x += 0.05;
        torus.rotation.y += 0.05;
        torus.rotation.z += 0.05;
        renderer.render(scene, camera);
      } else if (currentPosition < lastScrollY) {
        torus.rotation.x -= 0.05;
        torus.rotation.y -= 0.05;
        torus.rotation.z -= 0.05;
        renderer.render(scene, camera);
      }
    }

    window.addEventListener("scroll", rotateTorus);

    renderer.setAnimationLoop(animate);
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const geometry = screenSmall
        ? new THREE.TorusGeometry(12, 3, 16, 100)
        : new THREE.TorusGeometry(8, 3, 10, 70);
      torus.geometry = geometry;

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const el = document.querySelectorAll(".background-graphics");
      const scrollTop = window.scrollY;
      el.forEach(
        (bg) => (bg.style.backgroundPosition = `0px ${-scrollTop / 5}px`),
      );
    });
    document.querySelectorAll(".navbar-item").forEach((li) => {
      const img = li.querySelector("img");
      if (img.alt === "github-logo") {
        li.addEventListener("mouseenter", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = githubLogoBlack;
            img.style.opacity = 1;
          }, 100);
        });
        li.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = githubLogoWhite;
            img.style.opacity = 1;
          }, 100);
        });
      } else if (img.alt === "linkedin-symbol") {
        li.addEventListener("mouseenter", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = linkedInSymbolBlack;
            img.style.opacity = 1;
          }, 100);
        });
        li.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = linkedInSymbolWhite;
            img.style.opacity = 1;
          }, 100);
        });
      } else if (img.alt === "resume-symbol") {
        li.addEventListener("mouseenter", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = resumeSymbolBlack;
            img.style.opacity = 1;
          }, 100);
        });
        li.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = resumeSymbolWhite;
            img.style.opacity = 1;
          }, 100);
        });
      }
    });
  }, []);

  useEffect(() => {
    const contactForm = document.querySelector(".contact");
    observer.observe(contactForm);
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };
    const handleResize = () => {
      const isBig = window.innerWidth > WINDOW_WIDTH * 0.5;
      setScreenSmall(isBig);
    };
    console.log(window.innerWidth > WINDOW_WIDTH * 0.5);
    console.log(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="homepage" className="homepage">
      <div className="header-card">
        <div
          style={{
            height: atTop ? "110px" : "100px",
            transition: "all 0.5s ease-in-out",
          }}
          className="navbar"
        >
          <div className="title-card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "80px",
              }}
            >
              <a href="#homepage">
                <img
                  style={{
                    width: atTop ? "54px" : "48px",
                    height: atTop ? "54px" : "48px",
                  }}
                  id="profilePic"
                  src={profilePic}
                  alt="profile-photo"
                />
              </a>
            </div>

            {screenSmall && "Yanny Patel"}
          </div>
          <div className="link-items">
            <ul className="navbar-items">
              <li style={navbarStyle} className="navbar-item">
                <a href="https://github.com/Yanny24211" target="_blank">
                  <img src={githubLogoWhite} alt="github-logo" />
                  {screenSmall && "Github"}
                </a>
              </li>
              <li style={navbarStyle} className="navbar-item">
                <a
                  href="https://www.linkedin.com/in/yanny-patel/"
                  target="_blank"
                >
                  <img src={linkedInSymbolWhite} alt="linkedin-symbol" />
                  {screenSmall && "LinkedIn"}
                </a>
              </li>
              <li style={navbarStyle} className="navbar-item">
                <a
                  href="https://drive.google.com/file/d/1puWHTjAEJFg4j-FYNOFcIBdgTg3By_zj/view?usp=sharing"
                  target="_blank"
                >
                  <img src={resumeSymbolWhite} alt="resume-symbol" />
                  {screenSmall && "Resume"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="canvas-container">
          <canvas className="bg-canvas" ref={canvasRef}></canvas>
          <div className="bg-container">
            <div className="name">Yanny Patel</div>
            <div className="current-occupation">
              <a id="about" href="#aboutMe">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="background-graphics" id="img1"></div>

      <div id="aboutMe" className="header-card">
        <h1
          id="skillsPage"
          style={{ fontSize: screenSmall ? "65px" : "35px" }}
          className="page-header"
        >
          Skills & Experiences
        </h1>
        <div id="mainBox" style={{ width: screenSmall ? "100%" : "95%" }}>
          <div className="about-me-box">
            <div className="wrapper-box">
              <div className="description">
                <img style={{ height: "5vh" }} src={lfLogo} />
                Part-time STEM Course Instructor at Logic Fusion
              </div>
            </div>
            <div className="wrapper-box">
              <div className="description">
                <img style={{ height: "100px" }} src={mhirjLogo} />
                Software Developer Intern at MHI RJ
              </div>
            </div>
          </div>

          <div className="about-me-box">
            {showSkillPopup ? (
              <div className="overlay-container">
                <div className="overlay">
                  <div>
                    <img
                      className="techs"
                      src={
                        skillLogos[`../../assets/icons/${selectedSkill}.svg`]
                          .default
                      }
                      onClick={closePopup}
                      alt={`Asset ${selectedSkill}.svg`}
                    />
                  </div>
                  <div>
                    <h2 className="skill-title">
                      {selectedSkill.toUpperCase()}
                    </h2>
                  </div>
                  <div>
                    <div className="skill-description">
                      {technologyDescriptions[selectedSkill]}
                    </div>
                  </div>

                  <div style={{ height: "65px" }}>
                    <button className="skill-button" onClick={closePopup}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="skills">
                {imageIconsList.map((img, i) => (
                  <img
                    onClick={() => {
                      setSelectedSkill(fileNames[i]);
                      setShowSkillPopup(true);
                    }}
                    className="techs"
                    key={i}
                    src={img.default}
                    alt={`Asset ${fileNames[i]}.svg`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="about-me-box">
            <div className="wrapper-box">
              <div className="description">
                <img className="image-items" src={ibLogo} />
                IB DP Graduate{" "}
              </div>
            </div>
            <div className="wrapper-box">
              <div className="description">
                <img className="image-items" src={uniLogo} />
                4th Year Software Engineering
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-graphics" id="img2"></div>

      <div id="projects" className="header-card">
        <h1
          style={{ fontSize: screenSmall ? "65px" : "35px" }}
          id="projectsPage"
          className="page-header"
        >
          Projects
        </h1>
        <div className="project-container">
          {projects ? (
            projects.map((item) => (
              <div key={item.name} className="project-item">
                <div className="project-description">
                  <div className="project-title">{item.name}</div>
                  <div className="project-txt">{item.description}</div>
                </div>
                <div className="project-img-container">
                  <a href={item.html_url} target="_blank">
                    <img
                      className="project-img"
                      src={projectImages[item.name]}
                      alt={item.name}
                    />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div>nun here lol mf</div>
          )}
        </div>
      </div>

      <div className="background-graphics" id="img3">
        <div className="contact">
          <div id="contactHeader">Contact Me!</div>
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="apikey"
              value="2fde2b53-9d34-47e9-b397-6dac7b92a617"
            />
            <input type="hidden" name="from_name" value="Yanny's Portfolio" />
            <input
              type="checkbox"
              name="botcheck"
              class="hidden"
              style={{ display: "none" }}
            />
            <div className="contact-input">
              <label>Email: </label>
              <input
                type="email"
                name="email"
                placeholder="jessewe@needtocook.ca"
                required
              />
            </div>
            <div className="contact-input">
              <label>Name: </label>
              <input type="text" name="name" placeholder="Walter " required />
            </div>
            <div className="contact-input">
              <label>Subject: </label>
              <input name="subject" placeholder="yello jello yo" />
            </div>
            <textarea id="contactText" name="message" required></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            ></input>
            <button id="contactSubmit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

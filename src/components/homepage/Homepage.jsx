import "./test.css";
import { useState } from "react";
import githubLogo from "../../assets/githubLogo.svg";
import resumeSymbol from "../../assets/resumeSymbol.svg";
import profilePic from "../../assets/profilePic.png";
import uniLogo from "../../assets/TMU_logo.png";
import ibLogo from "../../assets/ibLogo.png";
import lfLogo from "../../assets/logicFusionLogo.png";
import mhirjLogo from "../../assets/mhirj.png";
const technologyDescriptions = {
  arduino:
    "An open-source electronics platform based on simple hardware and flexible software, ideal for rapid prototyping of IoT devices and embedded systems. Arduino empowers developers to bring interactive physical computing projects to life using sensors, actuators, and microcontrollers.",
  azure:
    "Microsoft Azure is a leading cloud computing platform offering a wide range of services including virtual machines, AI, DevOps, and serverless computing. It’s a go-to solution for scalable enterprise applications, hybrid cloud environments, and end-to-end digital transformation.",
  c: "A foundational systems programming language known for speed, memory efficiency, and low-level hardware control. C underpins modern operating systems, embedded firmware, and performance-critical applications, making it essential for software engineers working close to the hardware.",
  docker:
    "A powerful containerization platform that enables consistent software deployment across development, testing, and production. Docker is central to DevOps, microservices architecture, and cloud-native development, allowing developers to build once and run anywhere.",
  electron:
    "A framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS. Electron powers popular tools like VS Code and Figma, offering native capabilities with a web development experience for fast desktop app development.",
  es: "A highly scalable open-source search and analytics engine designed for fast full-text search, log analysis, and real-time data visualization. Widely used in monitoring, business intelligence, and information retrieval systems, Elasticsearch excels at handling massive data volumes.",
  express:
    "A minimal and flexible Node.js web application framework that streamlines API development and server-side logic. Express is widely adopted for its simplicity, scalability, and robust middleware ecosystem, making it a top choice for RESTful services and microservices.",
  flask:
    "A lightweight Python web framework perfect for building APIs and web apps quickly. Flask offers simplicity and extensibility, making it ideal for data science dashboards, machine learning interfaces, and scalable backend services.",
  git: "An essential distributed version control system that allows teams to collaborate efficiently on code. Git tracks changes, enables branching workflows, and integrates seamlessly with CI/CD pipelines, forming the backbone of modern software development practices.",
  java: "A mature, object-oriented programming language known for its platform independence, security, and robustness. Java is widely used in enterprise-level applications, Android development, and high-performance systems in finance, healthcare, and telecom.",
  javascript:
    "A dynamic, high-level language that drives interactivity and logic on the web. JavaScript is used across the stack—client-side with frameworks like React and server-side via Node.js—making it indispensable for full-stack development.",
  kubernetes:
    "An open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. Kubernetes is crucial for building resilient, scalable cloud-native apps and is a core technology in modern DevOps workflows.",
  lua: "A lightweight, high-performance scripting language often embedded in games, real-time applications, and embedded systems. Lua is prized for its speed, simplicity, and ability to extend host applications with custom logic.",
  mui: "A React UI framework implementing Google’s Material Design system. MUI accelerates front-end development with ready-to-use components, consistent theming, and accessibility features, enabling polished and responsive user interfaces.",
  mysql:
    "A widely adopted open-source relational database known for reliability, performance, and ease of use. MySQL supports complex queries and large-scale data storage, serving as a backbone for countless web and enterprise applications.",
  nodejs:
    "A JavaScript runtime built on Chrome’s V8 engine, enabling fast, scalable server-side applications. Node.js powers real-time apps, APIs, and microservices with non-blocking I/O, making it a favorite for modern full-stack development.",
  react:
    "A declarative, component-based JavaScript library for building fast, dynamic user interfaces. Developed by Meta, React simplifies state management and DOM rendering, enabling scalable front-end architectures and seamless user experiences.",
  redux:
    "A predictable state container for JavaScript applications, often used with React to manage complex app state. Redux enhances maintainability and debugging by centralizing state logic and enabling time-travel debugging and consistent behavior.",
  vite: "A lightning-fast build tool and development server that dramatically improves the front-end development experience. Designed with modern JavaScript frameworks in mind, Vite offers instant hot module replacement and optimized builds for production.",
};

const skillLogos = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
});
const fileNames = Object.keys(skillLogos).map((path) => {
  const parts = path.split("/");
  return parts[parts.length - 1].slice(0, -4);
});
console.log(skillLogos);

const imageList = Object.values(skillLogos);
console.log(fileNames);
function Homepage() {
  const [selectedSkill, setSelectedSkill] = useState();
  const [showSkillPopup, setShowSkillPopup] = useState(false);
  const closePopup = () => setShowSkillPopup(false);
  return (
    <div class="homepage">
      <div class="header-card">
        <div class="navbar">
          <div class="title-card">
            <img id="profilePic" src={profilePic} alt="profile photo" />
            Yanny Patel
          </div>
          <div>
            <ul className="navbar-items">
              <li class="navbar-item">
                <img src={githubLogo} alt="github logo" />
                <a href="https://github.com/Yanny24211" target="_blank">
                  Github
                </a>
              </li>
              <li class="navbar-item">
                <img src={resumeSymbol} alt="resume symbol" />
                <a
                  href="https://drive.google.com/file/d/1puWHTjAEJFg4j-FYNOFcIBdgTg3By_zj/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-gif">
          <div class="name">Yanny Patel</div>
          <div class="current-occupation">
            <a id="about" href="#aboutMe">
              About Me
            </a>
          </div>
        </div>
      </div>
      <div id="aboutMe" class="header-card">
        <h1 id="skillsPage" class="page-header">
          Skills & Experiences
        </h1>
        <div id="mainBox">
          <div class="about-me-box">
            <div class="description">
              <img style={{ height: "100px" }} src={lfLogo} />
              Part-time STEM Course Instructor at Logic Fusion
            </div>
            <div class="description">
              <img style={{ height: "100px" }} src={mhirjLogo} />
              Software Developer Intern at MHI RJ
            </div>
          </div>

          <div class="about-me-box">
            {showSkillPopup ? (
              <div class="overlay-container">
                <div class="overlay">
                  <img
                    class="techs"
                    src={
                      skillLogos[`../../assets/icons/${selectedSkill}.svg`]
                        .default
                    }
                    alt={`Asset ${selectedSkill}.svg`}
                  />
                  <h2 class="skill-title">{selectedSkill.toUpperCase()}</h2>
                  <div class="skill-description">
                    {technologyDescriptions[selectedSkill]}
                  </div>
                  <button class="skill-button" onClick={closePopup}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div class="skills">
                {imageList.map((img, i) => (
                  <img
                    onClick={() => {
                      setSelectedSkill(fileNames[i]);
                      setShowSkillPopup(true);
                    }}
                    class="techs"
                    key={i}
                    src={img.default}
                    alt={`Asset ${fileNames[i]}.svg`}
                  />
                ))}
              </div>
            )}
          </div>
          <div class="about-me-box">
            <div class="description">
              <img class="image-items" src={ibLogo} />
              IB DP Graduate{" "}
            </div>
            <div class="description">
              <img class="image-items" src={uniLogo} />
              4th Year Software Engineering
            </div>
          </div>
        </div>
      </div>
      <div id="projects" class="header-card">
        <h1 class="page-header">Projects</h1>
      </div>
    </div>
  );
}

export default Homepage;

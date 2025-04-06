import "./test.css";
import githubLogo from "../../assets/githubLogo.svg"
import resumeSymbol from "../../assets/resumeSymbol.svg"
import profilePic from "../../assets/profilePic.png"
import uniLogo from "../../assets/TMU_logo.png"
import mhi from "../../assets/mhi.png"
import ibLogo from "../../assets/ibLogo.png"
import lfLogo from "../../assets/logicFusionLogo.png"
import mhirjLogo from "../../assets/mhirj.png"

function Homepage(){
    return(
        <div class="homepage">
            <div class="header-card">
                <div class='navbar'>
                    <div class="title-card"><img id='profilePic' src={profilePic} alt="profile photo"/>Yanny Patel</div>
                    <div>
                        <ul className="navbar-items">
                            <li class='navbar-item'><img src={githubLogo} alt="github logo"/><a href="https://github.com/Yanny24211" target="_blank">Github</a></li>
                            <li class='navbar-item'><img src={resumeSymbol} alt="resume symbol"/><a href="https://drive.google.com/file/d/1puWHTjAEJFg4j-FYNOFcIBdgTg3By_zj/view?usp=sharing" target='_blank'>Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div class='bg-gif'> 
                    <div class='name'>Yanny Patel</div>
                    <div class='current-occupation'><a id='about' href="#aboutMe" >About Me</a></div> 
                </div>
                  
            </div>
            <div id="aboutMe" class="header-card">
                <h1 class='page-header'>About Me</h1>
                <div id='mainBox'>
                    <div class="about-me-box">
                        <div class="description"><img style={{height:'100px'}} src={lfLogo}/>Part-time STEM Course Instructor at Logic Fusion</div>
                        <div class="description"><img style={{height:'100px'}} src={mhirjLogo}/>Software Developer Intern at MHI RJ</div>
                    </div>
                    <div class="about-me-box">

                    </div>
                    <div class="about-me-box">
                        <div class='description'><img class='image-items' src={ibLogo}/>IB DP Graduate </div>
                        <div class='description'><img class='image-items'src={uniLogo} />4th Year Software Engineering</div>
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

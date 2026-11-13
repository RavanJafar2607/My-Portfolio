import { IoMdCode } from "react-icons/io";
import { LuLayers } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "../cssFolder/Skilss.css";
function Skilss() {
  return (
    <>
      <div className="skillsss">
        <div className="skillsContainer" id="skillss">
          <div className="mySkills">
            <h3>Skills</h3>
          </div>
          <div className="sklissItems">
            <div className="skillsCard">
              <div className="skillsCardLogo">
                <p className="logoIcon1">
                  <IoMdCode />
                </p>
                <div className="headerContent">
                  <h4>Core Technologies</h4>
                  <p>Languages & Fundamentals</p>
                </div>
              </div>
              <div className="skillsContent">
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">HTML5 (Semantic & Accessible)</p>
                  <div className="percentDiv">
                    <p className="corPercent">95%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">CSS3 (Flexbox, Grid, Animations)</p>
                  <div className="percentDiv">
                    <p className="corPercent">93%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText"> JavaScript (ES6+, Async/Await)</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">TypeScript (Types, Interfaces)</p>
                  <div className="percentDiv">
                    <p className="corPercent">70%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skillsCard">
              <div className="skillsCardLogo">
                <p className="logoIcon2">
                  <LuLayers />
                </p>
                <div className="headerContent">
                  <h4>Libraries & Frameworks</h4>
                  <p>UI & State Management</p>
                </div>
              </div>
              <div className="skillsContent">
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">React.js (Hooks & Components)</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">Redux Toolkit & Context API</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">React Router DOM</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">React Icons</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skillsCard">
              <div className="skillsCardLogo">
                <p className="logoIcon3">
                  <LuWrench />
                </p>
                <div className="headerContent">
                  <h4>Tools & Services</h4>
                  <p>UI & State Management</p>
                </div>
              </div>
              <div className="skillsContent">
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">Git & GitHub Version Control</p>
                  <div className="percentDiv">
                    <p className="corPercent">80%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">REST APIs & JSON Integration</p>
                  <div className="percentDiv">
                    <p className="corPercent">90%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">Firebase Auth & Hosting</p>
                  <div className="percentDiv">
                    <p className="corPercent">70%</p>
                  </div>
                </div>
                <div className="coreDiv">
                  <p className="coreIcon">
                    <IoCheckmarkCircleOutline />
                  </p>
                  <p className="coreText">Vite & VS Code Workspace</p>
                  <div className="percentDiv">
                    <p className="corPercent">75%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skilss;

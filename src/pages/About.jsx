import Header from "../components/Header";
import Footer from "../components/Footer";
import Skilss from "../components/Skilss";
import { MdOutlineFileDownload } from "react-icons/md";
import Education from "../components/Education";
import "../cssFolder/about.css";
import AnimationScroll from "../components/AnimationScroll";
import "../cssFolder/education.css";
import Education2 from "../components/Education2";
import { useNavigate } from "react-router-dom";
function About() {
  const navigte = useNavigate();
  return (
    <>
      <Header />
      <div className="aboutContainer">
        <div className="aboutText">
          <h3>Ravan Jafarli</h3>
          <p>
            I am Ravan, a junior frontend developer with a strong passion for
            building user-friendly and responsive web interfaces. Based on my
            knowledge of HTML, CSS, JavaScript, and React, I develop various
            mini-applications, portfolio websites, and components. At the same
            time, I am actively diving deeper into TypeScript to make my
            projects more secure and scalable.
          </p>
          <div className="aboutFundamental Knowledge">
            <p>React</p>
            <p>Javascript</p>
            <p>Responsive UI</p>
          </div>
          <div className="aboutBtn">
            <a href="">
              Cv-Download
              <span>
                {" "}
                <MdOutlineFileDownload />
              </span>
            </a>
            <button onClick={() => navigte("/contact")}>Get in touch</button>
          </div>
        </div>
        <div className="aboutImage">
          <img src="/porfolioPhoto.png" alt="" />
        </div>
      </div>
      <AnimationScroll>
        <Education />
      </AnimationScroll>
      <AnimationScroll>
        <Education2 />
      </AnimationScroll>
      <AnimationScroll>
        <Skilss />
      </AnimationScroll>
      <AnimationScroll>
        <Footer />
      </AnimationScroll>
    </>
  );
}
export default About;

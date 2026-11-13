import { useNavigate } from "react-router-dom";
import "../cssFolder/Hero.css";
function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <section className="heroContainer">
        <div className="heroItems">
          <h4 className="heroH4">Hey,I'am Ravan 👋🏻</h4>
          <p className="front">
            <span>Front</span>end Developer
          </p>
          <p className="heroText">
            I am a junior frontend developer living in Baku, ready to start
            working to build modern interfaces that your users will enjoy.
          </p>
          <div className="heroBtns">
            <button className="heroBtn" onClick={() => navigate("/contact")}>
              Get In Touch
            </button>
            <button className="heroBtn" onClick={() => navigate("/projects")}>
              Browse Projects
            </button>
          </div>
        </div>
        <div className="imageDiv">
          <img src="/porfolioPhoto.png" alt="" />
        </div>
      </section>
    </>
  );
}
export default Hero;

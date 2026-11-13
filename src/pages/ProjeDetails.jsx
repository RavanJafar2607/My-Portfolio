import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjeContext } from "../context/ProjeProvider";
import { TiArrowBack } from "react-icons/ti";
import "../cssFolder/projectDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function ProjeDetails() {
  const { id } = useParams();
  const { projectsArray } = useContext(ProjeContext);
  const findProje = projectsArray.find((item) => item.id === Number(id));
  if (!findProje) {
    return (
      <div className="detailsContainer">
        <h3>Layihə yüklənir və ya tapılmadı...</h3>
      </div>
    );
  }
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="detailsContainer1">
        <div className="itemContainer">
          <img src={`/${findProje.photo}`} alt={findProje.name} />

          <div className="itemText">
            <h3>{findProje.name}</h3>
            <p>{findProje.description}</p>
            <div className="itemButton">
              <div className="getLinkBtn">
                <a href={findProje.gitHubLink} className="getlink">
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/rajfrle/"
                  className="getlink"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/r%C9%99van-c%C9%99f%C9%99r-664ba637a/"
                  className="getlink"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="getDemoLink">
                <a href={findProje.link}>Website link</a>
              </div>
              <button className="backBtn" onClick={() => navigate(-1)}>
                <TiArrowBack />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProjeDetails;

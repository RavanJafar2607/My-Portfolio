import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProjeContext } from "../context/ProjeProvider";
import { useNavigate } from "react-router-dom";
import "../cssFolder/project.css";
import { IoIosArrowForward } from "react-icons/io";

function Projects() {
  const { projectsArray } = useContext(ProjeContext);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="projectsContainer">
        {projectsArray.map((item) => {
          return (
            <div className="mapDiv" key={item.id}>
              <img
                src={item.photo}
                alt="photo"
                width={"100%"}
                height={"200px"}
              />
              <button onClick={() => navigate(`/projects/${item.id}`)}>
                {item.name}

                <IoIosArrowForward />
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default Projects;

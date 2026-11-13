import { FiSun } from "@react-icons/all-files/fi/FiSun";
import "../cssFolder/Header.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiDark } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function Header() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <>
      <header>
        <div className="navLogo">
          <h4>Ravan Jafarli</h4>
        </div>
        <nav className="">
          <ul className={hamburger ? "navOpen" : "navclose"}>
            <li>
              <NavLink to={"/"} onClick={handleHamburger}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/projects"} onClick={handleHamburger}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={handleHamburger}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#skills"}
                onClick={(e) => handleScroll(e, "skillss")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={handleHamburger}>
                Contact
              </NavLink>
            </li>
            <div className="buttons">
              <div className="cv">
                <a
                  href="/Revan_Jafarli_CV (3).pdf"
                  download="Revan_Jafarli_CV.pdf"
                  className="cvBtn"
                >
                  Cv-Download
                </a>
                <p>
                  <MdOutlineFileDownload />
                </p>
              </div>

              <button className="themeBtn" onClick={() => toggleTheme()}>
                {theme === "light" ? <FiSun /> : <CiDark />}
              </button>
            </div>
          </ul>
        </nav>
        <div className="hamburger">
          <p onClick={handleHamburger}>
            {" "}
            {hamburger ? <IoMdClose /> : <GiHamburgerMenu />}
          </p>
        </div>
      </header>
    </>
  );
}
export default Header;

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../cssFolder/Footer.css";
function Footer() {
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
  return (
    <>
      <footer>
        <div className="footerCard">
          <div className="footerHeader">
            <h3 className="name">Ravan Jafarli</h3>

            <span>Frontend Developer</span>
          </div>
          <div className="footerContent">
            <p className="myText">
              Passionate Frontend Developer focused on creating modern,
              responsive and user-friendly web applications.
            </p>
            <div className="socialIcon">
              <a href="https://github.com/RavanJafar2607" className="social">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/rajfrle/" className="social">
                <FaInstagram />
              </a>
              <a href="https://t.me/994105152607" className="social">
                <FaTelegram />
              </a>
              <a href="https://wa.me/994105152607" className="social">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/feed/" className="social">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footerCard">
          <div className="footerHeader none">
            <h3>Quick Links</h3>
          </div>
          <div className="footerContent">
            <ul>
              <li>
                <NavLink to={"/"} className={"navlink"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/project"} className={"navlink"}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={"navlink"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"#skillss"}
                  onClick={(e) => handleScroll(e, "skillss")}
                  className={"navlink"}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={"navlink"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerCard">
          <div className="footerHeader">
            <h3>My Skills</h3>
          </div>
          <div className="footerContent">
            <div className="footerSkills">
              <span className="SkillsText">React</span>
              <span className="SkillsText">TypeScript</span>
              <span className="SkillsText">JavaScript</span>
            </div>
            <div className="footerSkills">
              <span className="SkillsText">HTML</span>
              <span className="SkillsText">Css</span>
              <span className="SkillsText">Redux</span>
            </div>
            <div className="footerSkills">
              <span className="SkillsText">React Icon</span>
              <span className="SkillsText">Git</span>
              <span className="SkillsText">FireBase</span>
            </div>
          </div>
        </div>
        <div className="footerCard">
          <div className="footerHeader">
            <h3>Contact Me</h3>
          </div>
          <div className="footerContent">
            <div className="contactMe">
              <span>
                <IoMailOutline />
              </span>
              <p>revanjafarli07@gmail.com</p>
            </div>
            <div className="contactMe">
              <span>
                <IoLocationOutline />
              </span>
              <p>Baku,Azerbaijan</p>
            </div>
            <div className="contactMe">
              <span>
                <BsTelephone />
              </span>
              <p>+994-10-515-26-07</p>
            </div>
          </div>
        </div>
      </footer>
      <hr />
    </>
  );
}

export default Footer;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import "../cssFolder/contact.css";
function Contact() {
  return (
    <>
      <Header />
      <div className="contacts">
        <div className="contactContainer">
          <div className="conactText">
            <h3>HELLO, I'M RAVAN</h3>
            <h2>Let's turn your ideas into code.</h2>
            <p>
              Always looking for cool frontend opportunities and meaningful
              collaborations. Reach out and let's bring your vision to life
            </p>
            <a href="mailto:ravanjafarli@gmail.com" className="link">
              Get in touch
            </a>
          </div>
          <div className="contactItems">
            <div className="contactHeader">
              <h3>Contact Information</h3>
            </div>
            <div className="aLinkItem">
              <a href="mailto:ravanjafarli@gmail.com" className="link">
                <span className="icons">
                  <IoMailOutline />
                </span>
                <span>ravanjafarli07@gmail.com</span>
              </a>
              <a href="tel:+994105152607" className="link">
                <span className="icons">
                  <BsTelephone />
                </span>
                <span>+994-10-515-26-07</span>
              </a>
              <a href="" className="link">
                <span className="icons">
                  <IoLocationOutline />
                </span>
                <span>Hökməli,Bakı Azərbaycan</span>
              </a>
            </div>
            <div className="contactSocial">
              <a href="https://github.com/RavanJafar2607">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/r%C9%99van-c%C9%99f%C9%99r-664ba637a/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/rajfrle/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

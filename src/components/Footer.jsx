import React from "react";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_p1">© AtomicLabs. Todos los derechos reservados</p>
      <p className="footer_p2">Aviso de privacidad</p>
      <img className="footer_img" src={Linkedin} alt="Linkedin" />
      <img className="footer_img" src={Twitter} alt="Twitter" />
    </footer>
  );
};

export default Footer;

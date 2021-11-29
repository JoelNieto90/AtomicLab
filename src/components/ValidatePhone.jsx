import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonOrange from "./ButtonOrange";
import Input from "./Input";
import Footer from "./Footer";
import AstronautValidate from "../assets/Group 4034.png";
import TwoLarge from "../assets/Group 4023.png";
import OneSmall from "../assets/Group 4016.png";
import TwoSmall from "../assets/Group 4020.png";
import ThreeSmall from "../assets/Group 4017.png";
import FourSmall from "../assets/Group 4018.png";
import { Link } from "react-router-dom";
import "../styles/ValidatePhone.scss";

const ValidatePhone = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="Validate">
      <NavBar />
      <main className="Validate_main">
        <section className="Validate_main--section">
          <section>
            <div>
              <img
                className="Validate_main--section--img1"
                src={OneSmall}
                alt="OneSmall"
              />
              <img
                className="Validate_main--section--img1"
                src={TwoSmall}
                alt="TwoSmall"
              />
              <img
                className="Validate_main--section--img1"
                src={ThreeSmall}
                alt="ThreeSmall"
              />
              <img
                className="Validate_main--section--img1"
                src={FourSmall}
                alt="FourSmall"
              />
            </div>
            <div>
              <div class="Validate_main--section--progressContainer">
                <div
                  class="Validate_main--section--progressContainer--progressBar"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div>
              <Link to="/register" className="Validate_main--section--link">
                <p>&lt; Regresar</p>
              </Link>
            </div>
            <div>
              <img
                className="Validate_main--section-imgThree"
                src={TwoLarge}
                alt="TwoLarge"
              />
              <h1>
                VALIDA TU <span style={{ color: "#FF4C00" }}>CELULAR</span>
              </h1>
            </div>
            <form className="Validate_main--section--form">
              <p>Necesitamos validar tu número para continuar</p>
              <h6>
                Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
              </h6>
              <label>Número de Celular</label>
              <Input
                type="text"
                name="name"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <Link
                to="/codeverification"
                className="Validate_main--section--form--link"
              >
                <ButtonOrange text="Continuar" />
              </Link>
            </form>
          </section>
          <img
            className="Validate_main--section--img"
            src={AstronautValidate}
            alt="import AstronautValidate"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ValidatePhone;

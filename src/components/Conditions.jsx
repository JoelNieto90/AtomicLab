import React from "react";
import NavBar from "./NavBar";
import ButtonOrange from "./ButtonOrange";
import Footer from "./Footer";
import AstronautConditions from "../assets/Group 4038.png";
import FourLarge from "../assets/Group 4025.png";
import OneSmall from "../assets/Group 4016.png";
import TwoSmall from "../assets/Group 4016.png";
import ThreeSmall from "../assets/Group 4016.png";
import FourSmall from "../assets/Group 4022.png";
import { Link } from "react-router-dom";
import "../styles/Conditions.scss";

const Conditions = () => {
  return (
    <div className="Conditions">
      <NavBar />
      <main className="Conditions_main">
        <section className="Conditions_main--section">
          <section>
            <div>
              <img
                className="Conditions_main--section--img1"
                src={OneSmall}
                alt="OneSmall"
              />
              <img
                className="Conditions_main--section--img1"
                src={TwoSmall}
                alt="TwoSmall"
              />
              <img
                className="Conditions_main--section--img1"
                src={ThreeSmall}
                alt="ThreeSmall"
              />
              <img
                className="Conditions_main--section--img1"
                src={FourSmall}
                alt="FourSmall"
              />
            </div>
            <div>
              <div class="Conditions_main--section--progressContainer">
                <div
                  class="Conditions_main--section--progressContainer--progressBar"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
            <div>
              <Link
                to="/Conditionsphone"
                className="Conditions_main--section--link"
              >
                <p>&lt; Regresar</p>
              </Link>
            </div>
            <div>
              <img
                className="Conditions_main--section-imgThree"
                src={FourLarge}
                alt="FourLarge"
              />
              <h1>
                TERMINOS Y <span style={{ color: "#FF4C00" }}>CONDICIONES</span>
              </h1>
            </div>
            <form className="Conditions_main--section--form">
              <p>
                Por favor revisa nuestros términos y condiciones para este
                servicio:
              </p>
              <div>
              </div>
              <h6>Consulta Términos y Condiciones</h6>
              <p>Acepta los Términos y Condiciones</p>
              <Link
                to="/sendcode"
                className="Conditions_main--section--form--link"
              >
                <ButtonOrange text="Enviar" />
              </Link>
            </form>
          </section>
          <img
            className="Conditions_main--section--img"
            src={AstronautConditions}
            alt="AstronautConditions"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Conditions;

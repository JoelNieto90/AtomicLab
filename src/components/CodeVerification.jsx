import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonOrange from "./ButtonOrange";
import Input from "./Input";
import AstronautValidate from "../assets/Group 4034.png";
import ThreeLarge from "../assets/Group 4024.png";
import OneSmall from "../assets/Group 4016.png";
import TwoSmall from "../assets/Group 4016.png";
import ThreeSmall from "../assets/Group 4021.png";
import FourSmall from "../assets/Group 4018.png";
import Edit from "../assets/Group 4026.png";
import { Link } from "react-router-dom";
import "../styles/CodeVerification.scss";

const CodeVerification = () => {
  const [code, setCode] = useState("");
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
                  style={{ width: "62%" }}
                ></div>
              </div>
            </div>
            <div>
              <Link
                to="/validatephone"
                className="Validate_main--section--link"
              >
                <p>&lt; Regresar</p>
              </Link>
            </div>
            <div>
              <img
                className="Validate_main--section-imgThree"
                src={ThreeLarge}
                alt="ThreeLarge"
              />
              <h1>
                C??DIGO DE <span style={{ color: "#FF4C00" }}>VERIFICACI??N</span>
              </h1>
            </div>
            <form className="Validate_main--section--form">
              <p>Te enviamos un SMS al n??mero:</p>
              <div>
                <h5>+52 55 1850 9196</h5>
                <Link
                  to="/validatephone"
                  className="Validate_main--section--form--imgEdit"
                >
                  <img
                    src={Edit}
                    alt="edit"
                    className="Validate_main--section--form--imgEdit"
                  />
                </Link>
              </div>
              <h6>Ingresa el c??digo de verificaci??n.</h6>
              <label>C??digo de verificaci??n</label>
              <Input
                type="text"
                name="name"
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
              <p>??No recibiste el c??digo? Reenviar c??digo</p>
              <Link
                to="/conditions"
                className="Validate_main--section--form--link"
              >
                <ButtonOrange text="Validar c??digo" />
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
    </div>
  );
};

export default CodeVerification;

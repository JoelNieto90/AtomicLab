import React, {useState} from 'react';
import NavBar from "./NavBar";
import ButtonOrange from "./ButtonOrange";
import Input from "./Input";
import AstronautRegister from "../assets/Group 4033.png";
import OneLarge from "../assets/Group 4014.png";
import OneSmall from "../assets/Group 4015.png";
import TwoSmall from "../assets/Group 4019.png";
import ThreeSmall from "../assets/Group 4017.png";
import FourSmall from "../assets/Group 4018.png";
import { Link } from "react-router-dom";
import "../styles/Register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  return (
    <div className="Register">
      <NavBar />
      <main className="Register_main">
        <section className="Register_main--section">
          <section>
            <div>
              <img
                className="Register_main--section--img1"
                src={OneSmall}
                alt="OneSmall"
              />
              <img
                className="Register_main--section--img1"
                src={TwoSmall}
                alt="TwoSmall"
              />
              <img
                className="Register_main--section--img1"
                src={ThreeSmall}
                alt="ThreeSmall"
              />
              <img
                className="Register_main--section--img1"
                src={FourSmall}
                alt="FourSmall"
              />
            </div>
            <div>
              <div class="Register_main--section--progressContainer">
                <div
                  class="Register_main--section--progressContainer--progressBar"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div>
              <img
                className="Register_main--section"
                src={OneLarge}
                alt="OneLarge"
              />
              <h1>TE QUEREMOS <span style={{"color":"#FF4C00"}}>CONOCER</span></h1>
            </div>
            <form className="Register_main--section--form">
              <p>
                Queremos saber que eres tú, por favor ingresa los siguientes
                datos:
              </p>
              <label>Nombre(s):</label>
              <Input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {/* {name.length < 5 ? <em>EL nombre deberá tener mínimo 5 carácteres</em> : ""} */}
              <label>Apellidos:</label>
              <Input
                type="text"
                name="last_name"
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
              />
              <Link
                to="/validatephone"
                className="Register_main--section--form--link"
              >
                <ButtonOrange text="Enviar" />
              </Link>
            </form>
          </section>
          <img
            className="Register_main--section--img"
            src={AstronautRegister}
            alt="AstronautRegister"
          />
        </section>
      </main>
    </div>
  );
}

export default Register;
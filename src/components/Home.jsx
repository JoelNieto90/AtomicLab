import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Astronaut from "../assets/Group 4032.png";
import ButtonFlecha from "../assets/Group 4013.png";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <main className="Home_main">
        <section className="Home_main--section">
          <img
            className="Home_main--section--img"
            src={Astronaut}
            alt="Astronaut"
          />
          <div className="Home_main--section--content">
            <small>Desarrolla todo</small>
            <p>tu POTENCIAL</p>
            <small>dentro del equipo</small>
            <p>
              ATOMIC<span style={{ color: "#FFFFFF" }}>LABS</span>
            </p>
            <Link to="/register">
              <button>!Quiero ser parte!</button>
            </Link>
          </div>
        </section>
        <section className="Home_main--buttonMas">
          <Link to="/register">
            <img
              className="Home_main--buttonMas--img"
              src={ButtonFlecha}
              alt="Quiero saber más"
            />
          </Link>
          <p>Quiero saber más</p>
        </section>
      </main>
    </div>
  );
}

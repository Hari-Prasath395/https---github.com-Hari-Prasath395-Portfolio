import "./HomeImage.css";
import IntroImg from "../assets/pexels-hasan-albari-1229861.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HomeImage = () => {
  return (
    <div className="home">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroBanner" />
      </div>
      <div className="content">
        <p>HI,I'M A FULL STACK DEVELOPER</p>
        <h1>React Developer</h1>.
        <Link className="btn" to="/project">
          Projects
        </Link>
        <Link className="btn btn-light" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HomeImage;

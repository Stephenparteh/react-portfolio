import React from "react";
import tooEasyImg from "../assets/images/tooEasy.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container-fluid hero-container">
        <div className="row no-gutters align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h2 className="text-danger">I am</h2>
            <h1 className="hero-title">Professor Stephen Parteh</h1>
            <h2 className="text-danger">Web Developer</h2>
            <a href="#aboutMe">
              <button className="btn btn-light mt-4 btn-lg">About Me</button>
            </a>
          </div>
          <div className="col-md-6">
            <img
              src={tooEasyImg}
              alt="Web designer"
              className="img-fluid hero-image"
              id="main-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

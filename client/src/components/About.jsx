import React from "react";
import spaceeImg from "../assets/images/spaceeprof.JPG";
import odclabb from "../assets/images/odclab.jpg";

const About = () => {
  return (
    <section className="text-light">
      <h1 className="text-center mb-4">About Me</h1>

      <div className="row mb-5">
        <div className="col-md-7">
          <img
            src={odclabb}
            alt="About Stephen Monsue Parteh"
            className="img-fluid"
            id="aboutMeImg"
          />
        </div>
        <div className="col-md-5">
          <h3>Hello World! I am</h3>
          <h2>Stephen Monsue Parteh</h2>
          <p>
            I am a passionate Web Developer with expertise in HTML, CSS,
            Bootstrap, JavaScript, EJS, Express.js, and Node.js. I am currently
            pursuing a degree in{" "}
            <span className="text-danger">Software Engineering</span> at
            BlueCrest University. Over time, I have worked on various web
            development projects, including a website for a study abroad summit,
            a tech blog, and an organization focused on making clean water
            accessible to all Liberians, among others.
          </p>

          <p>
            Beyond coding, I have a deep passion for video editing. I have
            filmed and edited multiple wedding videos at my church, capturing
            special moments with a cinematic touch. Additionally, I manage live
            streaming setups for church events, including crusades, worship
            services, and other special programs, ensuring high-quality
            broadcasts for both in-person and online audiences.
          </p>
          <a
          //    href="resume.html"
          >
            <button className="btn btn-danger">View My Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

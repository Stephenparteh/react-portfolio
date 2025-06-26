// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark text-white">
      <main className="container">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;

// (other components above...)

// src/components/Projects.jsx
import React from "react";
import ldiImg from "../assets/images/liberiadigitalinsight.png";
import summitImg from "../assets/images/studyabroadsummit.png";
import flowImg from "../assets/images/flow.png";

const projects = [
  {
    title: "Liberia Digital Insights",
    img: ldiImg,
    desc: "A website built for a tech blog named Liberia Digital Insights to showcase their excellent work.",
    url: "https://liberiadigitalinsights.netlify.app/",
    tech: ["html5", "css3-alt", "bootstrap"]
  },
  {
    title: "Study Abroad Summit",
    img: summitImg,
    desc: "A website built for the Study Abroad Summit to showcase their excellent work.",
    url: "https://nationalstudyabroadsummit.netlify.app/",
    tech: ["html5", "css3-alt", "bootstrap"]
  },
  {
    title: "FLOW Liberia",
    img: flowImg,
    desc: "A web application built for Forever Low-Cost Option for Water.",
    url: "https://flowliberia.netlify.app/",
    tech: ["html5", "css3-alt", "bootstrap", "js"]
  }
];

const Projects = () => (
  <section id="projects" className="mt-5 text-light">
    <h2 className="text-center my-5">Check out my <span className="text-danger">Projects</span></h2>
    <div className="container">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={project.img} className="img-fluid" style={{ objectFit: "cover", height: 250 }} alt={project.title} />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.desc}</p>
                <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-danger">View Project</a>
                <div className="technologies mt-3 d-flex justify-content-start align-items-center">
                  {project.tech.map((icon, i) => (
                    <i key={i} className={`fa-brands fa-${icon} fa-2x me-2`}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

// src/components/Contact.jsx
import React from "react";

const Contact = () => (
  <section id="contact" className="my-5 bg-light text-dark">
    <h2 className="text-center mb-2 mt-5"><span className="text-danger">Contact</span> Me</h2>
    <p className="text-center mb-4">I would love to hear from you! Whether you have a question, need a website,
      or want to discuss your project, I am here to help.</p>
    <div className="row gy-4">
      <div className="col-lg-5 bg-white shadow p-4 rounded">
        <h4 className="mb-3"><i className="bi bi-envelope text-danger"></i> <a href="mailto:stephenparteh@gmail.com" className="text-dark text-decoration-none">stephenparteh@gmail.com</a></h4>
        <h4 className="mb-3"><i className="bi bi-telephone text-danger"></i> <a href="tel:+231886591715" className="text-dark text-decoration-none">0886-591-715</a></h4>
        <h4 className="mb-3 text-dark"><i className="bi bi-geo-alt text-danger"></i> Police Academy Road, Paynesville</h4>
        <div className="social-icons d-flex justify-content-center gap-3 mt-4">
          <a className="h1 text-dark" href="https://www.linkedin.com/in/professor-stephen-4a1095290/"><i className="bi bi-linkedin"></i></a>
          <a className="h1 text-dark" href="https://github.com/Stephenparteh"><i className="bi bi-github"></i></a>
          <a className="h1 text-primary" href="https://web.facebook.com/stephen.parteh"><i className="bi bi-facebook"></i></a>
          <a className="h1 text-danger" href="https://www.instagram.com/stephen_the_professor/"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="card p-4">
          <form className="row g-3" method="POST" action="https://formspree.io/f/xldeppbb">
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="inputName" name="name" placeholder="Enter your full name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" name="phoneNumber" placeholder="Enter your phone number" />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" name="email" placeholder="xyz@gmail.com" />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">Message</label>
              <textarea id="inputMessage" className="form-control" rows="5" name="message" placeholder="Send me a message"></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-danger px-4 py-2">Send me a message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <h5>About Me</h5>
          <p>I am passionate about creating beautiful, responsive websites and providing innovative
            solutions to help you succeed online.</p>
        </div>
        <div className="col-lg-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-decoration-none text-white">Home</a></li>
            <li><a href="#aboutMe" className="text-decoration-none text-white">About Me</a></li>
            <li><a href="#experience" className="text-decoration-none text-white">Experience</a></li>
            <li><a href="#projects" className="text-decoration-none text-white">Projects</a></li>
            <li><a href="/resume" className="text-decoration-none text-white">Resume</a></li>
            <li><a href="#contact" className="text-decoration-none text-white">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Get in Touch</h5>
          <p><i className="bi bi-geo-alt text-danger"></i> Police Academy Road, Paynesville</p>
          <p><i className="bi bi-envelope text-danger"></i> <a href="mailto:stephenparteh@gmail.com" className="text-white text-decoration-none">stephenparteh@gmail.com</a></p>
          <p><i className="bi bi-telephone text-danger"></i> 0886-895-261</p>
          <div className="social-icons d-flex gap-3 mt-3">
            <a href="https://www.linkedin.com/in/professor-stephen-4a1095290/" className="text-white h4"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Stephenparteh" className="text-white h4"><i className="bi bi-github"></i></a>
            <a href="https://web.facebook.com/stephen.parteh" className="text-white h4"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/stephen_the_professor/" className="text-white h4"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
      <hr className="border-top border-light mt-4" />
      <div className="text-center">
        <p className="mb-0">&copy; 2024 - 2025 Stephen M. Parteh. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

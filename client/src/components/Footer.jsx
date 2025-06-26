import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <h5>About Me</h5>
          <p>
            I am passionate about creating beautiful, responsive websites and
            providing innovative solutions to help you succeed online.
          </p>
        </div>
        <div className="col-lg-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="text-decoration-none text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#experience" className="text-decoration-none text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-decoration-none text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/resume" className="text-decoration-none text-white">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="text-decoration-none text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Get in Touch</h5>
          <p>
            <i className="bi bi-geo-alt text-danger"></i> Police Academy Road,
            Paynesville
          </p>
          <p>
            <i className="bi bi-envelope text-danger"></i>{" "}
            <a
              href="mailto:stephenparteh@gmail.com"
              className="text-white text-decoration-none"
            >
              stephenparteh@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-telephone text-danger"></i> 0886-895-261
          </p>
          <div className="social-icons d-flex gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/professor-stephen-4a1095290/"
              className="text-white h4"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Stephenparteh"
              className="text-white h4"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://web.facebook.com/stephen.parteh"
              className="text-white h4"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/stephen_the_professor/"
              className="text-white h4"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-top border-light mt-4" />
      <div className="text-center">
        <p className="mb-0">
          &copy; 2024 - 2025 Stephen M. Parteh. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

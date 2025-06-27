import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top w-100">
      <div className="container">
        <Link className="navbar-brand" id="logo" to="/">
          Stephen Parteh
        </Link>
        {/* <a className="navbar-brand" href="#home">
          Stephen Parteh
        </a> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                Home
              </a> */}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                About Me
              </a> */}
              <Link className="nav-link" to="/#aboutMe">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                Experience
              </a> */}
              <Link className="nav-link" to="/">
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                Projects
              </a> */}
              <Link className="nav-link" to="/">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                Resume
              </a> */}
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#aboutMe">
                Contact
              </a> */}
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

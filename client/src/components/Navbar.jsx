import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top w-100">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Stephen Parteh
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                Contact
              </a>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

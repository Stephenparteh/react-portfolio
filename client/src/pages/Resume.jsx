import React from "react";
// import whiteBackground from "../assets/images/whiteBackground.jpg";
import spaceProf from "../assets/images/spaceeprof.JPG";
import "../App.css";

const Resume = () => {
  return (
    <main
      className="container bg-dark text-light "
      style={{ textAlign: "start" }}
    >
      <div className="row mt-4 pt-2">
        <div className="col-md-5 bg-danger text-light text-center p-3">
          <img
            src={spaceProf}
            className="img-fluid mb-3"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "90%",
            }}
            alt="Stephen Parteh"
          />
          <h2>Stephen Monsue Parteh</h2>
          <p>Police Academy Road, Paynesville Liberia</p>
          <p>+231886895261</p>
          <a
            href="mailto:stephenparteh@gmail.com"
            className="d-block text-white"
          >
            stephenparteh@gmail.com
          </a>
          <a
            href="https://github.com/Stephenparteh"
            target="_blank"
            rel="noreferrer"
            className="d-block text-white"
          >
            github.com/Stephenparteh
          </a>
          <a
            href="https://www.linkedin.com/in/professor-stephen"
            target="_blank"
            rel="noreferrer"
            className="d-block text-white"
          >
            linkedin.com/in/professor-stephen
          </a>
          <a
            href="https://stephenpartehportfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="d-block text-white"
          >
            stephenpartehportfolio.netlify.app
          </a>
        </div>

        <div className="col-md-7 bg-light text-dark p-4">
          <p>
            Proficient in HTML, CSS, JavaScript, NodeJs and Python. Excited to
            apply technical skills and innovative problem-solving in a
            professional environment.
          </p>

          <section id="education">
            <h3>Education</h3>
            <hr />
            <p>
              Bluecrest University, Congo Town, Opposite CDC Headquarter
              <span className="text-danger"> in Software Engineering </span> |
              Present
            </p>
          </section>

          <section id="accomplishments">
            <h3>Accomplishments</h3>
            <hr />
            <p className="text-danger fw-bold">
              2nd Best Project Mobile Application
            </p>
            <p className="text-danger">CS4Lib | March 2024</p>
            <p>
              I participated in the Orange Digital Center's CS4Lib Mobile
              Application Development Program. At the program's conclusion, I
              presented the second-best project, which addressed a real estate
              challenge in Liberia.
            </p>
          </section>

          <section id="certifications">
            <h3>Certifications</h3>
            <hr />

            <div>
              <p className="text-danger fw-bold">
                Responsive Web Design{" "}
                <span className="fw-normal">| June 2024</span>
              </p>
              <p className="text-danger">FreeCodeCamp</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/Stephen-Monsue-Parteh/responsive-web-design"
              >
                View Certificate
              </a>
            </div>
            <hr />
            <div>
              <p className="text-danger fw-bold">
                Web Development <span className="fw-normal">| May 2024</span>
              </p>
              <p className="text-danger">Sololearn</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.sololearn.com/certificates/CC-X96IN6SA"
              >
                View Certificate
              </a>
            </div>
            <hr />
            <div>
              <p className="text-danger fw-bold">
                Introduction to Python{" "}
                <span className="fw-normal">| June 2023</span>
              </p>
              <p className="text-danger">Sololearn</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.sololearn.com/certificates/CC-B5NIQFOV"
              >
                View Certificate
              </a>
            </div>
            <hr />
            <div>
              <p className="text-danger fw-bold">
                Introduction to JavaScript{" "}
                <span className="fw-normal">| October 2023</span>
              </p>
              <p className="text-danger">Sololearn</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.sololearn.com/certificates/CC-OA7TFZXB"
              >
                View Certificate
              </a>
            </div>
            <hr />
            <div>
              <p className="text-danger fw-bold">
                Python(Flask) and JavaScript(React Native){" "}
                <span className="fw-normal">| March 2024</span>
              </p>
              <p className="text-danger">Orange Digital Center (CS4Lib)</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/100015907964884/posts/1600913727115544/?mibextid=rS40aB7S9Ucbxw6v"
              >
                View Post
              </a>
            </div>
            <hr />
            <div>
              <p className="text-danger fw-bold">
                NodeJS FullStack Web Development BootCamp{" "}
                <span className="fw-normal">| October 2024</span>
              </p>
              <p className="text-danger">Orange Digital Center (Kwagei)</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/share/p/15QTaffTCr/?mibextid=oFDknk"
              >
                View Post
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;

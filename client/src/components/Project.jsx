import React from "react";
import ldinsights from "../assets/images/liberiadigitalinsight.png";
import sasummit from "../assets/images/studyabroadsummit.png";
import flowater from "../assets/images/flow.png";

const Projects = [
  {
    id: 1,
    image: ldinsights,
    name: "Liberia Digital Insights",
    description:
      "A website built for a tech blog named Liberia Digital Insights to showcase their excellent work.",
    url: "https://liberiadigitalinsights.netlify.app/",
  },
  {
    id: 2,
    image: sasummit,
    name: "Study Aboard Summit",
    description:
      "A website built for the Study Aboard Summit to showcase their excellent work.",
    url: "https://nationalstudyabroadsummit.netlify.app/",
  },
  {
    id: 3,
    image: flowater,
    name: "FLOW Liberia",
    description:
      "A web application built for Forever Low-Cost Option for Water.",
    url: "https://flowliberia.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" class="mt-5 text-dark">
      <h2 class="text-center my-5 text-light">
        Check out my <span class="text-danger">Projects</span>
      </h2>
      <div class="container">
        <div class="row g-4">
          {Projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={project.image}
                  className="img-fluid"
                  style={{ objectFit: "cover", height: 250 }}
                  alt={project.name}
                />
                <div className="card-body">
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

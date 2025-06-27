import React from "react";

const Experiences = [
  {
    id: 1,
    position: "Intern Full Stack Developer",
    company: "Orange Digital Center Liberia",
    start_date: "July 2024",
    end_date: "September 2024",
  },
  {
    id: 2,
    position: "Junior Web Developer",
    company: "Space Digital",
    start_date: "October 2024",
    end_date: "Present",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mt-5 text-light">
      <h2 className="text-center my-5">
        My <span className="text-danger">Experiences</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-flex align-items-center">
              <ul>
                {Experiences.map((experience, index) => (
                  <div key={index} style={{ textAlign: "start" }}>
                    {/* <div className="me-4">
                      <i className="fa-solid fa-briefcase fa-2x text-danger"></i>
                    </div>{" "} */}
                    <div>
                      <h4 className="mb-1">
                        {experience.position} at {experience.company}
                      </h4>
                      <p className="text-muted mb-2">
                        {experience.start_date} - {experience.end_date}
                      </p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

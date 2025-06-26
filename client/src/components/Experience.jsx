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
    <section id="experience" class="mt-5 text-light">
      <h2 class="text-center my-5">
        My <span class="text-danger">Experiences</span>
      </h2>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-4">
            <div class="d-flex align-items-center">
              <ul>
                {Experiences.map((experience, index) => (
                  <div key={index}>
                    <div class="me-4">
                      <i class="fa-solid fa-briefcase fa-2x text-danger"></i>
                    </div>{" "}
                    <div>
                      <h4 class="mb-1">
                        {experience.position} at {experience.company}
                      </h4>
                      <p class="text-muted mb-2">
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

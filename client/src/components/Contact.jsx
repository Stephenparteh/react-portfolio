import React from "react";

const Contact = () => (
  <section id="contact" className="my-5 bg-light text-dark">
    <h2 className="text-center mb-2 mt-5">
      <span className="text-danger">Contact</span> Me
    </h2>
    <p className="text-center mb-4">
      I would love to hear from you! Whether you have a question, need a
      website, or want to discuss your project, I am here to help.
    </p>
    <div className="row gy-4">
      <div className="col-lg-5 bg-white shadow p-4 rounded">
        <h4 className="mb-3">
          <i className="bi bi-envelope text-danger"></i>{" "}
          <a
            href="mailto:stephenparteh@gmail.com"
            className="text-dark text-decoration-none"
          >
            stephenparteh@gmail.com
          </a>
        </h4>
        <h4 className="mb-3">
          <i className="bi bi-telephone text-danger"></i>{" "}
          <a
            href="tel:+231886591715"
            className="text-dark text-decoration-none"
          >
            0886-591-715
          </a>
        </h4>
        <h4 className="mb-3 text-dark">
          <i className="bi bi-geo-alt text-danger"></i> Police Academy Road,
          Paynesville
        </h4>
        <div className="social-icons d-flex justify-content-center gap-3 mt-4">
          <a
            className="h1 text-dark"
            href="https://www.linkedin.com/in/professor-stephen-4a1095290/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="h1 text-dark" href="https://github.com/Stephenparteh">
            <i className="bi bi-github"></i>
          </a>
          <a
            className="h1 text-primary"
            href="https://web.facebook.com/stephen.parteh"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="h1 text-danger"
            href="https://www.instagram.com/stephen_the_professor/"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="card p-4">
          <form
            className="row g-3"
            method="POST"
            action="https://formspree.io/f/xldeppbb"
          >
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">
                Message
              </label>
              <textarea
                id="inputMessage"
                className="form-control"
                rows="5"
                name="message"
                placeholder="Send me a message"
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-danger px-4 py-2">
                Send me a message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

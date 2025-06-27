import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <section className="container">
          <Hero />
          <About />
          <Experience />
          <Project />
          <Contact />
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;

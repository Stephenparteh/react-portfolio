import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const homee = {
    // backgroundColor: "green",
    // marginLeft: "-432px",
  };
  return (
    <>
      <div style={homee}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

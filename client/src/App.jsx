import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main className="container-fluid text-white">
        <Home />
        {/* <Navbar /> */}
        {/* <Hero /> */}
      </main>
    </>
  );
}

export default App;

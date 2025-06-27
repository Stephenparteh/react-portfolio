import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="container-fluid text-white">
        <Home />
      </main>
    </>
  );
}

export default App;

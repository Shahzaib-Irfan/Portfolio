import React from "react";
import Navbar1 from "./components/Navbarcom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

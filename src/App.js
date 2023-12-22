import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Pages/Header/Header";
import Home from "./components/UI/Pages/Home/Home";
import Skill from "./components/UI/Pages/Skill/Skill";
import Contact from "./components/UI/Pages/Contact/Contact";
import Footer from "./components/UI/Pages/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

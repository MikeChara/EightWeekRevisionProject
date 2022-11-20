import React from "react";
import "./App.css";
import Navbar from "../Navbar/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/";
import About from "../pages/about";
import SavedMemes from "../pages/savedmemes";
import FetchAndCreate from "../pages/fetchandcreate";
import BrowserGame from "../pages/browsergame";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<FetchAndCreate />} />
        <Route path="/savedmemes" element={<SavedMemes />} />
        <Route path="/browsergame" element={<BrowserGame />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./shared/components/NavBar";
import Footer from "./shared/components/Footer";
import Home from "./shared/components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page Coming Soon</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

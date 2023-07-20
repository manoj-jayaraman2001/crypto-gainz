import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Home, Cryptocurrencies, Exchanges, News } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="top-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

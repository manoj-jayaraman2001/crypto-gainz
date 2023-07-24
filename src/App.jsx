import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home, Cryptocurrencies, Exchanges, News, CryptoDetails} from "./Pages";
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
            <Route path="/cryptocurrencies/:coinId" element={<CryptoDetails />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} Cryptopedia | Developed by: Manoj
          Jayaraman
        </p>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Navbar, Main } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="top-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

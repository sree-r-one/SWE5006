import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home, About, Error } from "./pages";

const App = () => {
  return (
    <div>
      <Router>
        {/* Conditionally render Navbar and Sidebar based on authentication status */}
        <Navbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;

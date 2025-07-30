import React from "react";
import "./index.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import Footer from "./Component/Footer";
import Stateprocurement from "./Pages/Stateprocurement";
import Listing from "./Pages/Listing";
import Login from "./Pages/Login";

import Contractors from "./Pages/Contractor";
import Visualization from "./Pages/Visualization";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<Stateprocurement />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

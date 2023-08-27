import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import { Footer, Hero, Navbar } from "./components";
import { Contact, Home } from "./pages";
import Login from "./auth/Login";
import Register from "./auth/Register";
import NavDrop from "./components/NavDrop";

const App = () => {
  const [navToggle, setNavToggle] = useState(false);
  Aos.init();
  return (
    <div className="relative">
      <div>
        <Navbar setNavToggle={setNavToggle} navToggle={navToggle} />
        <Hero />
        <NavDrop navToggle={navToggle} click={() => setNavToggle(false)} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

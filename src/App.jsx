import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";

import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VapiWidget from "./components/VapiWidget";

function App() {
  return (
    <Router>
      <Navbar />
          <VapiWidget 
        apiKey="02d75fa6-dbd2-4276-8a20-411351b0b939" 
        assistantId="6c203eba-b55d-44a5-9388-21e8da2594d8" 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

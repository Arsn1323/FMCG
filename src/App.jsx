import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";
import GetQuotation from "./pages/GetQuotation";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quotation" element={<GetQuotation />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

  
  function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-blue">
        <div className="container">
          <Link className="navbar-brand text-primary fw-bold fs-3" to="/">
            FMCG <span className="text-warning ">Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-uppercase fw-semibold text-info px-3 hover-underline" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase fw-semibold text-info px-3 hover-underline" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase fw-semibold text-info px-3 hover-underline" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase fw-semibold text-info px-3 hover-underline" to="/contact">
                  Conatact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase fw-semibold text-info px-3 hover-underline" to="/get-quotation">
                  Get quatation
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  

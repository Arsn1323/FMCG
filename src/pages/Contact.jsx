import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="bg-dark bg-opacity-75 text-white p-4 rounded shadow-lg">
        <h2 className="text-uppercase text-center fw-bold display-6 mb-4">
          Contact <span className="text-warning">Us</span>
        </h2>

        <p className="lead text-center mb-4">
          For any queries, reach us at:
        </p>

        <ul className="list-unstyled text-center fs-5">
          <li className="mb-2">
            <i className="bi bi-envelope-fill me-2 text-warning"></i>
            Email: <span className="fw-semibold">support@fmcgstore.com</span>
          </li>
          <li className="mb-2">
            <i className="bi bi-telephone-fill me-2 text-warning"></i>
            Phone: <span className="fw-semibold">+91 98765 43210</span>
          </li>
          <li className="mb-2">
            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
            Address: <span className="fw-semibold">123 Market Street, City, Country</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="bg-dark bg-opacity-75 text-white p-5 rounded shadow-lg">
        <h2 className="text-uppercase text-center fw-bold display-6 mb-4">
          About <span className="text-warning">Us</span>
        </h2>

        <p className="lead text-center">
          FMCG Store is dedicated to providing <span className="text-warning">quality fast-moving consumer goods</span> at affordable prices. 
          We source only the <span className="fw-semibold">best products</span> for your daily needs.
        </p>

        <p className="text-center fs-5 text-light">
          Our mission is to make shopping <span className="text-success">easy</span>, <span className="text-success">accessible</span>, and <span className="text-success">reliable</span> for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;

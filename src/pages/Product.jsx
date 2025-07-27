import React from "react";
import products from "../data/Products";
const WHATSAPP_NUMBER = "918726453323"; // Replace with your WhatsApp number including country code without '+'

const Product = () => {
  const handleWhatsAppClick = (product) => {
    const message = encodeURIComponent(
      `Hi, I’m interested in ${product.name} priced at ₹${product.price}.`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div>
     <h2 className="text-center text-uppercase fw-bold display-5 mb-4">
  <span className="text-primary fancy-underline">Our</span>{' '}
  <span className="text-warning fancy-underline">Products</span>
</h2>

    <div className="row">
  {products.map((product) => (
    <div
      key={product.id}
      className="col-md-4 mb-4"
      style={{ cursor: "pointer" }}
      onClick={() => handleWhatsAppClick(product)}
    >
      <div className="card h-100 shadow-sm card-hover-effect">
        <img
          src={product.image}
          className="card-img-top w-100 bg-white"
          style={{ height: "200px", objectFit: "cover" }}
          alt={product.name}
        />

        <div className="card-body">
          <h5 className="card-title text-primary">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-success">₹{product.price}</h6>
          <p className="card-text text-muted">{product.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      <p className="text-muted">
        * Click on any product to inquire via WhatsApp.
      </p>
    </div>
  );
};

export default Product;

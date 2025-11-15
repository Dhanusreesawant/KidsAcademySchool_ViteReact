import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card shadow-sm border-0 mb-4">
      <Card.Img variant="top" src={product.image} className="p-3" />

      <Card.Body className="text-center">
        <h5 className="fw-bold">{product.title}</h5>

        <p className="text-primary fw-bold fs-5">₹{product.price}</p>

        <div className="d-flex justify-content-center gap-2">
          <Button variant="warning" className="px-3">Add to Cart</Button>
          <Button variant="outline-dark" className="px-3">Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

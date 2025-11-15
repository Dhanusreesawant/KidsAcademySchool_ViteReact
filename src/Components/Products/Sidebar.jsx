import React from "react";
import { Form } from "react-bootstrap";

const Sidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  search,
  setSearch,
  price,
  setPrice
}) => {
  return (
    <div className="sidebar-area pe-3">

      {/* Search */}
      <div className="mb-4 p-3 rounded shadow-sm bg-white">
        <h5 className="fw-bold mb-3">Search</h5>
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="mb-4 p-3 rounded shadow-sm bg-white">
        <h5 className="fw-bold mb-3">Categories</h5>

        {categories.map((cat, index) => (
          <p
            key={index}
            className={`category-item ${selectedCategory === cat ? "text-primary fw-bold" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            style={{ cursor: "pointer" }}
          >
            {cat}
          </p>
        ))}

        <p
          className={`mt-2 ${selectedCategory === "All" ? "text-primary fw-bold" : ""}`}
          onClick={() => setSelectedCategory("All")}
          style={{ cursor: "pointer" }}
        >
          All Products
        </p>
      </div>

      {/* Price Filter */}
      <div className="mb-4 p-3 rounded shadow-sm bg-white">
        <h5 className="fw-bold mb-3">Price Range</h5>
        <Form.Range min={0} max={1000} value={price} onChange={(e) => setPrice(e.target.value)} />
        <p className="mt-2">Up to: <b>₹{price}</b></p>
      </div>

    </div>
  );
};

export default Sidebar;

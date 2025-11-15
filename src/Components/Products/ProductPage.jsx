import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import productsData from "./../../data/product.json";
import "./Product.css";
import MainBanner from "../Mainbanner";
import aboutBg from './../../assets/img/about-bg.jpg'
import Footer from "../Footer";
import News from "../Home/News";


const ProductPage = () => {
  const [products, setProducts] = useState(productsData);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(1000);

  // Extract categories
  const categories = [...new Set(productsData.map((item) => item.category))];

  // Filtering Logic
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= price;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
    <MainBanner 
      title="our Shoping Product"
          subtitle="Home - Shop"
          background={aboutBg}
        />
    <section className="py-5 product-page">
      <Container>
        <Row>
          {/* Sidebar */}
          <Col lg={3}>
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              search={search}
              setSearch={setSearch}
              price={price}
              setPrice={setPrice}
            />
          </Col>

          {/* Product Listing */}
          <Col lg={9}>
            <Row>
              {filteredProducts.map((product) => (
                <Col lg={4} md={6} sm={6} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}

              {filteredProducts.length === 0 && (
                <p className="text-center mt-5 fw-bold fs-4 text-danger">
                  No products found!
                </p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <News/>
    <Footer/>
    </>
  );
};

export default ProductPage;

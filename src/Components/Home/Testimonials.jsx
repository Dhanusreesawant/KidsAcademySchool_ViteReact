import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./Testimonials.css";
import Testi01 from "./../../assets/img/testimonial_01.jpg";
import Testi02 from "./../../assets/img/testimonial_02.jpg";
import Testi03 from "./../../assets/img/testimonial_03.jpg";

const testimonials = [
  {
    id: 1,
    text: "Professionally predominate that timely infrastructures tops line methodologies.",
    name: "Joly Smith",
    role: "UI/UX Designer",
    image: Testi01,
    color: "#fc7f0c",
  },
  {
    id: 2,
    text: "Professionally predominate that timely infrastructures tops line methodologies.",
    name: "John Doe",
    role: "Frontend Developer",
    image: Testi02,
    color: "#e84b3a",
  },
  {
    id: 3,
    text: "Professionally predominate that timely infrastructures tops line methodologies.",
    name: "Sara Lee",
    role: "Graphic Designer",
    image: Testi03,
    color: "#fc7f0c",
  },
  {
    id: 4,
    text: "Professionally predominate that timely infrastructures tops line methodologies.",
    name: "Alex Brown",
    role: "Web Developer",
    image: "./src/assets/img/testimonial_03.jpg",
    color: "#fc7f0c",
  },
  {
    id: 5,
    text: "Professionally predominate that timely infrastructures tops line methodologies.",
    name: "Priya Mehta",
    role: "Creative Strategist",
    image: "./src/assets/img/testimonial_02.jpg",
    color: "#e84b3a",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 3;
  const totalCards = testimonials.length;

  const nextCards = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCards = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Calculate currently visible 3 cards
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCards; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % totalCards]);
  }

  return (
    <section className="testimonial-section py-5 text-center">
      <Container>
        <h2 className="testimonial-title">What Parents Say</h2>
        <p className="testimonial-subtitle">
          Rapidiously expedite granular imperatives before economically sound web services.
          <br />
          Credibly actualize pandemic strategic theme platform.
        </p>

        <div className="testimonial-slider mt-5 position-relative">
          <Row className="justify-content-center">
            {visibleTestimonials.map((item, index) => (
              <Col md={4} sm={12} key={index}>
                <motion.div
                  className="testimonial-box"
                  style={{ borderColor: item.color }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaQuoteLeft
                    className="quote-icon quote-left"
                    style={{ color: item.color }}
                  />
                  <p className="testimonial-text">{item.text}</p>
                  <h5 className="testimonial-name" style={{ color: item.color }}>
                    {item.name} <span>{item.role}</span>
                  </h5>
                  <FaQuoteRight
                    className="quote-icon quote-right"
                    style={{ color: item.color }}
                  />
                  <div
                    className="testimonial-img-wrapper"
                    style={{ borderColor: item.color }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-img"
                    />
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <div className="slider-buttons mt-4">
            <Button variant="link" onClick={prevCards} className="nav-btn">
              <BsArrowLeftCircle size={40} />
            </Button>
            <Button variant="link" onClick={nextCards} className="nav-btn">
              <BsArrowRightCircle size={40} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

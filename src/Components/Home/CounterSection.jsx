import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserGraduate, FaSchool, FaBus, FaChalkboardTeacher } from "react-icons/fa";
import "./CounterSection.css";

const CounterSection = () => {
  const counters = [
    { id: 1, icon: <FaUserGraduate size={50} />, title: "Total Students", target: 250 },
    { id: 2, icon: <FaSchool size={50} />, title: "Class Rooms", target: 35 },
    { id: 3, icon: <FaBus size={50} />, title: "Schools Bus", target: 10 },
    { id: 4, icon: <FaChalkboardTeacher size={50} />, title: "Total Teachers", target: 40 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation time in ms
    const interval = 30;
    const steps = duration / interval;

    const timers = counters.map((counter, i) => {
      let current = 0;
      const increment = counter.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          current = counter.target;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(current);
          return updated;
        });
      }, interval);
      return timer;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="counter-section py-5 text-white text-center">
      <Container>
        <Row>
          {counters.map((counter, i) => (
            <Col lg={3} md={6} sm={12} key={counter.id} className="mb-4">
              <div className="counter-box">
                <div className="icon mb-3">{counter.icon}</div>
                <h2 className="fw-bold">
                  {counts[i]}{counter.title === "Total Students" ? "+" : ""}
                </h2>
                <p className="fw-semibold">{counter.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Mainbanner.css";

function MainBanner({ title, subtitle, background }) {
  return (
    <section
      id="page-banner"
      className="d-flex align-items-center text-center text-white"
      style={{
        background: `linear-gradient(rgba(7, 143, 203, .8),rgba(7, 143, 203, .8)) , url(${background}) center center/cover no-repeat`,
         minHeight: "50vh",
      }}
    >
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="fw-bold">{title}</h1>
            <p className="fs-5">{subtitle}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainBanner;

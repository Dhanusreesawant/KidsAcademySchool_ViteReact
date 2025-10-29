import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function News() {
  return (
    <section
      id="Newsletter"
      style={{
        backgroundColor: "#92278f",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col
            lg={5}
            xs={12}
            className="text-center text-lg-start mb-4 mb-lg-0"
          >
            <h3 style={{ fontWeight: "600", color: "#ffffff" }}>
              Join Our Newsletter
            </h3>
            <p style={{ color: "#ffffff", fontSize: "15px" }}>
              Subscribe to get the latest updates and offers.
            </p>
          </Col>

          {/* Right Column */}
          <Col lg={7} xs={12}>
            <form
              action=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email..."
                style={{
                  flex: "1 1 250px",
                  padding: "12px 15px",
                  border: "1px solid #ccc",
                  outline: "none",
                  fontSize: "15px",
                  transition: "0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#cc00ffff")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#92278f",
                  color: "#fff",
                  border: "1px solid",
                  padding: "12px 25px",
                  fontSize: "15px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#92278f")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#a0539dff")}
              >
                Subscribe Now
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default News;

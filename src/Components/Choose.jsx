import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChartSimple,
  faUserGraduate,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "./../assets/img/feature.jpg";
import "./Choose.css";

const Choose = () => {
  const leftFeatures = [
    {
      title: "Expert Teachers",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faBuildingColumns,
      color: "bg-warning",
      text: "text-warning",
    },
    {
      title: "Multimedia Class",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faGlobe,
      color: "bg-danger",
      text: "text-danger",
    },
    {
      title: "Music And Art Class",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faChartSimple,
      color: "bg-info",
      text: "text-info",
    },
  ];

  const rightFeatures = [
    {
      title: "Expert Teachers",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faUserGraduate,
      color: "bg-danger",
      text: "text-danger",
    },
    {
      title: "Multimedia Class",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faGlobe,
      color: "bg-purple",
      text: "text-purple",
    },
    {
      title: "Music And Art Class",
      desc: "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      icon: faChartSimple,
      color: "bg-pink",
      text: "text-pink",
    },
  ];

  return (
    <section id="choose-section" className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="text-center mx-auto mb-5">
            <h2 className="fw-bold text-purple">Why Choose KidsAcademy</h2>
            <p className="text-muted">
              Rapidiously expedite granular imperatives before economically sound web services.
              Credibly actualize pandemic strategic theme platform.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          {/* Left side */}
          <Col
            lg={4}
            md={6}
            className="d-flex flex-column align-items-end order-2 order-lg-1"
          >
            {leftFeatures.map((item, index) => (
              <div
                key={index}
                className="choose-box text-end mb-4 w-100"
              >
                <div className="d-flex align-items-center justify-content-end">
                  <div className="text me-3">
                    <h5 className={`fw-bold ${item.text}`}>{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                  <div className={`icon ${item.color} text-white`}>
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </div>
                </div>
              </div>
            ))}
          </Col>

          {/* Center image */}
          <Col
            lg={4}
            md={12}
            className="text-center mb-4 mb-lg-0 order-1 order-lg-2"
          >
            <img
              src={Feature}
              alt="Kids"
              className="img-fluid rounded feature-img"
            />
          </Col>

          {/* Right side */}
          <Col
            lg={4}
            md={6}
            className="d-flex flex-column align-items-start order-3"
          >
            {rightFeatures.map((item, index) => (
              <div
                key={index}
                className="choose-box text-start mb-4 w-100"
              >
                <div className="d-flex align-items-center">
                  <div className={`icon ${item.color} text-white me-3`}>
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </div>
                  <div className="text">
                    <h5 className={`fw-bold ${item.text}`}>{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {
  const partners = [
    "./src/assets/img/partner_03.jpg",
    "./src/assets/img/partner_04.jpg",
    "./src/assets/img/partner_03.jpg",
    "./src/assets/img/partner_04.jpg",
    "./src/assets/img/partner_03.jpg",
    "./src/assets/img/partner_04.jpg",
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="PartnersBox" className="bg-dark py-5">
      <Container>
        <Row>
          <Col lg={7} className="text-center mx-auto text-white mb-4">
            <h2>Our Partners Logo</h2>
            <p>
              Rapidiously expedite granular imperatives before economically sound web services.
              Credibly actualize pandemic strategic theme platform.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider {...settings}>
              {partners.map((src, index) => (
                <div key={index} className="text-center">
                  <img
                    src={src}
                    alt={`partner-${index}`}
                    className="img-fluid mx-auto"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;

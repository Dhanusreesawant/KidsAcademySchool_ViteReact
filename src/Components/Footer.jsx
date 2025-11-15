import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./../assets/img/logo.png";



import gallery1 from "./../assets/img/gallery_01.jpg";
import gallery2 from "./../assets/img/gallery_02.jpg";
import gallery3 from "./../assets/img/gallery_03.jpg";
import gallery4 from "./../assets/img/gallery_04.jpg";
import gallery5 from "./../assets/img/gallery_05.jpg";
import gallery6 from "./../assets/img/gallery_06.jpg";
import gallery7 from "./../assets/img/gallery_07.jpg";
import gallery8 from "./../assets/img/gallery_08.jpg";
import gallery9 from  "./../assets/img/gallery_09.jpg";

import "./Footer.css";
import img1 from "./../assets/img/news_1.jpg";
import img2 from "./../assets/img/news_1.jpg";
import img3 from "./../assets/img/news_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDribbble,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  // show scroll-to-top button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShowButton(true);
      else setShowButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  return (
    <>
      {/* ===== Footer Area ===== */}
      <footer className="footer-area pt-5">
        <Container>
          <Row>
            {/* ---- Logo & About ---- */}
            <Col lg={3} sm={6} className="mb-4">
              <div className="single-footer-widget">
                <img src={Logo} alt="logo" className="img-fluid" />

                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                 <ul className="list-unstyled text-muted small mt-3">
              <li className="mb-2">
                <FaHome className="me-2 text-warning" />
                New Chokoya Road, USA
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-warning" />
                +8801 923 970 212, 0125897
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-warning" />
                Contact@admin LabArtisan
              </li>
              <li>
                <FaEnvelope className="me-2 text-warning" />
                Email@admin LabArtisan
              </li>
            </ul>
              </div>
            </Col>

            {/* ---- Activities ---- */}
            <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold text-warning mb-3">Latest News</h5>
            {[{img: img1, date: "04 February 2021"}, {img: img2, date: "28 January 2021"}, {img: img3, date: "03 January 2021"}].map((item, idx) => (
              <div key={idx} className="d-flex mb-3">
                <img
                  src={item.img}
                  alt="news"
                  className="rounded me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <p className="mb-1 text-muted small">
                    Corem psum dolor the ametcetur adipiscing elit...
                  </p>
                  <span className="small text-warning">{item.date}</span>
                </div>
              </div>
            ))}
          </Col>
           <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold text-danger mb-3">Twitter Widget</h5>
            <div className="mb-3">
              <p className="text-muted small mb-1">
                <FaTwitter className="text-info me-2" />
                Raritas etiam processus them dynamicus sequitur mutatem education theme
              </p>
              <span className="text-danger small">23 seconds ago</span>
            </div>
            <div className="mb-3">
              <p className="text-muted small mb-1">
                <FaTwitter className="text-info me-2" />
                Duis autem veleum iriure dolor hendrerit in vulputate velit
              </p>
              <span className="text-danger small">8 seconds ago</span>
            </div>
            <div>
              <p className="text-muted small mb-1">
                <FaTwitter className="text-info me-2" />
                @frankdoe amber tempor cum soluta nobis eleifend
              </p>
              <span className="text-danger small">2 years ago</span>
            </div>
          </Col>
           

            {/* ---- Gallery ---- */}
            <Col lg={3} sm={6} className="mb-4">
              <div className="single-footer-widget">
                <h3 className="fw-bold text-orange mb-3">Photo Gallery</h3>
                <ul className="photo-gallery-list">
                  {galleryImages.map((img, index) => (
                    <li key={index}>
                      <div className="gallery-box">
                        <img src={img} alt="gallery" className="img-fluid" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      

      {/* ===== Copyright ===== */}
       <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-inner ">
           <p className="fw-5 fs-5">
                © 2021. Designed By <span className="text-pink fw-bold">LabArtisan</span>
          </p>

      <div className="footer-social-icons">
        <a href="#" className="bg-pink"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="bg-purple"><FontAwesomeIcon icon={faDribbble} /></a>
        <a href="#" className="bg-orange"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className="bg-yellow"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="bg-pink"><FontAwesomeIcon icon={faPinterestP} /></a>
      </div>
        </div>
  </Container>
</div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showButton && (
        <div className="scroll-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </>
  );
}

export default Footer;

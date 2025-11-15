import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <>
    <section className="contact-page py-5">
      <Container>
        <Row>

          {/* LEFT SIDE – CONTACT DETAILS */}
          <Col lg={5} className="mb-2">
            {/* Location */}
            <div className="contact-box mb-5">
              <div className="icon-wrap bg-warning">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
              </div>
              <h4 className="contact-title text-warning">Our Location</h4>
              <p className="text-muted mb-0">218 Sahera Tropical Center Room#7</p>
              <p className="text-muted mb-0">New Newyork Road 1205</p>
            </div>

            {/* Phone */}
            <div className="contact-box mb-5">
              <div className="icon-wrap bg-danger">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </div>
              <h4 className="contact-title text-danger">Phone Number</h4>
              <p className="text-muted mb-0">01923-970212, 01776-502993</p>
              <p className="text-muted mb-0">+2154897369</p>
            </div>

            {/* Email */}
            <div className="contact-box">
              <div className="icon-wrap bg-warning">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <h4 className="contact-title text-warning">Email Address</h4>
              <p className="text-muted mb-0">hello@labartisan</p>
              <p className="text-muted mb-0">hello@codexcoder.com</p>
            </div>
          </Col>

          {/* RIGHT SIDE – CONTACT FORM */}
          <Col lg={7}>
            <Form>
              <Row>
                <Col md={6} className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                  />
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                  />
                </Col>

                <Col lg={12} className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Messages"
                    className="form-input"
                  />
                </Col>

                <Col lg={12} className="text-start">
                  <Button className="send-btn px-4 py-2">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    <section id ="map-site" className="map-area">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.867002982039!2d-74.00747368459392!3d40.713181044785206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ3LjQiTiA3NMKwMDAnMTkuMCJX!5e0!3m2!1sen!2sus!4v1614703744829!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</section>

    </>
    
  );
}

export default Contact;

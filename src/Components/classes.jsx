import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const classcontent = [
  {
    image: "./src/assets/img/class_01.jpg",
    title: "Imagination class",
    style: { color: "#ffc000" },
    time: "9:00 - 5:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#ffc000" },
    description: "Drastically innovate fully researched and applications awesome theme education",
  },
  {
    image: "./src/assets/img/class_03.jpg",
    title: "Creative Thinking",
    style: { color: "#e84b3a" },
    time: "10:00 - 4:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#e84b3a" },
    description: "Credibly actualize pandemic strategic theme platform.",
  },
  {
    image: "./src/assets/img/class_02.jpg",
    title: "Practical Workshop",
    style: { color: "#fc7f0c" },
    time: "11:00 - 3:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#fc7f0c" },
    description: "Rapidly expedite granular imperatives before sound web services.",
  },
];

function Classes() {
  return (
    <section id="Classescard" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={7} className="text-center mx-auto mt-3">
            <h2 className="fw-bold text-pink">Our Popular Classes</h2>
            <p className="text-muted">
              Rapidly expedite granular imperatives before economically sound web
              services. Credibly actualize strategic educational platforms.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {classcontent.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <div className="class-item border rounded-3 overflow-hidden shadow-sm h-100 d-flex flex-column">
                <img src={item.image} alt="classimg" className="img-fluid w-100" />

                {/* 3 Boxes Section */}
                <div className="d-flex flex-wrap justify-content-center gap-2 p-2 class-schedule">
                  <div className="schedule-box bg-pink text-white text-center p-2 flex-fill rounded-2">
                    <span className="fw-bold d-block">Class Size</span>
                    <small>30 - 50</small>
                  </div>
                  <div className="schedule-box bg-orange text-white text-center p-2 flex-fill rounded-2">
                    <span className="fw-bold d-block">Age Group</span>
                    <small>5 - 10 Years</small>
                  </div>
                  <div className="schedule-box bg-yellow text-white text-center p-2 flex-fill rounded-2">
                    <span className="fw-bold d-block">Tuition</span>
                    <small>$250 / Month</small>
                  </div>
                </div>

                {/* Content */}
                <div className="card-content p-3 flex-grow-1">
                  <h3 style={item.style}>{item.title}</h3>
                  <p>
                    <span className="text-danger fw-bold">Class time:</span> {item.time}
                  </p>
                  <p className="text-muted">{item.description}</p>
                </div>

                {/* Address Footer */}
                <p
                  style={item.bgstyle}
                  className="p-2 text-white text-center m-0 fw-semibold"
                >
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  {item.address}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Classes;

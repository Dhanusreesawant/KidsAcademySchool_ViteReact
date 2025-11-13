import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Class1 from './../assets/img/class_01.jpg';
import Class2 from './../assets/img/class_02.jpg';
import Class3 from './../assets/img/class_03.jpg';
import Class4 from './../assets/img/class_02.jpg';
import Class5 from './../assets/img/class_03.jpg';
import Class6 from './../assets/img/class_01.jpg';
import Class7 from './../assets/img/class_01.jpg';
import Class8 from './../assets/img/class_03.jpg';
import Class9 from './../assets/img/class_02.jpg';


const allClasses = [
  {
    image: Class1,
    title: "Imagination Class",
    style: { color: "#ffc000" },
    time: "9:00 - 5:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#ffc000" },
    description: "Drastically innovate fully researched and applications awesome theme education",
  },
  {
    image: Class2,
    title: "Creative Thinking",
    style: { color: "#e84b3a" },
    time: "10:00 - 4:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#e84b3a" },
    description: "Credibly actualize pandemic strategic theme platform.",
  },
  {
    image: Class3,
    title: "Practical Workshop",
    style: { color: "#fc7f0c" },
    time: "11:00 - 3:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#fc7f0c" },
    description: "Rapidly expedite granular imperatives before sound web services.",
  },
  {
    image: Class4,
    title: "Science Experiments",
    style: { color: "#2ec4b6" },
    time: "9:30 - 3:30",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#2ec4b6" },
    description: "Hands-on experiments that inspire curiosity and exploration.",
  },
  {
    image: Class5,
    title: "Art & Craft",
    style: { color: "#8a2be2" },
    time: "10:00 - 5:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#8a2be2" },
    description: "Encouraging creativity through colors and textures.",
  },
  {
    image: Class6,
    title: "Music & Dance",
    style: { color: "#ff69b4" },
    time: "9:00 - 1:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#ff69b4" },
    description: "Joyful learning through rhythm and movement.",
  },
  {
    image: Class7,
    title: "Music & Dance",
    style: { color: "#fa6f57" },
    time: "9:00 - 1:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#fa6f57" },
    description: "Joyful learning through rhythm and movement.",
  },
  {
    image: Class8,
    title: "Music & Dance",
    style: { color: "#88c87b" },
    time: "9:00 - 1:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#88c87b" },
    description: "Joyful learning through rhythm and movement.",
  },
  {
    image: Class9,
    title: "Music & Dance",
    style: { color: "#8a2be2" },
    time: "9:00 - 1:00",
    address: "218 New Newyork Road, USA - 1205",
    bgstyle: { backgroundColor: "#8a2be2" },
    description: "Joyful learning through rhythm and movement.",
  },
];

function AllClasses() {
  return (
    <section id="AllClasses" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={7} className="text-center mx-auto mt-3">
            <h2 className="fw-bold text-pink">All Our Classes</h2>
            <p className="text-muted">
              Explore all our engaging and fun learning activities for kids.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {allClasses.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <div className="class-item border rounded-3 overflow-hidden shadow-sm h-100 d-flex flex-column">
                <img src={item.image} alt={item.title} className="img-fluid w-100" />

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
                <p style={item.bgstyle} className="p-2 text-white text-center m-0 fw-semibold">
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

export default AllClasses;

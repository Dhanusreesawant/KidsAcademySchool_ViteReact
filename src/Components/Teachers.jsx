import { faPinterest, faTwitter, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Teacher01 from "./../assets/img/teacher_01.jpg";
import Teacher02 from "./../assets/img/teacher_02.jpg";
import Teacher03 from "./../assets/img/teacher_03.jpg";
import Teacher04 from "./../assets/img/teacher_04.jpg";

const teacher_Details = [
  {
    img: Teacher01,
    name: "Broklyn Doel",
    role: "Science Teacher",
    bgColor: "bg-purple",
  },
  {
    img: Teacher02,
    name: "Alex Johnson",
    role: "Art Teacher",
    bgColor: "bg-red",
  },
  {
    img: Teacher03,
    name: "Robert Johnson",
    role: "Math Teacher",
    bgColor: "bg-orange",
  },
  {
    img: Teacher04,
    name: "Janaton Doe",
    role: "English Teacher",
    bgColor: "bg-lightblue",
  },
  {
    img: Teacher02,
    name: "David Lee",
    role: "Music Teacher",
    bgColor: "bg-purple",
  },
  {
    img: Teacher03,
    name: "Samantha Ray",
    role: "Dance Teacher",
    bgColor: "bg-yellow",
  },
  {
    img: Teacher01,
    name: "Megan Fox",
    role: "Sports Teacher",
    bgColor: "bg-pink",
  },
  {
    img: Teacher04,
    name: "Kevin Paul",
    role: "Drama Teacher",
    bgColor: "bg-orange",
  },
];

function Teachers({ showAll = false , showHeader = true , sectionId = "Teachers" }) {
  const displayedTeachers = showAll ? teacher_Details : teacher_Details.slice(0, 4);

  return (
    <section id={sectionId} className="py-5">
      <Container>
        {showHeader && (
            <Row className="mb-4">
          <Col lg={7} className="text-center mx-auto">
            <h2 className="fw-bold">Meet Our Teachers</h2>
            <p>
              Rapidiously expedite granular imperatives before economically sound web services.
              Credibly actualize pandemic strategic theme platform.
            </p>
          </Col>
        </Row>
        )}
        

        <Row>
          {displayedTeachers.map((item, index) => (
            <Col key={index} lg={6} className="py-3 px-4 text-white">
              <div>
                <Row>
                  <Col sm={4} className="p-0">
                    <img src={item.img} alt="teacher" className="img-fluid w-100 h-100" />
                  </Col>
                  <Col sm={8} className={`p-3 ${item.bgColor}`}>
                    <h4 className="mb-1">
                      {item.name}
                      <h6 className="d-inline ms-2">{item.role}</h6>
                    </h4>
                    <div className="teacher_social_icon mb-2">
                      <span><FontAwesomeIcon icon={faFacebook} /></span>
                      <span><FontAwesomeIcon icon={faVimeoV} /></span>
                      <span><FontAwesomeIcon icon={faTwitter} /></span>
                      <span><FontAwesomeIcon icon={faPinterest} /></span>
                      <span><FontAwesomeIcon icon={faRss} /></span>
                    </div>
                    <p className="my-2">
                      Distinctively initiate sustainable synergy via tactical opportunities and collaborative teaching.
                    </p>
                    <Link to="/teachers" className="fw-semibold text-white">View Portfolio</Link>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Teachers;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Class1 from "../../assets/img/class_01.jpg";
import Class2 from "../../assets/img/class_02.jpg";
import Class3 from "../../assets/img/class_03.jpg";
const event_Details = [
  {
    image: Class1,
    title: "Imagination class",
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
    image: Class1,
    title: "Imagination class",
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
    image: Class1,
    title: "Imagination class",
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
   

];

function Event({ showHeader = true , showAll = false}) {
    const eventcontent = showAll ? event_Details : event_Details.slice(0, 3);

  return (
    <section id="Eventcard" className="py-5">
      <Container>
 
        {showHeader &&(
            <Row className="mb-4">
             <Col lg={7} className="text-center mx-auto mt-3">
            <h2 className="fw-bold text-purple">Our Popular Classes</h2>
            <p className="text-muted">
              Rapidly expedite granular imperatives before economically sound web
              services. Credibly actualize strategic educational platforms.
            </p>
          </Col>
        </Row>

        )}
        

        <Row className="g-4">
          {eventcontent.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <div className="class-item border rounded-3 overflow-hidden shadow-sm h-100 d-flex flex-column">
                <div className="position-relative">
                   <img src={item.image} alt="classimg" className="img-fluid w-100 " />
                
                <div className="Eventdate">
                  <span>24</span>
                  <p>March</p>
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
                <div className=' m-3'>
                   <Link to="#" className="button-default border rounded-3" style={item.bgstyle}>Join Now</Link>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Event;

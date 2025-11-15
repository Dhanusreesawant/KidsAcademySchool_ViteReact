import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

const images = [
  { id: 1, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_01.jpg", category: "class", title: "Product Name Here" },
  { id: 2, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_02.jpg", category: "event", title: "Product Name Here" },
  { id: 3, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_01.jpg", category: "playing", title: "Product Name Here" },
  { id: 4, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_03.jpg", category: "art", title: "Product Name Here" },
  { id: 5, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_01.jpg", category: "class", title: "Product Name Here" },
  { id: 6, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_02.jpg", category: "event", title: "Product Name Here" },
  { id: 7, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_03.jpg", category: "art", title: "Product Name Here" },
  { id: 8, src: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_02.jpg", category: "event", title: "Product Name Here" },
  {id: 9, src:  "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_02.jpg", category: "art" , title:"Product Name Here"}
];

const Gallery = ({ showHeader = true }) => {
  const [filter, setFilter] = useState("all");

  const filters = [
    { label: "Show all", value: "all" },
    { label: "Class", value: "class" },
    { label: "Event", value: "event" },
    { label: "Playing", value: "playing" },
    { label: "Art", value: "art" },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  
    

  return (
    <section id="gallery" className="py-5 bg-white">
      <Container>
        {showHeader && (
        <Row className='mb-5'>
                 <Col lg={7} className="text-center mx-auto">
                   <h2 className="fw-bold text-purple mb-3">Our School Gallery</h2>
                          <p>
                          Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
                          </p>
                  </Col>
         </Row>)}
        <div className="text-center mb-4">
          {filters.map((btn) => (
            <button
              key={btn.value}
              className={`filter-btn ${
                filter === btn.value ? "active" : ""
              }`}
              onClick={() => setFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <Row className="g-4">
          {filteredImages.map((img) => (
            <Col lg={4} md={6} sm={12} key={img.id}>
              <div className="gallery-card">
                <img src={img.src} alt={img.category} className="img-fluid" />
                <div className="overlay">
                  <div className="overlay-content text-center text-white">
                   
                    <h5 className="fw-bold">{img.title}</h5>
                    <p>By: KidsAcademy Theme</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );

  
};

export default Gallery;

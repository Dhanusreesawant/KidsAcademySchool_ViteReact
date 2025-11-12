import { faPinterest, faTwitter, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Teacher01 from "./../assets/img/teacher_01.jpg";
import Teacher02 from "./../assets/img/teacher_02.jpg";
import Teacher03 from "./../assets/img/teacher_03.jpg";
import Teacher04 from "./../assets/img/teacher_04.jpg";

const teacher_Details = [
    {
        img: Teacher01,
        name: "Broklyn Doel",
        role: "Sains Teacher",
        bgColor: "bg-purple"
    },
    {
        img: Teacher02,
        name: "Alex Jhonson",
        role: "Art Teacher",
        bgColor: "bg-red"
    },
    {
        img: Teacher03,
        name: "Robot Jhonson",
        role: "Math Teacher",
        bgColor: "bg-orange"
    },
    {
        img: Teacher04,
        name: "Janaton Doe",
        role: "English Teacher",
        bgColor: "bg-lightblue"
    },
    {
        img: "./src/assets/img/teacher_03.jpg",
        name: "Robot Jhonson",
        role: "Math Teacher",
        bgColor: "bg-orange"
    },
    {
        img: "./src/assets/img/teacher_04.jpg",
        name: "Janaton Doe",
        role: "English Teacher",
        bgColor: "bg-lightblue"
    }
]

function Teachers() {
    return (
        <>
            <section id="Teachers">
                <Container>
                    <Row className='mb-4'>
                        <Col lg={7} className="text-center mx-auto">
                            <h2 className="fw-bold">Meet Our Teachers</h2>
                            <p>
                                Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                       {
                        teacher_Details.map((item,index)=>{
                            return(
                            <Col lg={6} className='py-3 px-4'>
                            <div>
                                <Row>
                                    <Col sm={4} className='p-0'>
                                        <img src={item.img} alt="#" className='img-fluid w-100 h-100' />
                                    </Col>
                                    <Col sm={8} className={`p-3 ${item.bgColor}`}>
                                        <h4> {item.name}<h6 className='d-inline'>{item.role}</h6></h4>
                                        <div className="teacher_social_icon">
                                            <span><FontAwesomeIcon icon={faFacebook} /></span>
                                            <span><FontAwesomeIcon icon={faVimeoV} /></span>
                                            <span> <FontAwesomeIcon icon={faTwitter} /></span>
                                            <span><FontAwesomeIcon icon={faPinterest} /></span>
                                            <span><FontAwesomeIcon icon={faRss} /></span>
                                        </div>
                                        <p className='my-3'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                        <Link to="teachers" className="fw-semibold text-white">View Portfolio</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                            )
                        })
                       }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Teachers
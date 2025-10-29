import { faBuildingColumns, faChartSimple, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons/faGlobeAsia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
let content = [
    {
        icon: faBuildingColumns,
        heading: "Active Learning",
        bgColor: "bg-red",
        textColor: "text-red"
    },
    {
        icon: faUserGraduate,
        heading: "Expert Teachers",
        bgColor: "bg-yellow",
        textColor: "text-yellow"
    },
    {
        icon: faGlobeAsia,
        heading: "Strategi Location",
        bgColor: "bg-orange",
        textColor: "text-orange"
    },
    {
        icon: faChartSimple,
        heading: "Full Day Programs",
        bgColor: "bg-purple",
        textColor: "text-purple"
    }
]

function Facility() {
    return (
        <>
            <section id='Facility'>
                <Container className='py-5 my-5'>
                    <Row>
                        {
                            content.map((item, index) => {
                                return (
                                    <Col lg={3} sm={6} className='text-center' key={index}>
                                        <div>
                                            <span className={`facility_icon text-white ${item.bgColor}`}>
                                                <FontAwesomeIcon icon={item.icon} />
                                            </span>
                                        </div>
                                        <h4 className={`fw-bold my-3 ${item.textColor}`}>{item.heading}</h4>
                                        <p className="text-gray">
                                            Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after
                                        </p>
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

export default Facility
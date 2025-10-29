import { faBehance, faDribbble, faPinterest, faSkype, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faClock, faHome, faPhone, faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
let contactInfo=[
    {
        icon:faPhone,
        content:"Phone : 8801 234 567 890"
    },
    {
        icon:faClock,
        content:"Opening Time : 9:30am-5:30pm"
    },
    {
        icon:faHome,
        content:"Address : Labartisan 1205 Newyork"
    },

]
let socialMedia=[
    {
        icon:faFacebook,
        link:"https://www.facebook.com/"
    },
    {
        icon:faBehance,
        link:"https://www.facebook.com/"
    },
    {
        icon:faDribbble,
        link:"https://www.facebook.com/"
    },
    {
        icon:faSkype,
        link:"https://www.facebook.com/"
    },
    {
        icon:faVimeoV,
        link:"https://www.facebook.com/"
    },
    {
        icon:faPinterest,
        link:"https://www.facebook.com/"
    },
    {
        icon:faRss,
        link:"https://www.facebook.com/"
    },
]
function Topheader() {
  return (
    <>
    <section id="Topheader" className='bg-purple d-none d-lg-block text-white'>
        <Container fluid className='px-5'>
            <Row className='px-xl-5'>
                {
                    contactInfo.map((item,index)=>{
                        return(
                            <Col sm={"auto"} key={index}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span className='ms-1'>{item.content}</span>
                            </Col>
                        )
                    })
                }
                <Col className='ms-auto col-auto'>
                    {
                        socialMedia.map((data,index)=>{
                            return(
                                <span className='socialIcon pe-1' key={index}>
                                    <Link to={data.link}>
                                    <FontAwesomeIcon icon={data.icon}/>
                                    </Link>
                                </span>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Topheader
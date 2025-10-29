import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Menu from '../json/Menu.json'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-white">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src={"./src/assets/img/logo.png"} alt="logo" className="img-fluid" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                Menu.map((data, index) => {
                                    if (data.isDropdown == true) {
                                        return (
                                            <NavDropdown title={<span className={`fw-bold ${data.textColor}`}>{data.lable}</span>} key={index}>
                                                {
                                                    data.dropdownMenu.map((item, index) => {
                                                        return (
                                                            <Link to={item.link} key={index} className={`dropdown-item fw-semibold ${item.textColor}`}>{item.lable}</Link>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to={data.link} key={index} className={`nav-link fw-bold ${data.textColor}`}>{data.lable}</Link>
                                        )
                                    }
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
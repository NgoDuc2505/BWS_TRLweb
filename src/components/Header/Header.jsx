import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './header.css';
const Header = () => {
  return (
    <header style={{ height: 75, backgroundColor: '#666' }}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Navbar expand="lg">
              <Navbar.Brand href="#home">
                <img src="temp.jpg" alt="Logo" style={{ height: 40, width: 100 }} />
                <span style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>BWD</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Danh mục 1" id="nav-dropdown-1">
                    <NavDropdown.Item href="#action/1">Action 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Danh mục 2" id="nav-dropdown-2">
                    <NavDropdown.Item href="#action/3">Action 3</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4">Action 4</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Danh mục 3" id="nav-dropdown-3">
                    <NavDropdown.Item href="#action/5">Action 5</NavDropdown.Item>
                    <NavDropdown.Item href="#action/6">Action 6</NavDropdown.Item>
                  </NavDropdown>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" style={{ maxWidth: 500 }} />
                    <Button variant="outline-light" style={{ marginLeft: 10 }}>
                      <i className="fas fa-search" />
                    </Button>
                  </Form>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={12} md={6} lg={6} className="text-right">
            <Button variant="link" href="https://github.com" style={{ fontSize: 14, color: 'purple' }}>
              <i className="fab fa-github" /> About
            </Button>
            <Button variant="link" href="https://github.com" style={{ fontSize: 14, color: 'purple' }}>
              Resource
            </Button>
            <Button variant="primary" href="#login" style={{ fontSize: 14, backgroundColor: 'green', color: 'black', maxHeight: 40, marginRight: 15, borderRadius: 5 }}>
              Login
            </Button>
            <Button variant="primary" href="#sign-up" style={{ fontSize: 14, backgroundColor: 'white', color: 'black', maxHeight: 40, marginRight: 15, borderRadius: 5 }}>
              Signup
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
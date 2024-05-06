import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './header.css'; // Import CSS file for additional styling

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Phần logo và tên website */}
        <Navbar.Brand href="#">
          <img
            id="logo"
            className="d-inline-block align-top"
          />
          Tên Website
        </Navbar.Brand>

        {/* Toggle button cho navbar responsive */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Phần collapse navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Danh mục và thanh tìm kiếm */}
          <Nav className="mx-auto"> {/* Căn giữa các thành phần */}
            <NavDropdown title="Danh mục 1" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Subcategory 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#">Subcategory 1.2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">All Categories</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Danh mục 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Subcategory 2.1</NavDropdown.Item>
              <NavDropdown.Item href="#">Subcategory 2.2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">All Categories</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Danh mục 3" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Subcategory 3.1</NavDropdown.Item>
              <NavDropdown.Item href="#">Subcategory 3.2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">All Categories</NavDropdown.Item>
            </NavDropdown>

            {/* Thanh tìm kiếm */}
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search..." className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

          {/* Phần đăng nhập và đăng ký */}
          <Nav className="ml-auto"> {/* Căn phải các thành phần */}
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

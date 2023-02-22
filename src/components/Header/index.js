import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>CEEP</Navbar.Brand>
      <Navbar.Toggle aria-controls="header-navbar" />
      <Navbar.Collapse id="header-navbar">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Biblioteca</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

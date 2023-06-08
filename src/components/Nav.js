import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar
      sticky="top"
      style={{
        color: "#AAABA8",
        fontFamily: "serif",
        fontSize: "20px",
        borderBottom: "2px solid #B76369",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "#864149",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          <img alt="logo" src="cakelogo.png" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

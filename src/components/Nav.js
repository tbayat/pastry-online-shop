import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
            fontFamily: "fantasy",
            fontWeight: "bold",
            color: "#864149",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Happy Cake
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">About Us</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

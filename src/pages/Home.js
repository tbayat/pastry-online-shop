import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            style={{
              margin: "100px 50px",
              width: "400px",
              height: "500px",
            }}
          >
            <Carousel.Item>
              <img
                height={500}
                width={400}
                src="cake1.jpg"
                alt="cake"
                style={{ borderRadius: "360px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="wedding-cake.jpg"
                alt="wedding cake"
                height={500}
                width={400}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src="dessert.jpg" alt="dessert" height={500} width={400} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h1
            style={{
              color: "rgb(33, 37, 41)",
              fontFamily: "serif",
              margin: "200px 50px 0",
              textShadow: "2px 2px 3px black , 3px 3px 4px pink",
            }}
          >
            We Bake Your Moments
          </h1>
          <h3
            style={{
              color: "rgb(33, 37, 41)",
              fontFamily: "serif",
              marginLeft: "350px",
              textShadow: "2px 2px 3px black , 3px 3px 4px pink",
            }}
          >
            With LOVE...
          </h3>
          <ButtonToolbar style={{ marginLeft: "200px", paddingTop: "80px" }}>
            <Button
              href="#"
              style={{
                backgroundColor: "#efc3ca",
                borderColor: "pink",
                color: "rgb(33, 37, 41)",
                boxShadow: "5px 5px #b76369",
                fontFamily: "serif",
              }}
            >
              Order Now
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

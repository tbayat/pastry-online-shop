import { MDBContainer } from "mdb-react-ui-kit";

function About() {
  return (
    <MDBContainer
      fluid
      className="p-1 text-center bg-image"
      style={{
        height: "91vh",
        padding: "0px 0px 0px 0px",
      }}
    >
      <div
        className="p-1 text-center bg-image"
        style={{
          backgroundImage: "url('aboutpage.png')",
          width: "100vw",
          height: "40vh",
        }}
      >
        {" "}
      </div>
      <div>
        <div style={{ width: "100vw", height: "51vh" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1
                className="mb-3"
                style={{ color: "rgb(33, 37, 41)", fontFamily: "serif" }}
              >
                Happy Cake Story:
              </h1>
              <h4
                className="mb-3"
                style={{
                  color: "rgb(33, 37, 41)",
                  fontFamily: "serif",
                  padding: "50px",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default About;

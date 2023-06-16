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
                In my younger and more vulnerable years my father gave me some
                advice that I've been turning over in my mind ever since.
                'Whenever you feel like criticizing anyone,' he told me, 'just
                remember that all the people in this world haven't had the
                advantages that you've had.' Tip: Resize the browser window to
                see how the value "justify" works.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default About;

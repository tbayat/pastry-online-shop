import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function Home() {
  return (
    <MDBContainer fluid style={{ padding: "0px 0px 0px 0px" }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('homepage.jpg')",
          height: "91vh",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            width: "100vw",
            height: "91npmvh",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1
                className="mb-3"
                style={{ color: "white", fontFamily: "serif" }}
              >
                We Bake Your Moments
              </h1>
              <h4
                className="mb-3"
                style={{ color: "white", fontFamily: "serif" }}
              >
                With Love
              </h4>
              <MDBBtn
                tag="a"
                href="/order"
                outline
                size="lg"
                style={{
                  borderColor: "#ad8a85",
                  color: "white",
                  fontFamily: "serif",
                  backgroundColor: "#ad8a85",
                }}
              >
                Order Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Home;

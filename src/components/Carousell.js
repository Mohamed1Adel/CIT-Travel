import Carousel from "react-bootstrap/Carousel";

function Carousell() {
  return (
    <Carousel style={{ maxWidth: "100%", maxHeight: "calc(100vh - 70px)" }}>
      <Carousel.Item interval={1000}>
        <img
          src={require("../images/landing-img.jpg")}
          style={{ width: "100%", height: "100%" }}
          alt="..."
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={require("../images/landing-img.jpg")}
          style={{ width: "100%", height: "100%" }}
          alt="..."
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../images/landing-img.jpg")}
          style={{ width: "100%", height: "100%" }}
          alt="..."
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;

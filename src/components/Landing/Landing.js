import React ,{useState}from "react";
import "./Landing.scss";
import { Carousel, Container } from "react-bootstrap";
import travel from "../../images/travel1.jpg";
function Landing() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={travel} style={{ height: "300px" }} alt="..." />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={travel} style={{ height: "300px" }} alt="..." />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={travel} style={{ height: "300px" }} alt="..." />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Landing;

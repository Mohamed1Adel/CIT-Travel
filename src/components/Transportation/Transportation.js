import React, { useState } from "react";
import { Button, Carousel, Container, Form } from "react-bootstrap";
import "./Transportation.scss";
function Transportation() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={require("../../images/bus2.jpg")} alt="..." />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={require("../../images/bus2.jpg")} alt="..." />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={require("../../images/bus2.jpg")} alt="..." />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="transport-video my-5  d-flex align-items-center justify-content-evenly">
        <div className="info-box">
          <h1>TRANSPORTATION</h1>
          <h2>
            Details about CIT Travel <br /> Egypt Transportation
          </h2>
        </div>
        <div className="video-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sRdu9_EQFGs?si=BNvDjBxdtA_fQ_JI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="contact-us mt-5">
        <h1 className="main-heading">Book Now</h1>
        <Form className="d-flex">
          <div className="left-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your E-Mail" />
            </Form.Group>
          </div>
          <div className="right-form">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="Enter Your Massage"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Book Now
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Transportation;

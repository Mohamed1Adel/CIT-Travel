import React, { useState ,useEffect} from "react";
import { Button, Carousel, Container, Form } from "react-bootstrap";
import "./Transportation.scss";
import { MONGODB_URL } from "../../envData";
import axios from "axios";
function Transportation() {

    // const [images, setImages] = useState([]);
    // const getImages = async () => {
    //   const response = await axios.get(`${MONGODB_URL}/getTransportationSlider`);
    //   const data = response.data;
    //   setImages(data);
    //   console.log(data);
    // };

    // useEffect(() => {
    //   getImages();
    // }, []);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* {images[0]?.images?.map((img) => {
          console.log(img?.img_url);
          return (
            <Carousel.Item>
              <img src={img?.img_url} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>
          );
        })} */}
        <Carousel.Item>
          <img
            src={require("../../images/bus/f245447ec9946f1809146e63a7128a10.jpg")}
            style={{ height: "400px" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/bus/fabcab5800bbaee855348a70c80910a5.jpg")}
            style={{ height: "400px" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/bus/download.jpg")}
            style={{ height: "400px" }}
            alt="..."
          />
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

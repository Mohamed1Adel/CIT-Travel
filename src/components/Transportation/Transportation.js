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
      <Carousel interval={2000}  activeIndex={index} onSelect={handleSelect}>
        {/* {images[0]?.images?.map((img) => {
          console.log(img?.img_url);
          return (
            <Carousel.Item>
              <img src={img?.img_url} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>
          );
        })} */}
        <Carousel.Item className="trans-carousel">
          <img
            src={require("../../images/bus/bus-slide-1.jpg")}
            // style={{ height: "400px" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item className="trans-carousel">
          <img
            src={require("../../images/bus/bus-slide-2.jpg")}
            // style={{ height: "400px" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item className="trans-carousel">
          <img
            src={require("../../images/bus/bus-slide-3.jpg")}
            // style={{ height: "400px" }}
            alt="..."
          />
        </Carousel.Item>
      </Carousel>

      <div className="transport-video my-5  d-flex  justify-content-evenly">
        <div className="info-box w-50">
        <h6 style={{lineHeight:"1.5"}}>Our fleet which is used for airport transfers and excursions, as well as group handling consists of luxury owned and leased busses as well as mini-busses and limos driven by experienced and in tourism educated drivers. They are all in compliance with the latest quality and safety standards approved by the governing body of the region and with GPS Services. </h6>
        <h6 style={{lineHeight:"1.5"}}>Our company is one of the strongest providers of transfers in Egypt ,we are in position to cover the transfers of individual clients, as well as many Online portals, providing shuttle transfers to dynamic packaging tour – operators. </h6>
        </div>
        <div className="video-box" >
        <iframe style={{width:"500px",maxWidth:"100%",height:"400px"}} src="https://www.youtube.com/embed/U65FbVKGFT4?si=t5_BFm7avnM6TCb2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className="contact-us mt-5">
        <h1 className="main-heading">Book Now</h1>
        <Form className="d-flex mb-3">
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
            <Button variant="primary" type="submit" id="book-btn">
              Book Now
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Transportation;

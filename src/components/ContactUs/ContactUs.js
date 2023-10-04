import React, { useMemo } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./ContactUs.scss";
function ContactUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCHxarVQO6cUkMISbVuY6MTBLrr6y1WzME",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <Container>
      <div className="contact-section">
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
             <Marker position={{ lat: 30.067456, lng: 31.345488 }} />
        </GoogleMap>
      )}
      
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.968089779053!2d31.249762119154216!3d30.029913739002385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b11c4f2ab1%3A0x82c52983bcfe0e21!2z2YLYs9mFINin2YTYs9mK2K_YqSDYstmK2YbYqNiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1675206846502!5m2!1sar!2seg"/> */}

        <div className="contact-us">
          <h1>Contact Us</h1>
          <Form className="d-flex">
            <div className="left-form">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Your Phone Number" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="contact-info">
            <h1>Contact Info</h1>.
            <div className="info-boxes">
            <div className="left-box">
            <h4>Address:</h4>
            <p>
              9 B, Arab Organization for
              <br />
              Industrialization Buildings, next to
              <br />
              City Center - beginning of Makram
              <br />
              Ebeid Street - Nasr City Cairo, Cairo
              <br />
              Governorate, Egypt 11762
            </p>
          </div>
          <div className="right-box">
            <h4>Phone:</h4>
           <p>+2 02 234 93 333</p> 
           <p>+2 02 234 92 245</p> 

            <h4>Email:</h4>
           <p>info@cit-egypt.com</p> 
          </div>
            </div>
          
        </div>
      </div>
    </Container>
  );
}

export default ContactUs;

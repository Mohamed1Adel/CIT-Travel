import React, { useMemo } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./ContactUs.scss";
function ContactUs() {
  return (
    <Container>
      <div className="contact-section">
        <div className="location d-flex align-items-center justify-content-center my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.939280461237!2d31.348103259579712!3d30.067274917592364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc25b39e115%3A0xd2e3098916f31eca!2sC.I.T%20-%20Travel%20Egypt!5e0!3m2!1sar!2seg!4v1696468412304!5m2!1sar!2seg"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-us">
          <h1 className="main-heading">Contact Us</h1>
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

              <Button style={{background:"#fc4c03",borderColor:"#fc4c03"}} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="contact-info">
          <h1 className="main-heading">Contact Info</h1>.
          <div className="info-boxes">
            <div  className="left-box">
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
            <div  className="right-box">
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

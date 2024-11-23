import React, { useRef } from "react";
import Carousell from "../Carousell/Carousell";
import { Button, Container, Form } from "react-bootstrap";
import "./Careers.scss";
import emailjs from "@emailjs/browser";

function Careers() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e20yd9j", // ضع هنا service_id الخاص بك
        "template_u6teflo", // ضع هنا template_id الخاص بك
        form.current,
        "vBYqHamwoZoZdvhpE" // ضع هنا user_id الخاص بك
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <Container>
      <Carousell />
      <div className="careers">
        <h1 className="main-heading">Career Opportunities</h1>
        <p style={{ width: "90%", margin: "0 auto", fontWeight: "500", fontSize: "20px", textAlign: "start" }}>
          Since 2012, C.I.T Travel Egypt has been committing to the highest hospitality standards in Egypt.
        </p>
      </div>

      <div className="book-form" style={{ backgroundColor: "transparent" }}>
        <h2 style={{ textAlign: "center" }}>Send Now</h2>

        <Form ref={form} onSubmit={sendEmail} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-evenly" }}>
          <div className="left" style={{ minWidth: "400px" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" name="sender_name" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control type="text" name="Phone_No" placeholder="Your Phone Number" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upload Your CV</Form.Label>
              <input type="file" name="myFile" />
            </Form.Group> */}
          </div>

          <div className="right" style={{ minWidth: "400px" }}>
            <Form.Group className="mb-3" controlId="formBasicPosition">
              <Form.Control type="text" name="e_mail" placeholder="Enter Your Position" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Now
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Careers;

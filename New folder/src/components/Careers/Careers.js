import React ,{useRef}from "react";
import Carousell from "../Carousell/Carousell";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Careers.scss"
import emailjs from "@emailjs/browser";
function Careers() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
       emailjs
         .sendForm(
        //    "service_a5le1fd",
        //    "template_vjwhzni",
        //    form.current,
        //    "YZfMIBWVpK33gBYsx"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );
    };
  return (
    <Container>

        <Carousell />
        <div className="careers">
        <h1 className="main-heading">{`CAREER OPPORTUNITIES`.toLowerCase()}</h1>
      <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start"}}>
      Since 2012, C.I.T Travel Egypt has been committing to the highest
hospitality standards in Egypt 
      </p>
        </div>


                  <div className="book-form" style={{backgroundColor:"transparent"}}>
                    <h2 style={{textAlign:"center"}}>Book Now</h2>

                    <Form ref={form} onSubmit={sendEmail} style={{display:"flex",alignItems:"flex-start",justifyContent:"space-evenly"}}>
                        <div className="left" style={{minWidth:"400px"}}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          name="sender_name"
                          placeholder="Your Name"
                          />
                      </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control
                          type="text"
                          name="Phone_No"
                          placeholder="Your Phone Number"
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Upload Your CV</Form.Label>
                      <input
                  
                  type="file"
                  label="File"
                  name="myFile"
                  onChange={(e) => {}}
                />
                      </Form.Group>
                        </div>
                        <div className="right" style={{minWidth:"400px",}}>

                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="email"
                          name="e_mail"
                          placeholder="Enter Email"
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          name="Childs_Count"
                          placeholder="Enter Number of Child"
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

export default Careers;

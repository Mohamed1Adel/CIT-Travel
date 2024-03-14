import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Carousell from "../Carousell/Carousell";
import "./MeetAssist.scss";
function MeetAssist() {
  return (
    <Container >
      
      <div className="about mt-5">
        <h1 className="main-heading">Meet and Assist Service</h1>
        <p
          style={{
           width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"15px",borderRadius:"5px"
          }}
        >
          Nothing is more assuring than to have a smiling face to greet you when
          you arrive at Cairo International Airport. <br />

          <br /> <h5 style={{textDecoration:"underline"}}>Arrivals Meet & Assist:</h5>  Our C.I.T Travel Egypt Representatives
          will be there to welcome you as you arrive at Cairo International
          Airport, they will take you through immigration, customs and luggage
          collection. C.I.T Travel Egypt Representatives normally meet our guest
          in the area before passport control .<br /><br /> C.I.T Travel Egypt
          Representative will be holding a welcome sign including the guest's
          name, company name, logo orother previously arranged symbol.<br /><br /> The guest
          is then accompanied through the various checkpointssecurity, Visa upon
          arrival (if required), passport control, immigration and customs, and
          luggage collection. Depending on the arrangements escort them to the
          arrivals area, vehicle, or family members awaiting the arrival.
          <br />
          <br />
          <h5 style={{textDecoration:"underline"}}>Departures Meet & Assist:</h5>
          Our Representatives will ensure you are well
          taken care of up to your departure Departures Meet and Assist Services
          start at the terminal building and ends at boarding gate .<br /><br /> C.I.T
          Travel Egypt Representatives are available to assist you atyour
          departure with luggage trolleys, airline check-in, security, and
          Passport control.<br /><br /> C.I.T Travel Egypt service ensures a swift, smooth,
          safe passage through Cairo International Airport formalities on
          Departure.
          <br />
          <br />
          <h5 style={{textDecoration:"underline"}}>In Meet And Assist We :</h5> <br />• Do all formalities • Claim
          luggage • TB1, TB2 & TB3 ( Arrival and Departure ).
        </p>
      </div>
      <div className="contact-us mt-5">
        <h1 className="main-heading">Book Now</h1>
        <Form className="d-flex mb-3" action="mailto:ma4698531@gmail.com?subject=Hello Cit" method="post" enctype="text/plain">
          <div className="left-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="TB1" name="TB1 " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="TB2" name="TB2 "/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="TB3" name="TB3 "/>
            </Form.Group>
          </div>

          <div className="right-form">
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Departure Date</Form.Label>
              <Form.Control type="date"   name="Departure Date " placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Return Date</Form.Label>
              <Form.Control type="date"   name="Return Date " placeholder="" />
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

export default MeetAssist;

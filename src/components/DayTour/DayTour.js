import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TravelImage from "../../images/travelimg1.jpg";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import axios from "axios";
import DayTourTemp from "../DayTourTemp/DayTourTemp";
function DayTour() {
  const [dayTours, setDayTours] = useState();

  const getAllDayTours = async () => {
    const response = await axios.get("http://localhost:9000/dayTour");
    const data = response.data;
    setDayTours(data);
  };

  useEffect(() => {
    getAllDayTours();
    console.log('====================================');
    console.log(dayTours);
    console.log('====================================');
  },[]);
  return (
    <Zoom>
      <Container style={{ marginTop: "50px" }} className="day-tour">
        <h3 className="text-center main-heading">Day Tour</h3>
        <Row>
          {/* <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4" >
            <Temb />
          </Col> */}
          {
             dayTours?.map((dayTour) => {
                return (
                  <Col sm="12" md="6" lg="4">
                    <DayTourTemp dayTour={dayTour} />
                  </Col>
                );
              })
            }
        </Row>
      </Container>
    </Zoom>
  );
}

export default DayTour;

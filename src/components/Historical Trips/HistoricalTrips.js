import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TravelImage from "../../images/travelimg1.jpg";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
function HistoricalTrips() {
  return (
    <Zoom>
      <Container style={{ marginTop: "50px" }} className="historical">
        <h3 className="text-center main-heading">HistoricalTrips</h3>
        <Row>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
          <Col sm="12" md="4" lg="3">
            <Temb />
          </Col>
        </Row>
      </Container>
    </Zoom>
  );
}

export default HistoricalTrips;

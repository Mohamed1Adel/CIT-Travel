import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import Temb from '../Temb/Temb';

function NileCruise() {
  return (
    <Zoom>
      <Container style={{marginTop:"50px"}} className="nile-cruise">
        <h3 className="text-center main-heading">Day Tour</h3>
        <Row>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          
        </Row>
      </Container>
    </Zoom>
  );
}

export default NileCruise

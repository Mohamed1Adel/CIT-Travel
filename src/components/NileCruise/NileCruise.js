import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import axios from "axios";

function NileCruise() {
  const [nileCruises, setNileCruises] = useState({});
  const getAllNileCruises = async () => {
    const response = await axios.get(`http://localhost:9000/nileCruise`);
    const data =await response.data;
    console.log('====================================');
    console.log(data.id);
    console.log('====================================');
    setNileCruises(data);
  };
  useEffect(() => {
    getAllNileCruises();
  });
  return (
    <Zoom>
      <Container style={{ marginTop: "50px" }} className="nile-cruise">
        <h3 className="text-center main-heading">Nile Cruise</h3>
        <Row>
          {/* <Col sm="12" md="6" lg="4">
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
          </Col> */}
          {nileCruises?.length >= 1 ?
          nileCruises?.map((nileCruise)=>{
            return (
              <Col sm="12" md="6" lg="4">
                <NileCruiseTemp nileCruise={nileCruise} />
              </Col>
            );
          }) : "No NileCruises Founded"
        }
        </Row>
      </Container>
    </Zoom>
  );
}

export default NileCruise;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoricalTrips from "../Historical Trips/HistoricalTrips";
import Outbound from "../Outbound/Outbound";
import Domestic from "../Domestic/Domestic";
import Temb from "../Temb/Temb";

function MostPopular() {
  return (
    <div style={{ marginTop: "40px" }} className="most-popular">
      <Row>
        {/* <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="text-center main-heading">Historical Trips</h1>
          <Temb />
          <Temb />
          <Temb />
        </Col>

        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="text-center main-heading">Outbound</h1>
          <Temb />
          <Temb />
          <Temb />
        </Col>

        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="text-center main-heading">Domestics</h1>
          <Temb />
          <Temb />
          <Temb />
        </Col> */}
      </Row>
    </div>
  );
}

export default MostPopular;

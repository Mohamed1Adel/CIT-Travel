import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoricalTrips from "../Historical Trips/HistoricalTrips";
import Outbound from "../Outbound/Outbound";
import Domestic from "../Domestic/Domestic";

function MostPopular() {
  return (
    <div className="most-popular">
      <Row>
        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex align-items-center justify-content-center"
        >
          <HistoricalTrips />
        </Col>
        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex align-items-center justify-content-center"
        >
          <Outbound />
        </Col>
        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box d-flex align-items-center justify-content-center"
        >
          <Domestic />
        </Col>
      </Row>
    </div>
  );
}

export default MostPopular;

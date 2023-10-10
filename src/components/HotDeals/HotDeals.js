import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import HotelImage from "../../images/hotel1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./hotDeals.scss";
import { Zoom } from "react-reveal";
import Hotel from "../Temb/Temb";
import Temb from "../Temb/Temb";
function HotDeals() {
  return (
    <div className="hot-deals">
      <h1 className="text-center main-heading">Hot Deals</h1>
      <Zoom>
        <Row>
          {/* <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}

          {/* <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col> */}
        </Row>
      </Zoom>
    </div>
  );
}

export default HotDeals;

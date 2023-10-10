import React from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
// import TravelImage from "../../images/travelimg1.jpg";
import Temb from "../Temb/Temb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Outbound() {
  const checks = [
    "Africa",
    "Asia",
    "Eurasia",
    "Europe",
    "Indian Ocean",
    "Middle East",
  ];
  return (
    <div style={{ marginTop: "50px" }} className="outbound">
      {/* <h1 className="text-center main-heading">Outbound</h1> */}
      {/* <Card className="d-flex m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={TravelImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="d-flex m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={TravelImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="d-flex m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={TravelImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      <Zoom>
        <div className="container-fluid">
          <Row className="domestic-section">
            <Col className="side-filter-col" lg="2">
              <div className="location-filter">
                <h2>Hotel Deals</h2>
                {/* <div className="checkboxes-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Africa
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Asia
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Eurasia
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Europe
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Indian Ocean
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Middle East
                    </label>
                  </div>
                </div> */}
                <div className="checkboxes-group">
                  {checks.map((check) => {
                    return (
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id={check}
                        ></input>
                        <label class="form-check-label" for={check}>
                          {check}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rating-filter">
                <h2>Star Rating</h2>
                <ul>
                  <li>
                    {" "}
                    <div className="rates-stars p-2">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="rates-stars p-2">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="rates-stars p-2">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="seasonal-offer">
                <h2>Seasonal Offer</h2>
                <div className="checkboxes-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Summer"
                    ></input>
                    <label class="form-check-label" for="Summer">
                      Summer
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Winter"
                    ></input>
                    <label class="form-check-label" for="Winter">
                      Winter
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="HoneyMoon"
                    ></input>
                    <label class="form-check-label" for="HoneyMoon">
                      Honey Moon
                    </label>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="domestic-hotels" lg="10">
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
                </Col> */}
                
              </Row>
            </Col>
          </Row>
        </div>
      </Zoom>
    </div>
  );
}

export default Outbound;

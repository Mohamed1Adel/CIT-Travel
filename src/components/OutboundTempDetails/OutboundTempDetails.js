import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./OutboundTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Progress } from "../../progressComponent";
import { API_URL, MONGODB_URL } from "../../envData";
function OutboundTempDetails() {
  const [outboundDetails, setOutboundDetails] =
    useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  console.log(id);

  async function getProgramById() {
    try {
      const response = await fetch(`${MONGODB_URL}/getOutboundDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setOutboundDetails(data);
      // getImages();
    } catch (e) {
      console.log(e);
    }
    console.log(outboundDetails);
  }
  useEffect(() => {
    getProgramById();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4>{outboundDetails?.title}</h4>
                <h5>{outboundDetails?.description}</h5>
                <h5>
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.highilghts,
                    }}
                  />
                </h5>
                <h5>{outboundDetails?.box6}</h5>
                <h5>{outboundDetails?.box7}</h5>
                <h5>{outboundDetails?.box8}</h5>
                <h5>{outboundDetails?.box9}</h5>
                <h5>{outboundDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {outboundDetails?.images?.length >= 1 ? (
                outboundDetails?.images?.map((img) => {
                  console.log("images is loaded");
                  return (
                    <Carousel.Item key={Math.random()}>
                      <img src={img.img_url} alt="..." />
                    </Carousel.Item>
                  );
                })
              ) : (
                <Progress />
              )}
            </Carousel>
          </Col>
        </Row>
        <Row className="my-5 book-rates">
          <Col sm="12" md="3" lg="4">
            <div className="book-form">
              <h2>Book Now</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control type="text" placeholder="Your Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Number of Rooms"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Number of Pax" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Number of Child"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Book Now
                </Button>
              </Form>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab">
                      Rates
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
                      <h6>Program Hotels</h6>
                      <table class=" table-rates table outbound-rate-table-body">
                        <thead>
                          <tr>
                            <th scope="col">Location</th>
                            <th scope="col">Hotel</th>
                            <th scope="col">single</th>
                            <th scope="col">double</th>
                            <th scope="col">triple</th>
                            <th scope="col">child</th>
                          </tr>
                        </thead>
                        <tbody>
                          {outboundDetails?.PackhotelsAndPrices?.map((pack) => {
                            return (
                              <tr>
                                <th scope="row">
                                  <th
                                    className="d-block"
                                    style={{
                                      height: "40px",
                                      borderBottom: "1px solid #bebebe",
                                    }}
                                  >
                                    {pack.hotel[0].hotelLocation}
                                  </th>
                                  <th style={{ height: "40px" }}>
                                    {pack.hotel[1].hotelLocation}
                                  </th>
                                </th>
                                <th scope="row">
                                  <th
                                    style={{
                                      height: "40px",
                                      borderBottom: "1px solid #bebebe",
                                    }}
                                    className="d-block"
                                  >
                                    {pack.hotel[0].hotelName}
                                  </th>
                                  <th style={{ height: "40px" }}>
                                    {pack.hotel[1].hotelName}
                                  </th>
                                </th>
                                <td>{pack.single}</td>
                                <td>{pack.double}</td>
                                <td>{pack.triple}</td>
                                <td>{pack.child}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card text-center mt-3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#cancellation-polices"
                      data-toggle="tab"
                    >
                      Itinerary
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#Package-Includes"
                      data-toggle="tab"
                    >
                      Package Includes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#visa" data-toggle="tab">
                      Visa
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#fly-details" data-toggle="tab">
                      Fly details
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab">
                      terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="cancellation-polices">
                    <Accordion
                      className="itenary-accordion"
                      defaultActiveKey="0"
                    >
                      {outboundDetails?.itenary?.map((day, index) => {
                        return (
                          <Accordion.Item eventKey={`${index + 1}`}>
                            <Accordion.Header>
                              Day {index + 1} {"  "}
                              &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                              &nbsp;{"  "}
                              {day.dayTitle}
                            </Accordion.Header>
                            <Accordion.Body style={{ color: "#000" }}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: day?.dayContent,
                                }}
                              />
                              {
                                day?.optTour !== ""  ?     
                                <>
                                <h4 style={{ fontWeight: "bold", color: "red" }}>
                                Optional Tours
                              </h4>
                              <div
                                style={{ marginTop: "10px" }}
                                dangerouslySetInnerHTML={{
                                  __html: day?.optTour,
                                }}
                                />
                                </>
                                
                                : ""
                              }

                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>
                  <div class="tab-pane" id="Package-Includes">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: outboundDetails?.packInclude,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="visa">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: outboundDetails?.visa,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="fly-details">
                    {
                      /* <div
                      dangerouslySetInnerHTML={{
                        __html: outboundDetails?.flyDetails,
                      }}
                    /> */
                      // console.log(outboundDetails.flyDetails[0].img_url)
                    }
                    <img src={outboundDetails?.flyDetails[0].img_url} style={{maxWidth:"100%"}} alt="flyImage" />
                  </div>
                  <div class="tab-pane" id="terms">
                    <h4>Terms and Conditions</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: outboundDetails?.termsAndConditions,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default OutboundTempDetails;

import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./HistorecalTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
function HistorecalTembDetails() {
  const [programDetails, setProgramDetails] = useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function getProgramById() {
    try {
      // const response = await fetch(`${MONGODB_URL}/getProgramDetails/${id}`);
      const response = await fetch(`${MONGODB_URL}/getProgramDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setProgramDetails(data);
    } catch (e) {
      console.log(e);
    }
    console.log(programDetails);
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
                <h4>{programDetails?.title}</h4>
                <h5>{programDetails?.nights} night tour</h5>
                <h5>
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: programDetails?.highilghts,
                    }}
                  />
                </h5>
                <h5>{programDetails?.box6}</h5>
                <h5>{programDetails?.box7}</h5>
                <h5>{programDetails?.box8}</h5>
                <h5>{programDetails?.box9}</h5>
                <h5>{programDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {programDetails?.images?.length >= 1 ? (
                programDetails?.images?.map((img) => {
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
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Hotel</th>
                            <th scope="col">from</th>
                            <th scope="col">to</th>
                            <th scope="col">single</th>
                            <th scope="col">double</th>
                            <th scope="col">triple</th>
                          </tr>
                        </thead>
                        <tbody>
                          {programDetails?.hotels?.map((hotel) => {
                            return (
                              <tr>
                                <th scope="row">{hotel.hotelTitle}</th>
                                <td>{hotel.from}</td>
                                <td>{hotel.to}</td>
                                <td>{hotel.single}</td>
                                <td>{hotel.double}</td>
                                <td>{hotel.triple}</td>
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
                    <a
                      class="nav-link"
                      href="#Package-Details"
                      data-toggle="tab"
                    >
                      Package Details
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
                      {programDetails?.itenary?.map((day, index) => {
                        return (
                          <Accordion.Item eventKey={`${index + 1}`}>
                            <Accordion.Header>
                              Day {index + 1} {"  "}
                              &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                              &nbsp;{"  "}
                              {day.dayTitle}
                            </Accordion.Header>
                            <Accordion.Body>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: day?.dayContent,
                                }}
                              />
                              <h4 style={{fontWeight:"bold",color:"red"}}>Optional Tours</h4>
                              <div
                              style={{marginTop:"10px"}}
                                dangerouslySetInnerHTML={{
                                  __html: day?.optTour,
                                }}
                              />
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>
                  <div class="tab-pane" id="Package-Includes">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.packInclude,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="Package-Details">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.description,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="terms">
                    <h4>Terms and Conditions</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.termsAndConditions,
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

export default HistorecalTembDetails;

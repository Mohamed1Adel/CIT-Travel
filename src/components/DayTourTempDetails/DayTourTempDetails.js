import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./DayTourTempDetails.scss";
// import Carousell from "../Carousell/Carousell";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DayTourTempDetails() {
  // console.log(domestic);

  const [dayTourDetails, setDayTourDetails] = useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();

  const url = `http://localhost:9000/dayTour/${id}`;
  async function getDomesticById() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDayTourDetails(data);
      // await fetch(url)
      //   .then((res) => res.json())
      //   .then((res) => setItemDetails(res))

      //   console.log(itemDetails);

      // const imgs = itemDetails.images.map((img) => {
      //   console.log("images is loaded");
      //   return (
      //     <Carousel.Item key={Math.random()}>
      //       <img src={img.data_url} alt="..." />
      //     </Carousel.Item>
      //   );
      // });

      // console.log("imgs is",imgs);

      getImages();
    } catch (e) {
      console.log(e);
    }
  }

  const getImages = async () => {
    setImages(dayTourDetails?.images);
  };

  useEffect(() => {
    getDomesticById();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // console.log(state);
  // console.log(id);
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4 style={{ color: "orange" }}>{dayTourDetails?.title}</h4>

                {/* <h5>{itemDetails.category}</h5> */}
                <h5 style={{ color: "green" }}>
                  {dayTourDetails?.description}
                </h5>
                <h5 style={{ color: "red" }}>
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  {dayTourDetails?.destination}
                </h5>
                <h5>{dayTourDetails?.box6}</h5>
                <h5>{dayTourDetails?.box7}</h5>
                <h5>{dayTourDetails?.box8}</h5>
                <h5>{dayTourDetails?.box9}</h5>
                <h5>{dayTourDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {dayTourDetails?.images?.length >= 1 ? (
                dayTourDetails?.images?.map((img) => {
                  console.log("images is loaded");
                  return (
                    <Carousel.Item key={Math.random()}>
                      <img src={img.img_url} alt="..." />
                    </Carousel.Item>
                  );
                })
              ) : (
                <h2>not found</h2>
              )}
            </Carousel>
          </Col>
        </Row>
        <Row className="my-5">
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
            {/* <div
              class="card bottom-card text-center"
              style={{ width: "100% !important" }}
            >
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab">
                      Rates
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body tabs-card">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
                      <h6>Available Packages</h6>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">package</th>
                            <th scope="col">from</th>
                            <th scope="col">to</th>
                            <th scope="col">single</th>
                            <th scope="col">double</th>
                            <th scope="col">triple</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nileCruiseDetails?.packages?.map((pack) => {
                            return (
                              <tr>
                                <th scope="row">{pack.packTitle}</th>
                                <td>{pack.startDate}</td>
                                <td>{pack.endDate}</td>
                                <td>{pack.single}</td>
                                <td>{pack.double}</td>
                                <td>{pack.triple}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="card text-center mt-3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#itenary" data-toggle="tab">
                      Itenary
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#details" data-toggle="tab">
                      Details
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab">
                      terms & Conditions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#cancellation-polices"
                      data-toggle="tab"
                    >
                      Cancellation Polices
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="itenary">
                    {/* <h4>Itenary</h4> */}
                    {/* {itemDetails.cancellation} */}
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.cancellation,
                      }}
                    /> */}
                    {/* <Accordion
                      className="itenary-accordion"
                      defaultActiveKey="0"
                    >
                      {dayTourDetails?.itenary?.map((day, index) => {
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
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion> */}
                    <h4>{dayTourDetails?.itenary[0].dayTitle}</h4>
                    <h5>{dayTourDetails?.itenary[0].dayContent}</h5>
                  </div>
                  <div class="tab-pane" id="details">
                    <h4>Details</h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.description,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="terms">
                    <h4>Terms and Conditions</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.termsAndConditions,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="cancellation-polices">
                    <h5>Cancelation</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.cancelationPolices,
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

export default DayTourTempDetails;

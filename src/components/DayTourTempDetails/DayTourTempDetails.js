import React, { useState, useEffect } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./DayTourTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { API_URL, MONGODB_URL } from "../../envData";
import {Progress} from '../../progressComponent'
function DayTourTempDetails() {
  const [dayTourDetails, setDayTourDetails] = useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  async function getDomesticById() {
    try {
      // const response = await fetch(`${API_URL}/dayTour/${id}`);
      const response = await fetch(`${MONGODB_URL}/getDayTourDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setDayTourDetails(data);
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
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4 style={{ color: "orange" }}>{dayTourDetails?.title}</h4>
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
              {dayTourDetails?.images?.length >= 1
                ? dayTourDetails?.images?.map((img) => {
                    console.log("images is loaded");
                    return (
                      <Carousel.Item key={Math.random()}>
                        <img src={img.img_url} alt="..." />
                      </Carousel.Item>
                    );
                  })
                : <Progress />}
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
            <div
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
                      <h6>Cars And Costs</h6>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Persons</th>
                            <th scope="col">Car Type</th>
                            <th scope="col">
                              Const per person <br /> per pax
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dayTourDetails?.rates?.map((rate) => {
                            return (
                              <tr>
                                <th scope="row">{rate.persons}</th>
                                <td>{rate.carType}</td>
                                <td>{rate.costPerPerson}</td>
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
                    <h4>{dayTourDetails?.itenary[0].dayTitle}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.itenary[0].dayContent,
                      }}
                    />
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

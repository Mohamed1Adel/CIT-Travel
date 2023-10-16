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
import { API_URL } from "../../envData";

function HistorecalTembDetails() {
  // console.log(domestic);
  // const days = [
  //   "Arrival Cairo-Welcome to Egypt - Upon your arrival at Cairo International Airport, one of our representatives will meet and assist you to have a quick approval on your entry after finishing; he will transfer you in A.C vehicle to your hotel in Cairo. Open your eyes you are in Cairo the land of the real history, Overnight Cairo hotel.  Optional tour (Get picked up from your hotel to enjoy a delicious dinner then get transferred back to your hotel)  Optional tour (Get picked up from your hotel to enjoy a day tour in Museum Egyptian civilization that it presents the full range of the richness and diversity of Egyptian civilization throughout the ages, from prehistoric times to the present day in addition the museum’s exceptional collection includes the royal mummies. After oriental lunch back to the hotel and overnight) ",
  //   "The great pyramids, Egyptian Museum, Khan El Khalili - After breakfast discover one of the fabulous wonders of the world the great pyramids. Our Egyptology tour guide will pick you up from hotel on time where we going to drive to pyramids area. Visit the three pyramids and taking rare photos from the panoramic point. - Lunch at Local restaurant - After lunch, transfer to visit The Egyptian Museum which is one of the most favorable tourist destinations in Egypt as it contains some of the largest ancient Egyptian collections including an extensive collection spanning from the Predynastic Period to the Greco-Roman Era. Continue to the Khan El-Khalili Bazaar, one of the oldest bazaars in the Middle. After finishing your tour, we will transfer you back to your hotel in Cairo for the overnight.  Optional tour (Enjoy an oriental delicious dinner in Khan El Khalili area then get transferred back to your hotel)",
  //   "Start Hurghada adventure - Enjoy your breakfast at your Hotel in Cairo, and then we will transfer you to Cairo domestic Airport to catch your flight to Hurghada. Or transfer you by a private air-conditioned vehicle to the hotel. - Arrival Hurghada domestic Airport, meet & assist by our local representatives and transfer to the hotel. enjoy the hotel's seaside scenery and water fun all day long. Overnight at Hurghada hotel  Optional tour Full day tour Trip by boat with your instructor for an amazing snorkeling excursion in the Red Sea adventure under the sea, and see underwater flora and fauna at popular dive spots. Swim among coral gardens, and observe a great variety of animals, from schools of colorful fish to elegant skates, and even the occasional inquisitive dolphin or turtle. After finishing your tour, we will transfer you back to your hotel for the overnight.",
  //   "Hurghada - After your delicious breakfast free at the hotel enjoying the water fun al the day. Overnight at Hurghada hotel  Optional tour we are going Safari Trip by your guide will discover the beauty of the desert during your safari trip by quad, you will be picked up at your hotel and taken to the quad bikes, where you will have the chance to test drive and learn all the important details of the vehicle before setting off on the tour. After about an hour you will reach your destination Bedouin village located 20 k.m from starting point. Here you can relax, drink Bedouin tea, water and experience the Bedouin lifestyle. You can also enjoy a camel ride before heading back to hotel.",
  //   "Hurghada - After your breakfast at hotel, enjoy resting & the hotel's seaside scenery, Overnight at Hurghada hotel  Optional tour you can choose between Red Sea Glass Boat, submarine or semi submarine trip.",
  //   "Final departure - Enjoy your breakfast. Then according to your flight departure time. Final departure to Cairo international airport with unique photos and unforgettable memories. Have a nice trip",
  // ];
  const [programDetails, setProgramDetails] = useState();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  console.log(id);
  const url = ``;
  async function getProgramById() {
    try {
      const response = await fetch(`${API_URL}/programs/${id}`);
      const data = await response.json();
      console.log(data);
      setProgramDetails(data);
      // getImages();
    } catch (e) {
      console.log(e);
    }
    console.log(programDetails);
  }

  // const getImages = async () => {
  //   setImages(programDetails.images);
  // };

  // let star = <FontAwesomeIcon className="star" icon={faStar} />;
  // let rateStars = [];
  // for (let i = 1; i <= Number(programDetails.stars); i++) {
  //   // console.log(domestic.domestic.stars);
  //   rateStars.push(star);
  // }

  useEffect(() => {
    getProgramById();
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
                {/* <h5>{programDetails?.description}</h5> */}
                <h5>{programDetails?.box6}</h5>
                <h5>{programDetails?.box7}</h5>
                <h5>{programDetails?.box8}</h5>
                <h5>{programDetails?.box9}</h5>
                <h5>{programDetails?.box10}</h5>
                {/* <h4>Duration Period:</h4>
                <h5>from {itemDetails.startDate}</h5>
                <h5> to {itemDetails.endDate}</h5> */}
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

                          {/* <tr>
                            <th scope="row">clasic room lagon</th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>15/10/2023</td>
                          </tr>
                          <tr>
                            <th scope="row">delux room</th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>15/10/2023</td>
                          </tr>
                          <tr>
                            <th scope="row">delux room lagon </th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>@15/10/2023</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                    {/* <div className="trips-tables d-flex">
                      <div className="t">
                        <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">single room</th>
                              <th scope="col">double room</th>
                              <th scope="col">triple room</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">9,260</th>
                              <td>5,790</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">10,080</th>
                              <td>6,300</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">9,600</th>
                              <td>5,990</td>
                              <td>5,890</td>
                            </tr>
                            <tr>
                              <th scope="row">10,320</th>
                              <td>6,440</td>
                              <td>6,340</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="t">
                        <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">single room</th>
                              <th scope="col">double room</th>
                              <th scope="col">triple room</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">12,350</th>
                              <td>7,720</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">13,440</th>
                              <td>8,400</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">12,800</th>
                              <td>7,990</td>
                              <td>7,850</td>
                            </tr>
                            <tr>
                              <th scope="row">13,760</th>
                              <td>8,590</td>
                              <td>8,450</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}
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

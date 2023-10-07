import React from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
// import TravelImage from "../../images/travelimg1.jpg";
import Temb from "../Temb/Temb";
import "./Domestic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { domesticsData } from "../../data/Domesticsdata";
function Domestic() {
  return (
    <Zoom>
      <div  className="container-fluid">
        {/* <h1 className="text-center main-heading">Domestics</h1> */}
        <Row className="domestic-section">
          <Col className="side-filter-col" lg="2">
            <div className="location-filter">
              <h2>Hotel Deals</h2>
              <div className="checkboxes-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="AinElSokhna"
                  ></input>
                  <label class="form-check-label" for="AinElSokhna">
                    Ain El Sokhna
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Hurghada"
                  ></input>
                  <label class="form-check-label" for="Hurghada">
                    Hurghada
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="SahlHashesh"
                  ></input>
                  <label class="form-check-label" for="SahlHashesh">
                    Sahl Hashesh
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="MakadiBay"
                  ></input>
                  <label class="form-check-label" for="MakadiBay">
                    Makadi Bay
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="SomaBay"
                  ></input>
                  <label class="form-check-label" for="SomaBay">
                    Soma Bay
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="MarsaAlam"
                  ></input>
                  <label class="form-check-label" for="MarsaAlam">
                    Marsa Alam
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Dahab"
                  ></input>
                  <label class="form-check-label" for="Dahab">
                    Dahab
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Taba"
                  ></input>
                  <label class="form-check-label" for="Taba">
                    Taba
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="SharmElSheikh"
                  ></input>
                  <label class="form-check-label" for="SharmElSheikh">
                    Sharm El Sheikh
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Luxor"
                  ></input>
                  <label class="form-check-label" for="Luxor">
                    Luxor
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Aswan"
                  ></input>
                  <label class="form-check-label" for="Aswan">
                    Aswan
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Alexandria"
                  ></input>
                  <label class="form-check-label" for="Alexandria">
                    Alexandria
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="MarsaMatrouh"
                  ></input>
                  <label class="form-check-label" for="MarsaMatrouh">
                    Marsa Matrouh
                  </label>
                </div>
              </div>
            </div>
            <div className="rating-filter">
              <h2>Star Rating</h2>
              <ul>
                {/* <li>5 Stars</li>
            <li>4 Stars</li>
            <li>3 Stars</li> */}
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
                      id="NileCruise"
                    ></input>
                    <label class="form-check-label" for="NileCruise">
                      Nile Cruise
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="DayUse"
                    ></input>
                    <label class="form-check-label" for="DayUse">
                      Day Use
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
            </div>
          </Col>
          <Col className="domestic-hotels" lg="10">
            {/* <Row>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
              <Col sm="12" md="4" lg="3">
                <Temb />
              </Col>
            </Row> */}
            <Row>
              {domesticsData.length >= 1 ? (
                domesticsData.map((item) => {
                  return (
                    <Col sm="12" md="6" lg="4">
                      <Temb
                        id={item.id}
                        title={item.title}
                        decs={item.decs}
                        location={item.location}
                        rate={item.rate}
                        category={item.category}
                      />
                    </Col>
                  );
                })
              ) : (
                <h2>not found</h2>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </Zoom>
  );
}

export default Domestic;

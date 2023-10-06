import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousell from "../Carousell/Carousell";
import { Zoom } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Temb from "../Temb/Temb";

function HajjAndOmrah() {
  return (
    <Container dir="rtl">
      <Carousell />
      <Zoom>
        <div style={{ marginTop: "50px" }} className="container-fluid">
          <h1 className="text-center main-heading">رحلات الحج والعمرة</h1>
          <Row className="domestic-section">
            <Col lg="2">
              <div className="location-filter">
                <h2>نوع الرحلة</h2>
                <div className="checkboxes-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="AinElSokhna"
                    ></input>
                    <label class="form-check-label" for="AinElSokhna">
                      عمرة رمضان
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
                      الحج
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
                      عمرة رجب
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
                      عمرة شعبان
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
                      عمرة المولد النبوي
                    </label>
                  </div>
                  <h2>سعر الرحلة</h2>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="MarsaAlam"
                    ></input>
                    <label class="form-check-label" for="MarsaAlam">
                      من 12500 الي 41920 جنية
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
                      من 41920 الي 71340 جنية
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
                      من 71340 الي 100760 جنية
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
                      من 100760 الي 130180 جنية
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
                      من 130180 الي 159600 جنية
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
                      من 159600 الي 189020 جنية
                    </label>
                  </div>
                </div>
              </div>
              <div className="rating-filter">
                <h2>مستوي الفندق</h2>
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
                  <li>
                    {" "}
                    <div className="rates-stars p-2">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="rates-stars p-2">
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                  </li>
                </ul>

                <div className="seasonal-offer">
                  <h2>عدد الليالي</h2>
                  <div className="checkboxes-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="Summer"
                      ></input>
                      <label class="form-check-label" for="Summer">
                        13 ليالي - 14 يوم
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
                        9 ليالي - 10ايام
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="domestic-hotels" lg="10">
              <Row>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                <Col ssm="12" md="6" lg="4">
                  <Temb />
                </Col>
                
              </Row>
            </Col>
          </Row>
        </div>
      </Zoom>
    </Container>
  );
}

export default HajjAndOmrah;

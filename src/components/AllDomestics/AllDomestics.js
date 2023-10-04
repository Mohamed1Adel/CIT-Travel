import React from "react";
import "./AllDomestics.scss";
import { Button, Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DomesticHotel from "../DomesticHotel/DomesticHotel";
function AllDomestics() {
  return (
    <div className="container-fluid">
      <Row className="domestic-section">
  
        <Col lg="2">
          <div className="location-filter">
            <h2>Hotel Deals</h2>
            <div className="checkboxes-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Ain El Sokhna
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
                  Hurghada
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
                  Sahl Hashesh
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
                  Makadi Bay
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
                  Soma Bay
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
                  Marsa Alam
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
                  Dahab
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
                  Taba
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
                  Sharm El Sheikh
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
                  Luxor
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
                  Aswan
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
                  Alexandria
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
                <Button size="md">5 Stars</Button>
              </li>
              <li>
                {" "}
                <Button size="md">4 Stars</Button>
              </li>
              <li>
                {" "}
                <Button size="md">3 Stars</Button>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="domestic-hotels" lg="10">
          <Row>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
            <Col sm="12" md="6" lg="4">
              <DomesticHotel />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AllDomestics;

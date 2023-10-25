import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import OutboundTempDetails from "../OutboundTempDetails/OutboundTempDetails";
import OutboundTemp from "../OutboundTemp/OutboundTemp";
import { Progress } from "../../progressComponent";
function Outbound() {
  const [outbounds, setOutbounds] = useState();
  const getAllOutbound = async () => {
    // const response = await axios.get(`${API_URL}/outbound`);
    const response = await axios.get(`${MONGODB_URL}/getAllOutbound`);
    const data = response.data;
    setOutbounds(data);
    console.log(data);
  };

  useEffect(() => {
    getAllOutbound();
  }, []);

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
      <Zoom>
        <div className="container-fluid">
          <Row className="domestic-section">
            <Col className="side-filter-col" lg="2">
              <div className="location-filter">
                <h2>Hotel Deals</h2>
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
                {outbounds?.length >= 1 ? (
                  outbounds?.map?.((outbound) => {
                    return (
                      <Col sm="12" md="6" lg="4">
                        <OutboundTemp outbound={outbound} />
                      </Col>
                    );
                  })
                ) : (
                  <Progress />
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Zoom>
    </div>
  );
}

export default Outbound;

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import OutboundTempDetails from "../OutboundTempDetails/OutboundTempDetails";
import OutboundTemp from "../OutboundTemp/OutboundTemp";
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
function Outbound() {
  const [outbounds, setOutbounds] = useState();


      const [isOpen, setIsopen] = useState(false);

      const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
      };

      const [screenSize, setScreenSize] = useState(getCurrentDimension());

      function getCurrentDimension() {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }

      useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);

        return () => {
          window.removeEventListener("resize", updateDimension);
        };
      }, [screenSize]);
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
            {screenSize.width > 991 ? (
              <Col
                className="side-filter-col"
                lg="2"
                style={{ minHeight: "100vh" }}
              >
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
            ) : (
              <div>
                <div className="btn btn-danger" onClick={ToggleSidebar}>
                  {/* <i className="fa fa-bars"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div
                  className={`side-filter-col sidebar ${
                    isOpen == true ? "active" : ""
                  }`}
                  style={{ backgroundColor: "red", height: "100%" }}
                >
                  <div
                    className="sd-header"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="btn " onClick={ToggleSidebar}>
                      {/* <i className="fa fa-times"></i> */}
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                  <div className="sd-body">
                    {/* <ul>
                  <li>
                    <a className="sd-link">Menu Item 1</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 2</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 3</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 4</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 5</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 6</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 7</a>
                  </li>
                  <li>
                    <a className="sd-link">Menu Item 8</a>
                  </li>
                </ul> */}

                    <div className="location-filter">
                      <h2>Hotel Deals</h2>
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
                            <FontAwesomeIcon
                              className="star"
                              icon={faStar}
                            />{" "}
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
                  </div>
                </div>
                <div
                  className={`sidebar-overlay ${
                    isOpen == true ? "active" : ""
                  }`}
                  onClick={ToggleSidebar}
                ></div>
              </div>
            )}
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
                  <FullProgress />
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

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
import image from "../../images/outbound/image.jpeg";
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
    console.log("====================================");
    console.log(outbounds);
    console.log("====================================");
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

    <>
    <div class="Banner" style={{backgroundImage:`url(${image})`}}>
    
    </div>
    <div class="custom-opacity">
    
    
      <Zoom>
        <div className="container-fluid"  style={{marginTop:"90vh",paddingTop:"50px",backgroundColor:"#fff"}}>
          <Row className="domestic-section">
            {screenSize.width > 991 ? (
              <Col
                className="side-filter-col"
                lg="2"
                style={{ minHeight: "100vh" ,backgroundColor:"#fc4c03",marginTop:"10px"}}
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
                {/* <div className="rating-filter">
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
                </div> */}

                {/* <div className="seasonal-offer">
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
                </div> */}
              </Col>
            ) : (
              <div>
                <div className="btn " onClick={ToggleSidebar}>
                  {/* <i className="fa fa-bars"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div
                  className={`side-filter-col sidebar ${
                    isOpen == true ? "active" : ""
                  }`}
                  style={{ height: "100%" ,backgroundColor:"#fc4c03",}}
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
            {/* <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4> */}
              <h6 style={{lineHeight:"1.5"}}>Our company is focused on providing exciting international tour packages from Egypt within your budget. </h6>
              <h6 style={{lineHeight:"1.5"}}>We are here to help in getting the best flight schedule and manage air tickets for our clients in various airlines. We have a proven track record and stability, experience and delivering on promise.   </h6>
              <h6 style={{lineHeight:"1.5"}}> We are also highly skilled and experienced in visa processing service wherever our clients want to go over the world. </h6>
              <h6 style={{lineHeight:"1.5"}}> We also provide worldwide hotel reservation service immediately according to your choice and budget.  </h6>
              <h6 style={{lineHeight:"1.5"}}> Our Ticketing Office is part and parcel of our Outbound Department, which handles all of the travel arrangements for both our Operations Department and also its own esteemed clientele. </h6>
              <h6 style={{lineHeight:"1.5"}}> The Outbound Department is fully equipped with the state-of-the-art reservations systems and is staffed by an experienced team which is trained to the highest standards required in such a competitive industry. </h6>

              <Row>
                {outbounds?.length >= 1 ? (
                  outbounds?.map?.((outbound) => {
                    return (
                      <Col className="" sm="12" md="6" lg="4" xxl="3">
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
</>
  );
}

export default Outbound;

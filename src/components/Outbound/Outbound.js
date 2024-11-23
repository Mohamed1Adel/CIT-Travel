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
  const [outbounds, setOutbounds] = useState([]);
  const [filteredOutbounds, setFilteredOutbounds] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    setIsopen(!isOpen);
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
  }, []);

  const getAllOutbound = async () => {
    try {
      const response = await axios.get(`${MONGODB_URL}/getAllOutbound`);
      const data = response.data;
      setOutbounds(data);
      setFilteredOutbounds(data); // Initialize filtered data
      console.log(data);
    } catch (error) {
      console.error("Error fetching outbound data:", error);
    }
  };

  useEffect(() => {
    getAllOutbound();
  }, []);

  // قائمة الفئات المتاحة للفلترة
  const checks = [
    "Africa",
    "Asia",
    "Eurasia",
    "Europe",
    "Indian Ocean",
    "Middle East",
    "Honey Moon",
    "New Year",
  ];

  // دالة لمعالجة تغيير حالة مربعات الاختيار
  const handleCheckboxChange = (category) => {
    let updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((item) => item !== category);
    } else {
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
  };

  // تطبيق الفلترة على البيانات بناءً على الفئات المحددة
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredOutbounds(outbounds);
    } else {
      const filtered = outbounds.filter((outbound) =>
        selectedCategories.includes(outbound.box6) // تأكد من أن حقل الفئة موجود في بياناتك
      );
      setFilteredOutbounds(filtered);
    }
  }, [selectedCategories, outbounds]);

  return (
    <>
      <div className="Banner" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="custom-opacity">
        <Zoom>
          <div
            className="container-fluid"
            style={{ marginTop: "90vh", paddingTop: "50px", backgroundColor: "#fff" }}
          >
            <Row className="domestic-section">
              {screenSize.width > 991 ? (
                <Col
                  className="side-filter-col"
                  lg="2"
                  style={{ minHeight: "100vh", backgroundColor: "#fc4c03", marginTop: "10px" }}
                >
                  <div className="location-filter">
                    <h2>Hotel Deals</h2>
                    <div className="checkboxes-group">
                      {checks.map((check) => (
                        <div className="form-check" key={check}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={check}
                            id={check}
                            checked={selectedCategories.includes(check)}
                            onChange={() => handleCheckboxChange(check)}
                          />
                          <label className="form-check-label" htmlFor={check}>
                            {check}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              ) : (
                <div>
                  <div className="btn" onClick={ToggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                  <div
                    className={`side-filter-col sidebar ${isOpen ? "active" : ""}`}
                    style={{ height: "100%", backgroundColor: "#fc4c03" }}
                  >
                    <div
                      className="sd-header"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div className="btn" onClick={ToggleSidebar}>
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                    </div>
                    <div className="sd-body">
                      <div className="location-filter">
                        <h2>Hotel Deals</h2>
                        <div className="checkboxes-group">
                          {checks.map((check) => (
                            <div className="form-check" key={check}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={check}
                                id={check}
                                checked={selectedCategories.includes(check)}
                                onChange={() => handleCheckboxChange(check)}
                              />
                              <label className="form-check-label" htmlFor={check}>
                                {check}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                    onClick={ToggleSidebar}
                  ></div>
                </div>
              )}
              <Col className="domestic-hotels" lg="10">
                <h6 style={{ lineHeight: "1.5" }}>
                  Our company is focused on providing exciting international tour packages from Egypt within your
                  budget.
                </h6>
                <h6 style={{ lineHeight: "1.5" }}>
                  We are here to help in getting the best flight schedule and manage air tickets for our clients in
                  various airlines. We have a proven track record and stability, experience and delivering on promise.
                </h6>
                <h6 style={{ lineHeight: "1.5" }}>
                  We are also highly skilled and experienced in visa processing service wherever our clients want to go
                  over the world.
                </h6>
                <h6 style={{ lineHeight: "1.5" }}>
                  We also provide worldwide hotel reservation service immediately according to your choice and budget.
                </h6>
                <h6 style={{ lineHeight: "1.5" }}>
                  Our Ticketing Office is part and parcel of our Outbound Department, which handles all of the travel
                  arrangements for both our Operations Department and also its own esteemed clientele.
                </h6>
                <h6 style={{ lineHeight: "1.5" }}>
                  The Outbound Department is fully equipped with the state-of-the-art reservations systems and is
                  staffed by an experienced team which is trained to the highest standards required in such a competitive
                  industry.
                </h6>

                <Row>
                  {filteredOutbounds.length >= 1 ? (
                    filteredOutbounds.map((outbound) => (
                      <Col className="" sm="12" md="6" lg="4" xxl="3" key={outbound.id || outbound._id}>
                        <OutboundTemp outbound={outbound} />
                      </Col>
                    ))
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

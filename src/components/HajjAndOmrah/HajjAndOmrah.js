import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, ProgressBar, Row } from "react-bootstrap";
// import Carousell from "../Carousell/Carousell";
import { Zoom } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Temb from "../Temb/Temb";
import HajjTamb from "../HajjTamb/HajjTamb";
import "./HajjAndOmrah.scss";
import axios from "axios";
import { Progress } from "../../progressComponent";
import {MONGODB_URL} from '../../envData'
import FullProgress from "../../FullProgress";
function HajjAndOmrah() {
  // const [images, setImages] = useState([]);
  //     const getImages = async () => {
  //       const response = await axios.get(`${MONGODB_URL}/getHajjOmrahSlider`);
  //       const data = response.data;
  //       setImages(data);
  //       console.log(data);
  //     };

  //     useEffect(() => {
  //       getImages();
  //     }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [hajjOmrahs, setHajjOmrahs] = useState();
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
  const getAllHajjOmrah = async () => {
    try {
      // const response = await axios.get(`http://localhost:9000/hajjOmrah`);
      const response = await axios.get(`${MONGODB_URL}/getAllHajjOmrah`);
      const data = await response.data;
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      setHajjOmrahs(data);
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };
  useEffect(() => {
    getAllHajjOmrah();
  }, []);
  return (
    <div dir="rtl" >
          <div style={{width:"100%",position:"fixed",top:"70px",left:"0",zIndex:"-1000"}}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ marginBottom: "30px" }}
      >
        {/* {
         images[0]?.images?.length ? 
         images[0]?.images?.map((img)=>{
          // console.log(img?.img_url);
          return (
            <Carousel.Item>
            <img src={img?.img_url} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>
          );
        }) : <Progress />
      } */}
        <Carousel.Item>
          <img
            src={require("../../images/hajj/360_F_288164825_pfw4VohVvNz2RPeXTwIxVZwbu93R4tyk.jpg")}
            style={{ height: "100%" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/home-silder/slide4.jpg")}
            style={{ height: "100%" }}
            alt="..."
          />
        </Carousel.Item>

      </Carousel>
    </div>
<div class="custom-opacity">
  

      <Zoom>
        <div style={{marginTop:"90vh",paddingTop:"50px",backgroundColor:"#fff"}} className="container-fluid">
          <Row className="domestic-section">
            {screenSize.width > 991 ? (
              <Col
                className="side-filter-col"
                lg="2"
                 style={{ minHeight: "100vh" ,backgroundColor:"#fc4c03",marginTop:"90px"}}
              >
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
                  style={{ minHeight: "100vh" ,backgroundColor:"#fc4c03"}}
                >
                  <div
                    className="sd-header"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="btn" onClick={ToggleSidebar}>
                      {/* <i className="fa fa-times"></i> */}
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                  <div className="sd-body">
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
            <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4>
              <p>OTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPES</p>
              <Row>
                {hajjOmrahs?.length >= 1 ? (
                  hajjOmrahs?.map((hajjOmrah) => {
                    return (
                      <Col key={hajjOmrah._id} sm="12" md="6" lg="4" xxl="4">
                        <HajjTamb hajjOmrah={hajjOmrah} />
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
    </div>
  );
}

export default HajjAndOmrah;

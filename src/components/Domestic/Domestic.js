import React, { useState, useEffect } from "react";
import { Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
  Toast, } from "react-bootstrap";
  import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import "./Domestic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
import axios from "axios";
import FullProgress from "../../FullProgress";
import Footer from "../Footer/Footer";
import image from "../../images/domestic/Beach-1.jpg";

function Domestic() {
  // let filtered = false;
  const nileid = "662909405d90fc661870af7e";
  const [filtered, setFiltered] = useState(false);
  const [sFilter, setSFiltered] = useState(false);

  const [data, setData] = useState([]);
  const [showA, setShowA] = useState(true);
  const [newDataArray, setNewDataArray] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const toggleShowA = () => setShowA(!showA);
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
  const getAllData = async () => {
    try {
     const response = await axios.get(`${MONGODB_URL}/getAllDomestics`);
      const data = response.data.reverse();
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {

    getAllData();
    
    // filtered == false ? "" : ""
  }, []);

  const [nileCruises, setNileCruises] = useState({});
  const getAllNileCruises = async () => {
    try {
      // const response = await axios.get(`${API_URL}/nileCruise`);
      const response = await axios.get(`${MONGODB_URL}/getAllNileCruise`);
      const nileCruise = await response.data;
      console.log("====================================");
      console.log(nileCruise.id);
      console.log("====================================");
      setNileCruises(nileCruise);
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };
  useEffect(() => {
    getAllNileCruises();
  },[]);

  const [programs, setPrograms] = useState({});
  const getAllPrograms = async () => {
    try {
      // const response = await axios.get(`${API_URL}/nileCruise`);
      const response = await axios.get(`${MONGODB_URL}/getAllProgram`);
      const programs = await response.data;
      console.log("====================================");
      console.log(programs.id);
      console.log("====================================");
      setPrograms(programs);
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };
  useEffect(() => {
    getAllPrograms();
  },[]);

  return (
    <>
     <Toast
        className=""
        show={showA}
        onClose={toggleShowA}
        style={{
          position: "fixed",
          top: "70px",
          right: "10px",
          backgroundColor: "#fff",
          zIndex: "99999",
        }}
      >
        <Toast.Header>
                      <img width="180" height="100" src={require("../../images/hot-offer/r.png")} style={{objectFit:"contain",position:"absolute",right:"0px",top:"-45px"}}/>

          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Semiramis lll (5* deluxe) <br /> <span style={{fontSize:"12px",fontWeight:"bold",color:"rgb(252, 76, 3)"}}> 4 Days / 3 Nights</span><br /> <span style={{fontSize:"12px",fontWeight:"bold",color:"rgb(252, 76, 3)"}}> 9650 EGP</span> </strong>
        </Toast.Header>
        <Toast.Body>
          <img
            width="100%"
            height="250"
            className="mb-2"
            src="https://cit-egypt.com/dropimg/uploads/17247582932.%20Reception.jpg"
          />

          <Button
            id="book-btn"
            variant="primary"
            type="submit"
            style={{ background: "#fc4c03", borderColor: "#fc4c03" }}
          >
            {/* <Link to={"/tembDetails/" + id}> */}
            <Link
              to={`https://cit-egypt.com/nileCruiseTempDetails/66cf0657785b59a0f6d21e9c`}
              style={{ color: "#000" }}
            >
              More Details
            </Link>
          </Button>
        </Toast.Body>
      </Toast>
      <div class="Banner" style={{ backgroundImage: `url(${image})` }}></div>
      <div class="custom-opacity">
        <Zoom>
          <div
            className="domestics container-fluid"
            style={{
              marginTop: "90vh",
              paddingTop: "50px",
              backgroundColor: "#fff",
            }}
          >
            <Row className="domestic-section">
              {screenSize.width > 991 ? (
                <Col
                  className="side-filter-col"
                  lg="2"
                  style={{
                    minHeight: "100vh",
                    backgroundColor: "#fc4c03",
                    marginTop: "90px",
                  }}
                >
                  <div className="location-filter">
                    <h2>Hotel Deals</h2>
                    <div className="checkboxes-group">

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="Hurghada"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Hurghada" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Hurghada" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="SomaBay"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Soma Bay" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Soma Bay" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="SahlHashesh"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Sahl Hashesh" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Sahl Hashesh" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Makadi Bay" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Makadi Bay" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="SharmElSheikh"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Sharm El Sheikh" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Sharm El Sheikh" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="Dahab"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Dahab" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Dahab" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Taba" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Taba" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="MarsaAlam"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Marsa Alam" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Marsa Alam" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          id="Luxor"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Luxor" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Luxor" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Aswan" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Aswan" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Alexandria" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Alexandria" ? item : ""
                                ),
                              ]);
                            }
                          }}
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
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Marsa Matrouh" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Marsa Matrouh" ? item : ""
                                ),
                              ]);
                            }
                          }}
                        ></input>
                        <label class="form-check-label" for="MarsaMatrouh">
                          Marsa Matrouh
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="AinElSokhna"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered != true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.category == "Ain El Sokhna" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered != false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.category != "Ain El Sokhna" ? item : ""
                                ),
                              ]);
                            }
                          }}
                        ></input>
                        <label class="form-check-label" for="AinElSokhna">
                          Ain El Sokhna
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="rating-filter">
                    {/* <h2>Star Rating</h2> */}
                    <ul>
                      {/* <li>
                      <div class="form-check ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="fivestars"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              sFilter == true ? setSFiltered(true) :setSFiltered()
                              if(newDataArray.length == 0 && filtered == false){
                                setData([
                                      ...data.filter((item) =>
                                        item.stars == "5" ? item : ""
                                      ),
                                    ])
                              }
                              console.log("true");
                              // if(setNewDataArray.length != 0){
                              //   setNewDataArray([
                              //     ...newDataArray,
                              //     ...data.filter((item) =>
                              //       item.stars == "5" ? item : ""
                              //     ),
                              //   ])
                              // }else{
                              //   setData([
                              //     ...data,
                              //     ...data.filter((item) =>
                              //       item.stars == "5" ? item : ""
                              //     ),
                              //   ])
                              // }
                             
                            } else {
                              // filtered == false ? setFiltered(false) :setFiltered()
                              sFilter == true ? setSFiltered(true) :setSFiltered()

                              // setFiltered(false);
                              if(newDataArray.length == 0 && filtered == false){
                                setData([
                                  ...data,
                                      ...data.filter((item) =>
                                        item.stars != "5" ? item : ""
                                      ),
                                    ])
                              }
                              console.log("false");
                              // if(setNewDataArray.length != 0){
                              //   setNewDataArray([
                              //     ...newDataArray.filter((item) =>
                              //       item.stars != "5" ? item : ""
                              //     ),
                              //   ]);
                              // }else{
                              //   setData([
                              //     ...data,
                              //     ...data.filter((item) =>
                              //       item.stars != "5" ? item : ""
                              //     ),
                              //   ])
                              // }
                             
                            }
                          }}
                        ></input>
                        <label class="form-check-label" for="fivestars">
                        <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                        </label>
                      </div>
                       
                      </li> */}
                    {/* <li>
                      <div class="form-check ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="fourstars"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered == true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.stars == "4" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered == false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.stars != "4" ? item : ""
                                ),
                              ]);
                            }
                          }}
                        ></input>
                        <label class="form-check-label" for="fourstars">
                        <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          
                        </label>
                      </div>
                       
                      </li>
                      <li>
                      <div class="form-check ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="threestars"
                          onChange={(e) => {
                            if (e.currentTarget.checked == true) {
                              filtered == true ? setFiltered(true) :setFiltered()
                              
                              console.log("true");
                              setNewDataArray([
                                ...newDataArray,
                                ...data.filter((item) =>
                                  item.stars == "3" ? item : ""
                                ),
                              ]);
                            } else {
                              filtered == false ? setFiltered(false) :setFiltered()
                              // setFiltered(false);
                              console.log("false");
                              setNewDataArray([
                                ...newDataArray.filter((item) =>
                                  item.stars != "3" ? item : ""
                                ),
                              ]);
                            }
                          }}
                        ></input>
                        <label class="form-check-label" for="threestars">
                        <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />
                          <FontAwesomeIcon className="star" icon={faStar} />

                        </label>
                      </div>
                       
                      </li> */}
                    </ul>

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
                    </div> */}
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
                    style={{ backgroundColor: "#fc4c03", height: "100%" }}
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
                        <h2>Hotel Deals</h2>
                        <div className="checkboxes-group">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="AinElSokhna"
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Sokhna" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Sokhna" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Hurghada" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Hurghada" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Hashesh" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Hashesh" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Makady" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Makady" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Soma" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Soma" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Marsa Alam" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Marsa Alam" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Dahab" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Dahab" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Taba" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Taba" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Sharm" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Sharm" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Luxor" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Luxor" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Aswan" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Aswan" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Alex" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Alex" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
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
                              onChange={(e) => {
                                if (e.currentTarget.checked == true) {
                                  filtered != true ? setFiltered(true) :setFiltered()
                                  
                                  console.log("true");
                                  setNewDataArray([
                                    ...newDataArray,
                                    ...data.filter((item) =>
                                      item.category == "Matrouh" ? item : ""
                                    ),
                                  ]);
                                } else {
                                  filtered != false ? setFiltered(false) :setFiltered()
                                  // setFiltered(false);
                                  console.log("false");
                                  setNewDataArray([
                                    ...newDataArray.filter((item) =>
                                      item.category != "Matrouh" ? item : ""
                                    ),
                                  ]);
                                }
                              }}
                            ></input>
                            <label class="form-check-label" for="MarsaMatrouh">
                              Marsa Matrouh
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div className="rating-filter">
                        <h2>Star Rating</h2>
                        <ul>
                          <li>
                            {" "}
                            <div
                              className="rates-stars p-2"
                              onClick={() => {
                                let fiveStarsHotels = [];
                                data.forEach((item) =>
                                  item.stars === "5"
                                    ? fiveStarsHotels.push(item)
                                    : item
                                );
                                setNewDataArray(fiveStarsHotels);
                              }}
                            >
                              <FontAwesomeIcon className="star" icon={faStar} />
                              <FontAwesomeIcon className="star" icon={faStar} />
                              <FontAwesomeIcon className="star" icon={faStar} />
                              <FontAwesomeIcon className="star" icon={faStar} />
                              <FontAwesomeIcon className="star" icon={faStar} />
                            </div>
                          </li>
                          <li>
                            {" "}
                            <div
                              className="rates-stars p-2"
                              onClick={() => {
                                let fourStarsHotels = [];
                                data.forEach((item) =>
                                  item.stars === "4"
                                    ? fourStarsHotels.push(item)
                                    : item
                                );
                                setNewDataArray(fourStarsHotels);
                              }}
                            >
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
                            <div
                              className="rates-stars p-2"
                              onClick={() => {
                                let threeStarsHotels = [];
                                data.forEach((item) =>
                                  item.stars === "3"
                                    ? threeStarsHotels.push(item)
                                    : item
                                );
                                setNewDataArray(threeStarsHotels);
                              }}
                            >
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
                      </div> */}
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
                  {/* <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4> */}
                  <h6 style={{ lineHeight: "1.5" }}>
                    Residents of Egypt quite too often miss out on all the
                    beauty the country has to offer. <br />
                    Don't miss out on the all inclusive domestic vacation deals
                    that has designed to help you escape the hustle and bustle
                    of the every day life in the big cities. Enjoy these luxury
                    mini breaks with your family and explore all the different
                    worlds that make up this grand Country.
                  </h6>
                  {/* {
              
             filtered == false? 
            
            
            data.length >= 1 ? (
              data.map((item) => {
                return (
                  <Col key={item.id} sm="12" md="6" lg="4" xxl="3">
                    <Temb item={item} />
                  </Col>
                );
              })
            ): newDataArray.length >= 1 ? (
              newDataArray.map((item) => {
                return (
                  <Col key={item.id} sm="12" md="6" lg="4" xxl="3">
                    <Temb item={item} />
                  </Col>
                );
              })
            ) : (
                <FullProgress />
              ):<FullProgress />
            } */}
             {/* {programs?.length >= 1 ? (
            programs?.map((program) => {
              return (
                program._id == "66fe8633e9045f096a95797d"   ?
                   <Col sm="12" md="6" lg="4" xxl="3">
                <HistorecalTemp program={program} />
              </Col>
              :""
              );
            })
          ) : (
            <FullProgress />
          )} */}















             {nileCruises?.length >= 1 ? (
            nileCruises?.map((nileCruise) => {
               
              return (
                nileCruise.title != "Aswan - Cairo / Long Cruise"   ?
                 nileCruise.title != "Luxor - Cairo / Long Cruise " ?
                 nileCruise.egypt_cruise != false ?
                   <Col sm="12" md="6" lg="4" xxl="3">
                <NileCruiseTemp nileCruise={nileCruise} />
              </Col>
              :""
              : ""
              : ""
                
              );
            })
          ) : (
            <FullProgress />
          )}





                  {filtered == false && newDataArray.length == 0? (
                    data.length >= 1 ? (
                      data.map((item) => {
                        return (

                          (item._id != "66294201497f70eb371eae5e" &&
                             item._id != "662e205899d8bcfa2a9f6287" &&
                              item._id != "66605280757508d3e0129c8e" &&
                               item._id != "665f2e2c7e35dabd2da59fbb" &&
                                item._id != "667d7d8df0b44fde0da99db9" &&
                                item._id != "662909405d90fc661870af7e" &&
                                 item._id != "6629181e956917d909e58c2a") ? (
                            <Col key={item.id} sm="12" md="6" lg="4" xxl="3">
                              <Temb item={item} />
                            </Col>
                          ) : ""
                          
                        );
                      })
                    ) : (
                      <FullProgress />
                    )
                  ) : data.length >= 1 ? (
                    newDataArray.map((item) => {
                      return (
                        (item._id != "66294201497f70eb371eae5e" && item._id != "662e205899d8bcfa2a9f6287" && item._id != "6661c7b0f5320df705d77068") ? (
                          <Col key={item.id} sm="12" md="6" lg="4" xxl="3">
                            <Temb item={item} />
                          </Col>
                        ) : ""
                        
                      );
                    })
                  ) : (
                    <FullProgress />
                  ) 
                  
                  
                  }













                  {/* {
                    (
                      newDataArray.length == 0 ? (
                        data.map((item) => {
                          return (
                            <Col key={item.id} sm="12" md="6" lg="4" xxl="3">
                              <Temb item={item} />
                            </Col>
                          );
                        })
                      ) : (
                        <FullProgress />
                      )
                    )
                  } */}
                </Row>
              </Col>
            </Row>
          </div>
        </Zoom>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Domestic;

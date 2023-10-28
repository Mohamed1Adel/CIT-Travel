import React, { useState, useEffect ,useRef} from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import "./Domestic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
import axios from "axios";

function Domestic() {

  
  const [data, setData] = useState({});
  const [newDataArray, setNewDataArray] = useState({});
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
  const getAllData = async () => {
    try {
      // await fetch(`${API_URL}/domestics`)
      //   .then((res) => res.json())
      //   .then((res) => {
      //     setData(res);
      //     setNewDataArray(res);
      //   });
      // console.log(data);
      // console.log("get data");
      // const response = await axios.get(`http://localhost:5000/getAllDomestics`);
      const response = await axios.get(`${MONGODB_URL}/getAllDomestics`);
      const data = response.data;
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  // window.onload = () => {
  //   getAllData();
  //   console.log("on load");
  // };
  return (
    <Zoom>
      <div className="domestics container-fluid">
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
                      onChange={() => {
                        newDataArray.forEach((item) =>
                          setNewDataArray(
                            ...newDataArray,
                            item.category === "Hurghada"
                          )
                        );
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
                    <div
                      className="rates-stars p-2"
                      onClick={() => {
                        let fiveStarsHotels = [];
                        data.forEach((item) =>
                          item.stars === "5" ? fiveStarsHotels.push(item) : item
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
                          item.stars === "4" ? fourStarsHotels.push(item) : item
                        );
                        setNewDataArray(fourStarsHotels);
                      }}
                    >
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />{" "}
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
                <div className="sd-header" style={{display:"flex",justifyContent:"flex-end"}}>
                  <div className="btn"  onClick={ToggleSidebar}>
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
                          onChange={() => {
                            newDataArray.forEach((item) =>
                              setNewDataArray(
                                ...newDataArray,
                                item.category === "Hurghada"
                              )
                            );
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
                  </div>
                </div>
              </div>
              <div
                className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
                onClick={ToggleSidebar}
              ></div>
            </div>
          )}

          <Col className="domestic-hotels" lg="10">
            <Row>
              {data.length >= 1 ? (
                data.map((item) => {
                  return (
                    <Col key={item.id} sm="12" md="6" lg="4" xxxl="3">
                      <Temb item={item} />
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
  );
}

export default Domestic;

// import { Col, Row } from "react-bootstrap";
// import { Zoom } from "react-reveal";
// // import TravelImage from "../../images/travelimg1.jpg";
// import Temb from "../Temb/Temb";
// import "./Domestic.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { domesticsData } from "../../data/Domesticsdata";
// import axios from "axios";
// import TembDetails from "../TembDetails/TembDetails";
// function Domestic() {
//   const [domestic, setDomestic] = useState();

//   const getAllDomestics = async () => {
//     const response = await axios.get("http://localhost:9000/domestics");
//     // console.log(response);
//     setDomestic(response.data);
//     console.log(domestic);
//   };
//   const showData = () => {
//     return domestic.map((item) => {
//       return (
//         <Col sm="12" md="6" lg="4">
//           <Temb domestic={item} />
//         </Col>
//       );
//     });
//   };
//   useEffect(() => {
//     getAllDomestics();
//   }, []);
//   return (
//     <Zoom>
//       <div className="container-fluid">
//         {/* <h1 className="text-center main-heading">Domestics</h1> */}
//         <Row className="domestic-section">
//           <Col className="side-filter-col" lg="2">
//             <div className="location-filter">
//               <h2>Hotel Deals</h2>
//               <div className="checkboxes-group">
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="AinElSokhna"
//                   ></input>
//                   <label class="form-check-label" for="AinElSokhna">
//                     Ain El Sokhna
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Hurghada"
//                   ></input>
//                   <label class="form-check-label" for="Hurghada">
//                     Hurghada
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SahlHashesh"
//                   ></input>
//                   <label class="form-check-label" for="SahlHashesh">
//                     Sahl Hashesh
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MakadiBay"
//                   ></input>
//                   <label class="form-check-label" for="MakadiBay">
//                     Makadi Bay
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SomaBay"
//                   ></input>
//                   <label class="form-check-label" for="SomaBay">
//                     Soma Bay
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MarsaAlam"
//                   ></input>
//                   <label class="form-check-label" for="MarsaAlam">
//                     Marsa Alam
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Dahab"
//                   ></input>
//                   <label class="form-check-label" for="Dahab">
//                     Dahab
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Taba"
//                   ></input>
//                   <label class="form-check-label" for="Taba">
//                     Taba
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SharmElSheikh"
//                   ></input>
//                   <label class="form-check-label" for="SharmElSheikh">
//                     Sharm El Sheikh
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Luxor"
//                   ></input>
//                   <label class="form-check-label" for="Luxor">
//                     Luxor
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Aswan"
//                   ></input>
//                   <label class="form-check-label" for="Aswan">
//                     Aswan
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Alexandria"
//                   ></input>
//                   <label class="form-check-label" for="Alexandria">
//                     Alexandria
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MarsaMatrouh"
//                   ></input>
//                   <label class="form-check-label" for="MarsaMatrouh">
//                     Marsa Matrouh
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="rating-filter">
//               <h2>Star Rating</h2>
//               <ul>
//                 {/* <li>5 Stars</li>
//             <li>4 Stars</li>
//             <li>3 Stars</li> */}
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                   </div>
//                 </li>
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />{" "}
//                   </div>
//                 </li>
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                   </div>
//                 </li>
//               </ul>

//               <div className="seasonal-offer">
//                 <h2>Seasonal Offer</h2>
//                 <div className="checkboxes-group">
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="Summer"
//                     ></input>
//                     <label class="form-check-label" for="Summer">
//                       Summer
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="Winter"
//                     ></input>
//                     <label class="form-check-label" for="Winter">
//                       Winter
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="NileCruise"
//                     ></input>
//                     <label class="form-check-label" for="NileCruise">
//                       Nile Cruise
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="DayUse"
//                     ></input>
//                     <label class="form-check-label" for="DayUse">
//                       Day Use
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="HoneyMoon"
//                     ></input>
//                     <label class="form-check-label" for="HoneyMoon">
//                       Honey Moon
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col className="domestic-hotels" lg="10">
//             <Row>
//               {domestic.map((item) => {
//                 return (
//                   <Col key={item.id} sm="12" md="6" lg="4">
//                     <Temb domestic={item} />
//                   </Col>
//                 );
//               })}
//             </Row>
//           </Col>
//         </Row>
//       </div>
//     </Zoom>
//   );
// }

// export default Domestic;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { Zoom } from "react-reveal";
// // import TravelImage from "../../images/travelimg1.jpg";
// import Temb from "../Temb/Temb";
// import "./Domestic.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { domesticsData } from "../../data/Domesticsdata";
// function Domestic() {
//   return (
//     <Zoom>
//       <div  className="container-fluid">
//         {/* <h1 className="text-center main-heading">Domestics</h1> */}
//         <Row className="domestic-section">
//           <Col className="side-filter-col" lg="2">
//             <div className="location-filter">
//               <h2>Hotel Deals</h2>
//               <div className="checkboxes-group">
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="AinElSokhna"
//                   ></input>
//                   <label class="form-check-label" for="AinElSokhna">
//                     Ain El Sokhna
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Hurghada"
//                   ></input>
//                   <label class="form-check-label" for="Hurghada">
//                     Hurghada
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SahlHashesh"
//                   ></input>
//                   <label class="form-check-label" for="SahlHashesh">
//                     Sahl Hashesh
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MakadiBay"
//                   ></input>
//                   <label class="form-check-label" for="MakadiBay">
//                     Makadi Bay
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SomaBay"
//                   ></input>
//                   <label class="form-check-label" for="SomaBay">
//                     Soma Bay
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MarsaAlam"
//                   ></input>
//                   <label class="form-check-label" for="MarsaAlam">
//                     Marsa Alam
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Dahab"
//                   ></input>
//                   <label class="form-check-label" for="Dahab">
//                     Dahab
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Taba"
//                   ></input>
//                   <label class="form-check-label" for="Taba">
//                     Taba
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="SharmElSheikh"
//                   ></input>
//                   <label class="form-check-label" for="SharmElSheikh">
//                     Sharm El Sheikh
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Luxor"
//                   ></input>
//                   <label class="form-check-label" for="Luxor">
//                     Luxor
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Aswan"
//                   ></input>
//                   <label class="form-check-label" for="Aswan">
//                     Aswan
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="Alexandria"
//                   ></input>
//                   <label class="form-check-label" for="Alexandria">
//                     Alexandria
//                   </label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="MarsaMatrouh"
//                   ></input>
//                   <label class="form-check-label" for="MarsaMatrouh">
//                     Marsa Matrouh
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="rating-filter">
//               <h2>Star Rating</h2>
//               <ul>
//                 {/* <li>5 Stars</li>
//             <li>4 Stars</li>
//             <li>3 Stars</li> */}
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                   </div>
//                 </li>
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />{" "}
//                   </div>
//                 </li>
//                 <li>
//                   {" "}
//                   <div className="rates-stars p-2">
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                     <FontAwesomeIcon className="star" icon={faStar} />
//                   </div>
//                 </li>
//               </ul>

//               <div className="seasonal-offer">
//                 <h2>Seasonal Offer</h2>
//                 <div className="checkboxes-group">
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="Summer"
//                     ></input>
//                     <label class="form-check-label" for="Summer">
//                       Summer
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="Winter"
//                     ></input>
//                     <label class="form-check-label" for="Winter">
//                       Winter
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="NileCruise"
//                     ></input>
//                     <label class="form-check-label" for="NileCruise">
//                       Nile Cruise
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="DayUse"
//                     ></input>
//                     <label class="form-check-label" for="DayUse">
//                       Day Use
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="HoneyMoon"
//                     ></input>
//                     <label class="form-check-label" for="HoneyMoon">
//                       Honey Moon
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col className="domestic-hotels" lg="10">
//             {/* <Row>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//               <Col sm="12" md="4" lg="3">
//                 <Temb />
//               </Col>
//             </Row> */}
//             <Row>
//               {domesticsData.length >= 1 ? (
//                 domesticsData.map((item) => {
//                   return (
//                     <Col sm="12" md="6" lg="4">
//                       <Temb
//                         id={item.id}
//                         title={item.title}
//                         decs={item.decs}
//                         location={item.location}
//                         rate={item.rate}
//                         category={item.category}
//                         dur={item.dur}
//                         packageInclude={item.packageInclude}
//                         packageExclude={item.packageExclude}
//                         childrenPolicy={item.childrenPolicy}
//                         termsAndConditions={item.termsAndConditions}
//                       />
//                     </Col>
//                   );
//                 })
//               ) : (
//                 <h2>not found</h2>
//               )}
//             </Row>
//           </Col>
//         </Row>
//       </div>
//     </Zoom>
//   );
// }

// export default Domestic;

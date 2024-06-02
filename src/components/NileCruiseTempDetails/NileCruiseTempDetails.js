import React, { useState, useEffect } from "react";
import { Accordion, Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./NileCruiseTempDetails.scss";
// import Accordion from 'react-bootstrap/Accordion';
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {API_URL, MONGODB_URL} from '../../envData'
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
import axios from "axios";
function NileCruiseTempDetails() {
  const [nileCruiseDetails, setNileCruiseDetails] = useState({value:""});
  const [images, setImages] = useState([]);
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);
  const [child,setChild] = useState(0);

  const { id } = useParams();

  async function getDomesticById() {
    try {
      // const response = await fetch(`${API_URL}/nileCruise/${id}`);
      const response = await fetch(`${MONGODB_URL}/getNileCruiseDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setNileCruiseDetails(data);
      setTitle(data?.title)
      getImages();
    } catch (e) {
      console.log(e);
    }
  }
  const getImages = async () => {
    setImages(nileCruiseDetails?.images);
  };

  const sendMassage = (e) => {
    e.preventDefault();
    // console.log(form.current);
  
    //  emailjs
    //    .sendForm(
    //      "service_a5le1fd",
    //      "template_vjwhzni",
    //      form.current,
    //      "YZfMIBWVpK33gBYsx"
    //    )
    //    .then(
    //      (result) => {
    //        console.log(result.text);
    //      },
    //      (error) => {
    //        console.log(error.text);
    //      }
    //    );
    console.log(title,name,email,phone,rooms,pax,child);

    var phonenumber = "+201100996929";

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Title :* "+title+"%0a"
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone:* "+phone+"%0a"
    +"*Rooms:* "+rooms+"%0a"
    +"*Pax:* "+pax+"%0a"
    +"*Child:* "+child+"%0a"
    +"%0a%0a"
    +"Hello CIT Travel";

    window.open(url, '_blank').focus();
  };
  useEffect(() => {
    getDomesticById();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

      // State to hold the fetched data
      const [dataImg, setDataImg] = useState(null);
      // State to hold loading state
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from your PHP API
            const config = {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              }
            };
            const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${id}`);
            // Set the data in state
            setDataImg(response.data);
            console.log(response.data);
            // Set loading state to false
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []); // Empty dependency array to ensure useEffect only runs once
  return (
    <Container>
      {
        nileCruiseDetails.value !="" ?  <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box position-relative">
              <ul>
                <h4 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.title}</h4>
                
               
                <h5 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.box6}</h5>
                
                <h5 style={{ color: "#fc4c03" }} >
                  {/* <FontAwesomeIcon icon={faLocationDot} />{" "} */}
                  {nileCruiseDetails?.destination}
                </h5>

                {
              nileCruiseDetails?.title === "Luxor - Cairo / Long Cruise " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 28000 EGP </h6>: ""
            }
            {
              nileCruiseDetails?.title === "Aswan - Cairo / Long Cruise" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 37000 EGP </h6>: ""
            }
            {
              nileCruiseDetails?.destination === "4 Days - 3 Nights" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 10500 EGP </h6>: ""
            }
            {
              nileCruiseDetails?.destination === "5 Days - 4 Nights" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 13500 EGP </h6>: ""
            }
            <h6 style={{  }}>{nileCruiseDetails?.description}</h6>
               
                <h5 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.box7}</h5>
                <h5 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.box8}</h5>
                <h5 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.box9}</h5>
                <h5 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
              {dataImg?.length >= 1 ? (
                dataImg?.map((img,i) => {
                  console.log("images is loaded");
                  if(i<=dataImg.length - 2){
                    return (
                   <Carousel.Item key={Math.random()}>
                     <img src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[i]}`} alt="..." />
                   </Carousel.Item>
                 );
                 }
                  // return (
                  //   <Carousel.Item key={Math.random()}>
                  //     <img src={img.img_url} alt="..." />
                  //   </Carousel.Item>
                  // );
                })
              ) : (
                <Progress />
              )}
            </Carousel>
          </Col>
        </Row>
        <Row className="my-5 book-rates">
          <Col sm="12" md="3" lg="4">
            <div className="book-form">
              <h2>Book Now</h2>

              <Form  onSubmit={sendMassage}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          name="title"
                          
                          // value={itemDetails?.title}
                          style={{display:"none"}}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control required
                          type="text"
                          name="sender_name"
                          placeholder="Your Name"
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control required
                          type="tel"
                          name="Phone_No"
                          placeholder="Your Phone Number"
                          onChange={(e)=>setPhone(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="tel"
                          name="Rooms_Count"
                          placeholder="Enter Number of Rooms"
                          onChange={(e)=>setRooms(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          name="Pax_Count"
                          placeholder="Enter Number of Pax"
                          onChange={(e)=>setPax(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          name="Childs_Count"
                          placeholder="Enter Number of Child"
                          onChange={(e)=>setChild(e.target.value)}
                        />
                      </Form.Group>
                      <Button id="book-btn" variant="primary" type="submit" style={{background:"#fc4c03",borderColor:"#fc4c03"}}>
                        Book Now
                      </Button>
                    </Form>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <div
              class="card bottom-card text-center"
              style={{ width: "100% !important" }}
            >
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab" style={{color:"#fc4c03",fontWeight:"bold",fontSize:"22px"}}>
                     

                      {
              nileCruiseDetails?.title === "Luxor - Cairo / Long Cruise " ?  " Starting from 28000 EGP": ""
            }
            {
              nileCruiseDetails?.title === "Aswan - Cairo / Long Cruise" ?  " Starting from 37000 EGP": ""
            }
            {
              nileCruiseDetails?.destination === "4 Days - 3 Nights" ?  " Starting from 10500 EGP": ""
            }
            {
              nileCruiseDetails?.destination === "5 Days - 4 Nights" ?  " Starting from 13500 EGP": ""
            }
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body tabs-card">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
                   
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Package</th>
                            <th scope="col">From</th>
                            <th scope="col">to</th>
                            <th scope="col">Single</th>
                            <th scope="col">Double</th>
                            <th scope="col">Triple</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nileCruiseDetails?.packages?.map((pack) => {
                            return (
                              <tr>
                                <th scope="row">{pack.packTitle}</th>
                                <td>{pack.startDate.split('-').reverse().join('-')}</td>
                                <td>{pack.endDate.split('-').reverse().join('-')}</td>
                                <td>{pack.single} EGP</td>
                                <td>{pack.double} EGP</td>
                                <td>{pack.triple} EGP</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card text-center mt-3">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#itenary" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Itenary
                    </a>
                  </li>
                
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#cancellation-polices"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Cancellation Polices
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#children-polices"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Children Polices
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#include" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Include
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#exclude" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Exclude
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="itenary">
                    
                    <Accordion
                      className="itenary-accordion"
                      defaultActiveKey="0"
                      // flush
                    >
                      {nileCruiseDetails?.itenary?.map((day, index) => {
                        return (
                          <Accordion.Item eventKey={`${index + 1}`}>
                            <Accordion.Header>
                              Day {index + 1} {"  "}
                              &nbsp; 
                              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                              &nbsp;{"  "}
                              {day.dayTitle}
                            </Accordion.Header>
                            <Accordion.Body>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: day?.dayContent,
                                }}
                              />

{
                              day?.hasOwnProperty('optTour') ?
                              day?.optTour !== "<p><br></p>" ? 

                              day?.optTour !=="<p> </p>" ?
                              <>

                              <h4 style={{fontWeight:"bold",color:"red"}}>Optional Tours</h4>
                              <div
                            style={{marginTop:"10px"}}
                              dangerouslySetInnerHTML={{
                                __html: day?.optTour,
                              }}
                            />
                              </>
                              : "":"" :""
                            }
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>
                  
                  <div class="tab-pane" id="terms">
                  
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.termsAndConditions,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="cancellation-polices">
                    
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.cancellation,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="children-polices">
                    
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.children,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="include">
                    

                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.include,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="exclude">
                    

                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.exclude,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>: <FullProgress />
      }
     
    </Container>
  );
}

export default NileCruiseTempDetails;
// import { Button, Col, Container, Row } from "react-bootstrap";
// import "./TembDetails.scss";
// import Carousell from "../Carousell/Carousell";
// import Form from "react-bootstrap/Form";
// import { useParams } from "react-router-dom";
// import {domesticsData} from "../../data/Domesticsdata"
// function TembDetails() {
//   const  {id} = useParams()

//   const [state , setState] = useState("")

//   useEffect(()=>{
//    const e =  domesticsData.filter((item)=>{
//      return item.id === id
//     });
//     setState(e[0])
//   },[id])
//   console.log(state);
//   // console.log(id);
//   return (
//     <Container>
//       <div className="hotel-info">
//         <Row className="align-items-center">
//           <Col sm="12" md="3" lg="4">
//             <div className="info-box">
//               <ul>
//                 <h3>Hotel Name:</h3>
//                 <h4>{state.title}</h4>
//                 <h3>Destination</h3>
//                 <h4>{state.location}</h4>
//                 <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4>
//                 <h3>Dates:</h3>
//                 <h4>25/09/2023</h4>
//                 <h3>Upon request</h3>
//                 <h4>-------</h4>
//               </ul>
//             </div>
//           </Col>
//           <Col sm="12" md="9" lg="8">
//             <Carousell />
//           </Col>
//         </Row>
//         <Row className="my-5">
//           <Col sm="12" md="9" lg="8">
//             <div class="card text-center">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   <li class="nav-item">
//                     <a
//                       class="active nav-link active"
//                       href="#package"
//                       data-toggle="tab"
//                     >
//                       Package
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#hotels-rates" data-toggle="tab">
//                       Hotels & Rates
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#optional-tour" data-toggle="tab">
//                       Optional tours
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="card-body">
//                 <div class="tab-content">
//                   <div class="tab-pane active" id="package">
//                     <h5>Package Include</h5>

//                   </div>
//                   <div class="tab-pane" id="hotels-rates">
//                     Hotels
//                   </div>
//                   <div class="tab-pane" id="optional-tour">
//                     optional-tour
//                   </div>
//                   <div class="tab-pane" id="children">
//                     children
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     terms
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col sm="12" md="3" lg="4">
//             <div className="book-form">
//               <h2>Book Now</h2>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Your Email Address" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicNumber">
//                   <Form.Control type="text" placeholder="Your Phone Number" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Rooms"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Enter Number of Pax" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Child"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Book Now
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default TembDetails;

// import React, { useState, useEffect } from "react";
// import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
// import "./TembDetails.scss";
// import Carousell from "../Carousell/Carousell";
// import Form from "react-bootstrap/Form";
// import { useParams } from "react-router-dom";
// import { domesticsData } from "../../data/Domesticsdata";
// import show from '../../images/show.jpeg';
// import show1 from '../../images/show1.jpeg';
// import show2 from '../../images/show2.jpeg';
// import show3 from '../../images/show3.jpeg';
// import show4 from '../../images/show4.jpeg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// function TembDetails() {
//   const { id } = useParams();

//   const [state, setState] = useState("");

//   useEffect(() => {
//     const e = domesticsData.filter((item) => {
//       return item.id === id;
//     });
//     setState(e[0]);
//   }, [id]);
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
//   console.log(state);
//   // console.log(id);
//   return (
//     <Container>
//       <div className="hotel-info">
//         <Row className="align-items-center">
//           <Col sm="12" md="3" lg="4">
//             <div className="info-box">
//               <ul>
//                 <h4>Hotel Name:</h4>
//                 <h5>
//                   Movenpick Aquapark Resort & Spa Soma Bay <br />{" "}
//                   {
//                     <>
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                     </>
//                   }{" "}
//                 </h5>
//                 <h5>Location : Hurghada</h5>
//                 {/* <h3>Destination</h3> */}
//                 {/* <h4>{state.location}</h4> */}
//                 {/* <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4> */}
//                 <h4>Duration Period:</h4>
//                 <h5>from 25/09/2023</h5>
//                 <h5> to 25/09/2023</h5>
//                 {/* <h3>Upon request</h3>
//                 <h4>-------</h4> */}
//               </ul>
//             </div>
//           </Col>
//           <Col sm="12" md="9" lg="8">
//             <Carousel activeIndex={index} onSelect={handleSelect}>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show1} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show2} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show3} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show4} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </Col>
//         </Row>
//         <Row className="my-5">
//           <Col sm="12" md="9" lg="8">
//             <div class="card text-center">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#rates" data-toggle="tab">
//                       Rates
//                     </a>
//                   </li>
//                   {/* <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#cancellation-polices"
//                       data-toggle="tab"
//                     >
//                       Cancellation Polices
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#document-required"
//                       data-toggle="tab"
//                     >
//                       Required Docs
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>
//               <div class="card-body ">
//                 <div class="tab-content">
//                   <div class="tab-pane " id="rates">
//                     <div className=" main-table">
//                       <h6>Duration</h6>
//                       <table class="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">room type</th>
//                             <th scope="col">duration</th>
//                             <th scope="col">from</th>
//                             <th scope="col">to</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">clasic room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">clasic room lagon</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room lagon </th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>@15/10/2023</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="trips-tables d-flex">
//                       <div className="t">
//                         <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">9,260</th>
//                               <td>5,790</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,080</th>
//                               <td>6,300</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">9,600</th>
//                               <td>5,990</td>
//                               <td>5,890</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,320</th>
//                               <td>6,440</td>
//                               <td>6,340</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                       <div className="t">
//                         <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">12,350</th>
//                               <td>7,720</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,440</th>
//                               <td>8,400</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">12,800</th>
//                               <td>7,990</td>
//                               <td>7,850</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,760</th>
//                               <td>8,590</td>
//                               <td>8,450</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <div class="tab-pane" id="cancellation-polices">
//                     <h4>Cancelation & No Show Plocies:</h4>
//                     <ul>
//                       <li>
//                         <h5> During Normal & Low Periods:</h5>
//                         <ul>
//                           <li>
//                             any cancellation 48 Hrs prior to arrival, will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to one night fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>During High & Peak Periods:</h5>
//                         <ul>
//                           <li>
//                             Any cancellation 07 Days prior to arrival will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             Any cancellation 48 Hrs prior to arrival will be
//                             subject to 50% of the whole stay fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to full stay fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         Payment within above time frame is non-refoundable
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="children">
//                     <h4>Children Polices : </h4>
//                     <ul>
//                       <li>
//                         <h5>Classic room : </h5>
//                         <ul>
//                           <li>
//                             ne child up to 12 years old is free of charge
//                             without an extra bed.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children up to 6 years old)
//                             - Double room (2 adults + 1 child)
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>Deluxe room : </h5>
//                         <ul>
//                           <li>e first child up to 12 years old is free.</li>
//                           <li>
//                             The second child up to 6 years old is free of
//                             charge, and from 6 years old up to 12 years old, 50%
//                             of the price per person in a double room with an
//                             extra bed is paid.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children) - Double room (2
//                             adults + 2 children) - Triple room (3 adults + 1
//                             child)
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     <h4>Terms and Conditions</h4>
//                     <ul>
//                       <li>
//                         Prices include accommodation at the Mövenpick Aqua Park
//                         Hotel - Soma Bay
//                       </li>
//                       <li>First row from the sea - large sandy beach</li>
//                       <li>
//                         The hotel contains the latest aquapark for adults and
//                         children, free of charge
//                       </li>
//                       <li>
//                         Prices include full board (breakfast, lunch, dinner,
//                         snacks and non-alcoholic drinks) Soft All Inclusive
//                       </li>
//                       <li>
//                         All rooms contain a minibar, bottled water, Nescafe, and
//                         tea, which are replenished daily.
//                       </li>
//                       <li>
//                         To book a room with a sea view, 250 pounds will be added
//                         per night to the price of the deluxe room overlooking
//                         the pool.
//                       </li>
//                       <li>
//                         {" "}
//                         To book a family room, 750 pounds per night will be
//                         added to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                       <li>
//                         To book a deluxe suite, 1,250 pounds will be added per
//                         night to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="document-required">
//                     <h5>Documents required at the hotel:-</h5>
//                     <h6>
//                       Photos of ID cards - Photos of birth certificates - Photos
//                       of marriage certificate.
//                     </h6>
//                     <h6>
//                       The above prices do not include transfers, and transfers
//                       can be booked for 450 pounds per chair, one way.
//                     </h6>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div class="card text-center mt-3">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   {/* <li class="nav-item">
//                     <a class="nav-link" href="#rates" data-toggle="tab">
//                       Rates
//                     </a>
//                   </li> */}
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#cancellation-polices"
//                       data-toggle="tab"
//                     >
//                       Cancellation Polices
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#document-required"
//                       data-toggle="tab"
//                     >
//                       Required Docs
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="card-body ">
//                 <div class="tab-content">
//                   {/* <div class="tab-pane " id="rates">
//                     <div className=" main-table">
//                       <h6>Duration</h6>
//                       <table class="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">room type</th>
//                             <th scope="col">duration</th>
//                             <th scope="col">from</th>
//                             <th scope="col">to</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">clasic room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">clasic room lagon</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room lagon </th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>@15/10/2023</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="trips-tables d-flex">
//                       <div className="t">
//                         <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">9,260</th>
//                               <td>5,790</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,080</th>
//                               <td>6,300</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">9,600</th>
//                               <td>5,990</td>
//                               <td>5,890</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,320</th>
//                               <td>6,440</td>
//                               <td>6,340</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                       <div className="t">
//                         <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">12,350</th>
//                               <td>7,720</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,440</th>
//                               <td>8,400</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">12,800</th>
//                               <td>7,990</td>
//                               <td>7,850</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,760</th>
//                               <td>8,590</td>
//                               <td>8,450</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div> */}
//                   <div class="tab-pane active" id="cancellation-polices">
//                     <h4>Cancelation & No Show Plocies:</h4>
//                     <ul>
//                       <li>
//                         <h5> During Normal & Low Periods:</h5>
//                         <ul>
//                           <li>
//                             any cancellation 48 Hrs prior to arrival, will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to one night fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>During High & Peak Periods:</h5>
//                         <ul>
//                           <li>
//                             Any cancellation 07 Days prior to arrival will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             Any cancellation 48 Hrs prior to arrival will be
//                             subject to 50% of the whole stay fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to full stay fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         Payment within above time frame is non-refoundable
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="children">
//                     <h4>Children Polices : </h4>
//                     <ul>
//                       <li>
//                         <h5>Classic room : </h5>
//                         <ul>
//                           <li>
//                             ne child up to 12 years old is free of charge
//                             without an extra bed.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children up to 6 years old)
//                             - Double room (2 adults + 1 child)
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>Deluxe room : </h5>
//                         <ul>
//                           <li>e first child up to 12 years old is free.</li>
//                           <li>
//                             The second child up to 6 years old is free of
//                             charge, and from 6 years old up to 12 years old, 50%
//                             of the price per person in a double room with an
//                             extra bed is paid.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children) - Double room (2
//                             adults + 2 children) - Triple room (3 adults + 1
//                             child)
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     <h4>Terms and Conditions</h4>
//                     <ul>
//                       <li>
//                         Prices include accommodation at the Mövenpick Aqua Park
//                         Hotel - Soma Bay
//                       </li>
//                       <li>First row from the sea - large sandy beach</li>
//                       <li>
//                         The hotel contains the latest aquapark for adults and
//                         children, free of charge
//                       </li>
//                       <li>
//                         Prices include full board (breakfast, lunch, dinner,
//                         snacks and non-alcoholic drinks) Soft All Inclusive
//                       </li>
//                       <li>
//                         All rooms contain a minibar, bottled water, Nescafe, and
//                         tea, which are replenished daily.
//                       </li>
//                       <li>
//                         To book a room with a sea view, 250 pounds will be added
//                         per night to the price of the deluxe room overlooking
//                         the pool.
//                       </li>
//                       <li>
//                         {" "}
//                         To book a family room, 750 pounds per night will be
//                         added to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                       <li>
//                         To book a deluxe suite, 1,250 pounds will be added per
//                         night to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="document-required">
//                     <h5>Documents required at the hotel:-</h5>
//                     <h6>
//                       Photos of ID cards - Photos of birth certificates - Photos
//                       of marriage certificate.
//                     </h6>
//                     <h6>
//                       The above prices do not include transfers, and transfers
//                       can be booked for 450 pounds per chair, one way.
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col sm="12" md="3" lg="4">
//             <div className="book-form">
//               <h2>Book Now</h2>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Your Email Address" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicNumber">
//                   <Form.Control type="text" placeholder="Your Phone Number" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Rooms"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Enter Number of Pax" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Child"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Book Now
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default TembDetails;
// // import React ,{useState,useEffect}from "react";
// // import { Button, Col, Container, Row } from "react-bootstrap";
// // import "./TembDetails.scss";
// // import Carousell from "../Carousell/Carousell";
// // import Form from "react-bootstrap/Form";
// // import { useParams } from "react-router-dom";
// // import {domesticsData} from "../../data/Domesticsdata"
// // function TembDetails() {
// //   const  {id} = useParams()

// //   const [state , setState] = useState("")

// //   useEffect(()=>{
// //    const e =  domesticsData.filter((item)=>{
// //      return item.id === id
// //     });
// //     setState(e[0])
// //   },[id])
// //   console.log(state);
// //   // console.log(id);
// //   return (
// //     <Container>
// //       <div className="hotel-info">
// //         <Row className="align-items-center">
// //           <Col sm="12" md="3" lg="4">
// //             <div className="info-box">
// //               <ul>
// //                 <h3>Hotel Name:</h3>
// //                 <h4>{state.title}</h4>
// //                 <h3>Destination</h3>
// //                 <h4>{state.location}</h4>
// //                 <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4>
// //                 <h3>Dates:</h3>
// //                 <h4>25/09/2023</h4>
// //                 <h3>Upon request</h3>
// //                 <h4>-------</h4>
// //               </ul>
// //             </div>
// //           </Col>
// //           <Col sm="12" md="9" lg="8">
// //             <Carousell />
// //           </Col>
// //         </Row>
// //         <Row className="my-5">
// //           <Col sm="12" md="9" lg="8">
// //             <div class="card text-center">
// //               <div class="card-header">
// //                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
// //                   <li class="nav-item">
// //                     <a
// //                       class="active nav-link active"
// //                       href="#package"
// //                       data-toggle="tab"
// //                     >
// //                       Package
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#hotels-rates" data-toggle="tab">
// //                       Hotels & Rates
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#optional-tour" data-toggle="tab">
// //                       Optional tours
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#children" data-toggle="tab">
// //                       Children Policy
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#terms" data-toggle="tab">
// //                       terms & Conditions
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </div>
// //               <div class="card-body">
// //                 <div class="tab-content">
// //                   <div class="tab-pane active" id="package">
// //                     <h5>Package Include</h5>

// //                   </div>
// //                   <div class="tab-pane" id="hotels-rates">
// //                     Hotels
// //                   </div>
// //                   <div class="tab-pane" id="optional-tour">
// //                     optional-tour
// //                   </div>
// //                   <div class="tab-pane" id="children">
// //                     children
// //                   </div>
// //                   <div class="tab-pane" id="terms">
// //                     terms
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </Col>
// //           <Col sm="12" md="3" lg="4">
// //             <div className="book-form">
// //               <h2>Book Now</h2>
// //               <Form>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control type="text" placeholder="Your Name" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicEmail">
// //                   <Form.Control type="email" placeholder="Your Email Address" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicNumber">
// //                   <Form.Control type="text" placeholder="Your Phone Number" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control
// //                     type="text"
// //                     placeholder="Enter Number of Rooms"
// //                   />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control type="text" placeholder="Enter Number of Pax" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control
// //                     type="text"
// //                     placeholder="Enter Number of Child"
// //                   />
// //                 </Form.Group>
// //                 <Button variant="primary" type="submit">
// //                   Book Now
// //                 </Button>
// //               </Form>
// //             </div>
// //           </Col>
// //         </Row>
// //       </div>
// //     </Container>
// //   );
// // }

// // export default TembDetails;

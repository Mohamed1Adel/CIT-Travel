import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./HistorecalTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
function HistorecalTembDetails() {
  const [programDetails, setProgramDetails] = useState({value :""});
  const [images, setImages] = useState([]);
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);
  const [child,setChild] = useState(0);
  const { id } = useParams();
  console.log(id);
  async function getProgramById() {
    try {
      // const response = await fetch(`${MONGODB_URL}/getProgramDetails/${id}`);
      const response = await fetch(`${MONGODB_URL}/getProgramDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setProgramDetails(data);
      setTitle(data?.title)
    } catch (e) {
      console.log(e);
    }
    console.log(programDetails);
  }

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
    getProgramById();
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
        programDetails.value != "" ?  <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4 style={{ color: "#fc4c03" }}>{programDetails?.title}</h4>
                {/* <h5>{programDetails?.nights} night tour</h5> */}
                <h6>
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: programDetails?.description,
                    }}
                  />
                </h6>
                <h6 style={{fontWeight:"bold",color:"#fc4c03"}}>Highlights : </h6>
                <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.highilghts,
                      }}
                    />
                <h5>{programDetails?.box7}</h5>
                <h5>{programDetails?.box8}</h5>
                <h5>{programDetails?.box9}</h5>
                <h5>{programDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {programDetails?.images?.length >= 1 ? (
                programDetails?.images?.map((img,i) => {
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
                  //     <img src={img?.img_url} alt="..." />
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

              <Form onSubmit={sendMassage}>
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
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab" style={{color:"#fc4c03",fontWeight:"bold",fontSize:"22px"}}>
                      Starting From
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
  
                      <table class="table">
                        <thead>
                          <tr>
                            {/* <th scope="col">Hotel</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th> */}
                            {/* <th scope="col">Starting from.............</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {programDetails?.hotels?.map((hotel) => {
                            return (
                              <tr>
                                <th scope="row">{hotel.hotelTitle}</th>
                                <td>{hotel.from.split('-').reverse().join('-')}</td>
                                <td>{hotel.to.split('-').reverse().join('-')}</td>
                                <td>{hotel.startingFrom} &#65284;</td>
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
                    <a
                      class="nav-link"
                      href="#cancellation-polices"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Itinerary
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#Package-Includes"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Package Includes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#Package-Details"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Package Details
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                    Highlights
                    </a>
                  </li> */}
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="cancellation-polices">
                    <Accordion
                      className="itenary-accordion"
                      defaultActiveKey="0"
                    >
                      {programDetails?.itenary?.map((day, index) => {
                        return (
                          <Accordion.Item eventKey={`${index + 1}`}>
                            <Accordion.Header>
                              Day {index + 1} {"  "}
                              &nbsp; <FontAwesomeIcon icon={faArrowRight} />
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
                                : "":""
                              }
                              
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>
                  <div class="tab-pane" id="Package-Includes">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.packInclude,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="Package-Details">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.description,
                      }}
                    />
                  </div>
                  {/* <div class="tab-pane" id="terms">
                    
                    
                                        <div
                      dangerouslySetInnerHTML={{
                        __html: programDetails?.highilghts,
                      }}
                    />
                  </div> */}
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

export default HistorecalTembDetails;

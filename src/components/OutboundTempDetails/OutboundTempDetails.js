import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./OutboundTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Progress } from "../../progressComponent";
import { API_URL, MONGODB_URL } from "../../envData";
import FullProgress from './../../FullProgress';
function OutboundTempDetails() {
  const [outboundDetails, setOutboundDetails] = useState({value :""});
  const [images, setImages] = useState([]);
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);
  const [child,setChild] = useState(0);

  const { id } = useParams();
   const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    rooms: '',
    pax: '',
    child: '',
   
  });
  console.log(id);

  async function getProgramById() {
    try {
      const response = await fetch(`${MONGODB_URL}/getOutboundDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setOutboundDetails(data);
      setFormData({title : data?.title});
      setTitle(data?.title)
      // getImages();
    } catch (e) {
      console.log(e);
    }
    console.log(outboundDetails);
  }

    const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://cit-egypt.com/sendEmail.php', { // Replace with the actual path to your PHP script
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        title: '',
    name: '',
    email: '',
    phone: '',
    rooms: '',
    pax: '',
    child: '',
      });
    } else {
      alert('There was a problem with your submission. Please try again.');
    }
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
      outboundDetails.value != "" ?<div className="hotel-info">
      <Row className="align-items-center">
        <Col sm="12" md="3" lg="4">
          <div className="info-box">
            <ul>
              <h4 style={{ color: "#fc4c03" }}>{outboundDetails?.title}</h4>
              {/* <h5 style={{ color: "#fc4c03" }}>
                    <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {outboundDetails.box6}
                  </h5> */}
              <h5>{outboundDetails?.description}</h5>
              {/* <div class="card-desc">
              <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packInclude,
                    }}
                  />
              </div> */}
              {/* <h5>{outboundDetails?.box6}</h5> */}
              <h5>{outboundDetails?.box7}</h5>
              <h5>{outboundDetails?.box8}</h5>
              <h5>{outboundDetails?.box9}</h5>
              <h5>{outboundDetails?.box10}</h5>
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
            {submitted ? (
        <div>Thank you! Your message has been sent.</div>
      ) : (
                <Form  onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      required
                      type="text"
                      name="title"
                       value={outboundDetails?.title}
                       
                      
                      style={{ display: "none" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="name"
                      value={formData.name}
                        onChange={handleChange}
                      placeholder="Your Name"
                      //onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    required
                      type="email"
                      name="email"
                      value={formData.emaiil}
                        onChange={handleChange}
                      placeholder="Your Email Address"
                      //onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control
                    required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                        onChange={handleChange}
                      placeholder="Your Phone Number"
                      //onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="tel"
                      name="rooms"
                      value={formData.rooms}
                        onChange={handleChange}
                      placeholder="Enter Number of Rooms"
                      //onChange={(e) => setRooms(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="pax"
                      value={formData.pax}
                        onChange={handleChange}
                      placeholder="Enter Number of Pax"
                      //onChange={(e) => setPax(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="child"
                      value={formData.child}
                        onChange={handleChange}
                      placeholder="Enter Number of Child"
                      //onChange={(e) => setChild(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    id="book-btn"
                    variant="primary"
                    type="submit"
                    style={{ background: "#fc4c03", borderColor: "#fc4c03" }}
                  >
                    Book Now
                  </Button>
                </Form>
                  )}
          </div>
        </Col>
        <Col sm="12" md="9" lg="8">
          <div class="d-none card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs" id="tabs">
                <li class="nav-item">
                  <a class="nav-link" href="#rates" data-toggle="tab" style={{color:"#fc4c03",fontWeight:"bold",fontSize:"22px"}}>
                    Rates
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body ">
              <div class="tab-content">
                <div class="tab-pane " id="rates">
                  <div className=" main-table">
                  
                    <table class=" table-rates table outbound-rate-table-body">
                      <thead>
                        <tr>
                          <th scope="col">Destnation</th>
                          <th scope="col">Hotel</th>
                          <th scope="col">Single</th>
                          <th scope="col">Double</th>
                          <th scope="col">Triple</th>
                          <th scope="col">Child</th>
                        </tr>
                      </thead>
                      <tbody>
                        {outboundDetails?.PackhotelsAndPrices?.map((pack) => {
                          return (
                            <tr>
                              <th scope="row">
                                <th
                                  className="d-block"
                                  style={{
                                    height: "40px",
                                    borderBottom: "1px solid #bebebe",
                                  }}
                                >
                                  {pack.hotel[0].hotelLocation}
                                </th>
                                <th style={{ height: "40px" }}>
                                  {pack.hotel[1].hotelLocation}
                                </th>
                              </th>
                              <th scope="row">
                                <th
                                  style={{
                                    height: "40px",
                                    borderBottom: "1px solid #bebebe",
                                  }}
                                  className="d-block"
                                >
                                  {pack.hotel[0].hotelName}
                                </th>
                                <th style={{ height: "40px" }}>
                                  {pack.hotel[1].hotelName}
                                </th>
                              </th>
                              <td>{pack.single}  EGP</td>
                              <td>{pack.double} EGP</td>
                              <td>{pack.triple} EGP</td>
                              <td>{pack.child} EGP</td>
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
                    Itenary
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#Package-Includes"
                    data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}
                  >
                    Package Include
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#Package-Excludes"
                    data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}
                  >
                    Package Exclude
                  </a>
                </li>

                {/* <li class="nav-item">
                  <a class="nav-link" href="#fly-details" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                    Fly details
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Terms & Conditions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cancelation-policy" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                  Cancelation Policy 
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#visa" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Visa
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#notes" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Notes
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body ">
              <div class="tab-content">
                <div class="tab-pane active" id="cancellation-polices">
                  <Accordion
                    className="itenary-accordion"
                    defaultActiveKey="0"
                  >
                    {outboundDetails?.itenary?.map((day, index) => {
                      return (
                        <Accordion.Item eventKey={`${index + 1}`}>
                          <Accordion.Header>
                            Day {index + 1} {"  "}
                            &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                            &nbsp;{"  "}
                            {day.dayTitle}
                          </Accordion.Header>
                          <Accordion.Body style={{ color: "#000" }}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: day?.dayContent,
                              }}
                            />
                            {
                            
                            day?.optTour !== "<p><br></p>" ? 
                            
                            <>

                            <h4 style={{fontWeight:"bold",color:"red"}}>Optional Tours</h4>
                            <div
                          style={{marginTop:"10px"}}
                            dangerouslySetInnerHTML={{
                              __html: day?.optTour,
                            }}
                          />
                            </> : ""
                          }

                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
                <div class="tab-pane " id="Package-Includes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packInclude,
                    }}
                  />
                </div>
                <div class="tab-pane" id="Package-Excludes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packExclude,
                    }}
                  />
                </div>
                <div class="tab-pane" id="notes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.notes,
                    }}
                  />
                </div>
                <div class="tab-pane" id="visa">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.visa,
                    }}
                  />
                </div>
                {/* <div class="tab-pane" id="fly-details">
                  <img src={outboundDetails?.flyDetails[0].img_url} style={{maxWidth:"100%"}} alt="flyImage" />
                </div> */}
                <div class="tab-pane" id="terms">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.termsAndConditions,
                    }}
                  />
                </div>
                <div class="tab-pane" id="cancelation-policy">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.canceltion,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div> : <FullProgress />
    }
      </Container>
  );
}

export default OutboundTempDetails;

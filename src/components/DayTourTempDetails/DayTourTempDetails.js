import React, { useState, useEffect } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./DayTourTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { API_URL, MONGODB_URL } from "../../envData";
import {Progress} from '../../progressComponent'
function DayTourTempDetails() {
  const [dayTourDetails, setDayTourDetails] = useState();
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);
  const [child,setChild] = useState(0);


  const [images, setImages] = useState([]);
  const { id } = useParams();
  async function getDomesticById() {
    try {
      // const response = await fetch(`${API_URL}/dayTour/${id}`);
      const response = await fetch(`${MONGODB_URL}/getDayTourDetails/${id}`);
      const data = await response.json();
      console.log(data);
      setDayTourDetails(data);
      setTitle(data?.title)
      getImages();
    } catch (e) {
      console.log(e);
    }
  }
  const getImages = async () => {
    setImages(dayTourDetails?.images);
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

    var phonenumber = "+201556040246";

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
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4 style={{ color: "#fc4c03" }}>{dayTourDetails?.title}</h4>
                <h5 >
                  {dayTourDetails?.description}
                </h5>
                <h5 >
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  {dayTourDetails?.destination}
                </h5>
                <h5>{dayTourDetails?.box6}</h5>
                <h5>{dayTourDetails?.box7}</h5>
                <h5>{dayTourDetails?.box8}</h5>
                <h5>{dayTourDetails?.box9}</h5>
                <h5>{dayTourDetails?.box10}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {dayTourDetails?.images?.length >= 1
                ? dayTourDetails?.images?.map((img) => {
                    console.log("images is loaded");
                    return (
                      <Carousel.Item key={Math.random()}>
                        <img src={img.img_url} alt="..." />
                      </Carousel.Item>
                    );
                  })
                : <Progress />}
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
                          
                          value={dayTourDetails?.title}
                          style={{display:"none"}}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
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
                        <Form.Control
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
                      Rates
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
                            <th scope="col">Persons</th>
                            <th scope="col">Car Type</th>
                            <th scope="col">
                              Const per person <br /> per pax
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dayTourDetails?.rates?.map((rate) => {
                            return (
                              <tr>
                                <th scope="row">{rate.persons}</th>
                                <td>{rate.carType}</td>
                                <td>{rate.costPerPerson}</td>
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
                    <a class="nav-link" href="#details" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Details
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      terms & Conditions
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
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="itenary">
                    <h4>{dayTourDetails?.itenary[0].dayTitle}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.itenary[0].dayContent,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="details">
                    <h4>Details</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.description,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="terms">
                    <h4>Terms and Conditions</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.termsAndConditions,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="cancellation-polices">
                    <h5>Cancelation</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dayTourDetails?.cancelationPolices,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default DayTourTempDetails;

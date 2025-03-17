import React, { useState, useEffect } from "react";
import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import Carousell from "../Carousell/Carousell";
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL, MONGODB_URL} from '../../envData'
import {Progress} from '../../progressComponent'
import FullProgress from "../../FullProgress";
function HajjAndOmrahDetails() {
  const { id } = useParams();
  const [hajjOmrah, setHajjOmrah] = useState({value :""});
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);


  const getHajjOmrahById = async () => {
    const response = await axios.get(`${MONGODB_URL}/getHajjOmrahDetails/${id}`);
    const data = await response.data;
    setTitle(data?.title)
    // console.log("====================================");
    // console.log(data);
    // console.log("====================================");
    setHajjOmrah(data);
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
    // console.log(title,name,email,phone,rooms,pax);

    var phonenumber = "+201100996929";

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Title :* "+title+"%0a"
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone:* "+phone+"%0a"
    +"*Rooms:* "+rooms+"%0a"
    +"*Pax:* "+pax+"%0a"
    +"%0a%0a"
    +"Hello CIT Travel";

    window.open(url, '_blank').focus();
  };

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    getHajjOmrahById();
  }, []);
  return (
    <Container dir="rtl">
      {
        hajjOmrah.value != "" ?  <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4 style={{ color: "#fc4c03" }}> {hajjOmrah?.title}</h4>
                <h4> المدة : {hajjOmrah?.duration}</h4>
                <h4>{hajjOmrah?.box6}</h4>
                <h4>{hajjOmrah?.box7}</h4>
                <h4>{hajjOmrah?.box8}</h4>
                <h4>{hajjOmrah?.box9}</h4>
                <h4>{hajjOmrah?.box10}</h4>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
          <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
              {hajjOmrah?.images?.length >= 1 ? (
                hajjOmrah?.images?.map((img) => {
                  // console.log("images is loaded");
                  return (
                    <Carousel.Item key={Math.random()}>
                      <img src={img.img_url} alt="..." />
                    </Carousel.Item>
                  );
                })
              ) : (
                <Progress />
              )}
            </Carousel>
          </Col>
        </Row>
        <Row className="my-5">
          <Col sm="12" md="9" lg="8">
            <div class="card text-center">
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
                      <table class="table outbound-rate-table-body">
                        <thead>
                          <tr>
                            <th scope="col">المستوي</th>
                            <th scope="col">فندق المدينة</th>
                            <th scope="col">فندق مكه المكرمة</th>
                            <th scope="col">ثنائي </th>
                            <th scope="col">ثلاثي </th>
                            <th scope="col">رباعي </th>
                          </tr>
                        </thead>
                        <tbody>
                          {hajjOmrah?.PackhotelsAndPrices?.map((pack) => {
                            return (
                              <tr>
                                <th scope="row">{pack?.rate}</th>
                                <th scope="row">{pack.hotel[0].hotelName}</th>
                                <th scope="row">{pack.hotel[1].hotelName}</th>
                                <td>{pack.double}</td>
                                <td>{pack.triple}</td>
                                <td>{pack.Quadruple}</td>
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
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#tour-include" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      الرحلة تشمل
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#visa" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      التاشيرة
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#fly-details" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      تفاصيل الطيران
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      الشروط والاحكام
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#cancelation" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      الالغاء
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane" id="tour-include">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: hajjOmrah?.packInclude,
                      }}
                    />{" "}
                  </div>
                  <div class="tab-pane" id="visa">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: hajjOmrah?.visa,
                      }}
                    />{" "}
                  </div>
                  <div class="tab-pane" id="fly-details">
                    <img src={hajjOmrah?.flyDetails[0].img_url} style={{maxWidth:"100%"}} alt="fly-details" />
                  </div>
                  <div class="tab-pane" id="terms">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: hajjOmrah?.termsAndConditions,
                      }}
                    />{" "}
                  </div>
                  <div class="tab-pane" id="cancelation">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: hajjOmrah?.cancelation,
                      }}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" lg="4">
            <div className="book-form">
              <h2>احجز</h2>
              <Form onSubmit={sendMassage}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control required type="text" onChange={(e)=>setName(e.target.value)} placeholder="الاسم" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="الايميل" />
                </Form.Group>
                <Form.Group required className="mb-3" controlId="formBasicNumber">
                  <Form.Control type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="التليفون" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" onChange={(e)=>setRooms(e.target.value)} placeholder="عدد الغرف" />
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicName">
                  <Form.Control type="text" onChange={(e)=>setPax(e.target.value)} placeholder="عدد الافراد" />
                </Form.Group>
                <Button id="book-btn" variant="primary" type="submit">
                  احجز الان
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>:<FullProgress />
      }
     
    </Container>
  );
}

export default HajjAndOmrahDetails;

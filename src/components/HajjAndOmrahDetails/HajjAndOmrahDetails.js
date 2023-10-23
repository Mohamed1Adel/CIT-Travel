import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Carousell from "../Carousell/Carousell";
import { useParams } from "react-router-dom";
import axios from "axios";
import {API_URL, MONGODB_URL} from '../../envData'
import {Progress} from '../../progressComponent'
function HajjAndOmrahDetails() {
  const { id } = useParams();
  const [hajjOmrah, setHajjOmrah] = useState();

  const getHajjOmrahById = async () => {
    const response = await axios.get(`${MONGODB_URL}/getHajjOmrahDetails/${id}`);
    const data = await response.data;
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    setHajjOmrah(data);
  };
  useEffect(() => {
    getHajjOmrahById();
  }, []);
  return (
    <Container dir="rtl">
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4> {hajjOmrah?.title}</h4>
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
            {<Carousell /> || <Progress />}
          </Col>
        </Row>
        <Row className="my-5">
          <Col sm="12" md="9" lg="8">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab">
                      Rates
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
                      <h6>تفاصيل البرنامج</h6>
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
                    <a class="nav-link" href="#tour-include" data-toggle="tab">
                      الرحلة تشمل
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#visa" data-toggle="tab">
                      التاشيرة
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#fly-details" data-toggle="tab">
                      تفاصيل الطيران
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab">
                      الشروط والاحكام
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#cancelation" data-toggle="tab">
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
                    <img src={hajjOmrah?.flyDetails[0].img_url} alt="" />
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
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="الاسم" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="الايميل" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control type="text" placeholder="التليفون" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="عدد الغرف" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="عدد الافراد" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  احجز الان
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HajjAndOmrahDetails;

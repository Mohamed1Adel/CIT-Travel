import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Carousell from "../Carousell/Carousell";

function HajjAndOmrahDetails() {
  return (
    <Container dir="rtl">
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h3>اسم الفندق:</h3>
                <h4> طيبه جده </h4>
                <h3>موقع الفندق: </h3>
                <h4>جده</h4>
                <h4> 0 ايام / 0 ليالي</h4>
                <h3>تاريحخ الرحلة:</h3>
                <h4>25/09/1999</h4>
                <h3>عنوان الفندق:</h3>
                <h4>-------</h4>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousell />
          </Col>
        </Row>
        <Row className="my-5">
          <Col sm="12" md="9" lg="8">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a
                      class="active nav-link active"
                      href="#package"
                      data-toggle="tab"
                    >
                      الاسعار
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#tour-include" data-toggle="tab">
                      الرحلة تشمل
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#tour-not-include"
                      data-toggle="tab"
                    >
                      الرحلة لا تشمل
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#requirements" data-toggle="tab">
                      متطلبات الرحلة
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active" id="package">
                    الاسعار
                  </div>
                  <div class="tab-pane" id="tour-include">
                    الرحلة تشمل
                  </div>
                  <div class="tab-pane" id="tour-not-include">
                    الرحلة لا تشمل
                  </div>
                  <div class="tab-pane" id="requirements">
                    متطلبات الرحلة
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

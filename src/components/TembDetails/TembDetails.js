import React ,{useState,useEffect}from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TembDetails.scss";
import Carousell from "../Carousell/Carousell";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import {domesticsData} from "../../data/Domesticsdata"
function TembDetails() {
  const  {id} = useParams()
  
  const [state , setState] = useState("")

  useEffect(()=>{
   const e =  domesticsData.filter((item)=>{
     return item.id === id
    });
    setState(e[0])
  },[id])
  console.log(state);
  // console.log(id);
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h3>Hotel Name:</h3>
                <h4>{state.title}</h4>
                <h3>Destination</h3>
                <h4>{state.location}</h4>
                <h4> 0 Days / 0 Nights</h4>
                <h3>Dates:</h3>
                <h4>25/0h49/1999</h4>
                <h3>Upon request</h3>
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
                      Package
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#hotels-rates" data-toggle="tab">
                      Hotels & Rates
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#optional-tour" data-toggle="tab">
                      Optional tours
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#children" data-toggle="tab">
                      Children Policy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab">
                      terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active" id="package">
                    package
                  </div>
                  <div class="tab-pane" id="hotels-rates">
                    Hotels
                  </div>
                  <div class="tab-pane" id="optional-tour">
                    optional-tour
                  </div>
                  <div class="tab-pane" id="children">
                    children
                  </div>
                  <div class="tab-pane" id="terms">
                    terms
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" lg="4">
            <div className="book-form">
              <h2>Book Now</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control type="text" placeholder="Your Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Number of Rooms"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Number of Pax" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Number of Child"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Book Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default TembDetails;

import React from "react";
import "./Footer.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLogo from "../../logos/main-logo.png";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <img src={MainLogo} style={{ width: "250px" }} alt="main logo" />
            {/* <h3>Let's Socialize</h3> */}
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon
                      className="face-icon"
                      icon={faSquareFacebook}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FontAwesomeIcon
                      className="insta-icon"
                      icon={faSquareInstagram}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <FontAwesomeIcon
                      className="twitter-icon"
                      icon={faSquareTwitter}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <h4>Customer Support</h4>
            <h5>0000000</h5>
            <h4>
              <a href="info@cit-egypt.com">info@cit-egypt</a>
            </h4>
          </Col>
          <Col>
            <h3>Explore</h3>
            <ul className="content-links">
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>
                <a href="#"></a>
              </li> */}
              <li>
                <a href="/domestics">Domestic</a>
              </li>
              <li>
                <a href="/outbound">Outbound</a>
              </li>
              <li>
                <a href="/hajjAndOmrah">Hajj & Umrah</a>
              </li>
              <li>
                <a href="/transportation">Transportation</a>
              </li>
              <li>
                <a href="/about">C.I.T Travel Egypt</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>Send Email To Out Team</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                {/* <Form.Label>Enter Your Name</Form.Label> */}
                <Form.Control type="text" placeholder="Enter Your Name" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter Your email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
{/* 
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

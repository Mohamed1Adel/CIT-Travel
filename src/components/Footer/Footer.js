import React from "react";
import "./Footer.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLogo from "../../logos/white-logo.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faSquareFacebook,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    
    <div
      className="footer"
      style={{ backgroundImage: "url(../../Footer-3.jpg)" }}
    >
      <Container>
        <Row>
          <Col class="col-12 col-lg-3" style={{ border: "none" }}>
            <img src={MainLogo} style={{ width: "250px" }} alt="main logo" />
            {/* <h3>Let's Socialize</h3> */}
            
            <div className="social-icons">
              <ul style={{gap:"0px" ,padding:"5px",border:"1px solid #fff",borderRadius:"10px",margin:"0 auto",marginTop:"10px",marginLeft:"20px"}}>
                <li>
                  <a
                    href="https://www.facebook.com/CIT.TravelEgypt"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="face-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cittravel/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="insta-icon"
                      icon={faInstagram}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@CIT.Travel">
                    <FontAwesomeIcon
                      className="youtube-icon"
                      icon={faYoutube}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://eg.linkedin.com/in/cit-travel-183444135">
                    <FontAwesomeIcon
                      className="linkedin-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div style={{paddingLeft:"20px"}}>
            <h5></h5>
          
          
          <a href="tel:0223493333">0223493333</a>
          <br />
          <a href="tel:+201100918406">01100918406</a>

          <h6>
            <a
              href="mailto:info@cit-egypt.com
"
            >
              info@cit-egypt.com
            </a>
          </h6>
          

          </div>
        </Col>
        <Col class="col-12 col-lg-3" style={{ border: "none" }}>
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
              <a href="/nileCruise">Nile Cruises</a>
            </li>
            <li>
              <a href="/historicalTrips">Historical Trips</a>
            </li>
            <li>
              <a href="/transportation">Transportation</a>
            </li>
           
            
          </ul>
        
        </Col>

          <Col class="col-12 col-lg-3" style={{ border: "none" }}>
            {/* <h4 style={{textAlign:"center"}}>Payment Methods</h4> */}
            <h5 className="m-0" style={{paddingTop:"5px"}}>Payment Methods</h5>
           
            <Row className="mt-2 f-t" style={{border:"1px solid #fff",padding:"0px",borderRadius:"10px"}}>
<Col className="col-12 col-lg-3 border-0 px-0">
<div style={{ border: "none" }}>
                <img
                  src={require("../../images/payment-methods/01.png")}
                  style={{
                    width: "70px",
                    // height: "70px",
                    border: "none",
                    objectFit: "",
                    padding: "5px",
                    marginTop:"-10px"
                  }}
                  alt="..."
                />
              </div>
          </Col>
<Col className="col-12 col-lg-3 border-0 d-flex align-items-center" >
<div style={{ border: "none" }}>
                <img
                  src={require("../../images/payment-methods/mas.png")}
                  style={{
                    width: "55px",
                    //  height:"80px",
                    // height: "40px",
                    border: "none",
                    objectFit: "",
                    padding: "5px",
                    // marginTop:"15px"
                  }}
                  alt="..."
                />
              </div>
          </Col>
          <Col className="col-12 col-lg-3 border-0 d-flex align-items-center" style={{height:"50px"}}>
<div style={{ border: "none" }}>
                <img
                  src={require("../../images/payment-methods/04.webp")}
                  style={{
                    width: "55px",
                    height:"30px",
                    // height: "25px",
                    border: "none",
                    objectFit: "",
                    padding: "5px",
                    marginTop:"0px"
                  }}
                  alt="..."
                />
              </div>
          </Col>
          <Col className="col-12 col-lg-3 border-0">
<div style={{ border: "none" }}>
                <img
                  src={require("../../images/payment-methods/03.png")}
                  style={{
                    width: "65px",
                    // height:"100px",
                    height: "65px",
                    border: "none",
                    objectFit: "",
                    padding: "5px",
                    marginTop:"-8px"
                  }}
                  alt="..."
                />
              </div>
          </Col>

</Row>

            <div>
           
            </div>
          </Col>
          <Col class="col-12 col-lg-3" style={{ border: "none" }}>
            <h5>SIGN UP FOR OFFERS</h5>
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >

              <Form.Group className="mb-4" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter Your email"
                  style={{ width: "250px" }}
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
             
              <Button
                variant="primary"
                type="submit"
                id="book-btn"
                style={{ width: "150px" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
         
          
          <Col className="col-12 col-lg-6 border-0">
                   <img src={require("../../images/f/iata.png")} width="100px" style={{borderRadius:"5px"}}/>
           <img src={require("../../images/f/per.png")}  width="100px" height="60px" style={{borderRadius:"5px",margin:"5px"}}/>
        <img src={require("../../images/f/air.png")}  width="100px" height="60px" style={{borderRadius:"5px",margin:"5px"}}/>

          </Col>
          <Col className="col-12 col-lg-6 border-0">
          
          </Col>
       
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

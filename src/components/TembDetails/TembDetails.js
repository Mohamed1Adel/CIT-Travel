import React, { useState, useEffect } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./TembDetails.scss";
// import Carousell from "../Carousell/Carousell";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function TembDetails() {
  // console.log(domestic);

  
  const [itemDetails, setItemDetails] = useState({value:""});
  const [images, setImages] = useState([]);
  const { id } = useParams(0);

  const url = `http://localhost:9000/domestics/${id}`
  async function getDomesticById() {
    try {

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setItemDetails(data)
      // await fetch(url)
      //   .then((res) => res.json())
      //   .then((res) => setItemDetails(res))
        
      
      //   console.log(itemDetails);

      // const imgs = itemDetails.images.map((img) => {
      //   console.log("images is loaded");
      //   return (
      //     <Carousel.Item key={Math.random()}>
      //       <img src={img.data_url} alt="..." />
      //     </Carousel.Item>
      //   );
      // });

      // console.log("imgs is",imgs);

      getImages();
    } catch (e) {
      console.log(e);
    }
  };

  const getImages = async () => {
    setImages(itemDetails.images);
  };

  let star = <FontAwesomeIcon className="star" icon={faStar} />;
  let rateStars = [];
  for (let i = 1; i <= Number(itemDetails.stars); i++) {
    // console.log(domestic.domestic.stars);
    rateStars.push(star);
  }



  useEffect(() => {
    getDomesticById();
  }, []);


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // console.log(state);
  // console.log(id);
  return (
    <Container>
      <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box">
              <ul>
                <h4>Hotel Name:</h4>
                <h5>
                  {itemDetails.title}
                  <br />{" "}
                  {
                    <>
                                  {rateStars.map((star) => {
              return star;
            })}
                    </>
                  }{" "}
                </h5>
                <h5>Location : Hurghada</h5>
                <h4>Duration Period:</h4>
                <h5>from {itemDetails.startDate}</h5>
                <h5> to {itemDetails.endDate}</h5>
              </ul>
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {
                itemDetails.images?.length >= 1
                  ? itemDetails.images?.map((img) => {
                      console.log("images is loaded");
                      return (
                        <Carousel.Item key={Math.random()}>
                          <img src={img.img_url} alt="..." />
                        </Carousel.Item>
                      );
                    }) : <h2>not found</h2>
              }
            </Carousel>
          </Col>
        </Row>
        <Row className="my-5">
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
                      <h6>cost room per night</h6>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">room type</th>
                            <th scope="col">duration</th>
                            <th scope="col">from</th>
                            <th scope="col">to</th>
                            <th scope="col">single</th>
                            <th scope="col">double</th>
                            <th scope="col">triple</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          <tr>
                            <th scope="row">Standard room</th>
                            <td>summer</td>
                            <td>{itemDetails.startDate}</td>
                            <td>{itemDetails.endDate}</td>
                            <td>{itemDetails.single}</td>
                            <td>{itemDetails.double}</td>
                            <td>{itemDetails.triple}</td>
                          </tr>
                          {/* <tr>
                            <th scope="row">clasic room lagon</th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>15/10/2023</td>
                          </tr>
                          <tr>
                            <th scope="row">delux room</th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>15/10/2023</td>
                          </tr>
                          <tr>
                            <th scope="row">delux room lagon </th>
                            <td>summer</td>
                            <td>20/09/2023</td>
                            <td>@15/10/2023</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                    {/* <div className="trips-tables d-flex">
                      <div className="t">
                        <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">single room</th>
                              <th scope="col">double room</th>
                              <th scope="col">triple room</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">9,260</th>
                              <td>5,790</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">10,080</th>
                              <td>6,300</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">9,600</th>
                              <td>5,990</td>
                              <td>5,890</td>
                            </tr>
                            <tr>
                              <th scope="row">10,320</th>
                              <td>6,440</td>
                              <td>6,340</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="t">
                        <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">single room</th>
                              <th scope="col">double room</th>
                              <th scope="col">triple room</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">12,350</th>
                              <td>7,720</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">13,440</th>
                              <td>8,400</td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <th scope="row">12,800</th>
                              <td>7,990</td>
                              <td>7,850</td>
                            </tr>
                            <tr>
                              <th scope="row">13,760</th>
                              <td>8,590</td>
                              <td>8,450</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}
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
                      data-toggle="tab"
                    >
                      Cancellation Polices
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
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#document-required"
                      data-toggle="tab"
                    >
                      Required Docs
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="cancellation-polices">
                    <h4>Cancelation & No Show Plocies:</h4>
                    {itemDetails.cancillation}
                    <div dangerouslySetInnerHTML={{ __html: itemDetails.cancillation }} />
                  </div>
                  <div class="tab-pane" id="children">
                    <h4>Children Polices : </h4>

                    <div dangerouslySetInnerHTML={{ __html: itemDetails.childrenPolicis }} />
                  </div>
                  <div class="tab-pane" id="terms">
                    <h4>Terms and Conditions</h4>
                    <div dangerouslySetInnerHTML={{ __html: itemDetails.termsAndConditions }} />
  
                  </div>
                  <div class="tab-pane" id="document-required">
                    <h5>Documents required at the hotel:-</h5>
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

export default TembDetails;
// import React ,{useState,useEffect}from "react";
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

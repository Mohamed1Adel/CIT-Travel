import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import axios from "axios";
import DayTourTemp from "../DayTourTemp/DayTourTemp";
import { Progress } from "../../progressComponent";
import {MONGODB_URL} from '../../envData'
import FullProgress from "../../FullProgress";
import image from "../../images/dayTour/Alex-3.jpg";
import "./DayTour.scss";

function DayTour() {
  const [dayTours, setDayTours] = useState();

  const getAllDayTours = async () => {
    try {
      // const response = await axios.get("http://localhost:9000/dayTour");
      const response = await axios.get(`${MONGODB_URL}/getAllDayTours`);
      const data = response.data;
      setDayTours(data);
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };

  useEffect(() => {
    getAllDayTours();
    console.log("====================================");
    console.log(dayTours);
    console.log("====================================");
  }, []);
  return (
<>
<div class="Banner" style={{backgroundImage:`url(${image})`}}>

</div>
<div class="custom-opacity">


    <Zoom >
        {/* <img  src={require("../../images/dayTour/Alex-3.jpg")} /> */}

<div class="container-fluid" style={{backgroundColor:"#fff"}}>
<Container style={{marginTop:"90vh",paddingTop:"50px"}} className="day-tour">
        {/* <h3 className="text-center main-heading">Day Tour</h3> */}
        {/* <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4> */}
              <h6 style={{lineHeight:"1.5"}}>Welcome to the land of pharaohs, Pyramids, and breathtaking destinations, Egypt. <br />
Egypt Day Trips should be on your to-do list if you plan to visit Egypt. <br />
Egypt day tour provides a convenient way to explore Egypt’s stunning beauty and culture in a limited time.<br /> With many options available, you can choose from a range of Egypt day tours, including excursions to Egypt, Aswan tours, Luxor day tours, and Cairo sightseeing tours.<br />
C.I.T Travel Egypt offered the best Egypt Day Tours to the most famous cities in Egypt to discover and explore the most famous Egypt tourist attractions.<br /> Our fantastic day tours in Egypt can be found all over Egypt, 
</h6>
        <Row>
          {dayTours?.length >= 1 ? (
            dayTours?.map((dayTour) => {
              return (
                <Col sm="12" md="6" lg="4" >
                  <DayTourTemp dayTour={dayTour} />
                </Col>
              );
            })
          ) : (
            <FullProgress />
          )}
        </Row>
      </Container>
</div>


    </Zoom>
    </div>
      </>
  );
}

export default DayTour;

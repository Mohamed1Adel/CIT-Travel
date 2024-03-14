import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import axios from "axios";
import { MONGODB_URL } from "../../envData";

import FullProgress from "../../FullProgress";
import image from "../../images/historical/image.jpeg"
function HistoricalTrips() {
  const [programs, setPrograms] = useState("");

  const getAllPrograms = async () => {
    try {
      // const response = await axios.get(`${API_URL}/programs`);
      const response = await axios.get(`${MONGODB_URL}/getAllProgram`);
      const data = await response.data;
      console.log(data);
      setPrograms(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllPrograms();
  }, []);

  return (

    <>
<div className="Banner" style={{backgroundImage:`url(${image})`}}></div>

    <div class="custom-opacity">
    <Zoom>
    <div class="historical container-fluid" style={{marginTop:"90vh",paddingTop:"50px",backgroundColor:"#fff"}}>
      <Container>


        <Row className="domestic-section">
        <h3 className="text-center main-heading fw-bold">Historical Trips</h3>
        {/* <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4> */}
              <h6 style={{lineHeight:"1.5"}}>Egypt is a land of wonder, a place where ancient history and modern culture come together to create a unique and unforgettable experience.<br /> For those who are fascinated by the mysteries of the past, there is no better destination than Egypt.<br /> With its ancient temples, pyramids, and tombs, the country is steeped in history and offers a glimpse into the lives of the people who lived there thousands of years ago.<br />
  
  But Egypt is much more than just the Nile.<br /> It is a country of vibrant, bustling cities, each with its unique character and charm. Cairo, the capital, is a bustling metropolis that is home to some of the most famous landmarks in the world, including the Pyramids of Giza, the Sphinx, and the Egyptian Museum.<br /> But it's also a city that is full of life, with lively markets, delicious food, and friendly people.<br />
   
  Other cities in Egypt offer a different experience.<br /> Luxor, for example, is a city that is steeped in history and is home to some of the most impressive temples and tombs in the country.<br /> Aswan, on the other hand, is a more laid-back, relaxed city that is perfect for those who want to escape the hustle and bustle of Cairo.<br />
  </h6>
          {programs?.length >= 1 ? (
            programs?.map((program) => {
              return (
                <Col sm="12" md="6" lg="4" xxl="3">
                  <HistorecalTemp program={program} />
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

export default HistoricalTrips;

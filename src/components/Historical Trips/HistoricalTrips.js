import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
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
        <h3 className="text-center main-heading">HistoricalTrips</h3>
        <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4>
              <p>OTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPES</p>
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

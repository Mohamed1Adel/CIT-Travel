import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Temb from "../Temb/Temb";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
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
    <Zoom>
      <Container style={{ marginTop: "50px" }} className="historical">
        <h3 className="text-center main-heading">HistoricalTrips</h3>
        <Row>
          {programs?.length >= 1 ? (
            programs?.map((program) => {
              return (
                <Col sm="12" md="6" lg="4" xxl="3">
                  <HistorecalTemp program={program} />
                </Col>
              );
            })
          ) : (
            <Progress />
          )}
        </Row>
      </Container>
    </Zoom>
  );
}

export default HistoricalTrips;

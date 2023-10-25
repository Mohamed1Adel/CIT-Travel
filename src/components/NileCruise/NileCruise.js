import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
function NileCruise() {
  const [nileCruises, setNileCruises] = useState({});
  const getAllNileCruises = async () => {
    try {
      // const response = await axios.get(`${API_URL}/nileCruise`);
      const response = await axios.get(`${MONGODB_URL}/getAllNileCruise`);
      const data = await response.data;
      console.log("====================================");
      console.log(data.id);
      console.log("====================================");
      setNileCruises(data);
    } catch (e) {
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    }
  };
  useEffect(() => {
    getAllNileCruises();
  });
  return (
    <Zoom>
      <Container style={{ marginTop: "50px" }} className="nile-cruise">
        <h3 className="text-center main-heading">Nile Cruise</h3>
        <Row>
          {nileCruises?.length >= 1 ? (
            nileCruises?.map((nileCruise) => {
              return (
                <Col sm="12" md="6" lg="4">
                  <NileCruiseTemp nileCruise={nileCruise} />
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

export default NileCruise;

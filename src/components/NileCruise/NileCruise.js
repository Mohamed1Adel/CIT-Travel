import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
import image from "../../images/nilecrouse/image.jpeg"
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
    <>
<div class="Banner" style={{backgroundImage:`url(${image})`}}></div>

    <div className="custom-opacity">
    <Zoom>
    <div class="nile-cruise container-fluid" style={{marginTop:"90vh",paddingTop:"50px",backgroundColor:"#fff"}}>
      <Container   >
        <h3 className="text-center main-heading">Nile Cruise</h3>
        <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>OTHER POPULAR HOLIDAY TYPES</h4>
              <p>OTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPESOTHER POPULAR HOLIDAY TYPES</p>
        <Row>
          {nileCruises?.length >= 1 ? (
            nileCruises?.map((nileCruise) => {
              return (
                <Col sm="12" md="6" lg="4" xxl="3">
                  <NileCruiseTemp nileCruise={nileCruise} />
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

export default NileCruise;

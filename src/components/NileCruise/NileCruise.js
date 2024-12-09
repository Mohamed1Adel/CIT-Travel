import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import axios from "axios";
import { API_URL, MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
// import image from "../../images/nilecrouse/image.jpeg"
import image from "../../images/nilecrouse/samiramis.jpg"
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
  },[]);
  return (
    <>
<div class="Banner" style={{backgroundImage:`url(${image})`}}></div>

    <div className="custom-opacity">
    <Zoom>
    <div class="nile-cruise container-fluid" style={{marginTop:"90vh",paddingTop:"50px",backgroundColor:"#fff"}}>
      <Container style={{minHeight:"100vh"}}  >
        <h3 className="text-center main-heading">Nile Cruise</h3>
        <h4 style={{color:"",marginTop:"",fontWeight:"bold",}}>Discover the Magic of Egypt Nile Cruise Packages: Unforgettable Journeys on the Nile</h4>
              <h6 style={{lineHeight:"1.5"}}>Egypt has a long history that goes back far beyond the written words, the stories of the Gods, the monuments, and the Nile River which had made the famous culture. <br /> The river was known as “The Gift of Life“ which blessed the land with life.<br /> Sailing on the Nile is more than a relaxing five stars deluxe cruise; it is an inspiring trip into the fascinating past through a very dazzling present and a real opportunity of a lifetime.<br /> The life time experience to rome in one of the most perstigeous cruises The influence of the river on the Egyptian culture did not only provide a constant source of life-giving water but also create the fertile lands that fed the growth of this unique culture.</h6>
        <Row>
          {nileCruises?.length >= 1 ? (
            nileCruises?.map((nileCruise) => {
               
              return (
                nileCruise.title != "Aswan - Cairo / Long Cruise"   ?
                 nileCruise.title != "Luxor - Cairo / Long Cruise " ?
                 nileCruise._id != "66d09e64b9c6a200571c2d77" ?
                 nileCruise._id != "6741bccc34b3910041eb1c97" ?
                 nileCruise._id != "6741ed0582fe9fbf3d960113" ?
                 nileCruise._id != "6743008be370124078606370" ?
                 nileCruise.egypt_cruise != true ?
                   <Col sm="12" md="6" lg="4" xxl="4">
                <NileCruiseTemp nileCruise={nileCruise} />
              </Col>:
              "" :
              "" :
              "" :
              "" :
              "" :
              "" :
               ""
                
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

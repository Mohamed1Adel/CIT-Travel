import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoricalTrips from "../Historical Trips/HistoricalTrips";
import Outbound from "../Outbound/Outbound";
import Domestic from "../Domestic/Domestic";
import Temb from "../Temb/Temb";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import OutboundTemp from "../OutboundTemp/OutboundTemp";
import { Progress } from "../../progressComponent";
import './MostPopular.scss'
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";

function MostPopular() {
  const [domestic, setDomestic] = useState();
  const [historical, setHistorical] = useState();
  const [outbounds, setOutbound] = useState();
  const [nileCruise, setNileCruise] = useState();
  const [oneCrouseDatas, setOneCrouseData] = useState();
  const [hotDeals, setHotDeals] = useState([]);

  // console.log(hotDeals);
  const getDomestic = async () => {
    try {
      const oneCrouse = await axios.get(`${MONGODB_URL}/getAllNileCruise`);
      const oneCrouseData = oneCrouse.data;
      // console.log("====================================");
      const filtereOneCrouseData = oneCrouseData.filter((item) => 
        (item._id === "6741e96682fe9fbf3d95ffe1")
      );
      setOneCrouseData(filtereOneCrouseData);
      const response = await axios.get(`${MONGODB_URL}/getAllDomestics`);
      const data = response.data;
      // console.log("====================================");
      const filteredData = data.filter((item) => 
        ( 
         item._id === "666710ee6ecff983ba07889d" ||  
         item._id === "6746f5bfa685f69b8545f83f")
      );
      
      if (filteredData.length >= 3) {
        const temp = filteredData[1];
        filteredData[1] = filteredData[2];
        filteredData[2] = temp;
      }
      
      setDomestic(filteredData);
      
      // console.log("====================================");
    } catch (e) {
      // console.log("====================================");
      // console.log(e);
      // console.log("====================================");
    }
  };
  const getHistoracal = async () => {
    try {
      const response = await axios.get(`${MONGODB_URL}/getAllProgram`);
      const data = response.data;
      // console.log("====================================");
      setHistorical(data.slice(0, 3));
      // console.log("====================================");
    } catch (e) {
      // console.log("====================================");
      // console.log(e);
      // console.log("====================================");
    }
  };
  const getOutbound = async () => {
    try {
      const response = await axios.get(`${MONGODB_URL}/getAllOutbound`);
      const data = response.data;
      const filteredData = data.filter((item) => 
        ( 
         item._id === "66ea9ab5ad9141661eaa03fd" ||  
         item._id === "670bd406b8b4ef3f8a29df0e" ||  
         item._id === "66d9c892ebca084e99b00751")
      );
      // console.log("====================================");
      setOutbound(filteredData);
      // console.log("====================================");
    } catch (e) {
      // console.log("====================================");
      // console.log(e);
      // console.log("====================================");
    }
  };
  const getNileCruises = async () => {
    try {
      const response = await axios.get(`${MONGODB_URL}/getAllNileCruise`);
      const data = response.data;
      // console.log("====================================");
      setNileCruise(data.reverse().slice(0, 1));
      // console.log("====================================");
    } catch (e) {
      // console.log("====================================");
      // console.log(e);
      // console.log("====================================");
    }
  };
  const getHotDeals = () => {
    try{
      const deals = domestic?.filter((item) => item.hotOffer === true);
      // console.log(deals);
    }catch(e){
      // console.log(e);
    }

  };

  useEffect(() => {
    getDomestic();
    getHistoracal();
    getOutbound();
    getHotDeals();
    getNileCruises();
    // console.log(domestic);
    // // console.log(historical);
    // console.log(outbounds);
  }, []);

  return (
    <div style={{ marginTop: "40px" }} className="most-popular">
      <Row>
        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box "
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <h1 className="text-center main-heading">Historical Trips</h1>
          {historical?.length >= 1 ? (
            historical?.map((program) => {
              return <HistorecalTemp program={program} />;
            })
          ) : (
            <Progress />
          )}
          {/* {nileCruise?.length >= 1 ? (
            nileCruise?.map((n) => {
              return (
                n.title !== "Aswan - Cairo / Long Cruise"   ? n.title !== "Luxor - Cairo / Long Cruise " ?  
                <NileCruiseTemp nileCruise={n} />
              :"" : ""
                
              );
            })
          ) : (
            ''
          )} */}
        </Col>

        {/* <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box "
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <h1 className="text-center main-heading">Nile Cruise</h1>
          {nileCruise?.length >= 1 ? (
            nileCruise?.map((n) => {
              return (
                n.title !== "Aswan - Cairo / Long Cruise"   ? n.title !== "Luxor - Cairo / Long Cruise " ?  
                <NileCruiseTemp nileCruise={n} />
              :"" : ""
                
              );
            })
          ) : (
            <Progress />
          )}
        </Col> */}
        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box "
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <h1 className="text-center main-heading">Outbound</h1>
          {outbounds?.length >= 1 ? (
            outbounds?.map((outbound) => {
              return <OutboundTemp outbound={outbound} />;
            })
          ) : (
            <Progress />
          )}
        </Col>

        <Col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          className="box "
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <h1 className="text-center main-heading">Domestic</h1>
          {/* {domestic?.length >= 1 ? (
            domestic?.map((item) => {

             return <Temb item={item} />

            })
          ) : (
            <Progress />
          )} */}
          {
          
          oneCrouseDatas?.length >= 1 ? (
            oneCrouseDatas?.map((item) => {

          return <NileCruiseTemp nileCruise={item}/>

  

            })
          ) : (
            ''
         )
        
        }
          {
          
          domestic?.length >= 1 ? (
            domestic?.map((item) => {

        return <Temb item={item} />

  

            })
          ) : (
            <Progress />
         )
        
        }
        </Col>
      </Row>
    </div>
  );
}

export default MostPopular;

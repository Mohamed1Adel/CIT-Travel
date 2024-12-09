import React,{useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./NileCruiseTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
function NileCruiseTemp(nileCruise) {
  console.log({ nileCruise });

        // State to hold the fetched data
        const [dataImg, setDataImg] = useState([]);
        // State to hold loading state
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Fetch data from your PHP API
              const config = {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
              };
              const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${nileCruise?.nileCruise._id}`);
              // Set the data in state
              setDataImg(response.data);
              console.log(response.data);
              // Set loading state to false
              setLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              // Handle error if needed
            }
          };
      
          // Call the fetchData function
          fetchData();
        }, []); // Empty dependency array to ensure useEffect only runs once
    
  return (
    <Card className="hotel-card">
      <div className="card-image">
        {/* <Card.Img
          variant="top"
          src={nileCruise?.nileCruise.images[0].img_url}
        /> */}

<Card.Img variant="top" src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[0]}`} />
      </div>
      <Card.Body>
        <Card.Title>
          {nileCruise?.nileCruise.title}{" "}
        </Card.Title>
        <Card.Text>
          <h5>{nileCruise?.nileCruise.destination}</h5>
          <div className="card-desc">
            <h6>{nileCruise?.nileCruise.description}</h6>
            {/* {
              nileCruise?.nileCruise.title === "Luxor - Cairo / Long Cruise " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px"}}>Starting from <br /> 28000 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise.title === "Aswan - Cairo / Long Cruise" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px"}}>Starting from <br /> 37000 EGP </h6>: ""
            } */}
            {
              nileCruise?.nileCruise._id === "6741cde58497790efca936f0" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 7100 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise._id === "6741e0843e18d3425dfd3b5c" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 9150 EGP </h6>: ""
            }


{
  nileCruise?.nileCruise._id === "674300b7e370124078606376" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 12800 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "67430547e3701240786064bc" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 16750 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "67430793e370124078606608" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 11750 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6743244a5ebc906ebbaa1e68" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 15350 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "67431b6166b8a14ed48f3ab5" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 10700 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6743323b3b9ae284651b651a" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 13950 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6743457cb2225a75e052fb5d" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 12050 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "674447b8abe179de52a0ee52" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 15750 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741bccc34b3910041eb1c91" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 8000 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741ca3c8497790efca9337b" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 10350 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741f5131a52db6af354f301" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 9350 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741f9d61a52db6af354f785" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 12150 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741e96682fe9fbf3d95ffe1" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 6880 EGP
    </h6>
  ) : null
}

{
  nileCruise?.nileCruise._id === "6741ecad82fe9fbf3d96010c" ? (
    <h6 style={{ color: "#fc4c03", display: "block", zIndex: "999", position: "absolute", bottom: "10px", fontSize: "16px" }}>
      Starting from <br /> 8400 EGP
    </h6>
  ) : null
}

            {
              nileCruise?.nileCruise._id === "66cf0657785b59a0f6d21e9c " && nileCruise?.nileCruise.egypt_cruise === true ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 10400 EGP </h6>: ""
            }
            {/* {
              nileCruise?.nileCruise.destination === "5 Days / 4 Nights " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 475 $ </h6>: ""
            } */}
            {
              nileCruise?.nileCruise._id === "66cf2021f007f7877ba3d82b" && nileCruise?.nileCruise.egypt_cruise === true ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 13950 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise._id === "66cf0657785b59a0f6d21e9c" && nileCruise?.nileCruise.egypt_cruise === true ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 10400 EGP </h6>: ""
            }
            {/* {
              nileCruise?.nileCruise.destination === "8 Days/ 7 Nights" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 700 $ </h6>: ""
            } */}
            {
              nileCruise?.nileCruise._id === "66cdb7fe4e1c0d18a205d904" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 385 $ </h6>: ""
            }
            {
              nileCruise?.nileCruise._id === "66cdc0af1209a4b809acc3d0" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 475 $ </h6>: ""
            }
            
        {
          nileCruise?.nileCruise._id === "6745ad2aa41360fc6fbfd7b1"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4500 EGP </h6> :""
        }
         {
          nileCruise?.nileCruise._id === "6745c6ea7a6e1b7ef4640866"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4000 EGP </h6> :""
        }
         {
          nileCruise?.nileCruise._id === "6745cbcc7a6e1b7ef46409d4"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4000 EGP </h6> :""
        }
         {
          nileCruise?.nileCruise._id === "6745d749fd35046c0eaf38be"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 3200 EGP </h6> :""
        }
          </div>
          
          {}
        </Card.Text>
        <Card.Body>
        
        </Card.Body>
        <Button id="card-btn" style={{ width: "fit-content" }} variant="primary">
          <Link to={"/nileCruiseTempDetails/" + nileCruise.nileCruise._id}>
          More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NileCruiseTemp;

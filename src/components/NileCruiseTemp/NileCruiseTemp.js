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
          <h5>{nileCruise?.nileCruise.packages[0]?.packTitle}</h5>
          <div className="card-desc">
            <h6>{nileCruise?.nileCruise.description}</h6>
            {/* {
              nileCruise?.nileCruise.title === "Luxor - Cairo / Long Cruise " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px"}}>Starting from <br /> 28000 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise.title === "Aswan - Cairo / Long Cruise" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px"}}>Starting from <br /> 37000 EGP </h6>: ""
            } */}
            {
              nileCruise?.nileCruise.destination === "4 Days / 3 Nights " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 385 $ </h6>: ""
            }
            {
              nileCruise?.nileCruise.destination === "4 Days / 3 Nights" && nileCruise?.nileCruise.egypt_cruise === true ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 10400 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise.destination === "5 Days / 4 Nights " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 475 $ </h6>: ""
            }
            {
              nileCruise?.nileCruise.destination === "5 Days / 4 Nights" && nileCruise?.nileCruise.egypt_cruise === true ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 13950 EGP </h6>: ""
            }
            {
              nileCruise?.nileCruise.destination === "8 Days/ 7 Nights" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"10px",fontSize:"16px"}}>Starting from <br /> 700 $ </h6>: ""
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

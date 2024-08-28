import React , {useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./OutboundTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
function OutboundTemp({ outbound }) {
  console.log(outbound);

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
              const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${outbound?._id}`);
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
    <Card className="hotel-card" >
      <div className="card-image">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[0]}`} />
      </div>
      <Card.Body>
        <Card.Title>{outbound.title ? outbound.title : "dome"} </Card.Title>
        <Card.Text>
          <div className="rates-stars">
          </div>
          {/* <div className="row">
          <div class="col-6">
           <p className="des-card" style={{color:"rgb(252, 76, 3)"}}><FontAwesomeIcon icon={faLocationDot} /> {outbound.box6}</p>
          </div>
          </div> */}

          <div className="card-desc">
            <h6>{outbound.description}</h6>
          </div>

          {}
        </Card.Text>
        <Card.Body></Card.Body>
        <Button id="card-btn" style={{ width: "fit-content" }} variant="primary">
          <Link to={`/outboundTempDetails/${outbound._id}`}>
          More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OutboundTemp;

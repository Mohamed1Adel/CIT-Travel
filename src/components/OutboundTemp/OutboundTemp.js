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
      {/* <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>From $</h6> */}
      {
          outbound.title.trim() === "Azerbaijan 6 days / 5 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 525 $  </h6> :""
      }
      {
          outbound.title.trim() === "Budapest 4 Days/3 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from<br /> 200 $  </h6> :""
      }
      {
          outbound.title.trim() === "Tbilisi 4 Days /3 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 202$  </h6> :""
      }
      {
          outbound.title.trim() === "Istanbul 5Days/ 4 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 630$  </h6> :""
      }
      {
          outbound.title.trim() === "Sri Lanka 7 Days / 6 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 978$  </h6> :""
      }
      {
          outbound.title.trim() === "Bali & Kuala 09 Days / 08 nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 480$  </h6> :""
      }
      {
          outbound.title.trim() === "Dubai 5 Days/ 4 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 245 $  </h6> :""
      }
      {
          outbound.title.trim() === "Bali & Kuala 8 Days/7 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 525 $  </h6> :""
      }
      {
          outbound.title.trim() === "BUDAPEST – VIENNA – PRAGUE"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 1970 $  </h6> :""
      }
      {
          outbound.title.trim() === "Tbilisi 4 Days / 3 Nights"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 224 $  </h6> :""
      }
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

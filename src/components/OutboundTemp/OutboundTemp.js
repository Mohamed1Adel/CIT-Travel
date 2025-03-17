import React , {useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./OutboundTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
function OutboundTemp({ outbound }) {
  // console.log(outbound);

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
              // console.log(response.data);
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
          outbound._id === "66d99de55d9473fe0508a2f6"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 525 $  </h6> :""
      }
      {
          outbound._id === "66d9c892ebca084e99b00751"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from<br /> 200 $  </h6> :""
      }
      {
          outbound._id === "66e98fe6cd35c428c034c4a0"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 630$  </h6> :""
      }
      {
          outbound._id === "66ea9ab5ad9141661eaa03fd"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 978$  </h6> :""
      }
      {
          outbound._id === "66eab5bfbe575c6436016319"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 480$  </h6> :""
      }
      {
          outbound._id === "66eae37466ae3b8dd8d0b248"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 245 $  </h6> :""
      }
      {
          outbound._id === "670bd406b8b4ef3f8a29df0e"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 525 $  </h6> :""
      }
      {
          outbound._id === "670bde56285f19ffeb93c5e7"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 1970 $  </h6> :""
      }
      {
          outbound._id === "670cf013ba4fe651682e810f"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 224 $  </h6> :""
      }
      {
          outbound._id === "67acae4633206940bb3996ee"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 260 $  </h6> :""
      }
      {
          outbound._id === "67ac8ed378d32c2ec48519d9"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 50000 EGY  </h6> :""
      }
      {
          outbound._id === "67ac7b6542b345ef56c5aa58"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 526 $  </h6> :""
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

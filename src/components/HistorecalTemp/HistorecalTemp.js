import React,{useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./HistorecalTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
function HistorecalTemp({program}) {
// console.log(program);

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
            const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${program?._id}`);
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
        {/* <Card.Img variant="top" src={program?.images[0]?.img_url} /> */}
        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[0]}`} />
      </div>
      <Card.Body>
        <Card.Title>{program?.title} </Card.Title>
        <Card.Text>
          {/* <div className="rates-stars">
            <h5>{program?.nights} Nights</h5>
          </div> */}
          <div className="card-desc">
            <h6>{program?.description}</h6>
          </div>
          {}
        </Card.Text>

        <Card.Body></Card.Body>
        
        {
              program?._id === "65d23b192eb6764f97ff219f" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 815 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d22e40825030440a589a13" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 660 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d73de5ee516e16db863bd8" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 528 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d238902eb6764f97ff2114" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 620 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d23d822eb6764f97ff21ad" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 335 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d240de2eb6764f97ff21dd" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 410 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d73b71ee516e16db863bd0" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 315 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "670b7f3037836f581e3e2ffd" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 1170 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65d73eebee516e16db863be3" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 195 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        {
              program?._id === "65dc479ab70767aaed4f2e03" ?  <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 365 $ </h6>: <h6 class="m-0 pb-3" style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>  </h6>
            }
        <Button id="card-btn" style={{ width: "fit-content" }} variant="primary">
          {/* <Link to={"/tembDetails/" + item.item._id}> */}
          <Link to={`/historecaltembDetails/${program?._id}`}>
            More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
       
      </Card.Body>
    </Card>
  );
}

export default HistorecalTemp;

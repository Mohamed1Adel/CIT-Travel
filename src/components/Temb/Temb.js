import React,{useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./Temb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot, faMoneyBillWave, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Temb(item) {
  // console.log(item.item);
  let star = <FontAwesomeIcon className="star" icon={faStar} />;
  let rateStars = [];
  for (let i = 1; i <= Number(item.item.stars); i++) {
    rateStars.push(star);
  }

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
            const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${item?.item._id}`);
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
        {/* <Card.Img variant="top" src={item.item?.images[0]?.img_url} /> */}
        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[0]}`} />
      </div>
      <Card.Body>
        <Card.Title>{item.item.title}</Card.Title>
        <Card.Text>
          <div class="row">
          <div class="col-6">
          <div className="rates-stars">
            {rateStars.map((star) => {
              return star;
            })}
          </div>
          </div>
          <div class="col-6">
           <p className="des-card" style={{color:"rgb(252, 76, 3)"}}><FontAwesomeIcon icon={faLocationDot} /> {item.item.category}</p>
          </div>
          </div>
         
          <div className="card-desc">
            <h6>{item.item.description}</h6>
          </div>
          {}
        </Card.Text>
        <Card.Body></Card.Body>

        {
          item.item.title === "Movenpick Soma Bay"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 8030 EGP </h6> :""
        }
        {
          item.item.title === "Royal Lagoons Resort & Aqua Park"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 5330 EGP </h6> :""
        }
        {
          item.item.title === "Three Corners Sunny Beach"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 6300 EGP </h6> :""
        }
        {
          item.item.title === "New Eagles Aqua Park Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 5100 EGP </h6> :""
        }
        {
          item.item.title === "Calimera Blend Paradise"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 7650 EGP </h6> :""
        }
        {
          item.item.title === "Blend Club Aqua Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 6150 EGP </h6> :""
        }
        {
          item.item.title === "Desert Rose"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 9225 EGP </h6> :""
        }
        <Button id="card-btn" style={{ width: "fit-content" }} variant="primary">
          {/* <Link to={"/tembDetails/" + item.item._id}> */}
          <Link to={"/tembDetails/" + item.item._id}>
            More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Temb;

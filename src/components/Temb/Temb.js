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
          item.item._id === "6633a0ce518e33c6eacb9d3f"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 7335 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Royal Lagoons Resort & Aqua Park"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 5330 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Three Corners Sunny Beach"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 7200 EGP </h6> :""
        }
        {
          item.item.title.trim() === "New Eagles Aqua Park Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 6900 EGP </h6> :""
        }
        {
          item.item._id === "662936e5497f70eb371ea824"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 11250 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Blend Club Aqua Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 6750 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Desert Rose"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 11430 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Barcelo Tiran"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 9200 EGP </h6> :""
        }
        {
          item.item._id === "665f219f9fc12b76935ade92"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 8475 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Akassia Swiss Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 10200 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Sataya Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 8650 EGP </h6> :""
        }
        {
          item.item.title.trim() === "Amarina Abu Soma Resort"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 11900 EGP </h6> :""
        }
        {
          item.item._id === "666710ee6ecff983ba07889d"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4210 EGP </h6> :""
        }
        {
          item.item._id === "6661c7b0f5320df705d77068"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 5080 EGP </h6> :""
        }
        {
          item.item._id === "66a9ff2e8e6ce0d33277b41c"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 7800 EGP </h6> :""
        }
        {
          item.item._id === "66aa080669670bf6cfb0c44d"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 7800 EGP </h6> :""
        }
        {/* starting id  */}
        {
          item.item._id === "6745ad2aa41360fc6fbfd7b1"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4500 EGP </h6> :""
        }
        {
          item.item._id === "6745c6ea7a6e1b7ef4640866"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4000 EGP </h6> :""
        }
        {
          item.item._id === "6745cbcc7a6e1b7ef46409d4"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4000 EGP </h6> :""
        }
        {
          item.item._id === "6745d749fd35046c0eaf38be"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 3200 EGP </h6> :""
        }


        {/* =================================== */}


        {/* =================================== */}

        {
          item.item._id === "6746f5bfa685f69b8545f83f"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 2925 EGP </h6> :""
        }
          {
          item.item._id === "674717bb8b323857e95b0c81"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 3750 EGP </h6> :""
        }
          {
          item.item._id === "67471cde4a0f4296ff6adcb5"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4575 EGP </h6> :""
        }
          {
          item.item._id === "674721714a0f4296ff6ade27"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 5325 EGP </h6> :""
        }
          {
          item.item._id === "67472cde9656b261043bf739"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 6410 EGP </h6> :""
        }
          {
          item.item._id === "67029cd0b046ea6972b8454b"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4975 EGP </h6> :""
        }
          {
          item.item._id === "67028c776b9f7170acfab100"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 4610 EGP </h6> :""
        }
          {
          item.item._id === "6754398c862d1c1395fde39f"? <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",position:"absolute",bottom:"20px",fontSize:"16px",margin:"0"}}>Starting from <br /> 8425 EGP </h6> :""
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

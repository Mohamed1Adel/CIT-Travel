import React,{useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import "./DayTourTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faMoneyBill, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function DayTourTemp(dayTour) {
  console.log(dayTour);
  // console.log(domestic);
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
              const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${dayTour?.dayTour._id}`);
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
    <Card className="hotel-card" style={{ width: "18rem", minHeight:"340px"}}>
      <div className="card-image">
        {/* <Card.Img variant="top" src={dayTour?.dayTour.images[0].img_url} /> */}
        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[0]}`} />

      </div>
      <Card.Body>
        <Card.Title>{dayTour?.dayTour.title} </Card.Title>
        <Card.Text >
          <div className="card-desc d-flex align-items-center w-100" style={{position:"absolute",bottom:"60px",gap:"30px"}}>
            <h6 className="text-end" style={{}}><FontAwesomeIcon icon={faClock} /> {dayTour.dayTour.box6}</h6>
            
            {
              // <FontAwesomeIcon icon={faMoneyBill} />
          dayTour?.dayTour._id === "65e7b2a5c6aee86da25bc8e8"? <h6 style={{color:'#FD4E12'}}> Starting from 60$</h6> :""
          }
            {
          dayTour?.dayTour._id === "65e7b401c6aee86da25bc9fb"? <h6 style={{color:'#FD4E12'}}> Starting from 70$</h6> :""
          }
            {
          dayTour?.dayTour._id === "65e7b34dc6aee86da25bc9f6"? <h6 style={{color:'#FD4E12'}}> Starting from 58$</h6> :""
          }
          </div>
          
        </Card.Text>
       
        <Button id="card-btn" style={{ width: "fit-content" }} variant="primary">
          <Link to={"/dayTourTempDetails/" + dayTour.dayTour._id}>
          More Details <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DayTourTemp;

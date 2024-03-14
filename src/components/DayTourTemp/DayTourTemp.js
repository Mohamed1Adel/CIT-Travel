import React from "react";
import { Button, Card } from "react-bootstrap";
import "./DayTourTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faMoneyBill, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DayTourTemp(dayTour) {
  console.log(dayTour);
  // console.log(domestic);
  return (
    <Card className="hotel-card" style={{ width: "18rem", minHeight:"340px"}}>
      <div className="card-image">
        <Card.Img variant="top" src={dayTour?.dayTour.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{dayTour?.dayTour.title} </Card.Title>
        <Card.Text >
          <div className="card-desc d-flex align-items-center w-100" style={{position:"absolute",bottom:"60px",gap:"30px"}}>
            <h6 className="text-end" style={{}}><FontAwesomeIcon icon={faClock} /> {dayTour.dayTour.box6}</h6>
            <h6 style={{}}><FontAwesomeIcon icon={faMoneyBill} /> from...</h6>
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

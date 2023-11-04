import React from "react";
import { Button, Card } from "react-bootstrap";
import Hotel2 from "../../images/hotel2.jpg";
import "./DayTourTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DayTourTemp(dayTour) {
  console.log(dayTour);
  // console.log(domestic);
  return (
    <Card className="hotel-card" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={dayTour?.dayTour.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{dayTour?.dayTour.title} </Card.Title>
        <Card.Text>
          <div className="card-desc">
            <h6>{dayTour.dayTour.description}</h6>
          </div>
          {}
        </Card.Text>
        <Card.Body></Card.Body>
        <Button id="card-btn" style={{ width: "130px" }} variant="primary">
          <Link to={"/dayTourTempDetails/" + dayTour.dayTour._id}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DayTourTemp;

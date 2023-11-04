import React from "react";
import { Button, Card } from "react-bootstrap";
import "./NileCruiseTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NileCruiseTemp(nileCruise) {
  console.log({ nileCruise });
  return (
    <Card className="hotel-card">
      <div className="card-image">
        <Card.Img
          variant="top"
          src={nileCruise?.nileCruise.images[0].img_url}
        />
      </div>
      <Card.Body>
        <Card.Title>
          {nileCruise.title ? nileCruise?.nileCruise.title : "dome"}{" "}
        </Card.Title>
        <Card.Text>
          <div className="card-desc">
            <h6>{nileCruise.nileCruise.description}</h6>
          </div>
          {}
        </Card.Text>
        <Card.Body></Card.Body>
        <Button id="card-btn" style={{ width: "130px" }} variant="primary">
          <Link to={"/nileCruiseTempDetails/" + nileCruise.nileCruise._id}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NileCruiseTemp;

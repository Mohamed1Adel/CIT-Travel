import React from "react";
import { Button, Card } from "react-bootstrap";
import "./OutboundTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function OutboundTemp({ outbound }) {
  // console.log(outbound);
  return (
    <Card className="hotel-card" >
      <div className="card-image">
        <Card.Img variant="top" src={outbound.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{outbound.title ? outbound.title : "dome"} </Card.Title>
        <Card.Text>
          <div className="rates-stars">
          </div>
          <div className="card-desc">
            <h5>{outbound.description}</h5>
          </div>
          {}
        </Card.Text>
        <Card.Body></Card.Body>
        <Button style={{ width: "130px" }} variant="primary">
          <Link to={`/outboundTempDetails/${outbound._id}`}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OutboundTemp;

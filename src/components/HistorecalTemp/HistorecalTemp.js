import React from "react";
import { Button, Card } from "react-bootstrap";
import "./HistorecalTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HistorecalTemp({program}) {
// console.log(program);
  return (
    <Card className="hotel-card" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={program?.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{program?.title} </Card.Title>
        <Card.Text>
          <div className="rates-stars">
            <h5>{program?.nights} Nights</h5>
          </div>
          <div className="card-desc">
            <h5>{program?.desc}</h5>
          </div>
          {}
        </Card.Text>

        <Card.Body></Card.Body>
        <Button style={{ width: "130px" }} variant="primary">
          <Link to={`/historecaltembDetails/${program?._id}`}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HistorecalTemp;

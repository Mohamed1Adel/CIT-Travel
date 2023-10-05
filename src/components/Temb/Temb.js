import React from "react";
import { Button, Card } from "react-bootstrap";
import Hotel2 from "../../images/hotel2.jpg";
import "./Temb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Temb({id,title,rate,decs,category,location}) {
  return (
    <Card className="hotel" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={Hotel2} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="rates-stars">
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
          </div>
         {decs}
        </Card.Text>
        <Button style={{ width: "100px" }} variant="primary">
          <Link to={"/tembDetails/"+id}>
            Book <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Temb;

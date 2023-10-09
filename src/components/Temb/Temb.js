import React from "react";
import { Button, Card } from "react-bootstrap";
import Hotel2 from "../../images/hotel2.jpg";



import "./Temb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Temb({ id, title, rate, decs, category, location }) {
  let star = <FontAwesomeIcon className="star" icon={faStar} />;
  let rateStars = [];
  for (let i = 1; i <= rate; i++) {
    rateStars.push(star);
  }
  return (
    <Card className="hotel" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={Hotel2} />
      </div>
      <Card.Body>
        <Card.Title>{title} Desert Rose</Card.Title>
        <Card.Text>
          <div className="rates-stars">
            {/* <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} /> */}
            {rateStars.map((star) => {
              return star;
            })}
          </div>
          {decs} Desert rose is the best seller hotel and best choise to you
        </Card.Text>
        <Button style={{ width: "120px" }} variant="primary">
          <Link to={"/tembDetails/" + id}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Temb;

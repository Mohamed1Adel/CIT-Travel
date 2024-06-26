import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Temb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Temb(item) {
  // console.log(item.item);
  let star = <FontAwesomeIcon className="star" icon={faStar} />;
  let rateStars = [];
  for (let i = 1; i <= Number(item.item.stars); i++) {
    rateStars.push(star);
  }
  return (
    <Card className="hotel-card" >
      <div className="card-image">
        <Card.Img variant="top" src={item.item?.images[0]?.img_url} />
      </div>
      <Card.Body>
        <Card.Title>{item.item.title}</Card.Title>
        <Card.Text>
          <div className="rates-stars">
            {rateStars.map((star) => {
              return star;
            })}
          </div>
          <div className="card-desc">
            <h6>{item.item.description}</h6>
          </div>
          {}
        </Card.Text>
        <Card.Body></Card.Body>
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

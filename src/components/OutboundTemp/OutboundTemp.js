import React from "react";
import { Button, Card } from "react-bootstrap";
import Hotel2 from "../../images/hotel2.jpg";
import "./OutboundTemp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// {
//   id,
//   title,
//   category,
//   stars,
//   description,
//   startDate,
//   endDate,
//   location,
//   termsAndConditions,
//   cancillation,
//   childrenPolicis,
//   images,
// }
function OutboundTemp({ outbound }) {
  console.log(outbound);
  // console.log(domestic);
  //   let star = <FontAwesomeIcon className="star" icon={faStar} />;
  //   let rateStars = [];
  //   for (let i = 1; i <= Number(item.item.stars); i++) {
  //     // console.log(domestic.domestic.stars);
  //     rateStars.push(star);
  //   }
  return (
    <Card className="hotel-card" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={outbound.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{outbound.title ? outbound.title : "dome"} </Card.Title>
        <Card.Text>
          <div className="rates-stars">
            {/* <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} /> */}
            {/* {rateStars.map((star) => {
              return star;
            })} */}
            {/* <h5>{outbound.nights} Nights</h5> */}
          </div>
          <div className="card-desc">
            <h5>{outbound.description}</h5>
          </div>
          {}
        </Card.Text>

        <Card.Body></Card.Body>
        <Button style={{ width: "130px" }} variant="primary">
          <Link to={`/outboundTempDetails/${outbound.id}`}>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OutboundTemp;

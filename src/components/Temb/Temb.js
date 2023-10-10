import React from "react";
import { Button, Card } from "react-bootstrap";
import Hotel2 from "../../images/hotel2.jpg";
import "./Temb.scss";
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
function Temb(domestic) {

  console.log(domestic);
  // let star = <FontAwesomeIcon className="star" icon={faStar} />;
  // let rateStars = [];
  // for (let i = 1; i <= Number(domestic.domestic.stars); i++) {
  //   // console.log(domestic.domestic.stars);
  //   rateStars.push(star);
  // }
  return (
    <Card className="hotel" style={{ width: "18rem" }}>
      <div className="card-image">
        {/* <Card.Img variant="top" src={domestic.domestic.images[0].data_url} /> */}
      </div>
      <Card.Body>
        <Card.Title>
          {/* {domestic.domestic.title ? domestic.domestic.title : "dome"}{" "} */}
        </Card.Title>
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
          </div>
            <div className="card-desc">
              {/* <h5>{domestic.domestic.description}</h5> */}
            </div>
          {}
        </Card.Text>
        <Button style={{ width: "140px" }} variant="primary">
          {/* <Link to={"/tembDetails/"+ domestic.domestic.id }>
            Book Now <FontAwesomeIcon icon={faArrowRight} />
          </Link> */}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Temb;

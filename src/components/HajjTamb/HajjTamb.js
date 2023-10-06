import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Hotel2 from '../../images/hotel2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./HajjTamb.scss"
function HajjTamb() {
  return (
    <Card className="hotel" style={{ width: "18rem" }}>
      <div className="card-image">
        <Card.Img variant="top" src={Hotel2} />
      </div>
      <Card.Body>
        <Card.Title>برنامج الحج</Card.Title>
        <Card.Text>
          <div className="rates-stars">
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            {/* {rateStars.map((star) => {
              return star;
            })} */}
          </div>
          تفاصيل برنامج الحج تفاصيل برنامج الحج تفاصيل برنامج الحج تفاصيل برنامج
          الحج تفاصيل برنامج الحج
        </Card.Text>
        <Button style={{ width: "100px" }} variant="primary">
          <Link to={"/HajjAndOmrahDetails/"}>
            احجز الان <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
    // <Card className="hotel" style={{ width: "18rem" }}>
    //   <div className="card-image">
    //     <Card.Img variant="top" src={Hotel2} />
    //   </div>
    //   <Card.Body>
    //     <Card.Title>{title} Desert Rose</Card.Title>
    //     <Card.Text>
    //       <div className="rates-stars">
    //         {/* <FontAwesomeIcon className="star" icon={faStar} />
    //         <FontAwesomeIcon className="star" icon={faStar} />
    //         <FontAwesomeIcon className="star" icon={faStar} />
    //         <FontAwesomeIcon className="star" icon={faStar} />
    //         <FontAwesomeIcon className="star" icon={faStar} /> */}
    //         {rateStars.map((star) => {
    //           return star;
    //         })}
    //       </div>
    //       {decs} Desert rose is the best seller hotel and best choise to you
    //     </Card.Text>
    //     <Button style={{ width: "100px" }} variant="primary">
    //       <Link to={"/tembDetails/" + id}>
    //         Book <FontAwesomeIcon icon={faArrowRight} />
    //       </Link>
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}

export default HajjTamb

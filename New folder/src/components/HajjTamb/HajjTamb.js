import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./HajjTamb.scss"
function HajjTamb({hajjOmrah}) {
  console.log('====================================');
  console.log(hajjOmrah);
  console.log('====================================');
  return (
    <Card
      className="hotel hotel-card "
      id='hajj-card'
      // style={{ width: "18rem" }}
    >
      <div className="card-image">
        <Card.Img variant="top" src={hajjOmrah?.images[0].img_url} />
      </div>
      <Card.Body>
        <Card.Title>{hajjOmrah?.title}</Card.Title>
        <Card.Text>{hajjOmrah?.description}</Card.Text>
        <Button
          className=""
          id="card-btn"
          style={{ width: "fit-content" ,marginRight:"120px"}}
          variant="primary"
        >
          <Link class="card-btn"  to={`/HajjAndOmrahDetails/${hajjOmrah?._id}`}>
            لمزيد من التفاصيل  <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HajjTamb

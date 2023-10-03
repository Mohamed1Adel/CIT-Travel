import React from "react";
import { Button, Card } from "react-bootstrap";
import TravelImage from "../../images/travelimg1.jpg";
import { Zoom } from "react-reveal";
function HistoricalTrips() {
  return (
    <div className="historical">
      <h3 className="text-center">HistoricalTrips</h3>
      <Card className="d-flex m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={TravelImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="d-flex m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={TravelImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="d-flex m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={TravelImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HistoricalTrips;

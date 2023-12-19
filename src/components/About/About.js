import React from "react";
import Carousell from "../Carousell/Carousell";
import { Container } from "react-bootstrap";
import "./About.scss"
function About() {
  return (
    <Container style={{marginTop:"100px"}}>

        <Carousell />
        <div className="about">
        <h1 className="main-heading">About Us</h1>
      <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"15px",borderRadius:"5px"}}>
        We feel both pleased and honoured to introduce ourselves as one of the
        leading travel companies in Egypt. <br /><br /> C.I.T Travel Egypt licensed with the
        highest class of tourist license in Egypt (Class A) License No. 2458 <br /><br /> And
        Trade License no.100107 and Tax Card No. 340-497-122 and Member of IATA
        code No. 90257344 <br /><br /> Our Company Established in 2012 under the name of
        “Cairo International Travel” by Mr. Islam El Kady. Where, and despite
        the difficulties that faced the Egyptian travel market, C.I.T succeeded
        in creating an entity referred to as one of the distinguished in the
        Egyptian tourism market. <br /><br /> We are proud to be a well-established and
        dynamic incoming and outgoing agent with over 10 years of experience.
        The company is based in Cairo and provides all types of tourist
        services: from Incoming and Outgoing tour packages, extensive and unique
        excursions, Ticketing, Cruises Honeymoon Trips, as well as Hajj and
        Umrah Holy packages . <br /><br /> C.I.T Travel succeeded to provide a new vision for
        travel internally and externally during the past 10 Years characterized
        by quality and distinguished luxury service for more than 800,000
        customers inside and outside Egypt during the previous Period. <br /><br /> Our team
        of professionals, with a tremendous wealth of experience in the travel
        trade, are capable of fulfilling every client needs while traveling with
        us. <br /><br /> We operate from Cairo and we know our country as you know the palm
        of your hand. Our main goal has been always complete client
        satisfaction. We only use high quality products and services, that we
        have been able to acquire trough this many years of operations. <br /><br />
      </p>
        </div>
       
    </Container>
  );
}

export default About;

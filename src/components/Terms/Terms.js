import React from "react";
import Carousell from "../Carousell/Carousell";
import { Container } from "react-bootstrap";
import "./Terms.scss"
function Terms() {
  return (
    <Container style={{marginTop:"100px"}}>

        <Carousell />
        <div className="about">
        <h1 className="main-heading">Terms & Conditions</h1>
     
        <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>How to secure your reservation? </h3>
       <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>
       The booking process on our website is done via multiple steps to secure your reservation. Once you choose your package on our site, you will click on the booking button and fill in the (). Shortly after, we will contact you on what's app or email you to explain the payment methods and any extra details in the package. You should pay 20% of the payment as a deposit to guarantee your reservation is confirmed. 
      </p>
      
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>Our payment policies:</h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>As we mentioned before, you have the option to make a down payment to confirm your booking and the rest of the amount must be paid cash before arrival to make your payment process as easy as possible. Here are our payment methods:
<br />-credit card
<br />-cash 
<br />-collection officer
</p>
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>Cancelation policy </h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>
    We have a rate table applied according to your arrival dates if you decided to cancel your trip with us:
<br />•	before 31-60 days from the arrival day, 25% of the package full amount will be charged. 
<br />•	before 15-30 days from the arrival day, 70 % of the package full amount will be charged.
<br />•	before 15-1 day before the arrival day, 100% of the package full amount will be charged. 



</p>
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>Cancelation policy for peak seasons:</h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>Peak seasons are Christmas, new year, and Easter holidays, and they usually have higher price rates and different cancelation policy than the regular times of the year:
•	before 61 days of your arrival day, 25% of the full amount will be charged.
<br />•	before 60-31 days of your arrival day, 50% of the full amount will be charged.
<br />•	before 30-15 days of your arrival day, 75% of the full amount will be charged.
<br />•	before 14-1 day of your arrival day, 100% of the full amount will be charged. 
<br />The cancelation policy also includes domestic flight fees according to the airline’s terms and conditions at the time of booking. 
</p>
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>Refund:</h3>
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",padding:"10px"}}>Special requests and changes:</h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>Any changes made on the original booking will be valid according to availability, as well as special requests on the tour. Exceptional visits or optional trips not mentioned in the itinerary and requested by the traveler must be informed while booking, so our agency and suppliers can make arrangements before your arrival day and send you the invoice while paying the full amount.</p>
        
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",paddingBottom:"20px",paddingTop:"20px"}}>Children policy:</h3>
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",padding:"10px"}}>Nile cruises and packages with accommodation:</h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>
    •	children under the age of 2 are free.
    <br />•	children under the age of 6 get a 25% discount on the full amount of the package.
    <br />•	children under the age of 12 get a 50% discount off the full amount of the package.

    </p>
   
    <h3 style={{width:"90%",margin:"0 auto",textAlign:"start",padding:"10px"}}>Day tours and excursions without accommodation:</h3>
    <p style={{width:"90%",margin:"0 auto",fontWeight:"500",fontSize:"20px",textAlign:"start",padding:"5px",borderRadius:"5px"}}>
       •	children under the age of 6 are free.
        <br />•	children under the age of 12 get a 50% discount on the total price of the package. 
        <br /> <b>Note:</b>  children older than 12 years old are considered adults, and each child will have an extra fee in the package includes domestic flights.
</p>
        
        </div>
       
    </Container>
  );
}

export default Terms;

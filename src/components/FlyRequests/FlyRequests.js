import React ,{useState,useRef}from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
import './FlyRequests.scss';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FlyRequests() {

    const form = useRef();

    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");
    const [depDate,setDepDate] = useState("");
    const [retDate,setRetDate] = useState("");
    const [traveller,setTraveller] = useState(1);
    const [child,setChild] = useState(0);
    const [Infant ,setInfant ] = useState(0);
    const [cabine,setcabine] = useState("No Preferance");
    const [name,setName] = useState("No Preferance");
    const [phone,setPhone] = useState("No Preferance");
    const [email,setEmail] = useState("No Preferance");

    const [flyOpt,setFylOpt] = useState("Two Way")
    const [flyOptCheck,setFylOptCheck] = useState(true)

    // const sendEmail = (e) => {
    //   e.preventDefault();
    //   console.log(form.current);
    //    emailjs
    //      .sendForm(
    //       //  "service_a5le1fd",
    //       //  "template_vjwhzni",
    //       //  form.current,
    //       //  "YZfMIBWVpK33gBYsx"
    //      )
    //      .then(
    //        (result) => {
    //          console.log(result.text);
    //        },
    //        (error) => {
    //          console.log(error.text);
    //        }
    //      );
    // };

    const sendMessage = (e)=>{
      e.preventDefault();
      // console.log(from,to,depDate,retDate,traveller,child,Infant,cabine);
      var phonenumber = "+201100996929";
  
      var url = "https://wa.me/" + phonenumber + "?text="
      +"Fly Request"+"%0a"
      +"*Flying from :* "+from+"%0a"
      +"*Flying to :* "+to+"%0a"
      +"*Departure Date :* "+depDate+"%0a"
      +"*Return Date:* "+retDate+"%0a"
      +"*Traveller:* "+traveller+"%0a"
      +"*Child (12-18 years):* "+child+"%0a"
      +"*Infant (0-2 year):* "+Infant+"%0a"
      +"*Cabin Class:* "+cabine+"%0a"
      +"*Name:* "+name+"%0a"
      +"*Phone No:* "+phone+"%0a"
      +"*Email:* "+email+"%0a"
      +"%0a%0a"
      +"Hello CIT Travel";
  
      window.open(url, '_blank').focus();
      // MessageNotify()
    }
    
    // ref={form} onSubmit={sendEmail}
  return (
    <div  class="container fly-cont" style={{padding:"20px",border:"1px solid orange",borderRadius:"5px"}}>
      
      {/* <Form onSubmit={sendMessage} action="mailto:mohamedqwe542@gmail.com" method="post" enctype="text/plain"> */}
<div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",marginBottom:"20px"}}>
<h3 className="text-center fly-title" style={{color:"#fc4c03"}}>Flight Requests</h3>
<div class="form-check">
  <input class="form-check-input" onClick={()=>{setFylOpt("Two Way")}} type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
  <label class="form-check-label" for="flexRadioDefault2" style={{fontSize:"14px"}}>
  &nbsp; Round Trip
  </label>
</div>

      <div class="form-check">
  <input class="form-check-input" onClick={()=>{setFylOpt("One Way")}} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1" style={{fontSize:"14px"}}>
    &nbsp; One Way
  </label>
</div>

</div>

{
  flyOpt === "Two Way" ?
  <Form  onSubmit={sendMessage}>
  <Row>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>From </Form.Label>
        <Form.Control type="text" onChange={(e)=>setFrom(e.target.value)} placeholder="City or airport" name="Flying from" required/>
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>To</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setTo(e.target.value)} placeholder="City or airport" name="To" required/>
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Departure Date</Form.Label>
        <Form.Control type="date"  onChange={(e)=>setDepDate(e.target.value)} class="" placeholder="" name="Departure Date" required/>
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Return Date</Form.Label>
        <Form.Control type="date"  onChange={(e)=>setRetDate(e.target.value)} name="Return Date" placeholder="" />
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Adult</Form.Label>
        <Form.Control type="tel"  onChange={(e)=>setTraveller(e.target.value)} name="Adult" placeholder="1" />
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Child (12-18 years)</Form.Label>
        <Form.Control type="tel"  onChange={(e)=>setChild(e.target.value)} name="Child (12-18 years)" placeholder="0" />
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Infant (0-2 year)</Form.Label>
        <Form.Control type="tel"  onChange={(e)=>setInfant(e.target.value)} name="Infant (0-2 year)" placeholder="0" />
      </Form.Group>
    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Label>Cabin Class</Form.Label>
    <Form.Select  onChange={(e)=>setcabine(e.target.value)} name="Cabin Class" aria-label="Default select example">
<option>No Preferance</option>
<option selected="selected" value="Economy">Economy</option>
<option value="premium">premium</option>
<option value="Business">Business</option>
<option value="First">First</option>
</Form.Select>

    </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Your Name </Form.Label>
      <Form.Control type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" name="Your Name" required/>
    </Form.Group>
  </div>
    <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Phone Number</Form.Label>
      <Form.Control type="tel" onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone Number" name="Your Phone" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Your Email </Form.Label>
      <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" name="Your Email" required/>
    </Form.Group>
  </div>

    <div class="col-12 col-md-4 col-lg-2" style={{ border: "none" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button id="book-btn" variant="primary" type="submit" style={{marginTop:"15px"}}>
    Request Now
  </Button>
  <ToastContainer 
     position="bottom-center"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     />
    </div>
  </Row>
</Form>
:       <Form  onSubmit={sendMessage}>
<Row>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>From </Form.Label>
      <Form.Control type="text" onChange={(e)=>setFrom(e.target.value)} placeholder="City or airport" name="From" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>To</Form.Label>
      <Form.Control type="text"  onChange={(e)=>setTo(e.target.value)} placeholder="City or airport" name="To" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Departure Date</Form.Label>
      <Form.Control type="date"  onChange={(e)=>setDepDate(e.target.value)} class="" placeholder="" name="Departure Date" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Adult</Form.Label>
      <Form.Control type="tel"  onChange={(e)=>setTraveller(e.target.value)} name="Adult" placeholder="1" />
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Child (2-18 years)</Form.Label>
      <Form.Control type="tel"  onChange={(e)=>setChild(e.target.value)} name="Child (2-18 years)" placeholder="0" />
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Infant (0-2 year)</Form.Label>
      <Form.Control type="tel"  onChange={(e)=>setInfant(e.target.value)} name="Infant (0-2 year)" placeholder="0" />
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
  <Form.Label>Cabin Class</Form.Label>
  <Form.Select  onChange={(e)=>setcabine(e.target.value)} name="Cabin Class" aria-label="Default select example">
<option>No Preferance</option>
<option selected="selected" value="Economy">Economy</option>
<option value="premium">premium</option>
<option value="Business">Business</option>
<option value="First">First</option>
</Form.Select>

  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Your Name </Form.Label>
      <Form.Control type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" name="Your Name" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Phone Number </Form.Label>
      <Form.Control type="tel" onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone Number" name="Your Phone" required/>
    </Form.Group>
  </div>
  <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>*Your Email </Form.Label>
      <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" name="Your Email" required/>
    </Form.Group>
  </div>

  <div class="col-12 col-md-4 col-lg-2" style={{ border: "none" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
  <Button id="book-btn" variant="primary" type="submit" style={{marginTop:"15px"}}>
  Request Now
</Button>
<ToastContainer 
   position="bottom-center"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   />
  </div>


</Row>


</Form>
}
      

      </div>
  )
}

export default FlyRequests
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

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
       emailjs
         .sendForm(
          //  "service_a5le1fd",
          //  "template_vjwhzni",
          //  form.current,
          //  "YZfMIBWVpK33gBYsx"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );
    };

    const sendMessage = (e)=>{
      e.preventDefault();
      console.log(from,to,depDate,retDate,traveller,child,Infant,cabine);
      var phonenumber = "+201556040246";
  
      var url = "https://wa.me/" + phonenumber + "?text="
      +"Fly Request"+"%0a"
      +"*Flying from :* "+from+"%0a"
      +"*Flying to :* "+to+"%0a"
      +"*Departure Date :* "+depDate+"%0a"
      +"*Return Date:* "+retDate+"%0a"
      +"*Traveller:* "+traveller+"%0a"
      +"*Child (2-18 years):* "+child+"%0a"
      +"*Infant (0-2 year):* "+Infant+"%0a"
      +"*Cabin Class:* "+cabine+"%0a"
      +"%0a%0a"
      +"Hello CIT Travel";
  
      window.open(url, '_blank').focus();
      // MessageNotify()
    }
    
    // ref={form} onSubmit={sendEmail}
  return (
    <div  class="container" style={{padding:"20px",border:"1px solid orange",borderRadius:"5px"}}>
      <h1 className="text-center main-heading">Fly Requests</h1>
      <Form onSubmit={sendMessage}>
        <Row>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Flying from </Form.Label>
              <Form.Control type="text" onChange={(e)=>setFrom(e.target.value)} placeholder="City or airport" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>To</Form.Label>
              <Form.Control type="text"  onChange={(e)=>setTo(e.target.value)} placeholder="City or airport" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Departure Date</Form.Label>
              <Form.Control type="date"  onChange={(e)=>setDepDate(e.target.value)} class="" placeholder="" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Return Date</Form.Label>
              <Form.Control type="date"  onChange={(e)=>setRetDate(e.target.value)} placeholder="" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Traveller</Form.Label>
              <Form.Control type="tel"  onChange={(e)=>setTraveller(e.target.value)} placeholder="1" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Child (2-18 years)</Form.Label>
              <Form.Control type="tel"  onChange={(e)=>setChild(e.target.value)} placeholder="0" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Infant (0-2 year)</Form.Label>
              <Form.Control type="tel"  onChange={(e)=>setInfant(e.target.value)} placeholder="0" />
            </Form.Group>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ border: "none" }}>
          <Form.Label>Cabin Class</Form.Label>
          <Form.Select  onChange={(e)=>setcabine(e.target.value)} aria-label="Default select example">
      <option>No Preferance</option>
      <option selected="selected" value="Economy">Economy</option>
      <option value="premium">premium</option>
      <option value="Business">Business</option>
      <option value="First">First</option>
    </Form.Select>
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
      </div>
  )
}

export default FlyRequests
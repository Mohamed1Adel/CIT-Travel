import React ,{useRef}from 'react'
import { Button, Form } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
import './FlyRequests.scss'
function FlyRequests() {

    const form = useRef();

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
    
    // ref={form} onSubmit={sendEmail}
  return (
    <div>     
      <h1 style={{textAlign:"center"}}>Flights Requests</h1> 
              <Form  style={{display:"flex",flexWrap:"wrap",
    padding:"30px",border:"1px solid #fff",borderRadius:"4px",margin:"50px"}}>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control
        type="text"
        name="title"
        
        // value={itemDetails?.title}
        style={{display:"none"}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control
        type="text"
        name="sender_name"
        placeholder="Your Name"
        style={{width:"250px", margin:"0 10px"}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        type="email"
        name="email"
        placeholder="Your Email Address"
        style={{width:"250px", margin:"0 10px"}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Control
        type="text"
        name="Phone_No"
        placeholder="Your Phone Number"
        style={{width:"250px", margin:"0 10px"}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control
        type="text"
        name="Rooms_Count"
        placeholder="Enter Number of Rooms"
        style={{width:"250px", margin:"0 10px"}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control
        type="text"
        name="Pax_Count"
        placeholder="Enter Number of Pax"
        style={{width:"250px", margin:"0 10px"}}
      />
    </Form.Group>
    <Button id="fly-btn" variant="primary" type="submit" style={{background:"transparent",height:"40px",color:"#000",marginLeft:"15px",border:"1px solid #000"}}>
      Send Fly Request
    </Button>
  </Form></div>
  )
}

export default FlyRequests
import React ,{useState,useEffect}from 'react'
import { Button, Carousel, Modal, Toast } from 'react-bootstrap';
import { MONGODB_URL } from '../../envData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { Progress } from '../../progressComponent';
import { ToastContainer, toast } from "react-toastify";

function Popup2() {
    const popupid = "65f2d56507d653aa7596c568";
    // const nileid = "65cce9c2e762f434ed08d7bf";
    const [itemDetails,setItemDetails] = useState();

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const [position, setPosition] = useState('top-start');
    
  
    async function getDomesticById() {
    
        try {
          const response = await fetch(`${MONGODB_URL}/getDomesticDetails/${popupid}`);
          // const response = await fetch(`${API_URL}/domestics/${id}`);
          const data = await response.json();
          console.log(data);
          setItemDetails(data);
          setShow(true);
        //   setTitle(data?.title);
        //   getImages();
        } catch (e) {
          console.log(e);
        }
      }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    
  useEffect(()=>{
getDomesticById();

  },[])
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}


  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="popup2"
        >

          <Modal.Header closeButton>
            {/* <div style={{padding:"5px 10px",borderRadius:"10px",background:"#f00",position:"absolute",fontSize:"18px",color:"#fff",top:"-20px",right:"50px",fontWeight:"bold"}}>Eid Offers</div> */}
            <img width="180" height="100" src={require("../../images/hot-offer/eid.png")} style={{objectFit:"contain",position:"absolute",right:"-20px",top:"-50px"}}/>
            <Modal.Title>Enjoy With us and book now in <br /> <span style={{color:"#fc4c03"}}> <FontAwesomeIcon icon={faUmbrellaBeach} /> {itemDetails?.title}</span> </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{margin:"0 "}}>

        <div className="mb-2">
         {itemDetails?.description}
        </div>
          

           
            {/* <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"100%",height:"250px",borderRadius:"10px",overflow:"hidden"}}>
                    {itemDetails?.images?.length >= 1 ? (
                      itemDetails?.images?.map((img) => {
                        console.log("images is loaded");
                        return (
                          <Carousel.Item key={Math.random()} style={{width:"100%",height:"250px"}}>
                            <img src={img?.img_url} alt="..." style={{height:"250px",objectFit:"cover",position:"bottom center"}} />
                          </Carousel.Item>
                        );
                      })
                    ) : (
                      <Progress />
                    )}
                  </Carousel> */}
                                                                <img src={itemDetails?.images?.[0].img_url} alt="..." style={{width:"100%",height:"250px",objectFit:"cover",position:"bottom center",borderRadius:"10px"}} />

          </Modal.Body>
          <Modal.Footer>
            
            <Button id="book-btn" variant="primary" type="submit" style={{background:"#fc4c03",borderColor:"#fc4c03"}}>
                     
                      <Link to={`/tembDetails/${popupid}`}style={{color:"#000"}}>
                         More Details
                      </Link>
                      </Button>
          </Modal.Footer>
        </Modal>
        
        <ToastContainer />
      </>
    );
}

export default Popup2;

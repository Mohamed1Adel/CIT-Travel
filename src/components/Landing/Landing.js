import React, { useState, useEffect } from "react";
import "./Landing.scss";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
  Toast,
} from "react-bootstrap";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
function Landing() {
  const nileid = "662909405d90fc661870af7e";
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //     const getImages = async()=>{
  //       try{
  //         const response = await axios.get(`${MONGODB_URL}/getMainSlider`);
  //         const data = response.data;
  //         setImages(data)
  //         console.log(data);
  //       }catch(e){
  // console.log(e);
  //       }

  //     }

  const MessageNotify = () =>
    toast.success("Massage send Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    // getImages()
  }, []);
  return (
    <>
      <Toast
        className="d-none"
        show={showA}
        onClose={toggleShowA}
        style={{
          position: "fixed",
          top: "70px",
          right: "10px",
          backgroundColor: "#fff",
          zIndex: "99999",
        }}
      >
        <Toast.Header>
                      <img width="180" height="100" src={require("../../images/hot-offer/r.png")} style={{objectFit:"contain",position:"absolute",right:"60px",top:"-45px"}}/>

          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Desert Rose <br /> <span style={{fontSize:"12px",fontWeight:"bold",color:"rgb(252, 76, 3)"}}> special price With 5% installment</span> </strong>
        </Toast.Header>
        <Toast.Body>
          <img
            width="100%"
            height="250"
            className="mb-2"
            src={require("../../images/desert-rose-resort_153839788829.jpg")}
          />

          <Button
            id="book-btn"
            variant="primary"
            type="submit"
            style={{ background: "#fc4c03", borderColor: "#fc4c03" }}
          >
            {/* <Link to={"/tembDetails/" + id}> */}
            <Link
              to={`/tembDetails/${nileid}`}
              style={{ color: "#000" }}
            >
              More Details
            </Link>
          </Button>
        </Toast.Body>
      </Toast>
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "70px",
          left: "0",
          zIndex: "-1000",
          height: "100vh",
        }}
      >
        <Carousel interval={2000}
          className="main-home-slider"
          activeIndex={index}
          onSelect={handleSelect}
          style={{ marginBottom: "30px" }}
        >
          {/* {
   images[0]?.images?.length ? 
   images[0]?.images?.map((img)=>{
    // console.log(img?.img_url);
    return (
      <Carousel.Item>
      <img src={img?.img_url} style={{ height: "400px" }} alt="..." />
      </Carousel.Item>
    );
  }) : <Progress />
} */}
          <Carousel.Item>
            <img
              src={require("../../images/home-silder/slide2.jpg")}
              style={{ height: "100vh" }}
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../images/home-silder/slide1.jpg")}
              style={{ height: "100vh" }}
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../images/home-silder/slide3.jpg")}
              style={{ height: "100vh" }}
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../images/home-silder/slide4.jpg")}
              style={{ height: "100vh" }}
              alt="..."
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Landing;

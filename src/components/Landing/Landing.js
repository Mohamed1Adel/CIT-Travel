import React, { useState, useEffect } from "react";
import "./Landing.scss";
import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Landing() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  // const [title,setTitle] = useState("");
  // const [name,setName] = useState("");
  // const [phone,setPhone] = useState("");

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

  const MessageNotify = () => toast.success("Massage send Successfully",{
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
    <div style={{width:"100%",position:"fixed",top:"70px",left:"0",zIndex:"-1000"}}>
      <Carousel
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
            src={require("../../images/home-silder/slide1.png")}
            style={{ height: "90vh" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/home-silder/slide2.jpg")}
            style={{ height: "90vh" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/home-silder/slide3.png")}
            style={{ height: "90vh" }}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../../images/home-silder/slide4.jpg")}
            style={{ height: "90vh" }}
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Landing;

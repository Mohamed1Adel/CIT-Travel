import React, { useState, useEffect } from "react";
import "./Landing.scss";
import { Carousel, Container } from "react-bootstrap";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
import { Progress } from "../../progressComponent";
function Landing() {
  const [images,setImages] = useState([])
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);

    };

    const getImages = async()=>{
      try{
        const response = await axios.get(`${MONGODB_URL}/getMainSlider`);
        const data = response.data;
        setImages(data)
        console.log(data);
      }catch(e){
console.log(e);
      }

    }

    useEffect(()=>{
getImages()
    },[])
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{marginBottom:"30px"}}>
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
              <img src={require("../../images/1.PNG")} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>
                  <Carousel.Item>
              <img src={require("../../images/2.PNG")} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>
                  <Carousel.Item>
              <img src={require("../../images/3.PNG")} style={{ height: "400px" }} alt="..." />
            </Carousel.Item>

      </Carousel>
    </Container>
  );
}

export default Landing;

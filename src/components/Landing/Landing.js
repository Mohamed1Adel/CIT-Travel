import React, { useState, useEffect } from "react";
import "./Landing.scss";
import { Carousel, Container } from "react-bootstrap";
import travel from "../../images/travel1.jpg";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
function Landing() {
  const [images,setImages] = useState([])
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);

    };

    const getImages = async()=>{
      const response = await axios.get(`${MONGODB_URL}/getMainSlider`);
      const data = response.data;
      setImages(data)
      console.log(data);
    }

    useEffect(()=>{
getImages()
    },[])
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      {
         images[0]?.images?.map((img)=>{
          console.log(img?.img_url);
          return (
            <Carousel.Item>
              <img src={img?.img_url} style={{ height: "400px" }} alt="..." />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })
      }

      </Carousel>
    </Container>
  );
}

export default Landing;

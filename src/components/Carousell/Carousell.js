// import Carousel from "react-bootstrap/Carousel";

// function Carousell() {
//   return (
//     <Carousel>
//       <Carousel.Item style={{}} interval={1000}>
//         <img
//           src={require("../../images/landing.jpg")}
//           // style={{ width: "100%" }}
//           alt="..."
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           src={require("../../images/landing.jpg")}
//           // style={{ width: "100%" }}
//           alt="..."
//         />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           src={require("../../images/landing.jpg")}
//           // style={{ width: "100%" }}
//           alt="..."
//         />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Carousell;

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import "./carousell.scss";
function Carousell() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img  src={require("../../images/landing2.jpg")} alt="..." />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={require("../../images/landing2.jpg")} alt="..." />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={require("../../images/landing2.jpg")} alt="..." />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img
    //         src={require("../../images/landing2.jpg")}
    //         class="d-block w-100"
    //         alt="..."
    //       ></img>
    //     </div>
    //     <div class="carousel-item">
    //       <img
    //         src={require("../../images/landing2.jpg")}
    //         class="d-block w-100"
    //         alt="..."
    //       ></img>
    //     </div>
    //     <div class="carousel-item">
    //       <img
    //         src={require("../../images/landing2.jpg")}
    //         class="d-block w-100"
    //         alt="..."
    //       ></img>
    //     </div>
    //   </div>
    //   <button
    //     class="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleRide"
    //     data-bs-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     class="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleRide"
    //     data-bs-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}

export default Carousell;

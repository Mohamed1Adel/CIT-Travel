import React, { useState, useEffect } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import HotelImage from "../../images/hotel1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./hotDeals.scss";
import { Zoom } from "react-reveal";
import axios from "axios";
import { MONGODB_URL } from "../../envData";
import Temb from "../Temb/Temb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HistorecalTemp from "../HistorecalTemp/HistorecalTemp";
import DayTourTemp from "../DayTourTemp/DayTourTemp";
import OutboundTemp from "../OutboundTemp/OutboundTemp";
import NileCruiseTemp from "../NileCruiseTemp/NileCruiseTemp";
import { Progress } from "../../progressComponent";
function HotDeals({checkConnection}) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const sett = () => {
    return screenSize.width > 991
      ? {
          dots: true,
          Infinity: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      : screenSize.width < 991 && screenSize.width > 700
      ? {
          dots: true,
          Infinity: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      : screenSize.width < 700
      ? {
          dots: true,
          Infinity: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      : {};
  };

  // const [domesticHotDeals, setDomesticHotDeals] = useState();
  // const [historicalHotDeals, setHistoricalHotDeals] = useState();
  // const [nileCruiseHotDeals, setNileCruiseHotDeals] = useState();
  // const [dayTourHotDeals, setDayTourHotDeals] = useState();
  // const [outboundHotDeals, setOutboundHotDeals] = useState();
  // const [hajjOmrahHotDeals, setHajjOmrahHotDeals] = useState();
  const [allHotDeals, setAllHotDeals] = useState({});
  const [connection,setConnection] = useState(true)

  const getAllHotDeals = async () => {
    try{
      const domesticHots = await axios.get(`${MONGODB_URL}/getAllDomestics`);
      const domData = await domesticHots.data;
  
      const historicalHots = await axios.get(`${MONGODB_URL}/getAllProgram`);
      const historicalHotsData = await historicalHots.data;
  
      const outboundHots = await axios.get(`${MONGODB_URL}/getAllOutbound`);
      const outboundHotsData = await outboundHots.data;
  
      const dayToursHots = await axios.get(`${MONGODB_URL}/getAllDayTours`);
      const dayToursHotsData = await dayToursHots.data;
  
      const nileCruiseHots = await axios.get(`${MONGODB_URL}/getAllNileCruise`);
      const nileCruiseHotsData = await nileCruiseHots.data;
  
      const hajjOmrahHots = await axios.get(`${MONGODB_URL}/getAllHajjOmrah`);
      const hajjOmrahHotsData = await hajjOmrahHots.data;
      setAllHotDeals({
        domestics: domData?.filter((item) => item.hotOffer === true),
        historical: historicalHotsData?.filter((item) => item.hotOffer === true),
        dayTours: dayToursHotsData?.filter((item) => item.hotOffer === true),
        outbound: outboundHotsData?.filter((item) => item.hotOffer === true),
        nileCruise: nileCruiseHotsData?.filter((item) => item.hotOffer === true),
        hajjOmrah: hajjOmrahHotsData?.filter((item) => item.hotOffer === true),
      });
    }catch(e){
      checkConnection(false)
    }
 
  };

  useEffect(() => {
    getAllHotDeals();
  }, []);

  return (
    <div className="hot-deals">
      <h1 className="text-center main-heading">Hot Offers</h1>
      <Zoom>
        <Row>
          {/* <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="4" xl="4" className="box">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "150px" }}
                src={HotelImage}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}

          {/* <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col>
          <Col sm="12" md="6" lg="4">
            <Temb />
          </Col> */}
          {allHotDeals?.domestics?.length >= 1 ? (
            <Slider {...sett()}>
              {}
              {allHotDeals?.domestics?.map((item) => {
                return (
                  <div class="hot-offer-box">
                    <div class="ribbon red">
                      <span>Hot Offer</span>
                    </div>
                    <Temb item={item} />
                  </div>
                );
              })}
              {allHotDeals?.historical?.map((item) => {
                return (
                  <div class="hot-offer-box">
                    <div class="ribbon red">
                      <span>Hot Offer</span>
                    </div>
                    <HistorecalTemp program={item} />
                  </div>
                );
              })}
              {allHotDeals?.dayTours?.map((item) => {
                return (
                  <div class="hot-offer-box">
                    <div class="ribbon red">
                      <span>Hot Offer</span>
                    </div>
                    <DayTourTemp dayTour={item} />
                  </div>
                );
              })}
              {allHotDeals?.outbound?.map((item) => {
                return (
                  <div class="hot-offer-box">
                    <div class="ribbon red">
                      <span>Hot Offer</span>
                    </div>
                    <OutboundTemp outbound={item} />
                  </div>
                );
              })}
              {allHotDeals?.nileCruise?.map((item) => {
                return (
                  <div class="hot-offer-box">
                    <div class="ribbon red">
                      <span>Hot Offer</span>
                    </div>
                    <NileCruiseTemp nileCruise={item} />
                  </div>
                );
              })}
            </Slider>
          ) : (
            <Progress />
          )}
        </Row>
      </Zoom>
      {console.log(allHotDeals)}
    </div>
  );
}

export default HotDeals;

// /************************************
// 1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

// 2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
// ************************************/
// const slideWidth = 30;

// const _items = [];

// async function getData(){
//   const response = await axios.get(`${MONGODB_URL}/getAllDomestics`);
//   const data = await response.data;
//   return data
//   // _items.push(...data)
//   // console.log(_items);
// }

// // const _items = [
// //     {
// //         player: {
// //             title: 'Efren Reyes',
// //             desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
// //             image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
// //         },
// //     },
// //     {
// //         player: {
// //             title: "Ronnie O'Sullivan",
// //             desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
// //             image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
// //         },
// //     },
// //     {
// //         player: {
// //             title: 'Shane Van Boening',
// //             desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
// //             image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
// //         },
// //     },
// //     {
// //         player: {
// //             title: 'Mike Sigel',
// //             desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
// //             image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
// //         },
// //     },
// //     {
// //         player: {
// //             title: 'Willie Mosconi',
// //             desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
// //             image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
// //         },
// //     },
// // ];

// console.log(await getData());
// _items.push(...await getData());
// const length = _items?.length;
// // console.log(_items);
// const sleep = (ms = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//     const item = {
//         styles: {
//             transform: `translateX(${position * slideWidth}rem)`,
//         },
//         player: _items[idx].player,
//     };

//     switch (position) {
//         case length - 1:
//         case length + 1:
//             item.styles = {...item.styles, filter: 'grayscale(1)'};
//             break;
//         case length:
//             break;
//         default:
//             item.styles = {...item.styles, opacity: 0};
//             break;
//     }

//     return item;
// };

// const CarouselSlideItem = ({pos, idx, activeIdx}) => {
//     const item = createItem(pos, idx, activeIdx);

//     return (
//         <li className="carousel__slide-item" style={item?.styles}>
//             <div className="carousel__slide-item-img-link">
//                 <Temb item={_items[pos]}/>
//                 {/* <img src={item.player.image} alt={item.player.title} /> */}
//             </div>
//             {/* <div className="carousel-slide-item__body">

//             </div> */}
//         </li>
//     );
// };

// const keys = Array.from(Array(_items?.length).keys());
// console.log(keys);
// const HotDeals = () => {
//     const [items, setItems] = React.useState(keys);
//     const [isTicking, setIsTicking] = React.useState(false);
//     const [activeIdx, setActiveIdx] = React.useState(0);
//     const bigLength = items.length;

//     const prevClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map((_, i) => prev[(i + jump) % bigLength]);
//             });
//         }
//     };

//     const nextClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map(
//                     (_, i) => prev[(i - jump + bigLength) % bigLength],
//                 );
//             });
//         }
//     };

//     const handleDotClick = (idx) => {
//         if (idx < activeIdx) prevClick(activeIdx - idx);
//         if (idx > activeIdx) nextClick(idx - activeIdx);
//     };

//     React.useEffect(() => {
//         if (isTicking) sleep(300).then(() => setIsTicking(false));
//     }, [isTicking]);

//     React.useEffect(() => {
//         setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
//     }, [items]);

//     return (
//         <div className="carousel__wrap">
//             <div className="carousel__inner">
//                 <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//                 </button>
//                 <div className="carousel__container">
//                     <ul className="carousel__slide-list">
//                         {items?.map((pos, i) => (
//                             <CarouselSlideItem
//                                 key={i}
//                                 idx={i}
//                                 pos={pos}
//                                 activeIdx={activeIdx}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//                 <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//                 </button>
//                 <div className="carousel__dots">
//                     {items.slice(0, length).map((pos, i) => (
//                         <button
//                             key={i}
//                             onClick={() => handleDotClick(i)}
//                             className={i === activeIdx ? 'dot active' : 'dot'}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HotDeals

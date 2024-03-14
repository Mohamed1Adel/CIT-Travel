import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, HashRouter, Link } from "react-router-dom";
import Landing from "./components/Landing/Landing";
// import EgyptComponent from "./components/EgyptComponent";
import { Button, Container, Toast } from "react-bootstrap";
// import UploadImages from "./components/UploadImages";
import HotDeals from "./components/HotDeals/HotDeals";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import MostPopular from "./components/MostPopular/MostPopular";
import ContactUs from "./components/ContactUs/ContactUs";
import Domestic from "./components/Domestic/Domestic";
import HistoricalTrips from "./components/Historical Trips/HistoricalTrips";
import Outbound from "./components/Outbound/Outbound";
import TembDetails from "./components/TembDetails/TembDetails";
import DayTour from "./components/DayTour/DayTour";
import MeetAssist from "./components/MeetAssist/MeetAssist";
import Transportation from "./components/Transportation/Transportation";
import "./App.scss";
import HajjAndOmrahDetails from "./components/HajjAndOmrahDetails/HajjAndOmrahDetails";
import HajjAndOmrah from "./components/HajjAndOmrah/HajjAndOmrah";
import NileCruise from "./components/NileCruise/NileCruise";
import HajjTamb from "./components/HajjTamb/HajjTamb";
import HistorecalTembDetails from "./components/HistorecalTempDetails/HistorecalTempDetails";
import OutboundTempDetails from "./components/OutboundTempDetails/OutboundTempDetails";
import NileCruiseTempDetails from "./components/NileCruiseTempDetails/NileCruiseTempDetails";
import DayTourTempDetails from "./components/DayTourTempDetails/DayTourTempDetails";
import NoInternetConnection from "./components//InternetConnectionComponents/InternetConnectionComponents";
import Careers from "./components/Careers/Careers";
import FlyRequests from "./components/FlyRequests/FlyRequests";
import Popup from "./components/popup/popup";
import Terms from "./components/Terms/Terms";
import Popup2 from "./components/popup/popup2";
function App() {

  
  const [connection, setConnection] = useState(true);
  const id = "65c27460d95b31a2231ed7f4";
  const checkConnection = (check) => {
    setConnection(check);
  };
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(window.navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  return (
    <div className="home-section">
      {/* <div class="wrapper">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div> */}
     {/* <Toast className="ms-auto" style={{position:"fixed",top:"70px",right:"10px",background:"#fff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="m-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast> */}
    
   
      <NavBar />
      {/* <Landing /> */}
      <div className="app-section" style={{ minHeight: "100vh" }}>
        <BrowserRouter>

          <Routes>
            <Route
              path="/"
              element={
                <>
                      
                       <Popup />
                       <Popup2 />
                      <Landing />
                      <div class="container-fluid home-container" style={{backgroundColor:"#fff",marginTop:"100vh",zIndex:"9999",paddingTop:"50px"}}>
                      <FlyRequests />
                      <div className="container new-cont my-4" style={{width:"60%",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}}>
                        {/* <img src={require("./images/LogoIcon.png")} width="200px"/> */}
                        <h5 className="text-center main-heading mb-0 pb-0">C.I.T Travel</h5>
                        <h5 className="text-center main-heading mb-0 py-0"  style={{}}>Your Ticket to a World Of Possibilitie </h5>
                        <h5 className="text-center mb-0 pd-0">Explore the beauty of Egypt in a warm and pleasant atmosphere with our dedicated professional  agents who can help you with every details  when it comes to planning your getaway Depending on your priorities and requirements.</h5>
                        <h5 className="text-center mb-0 pd-0 main-heading">WHY C.I.T TRAVEL EGYPT</h5>
                        <ol className="list-group list-group-numbered">
                          <li className="list-group-item">We are a travel agency located in Egypt, with people that know Egypt, Arabian, and Western cultures.</li>
                          <li className="list-group-item">All our clients will obtain personalized and first class service of their Egypt vacation.</li>
                          <li className="list-group-item">Our expertise and high quality customer service will help you create the perfect vacation package.</li>
                          <li className="list-group-item">We are members of different prestigious organizations related to the travel industry.</li>
                          <li className="list-group-item">A highly experienced multi-language service department at your service 24 hours a day</li>
                          <li className="list-group-item">Problems solving and focus on solution-oriented methods for all customer requests and requirements…</li>
                          <li className="list-group-item">Competitive prices combined with the highest quality services resulting in value for money across all our services and products</li>
                          
                        </ol>
                      </div>
                      <Container>
                        {/* <FlyRequests /> */}
                        <HotDeals checkConnection={checkConnection} />
                        <MostPopular />
                      </Container>
                      </div>

                </>
              }
            />
            {/* <Route
              path="/"
              element={
                <>
                  {connection ? (
                    <>
                      <Landing />
                      <Container>
                        <FlyRequests />
                        <HotDeals checkConnection={checkConnection} />
                        <MostPopular />
                      </Container>
                    </>
                  ) : (
                    <h3>Connection Field Please Check Your Internet</h3>
                  )}
                </>
              }
            /> */}
            {/* <Route path="/domestics" element={<AllDomestics />} /> */}
            <Route path="/historicalTrips" element={<HistoricalTrips />} />
            <Route path="/dayTour" element={<DayTour />} />
            <Route
              path="/dayTourTempDetails/:id"
              element={<DayTourTempDetails />}
            />
            <Route path="/nileCruise" element={<NileCruise />} />
            <Route
              path="/nileCruiseTempDetails/:id"
              element={<NileCruiseTempDetails />}
            />
            <Route path="/meetAssist" element={<MeetAssist />} />
            <Route path="/domestics" element={<Domestic />} />
            <Route path="/outbound" element={<Outbound />} />
            <Route
              path="/outboundTempDetails/:id"
              element={<OutboundTempDetails />}
            />

            <Route path="/hajjAndOmrah" element={<HajjAndOmrah />} />
            <Route
              path="/hajjAndOmrahDetails/:id"
              element={<HajjAndOmrahDetails />}
            />
            <Route path="/HajjTamb" element={<HajjTamb />} />
            <Route
              path="/HajjAndOmrahDetails"
              element={<HajjAndOmrahDetails />}
            />

            <Route path="/tembDetails/:id" element={<TembDetails />} />
            <Route
              path="/historecaltembDetails/:id"
              element={<HistorecalTembDetails />}
            />

            <Route path="/transportation" element={<Transportation />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </BrowserRouter>
      </div>
      <a href="https://wa.me/+201100996929
      " class="float" target="_blank" >
<i class="fa fa-whatsapp my-float"></i>
</a>
      <Footer />
       
      {/* <SimpleMap/> */}
      {/* <UploadImages /> */}

    </div>
  );
}

export default App;

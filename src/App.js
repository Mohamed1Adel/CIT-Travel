import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Landing from "./components/Landing/Landing";
// import EgyptComponent from "./components/EgyptComponent";
import { Container } from "react-bootstrap";
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
function App() {
  const [connection, setConnection] = useState(true);

  const checkConnection = (check) => {
    setConnection(check);
  };
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

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
      <NavBar />
      {/* <Landing /> */}
      <div className="app-section" style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {connection ? (
                    <>
                      <Landing />
                      <Container>
                        {/* <FlyRequests /> */}
                        <HotDeals checkConnection={checkConnection} />
                        <MostPopular />
                      </Container>
                    </>
                  ) : (
                    <h3>Connection Field Please Check Your Internet</h3>
                  )}
                </>
              }
            />
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
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />

      {/* <SimpleMap/> */}
      {/* <UploadImages /> */}
    </div>
  );
}

export default App;

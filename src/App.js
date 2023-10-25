import React from "react";
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
function App() {
  return (
    <div className="">
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
      <Landing />
      <BrowserRouter>
        <Routes>
          <Route
            path="/CIT-Travel/#/"
            element={
              <>
                <Container>
                  <HotDeals />
                  <MostPopular />
                </Container>
              </>
            }
          />
          {/* <Route path="/domestics" element={<AllDomestics />} /> */}
          <Route
            path="/CIT-Travel/#/historicalTrips"
            element={<HistoricalTrips />}
          />
          <Route path="/CIT-Travel/#/dayTour" element={<DayTour />} />
          <Route
            path="/dayTourTempDetails/:id"
            element={<DayTourTempDetails />}
          />
          <Route path="/CIT-Travel/#/nileCruise" element={<NileCruise />} />
          <Route
            path="/nileCruiseTempDetails/:id"
            element={<NileCruiseTempDetails />}
          />
          <Route path="/CIT-Travel/#/meetAssist" element={<MeetAssist />} />
          <Route path="/domestics" element={<Domestic />} />
          <Route path="/CIT-Travel/#/outbound" element={<Outbound />} />
          <Route
            path="/outboundTempDetails/:id"
            element={<OutboundTempDetails />}
          />

          <Route path="/CIT-Travel/#/hajjAndOmrah" element={<HajjAndOmrah />} />
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

          <Route
            path="/CIT-Travel/#/transportation"
            element={<Transportation />}
          />
          <Route path="/CIT-Travel/#/about" element={<About />} />
          <Route path="/CIT-Travel/#/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      {/* <SimpleMap/> */}
      {/* <UploadImages /> */}
    </div>
  );
}

export default App;

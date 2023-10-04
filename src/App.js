import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import EgyptComponent from "./components/EgyptComponent";
import { Container } from "react-bootstrap";
import UploadImages from "./components/UploadImages";
import HotDeals from "./components/HotDeals/HotDeals";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import MostPopular from "./components/MostPopular/MostPopular";
import ContactUs from "./components/ContactUs/ContactUs";
import AllDomestics from "./components/AllDomestics/AllDomestics";
import DomesticHotelDetails from "./components/DomesticHotelDetails/DomesticHotelDetails";
import SimpleMap from "./GoogleMaps";
function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Landing /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <>
          <Landing />
          <Container>
        <HotDeals />
        <MostPopular />
      </Container>
          </>
          } />
          <Route path="/domestics" element={<AllDomestics />} />
          <Route path="/DomesticHotelDetails" element={<DomesticHotelDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      {/* <SimpleMap/> */}
      {/* <UploadImages /> */}
    </div>
  );
}

export default App;

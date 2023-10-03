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
function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Landing /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/egypt" element={<EgyptComponent />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
      <Container>
        <HotDeals />
        <MostPopular />
      </Container>
      <Footer />
      {/* <UploadImages /> */}
    </div>
  );
}

export default App;

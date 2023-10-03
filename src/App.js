import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import EgyptComponent from "./components/EgyptComponent";
import { Container } from "react-bootstrap";
import UploadImages from "./components/UploadImages";
import HotDeals from "./components/HotDeals";
function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Landing /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/egypt" element={<EgyptComponent />} />
        </Routes>
      </BrowserRouter>
       <HotDeals/>
      {/* <UploadImages /> */}
    </div>
  );
}

export default App;

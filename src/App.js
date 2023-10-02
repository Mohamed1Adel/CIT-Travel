import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <div className="">
      <NavBar />
      <Landing/>
      <BrowserRouter>
        <Routes>
          <Route path="" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

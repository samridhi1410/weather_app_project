import React, { useState } from "react";
import "./App.css";
import CitySearch from "./Components/CitySearch";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from "./Components/wheather/weather";
function App(){

  const [cityid,setCityId]=useState("")

  const mainfunction=(cid)=>{
    console.log(cid);
    setCityId(cid);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CitySearch mfunct={mainfunction} />} />
        <Route path="/weather" element={<Weather cityid={cityid}/>}/>
        </Routes>
      </Router>
    </>
  );


}



export default App;
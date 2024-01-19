import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AirQualityIndex from "./pages/AirQualityIndex/AirQualityIndex";
import Monitoring from "./pages/Monitoring/Monitoring";
import Resource from "./pages/Resources/Resource";
import WaterQualityIndex from "./pages/WaterQualityIndex/WaterQualityIndex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/airQualityIndex' element={<AirQualityIndex/>}/>
        <Route exact path='/waterQualityIndex' element={<WaterQualityIndex/>}/>
        <Route exact path='/monitoring' element={<Monitoring/>}/>
        <Route exact path='/resource' element={<Resource/>}/>
      </Routes>
    </div>
  );
}

export default App;
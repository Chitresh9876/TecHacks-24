import React from "react";
import "./Home.css";
import HeroImage from "../../images/HeroImage.jpg";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Geolocation from "../../Api/GeoLoactionApi";
const Home = () => {
  

  return (
    <div>
      <div className="heroSection">
        <div className="heroSectionDetail"></div>
        <img src={HeroImage} alt="" className="HeroImage" />
      </div>
      <div className="right-incline"></div>
      <div className="left-incline"></div>

      <ImageDescription
        text={
          " Lorem or sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z"
        }
      />
      <ImageDescription
        position={"right"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z"
        }
      />
    </div>
  );
};

export default Home;

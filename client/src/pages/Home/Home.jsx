import React from "react";
import "./Home.css";
import HeroImage from "../../images/HeroImage.jpg";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  

  return (
    <div>
      {/* Hero Section */}

      <div className="heroSection">
        <div className="heroSectionDetail">
          <h1>Welcome to Quality Checker</h1>
          <h3>
            We care about your heath,
            <br /> Join with us to know about your surrounding.
          </h3>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ffffff",
              borderColor: "#ffffff",
              ":hover": { color: "blue" },
            }}
          >
            Sign Up
          </Button>
        </div>
        <img src={HeroImage} alt="" className="HeroImage" />
      </div>
      <div className="right-incline"></div>
      <div className="left-incline"></div>

      {/* Body */}

      <ImageDescription />

      {/* Footer */}

      <Footer />
 </div>
  );
};

export default Home;
import React from "react";
import "./Home.css";
import HeroImage from "../../images/HeroImage.jpg";
import { Link } from "react-router-dom";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import { Button } from "@mui/material";

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
              boxShadow: "3px 4px 8px #000",
              ":hover": {
                color: "white",
                outline: "none",
                boxShadow: "1px 2px 8px #000000",
                backgroundColor: "",
              },
            }}
          >
            <Link
              to="/sign-up"
              style={{ textDecoration: "none", ".hover": { color: "white" } }}
            >
              {" "}
              Sign Up
            </Link>
          </Button>
        </div>
        <img src={HeroImage} alt="" className="HeroImage" />
      </div>
      <div className="right-incline"></div>
      <div className="left-incline"></div>

      {/* Body*/}

      <ImageDescription />
    </div>
  );
};

export default Home;

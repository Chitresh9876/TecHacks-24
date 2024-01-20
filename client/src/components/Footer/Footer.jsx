import React from "react";
import { Stack, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      style={{
        height: "10rem",
        // border: "1px solid red",

        marginTop: ".7rem",
        padding: ".4rem",
        backgroundColor: "#a6c0fb",
        paddingTop: ".8rem",
      }}
    >
      <Stack style={{ width: "15%", height: "100%" }}></Stack>
      <Stack direction={"row"} style={{ width: "85%", height: "100%" }}>
        <Stack alignItems={"center"} style={{ width: "100%", height: "100%" }}>
          <Typography variant="h4" component="h4" color="white">
            {" "}
            Useful links
          </Typography>
          <Stack alignItems={"center"} justifyContent={""}>
            <HashLink to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </HashLink>
            <Link
              to="/airQualityIndex"
              style={{ textDecoration: "none", color: "white" }}
            >
              Air index
            </Link>
            <Link
              to="/waterQualityIndex"
              style={{ textDecoration: "none", color: "white" }}
            >
              Water Index
            </Link>
            <Link
              to="/resource"
              style={{ textDecoration: "none", color: "white" }}
            >
              Resorces
            </Link>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} style={{ width: "100%", height: "100%" }}>
          <Typography variant="h4" component="h4" color="white">
            {" "}
            Follow us
          </Typography>
          <Stack
            height="50%"
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing=".6rem"
          >
            <FaFacebook color="white" size={""} />
            <FaLinkedinIn color="white" />
            <FaInstagram color="white" />
          </Stack>
        </Stack>
        <Stack alignItems={"center"} style={{ width: "100%", height: "100%" }}>
          <Typography variant="h4" component="h4" color="white">
            {" "}
            Address
          </Typography>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            width={"100%"}
            height={"57%"}
          >
            <Typography fontFamily={"sans-serif"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              maiores maxime laudantium rerum!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;

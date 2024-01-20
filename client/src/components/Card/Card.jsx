import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import AqiApi from "../../Api/AqiApi";
import { BiDroplet, BiLocationPlus } from "react-icons/bi";
const Card = () => {
  return (
    <Box
      style={{
        border: "1px solid black",
        width: "30%",
        height: "70vh",
        borderRadius: ".2rem",
        background:"black",
        opacity:".2"
      }}
    >
      <Stack alignItems={'center'}>
        <BiLocationPlus color="white" />
        <Typography style={{color:"white"}}>chandigarh</Typography>
      </Stack>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <BiDroplet color="white"/>
         <Stack>
          <Box color={"white"}>he</Box>
          <Typography variant="h5" component={"h5"} color={"white"}> Air Quality Index</Typography>
         </Stack>

         <Stack color={"white"}>
          <Box>he</Box>
          <Typography>temp</Typography>
         </Stack>
        </Stack>

      </Stack>

      {/*  */}
      <Stack justifyContent={"center"}> 
        <Box color={"white"} style={{background:""}} >Unhealthy</Box>
      </Stack>
    </Box>
  );
};

export default Card;


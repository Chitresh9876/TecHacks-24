import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

export default function Resource() {
  return (
    <div style={{height:"77vh", width:"100vw",position:"relative",margin:"0 50%", transform:"translate(-50%)", backgroundColor:"#94bbd8"}}>
      <Stack
        sx={{ height: "auto", width: "100%" }}
        mt={20}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Accordion style={{width:"50%"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Air Quality Index
          </AccordionSummary>
          <AccordionDetails >
          Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality. <br/>
          For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher.
          <br /><br />
          <Button>Read More...</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{overflowY:"hidden", width:"50%"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Water Quality Index
          </AccordionSummary>
          <AccordionDetails>
          The Water Quality Index (WQI)1 is similar to the Trophic State Index (TSI) in that both were developed for the statewide assessment of surface waters. While both the are useful as thumbnail indicators of water quality, they are non-regulatory measurements; they may be used by the Florida Department of Environmental Protection to identify water bodies that may need further study, but not to determine attainment of water quality standards under the Impaired Waters Rule of the Clean Water Act.
          <br /><br />
          <Button>Read More...</Button>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </div>
  );
}

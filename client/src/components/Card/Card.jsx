import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  CardContent,
  Card,
  LinearProgress,
} from "@mui/material";
// import AqiApi from "../../Api/AqiApi";
import { BiDroplet, BiLocationPlus } from "react-icons/bi";

const LinearProgressBar = ({ value }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="caption" color="textSecondary" gutterBottom>
        Progress
      </Typography>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
};
const Card1 = ({ city, data }) => {
  console.log(data);
  const score = data?.aqi;
  const label = "Air Quality Index";
  const [progress, setProgress] = useState(800);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(50);
      // setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      style={{
        width: "25%",
        height: "60vh",
        padding: "0rem",
        background: "rgba(0,0,0,0.7)",
        borderRadius: "0.5rem",
        marginTop: "9rem",
        transform: "translate(280%)",
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          borderRadius: ".3rem",
          padding: "0rem",
          backgroundColor: "rgba(255,255,200,.1)",
        }}
      >
        <Stack direction={"column"}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <BiLocationPlus color="white" />
              <Typography color={"white"}>Location</Typography>
            </Stack>
            <Typography color={"white"}>{city}</Typography>
          </Stack>
          <Stack>
            <Stack
              spacing={".1rem"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              height={"12rem"}
              style={{ width: "100%", overflowY: "hidden" }}
            >
              <Stack
                width={"50%"}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                style={{ overflowY: "hidden" }}
              >
                <BiDroplet color="white" size={50} />
                <Typography
                  variant="h5"
                  component={"h6"}
                  color={"white"}
                  mt={2}
                >
                  12%
                </Typography>
              </Stack>
              <Stack width="50%">
                <Card style={{ backgroundColor: "inherit", color: "white" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      variant="determinate"
                      value={score}
                      size={80}
                      thickness={4}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ marginTop: 10 }}
                    >
                      {score}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {label}
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Stack>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              color={"white"}
            >
              {data?.aqi <= 100
                ? "HEALTHY"
                : data?.aqi <= 200
                ? "MODERATE"
                : "BAD"}
            </Box>
          </Stack>
          <Stack
            paddingTop={".1rem"}
            direction={"row"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={"1.5rem"}
            // style={{ border: "1px solid red" }}
          >
            <Stack>
              <Typography color={"white"}>
                {data?.so2} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>SO2</Typography>
              <Box padding={"0rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                {data?.co} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>CO</Typography>
              <Box padding={"0rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                {data?.no2} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>NO2</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
          </Stack>

          <Stack
            paddingTop={".5rem"}
            direction={"row"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={"1.5rem"}
            // style={{ border: "1px solid red" }}
          >
            <Stack>
              <Typography color={"white"}>
                {data?.o3} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>O3</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                {data?.pm10} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM10</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                {data?.pm25} <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM2.5</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Card1;

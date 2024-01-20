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
const Card1 = () => {
  const score = 75;
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
      style={{ width: "30%", height: "70vh", padding: ".2rem" }}
    >
      <Paper
      
        elevation={3}
        style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          height: "100%",
          width: "100%",
          borderRadius: ".3rem",
          padding: ".1rem",
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
            <Typography color={"white"}>Location Wide</Typography>
          </Stack>
          <Stack>
            <Stack
              spacing={".1rem"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              height={"12rem"}
              style={{ width: "100%" }}
            >
              <Stack
                width={"50%"}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <BiDroplet color="white" />
                <Typography variant="h6" component={"h6"} color={"white"}>
                  percentage
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
              UNHEALTHY
            </Box>
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
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
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
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
              <Box padding={".1rem"}>
                <LinearProgressBar value={progress} />
              </Box>
            </Stack>
            <Stack>
              <Typography color={"white"}>
                108 <span>ug/m3</span>
              </Typography>
              <Typography color={"white"}>PM 2.5</Typography>
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

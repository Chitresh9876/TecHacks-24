import React from "react";
import styles from "./ImageDescription.module.css";
import IMG1 from "../../images/WQImage.jpg";
import IMG2 from "../../images/AQImage.jpg";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ImageDescription = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        mt={5}
        alignItems={"center"}
      >
        <div className={styles.image}>
          <img src={IMG1} alt="air" />
        </div>
        <Card sx={{ maxWidth: 600, height: "20rem", boxShadow: "none" }} mt={5}>
          <CardActionArea>
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={20}
                fontWeight={500}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary">Reade More...</Button>
          </CardActions>
        </Card>
      </Stack>

      <Stack
        direction="row-reverse"
        justifyContent="space-evenly"
        mt={5}
        alignItems={"center"}
      >
        <div className={styles.image}>
          <img src={IMG2} alt="water" />
        </div>
        <Card sx={{ maxWidth: 600, height: "20rem", boxShadow: "none" }} mt={5}>
          <CardActionArea>
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={20}
                fontWeight={500}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary">Reade More...</Button>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
};

export default ImageDescription;

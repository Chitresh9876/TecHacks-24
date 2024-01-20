import React, { useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import SignInImage from "../../images/SignInImage.jpg";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SignIn = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => {
    //e.preventDefault();
    console.log(name, email, password);
    if (name && email && password) {
      await axios
        .post("http://localhost:8000/auth/sign-in", {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("send data");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Enter Proper Crediantials!");
    }
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        mt={5}
        alignItems={"center"}
      >
        <img
          style={{ height: "auto", width: "auto" }}
          src={SignInImage}
          alt="SignIn"
        />
        <div
          style={{
            height: "auto",
            minWidth: "40%",
            marginRight: "2rem",
          }}
        >
          {name && (
            <Typography
              mb={2}
              fontSize={23}
              fontWeight={600}
              fontFamily={"sans-serif"}
            >{`Welcome back, ${name}`}</Typography>
          )}
          <Card
            style={{
              height: "auto",
              minWidth: "40%",
              marginRight: "2rem",
              padding: "1rem",
              boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem #999999",
              position: "static",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={20}
                  fontWeight={500}
                  padding={".6rem"}
                >
                  <p style={{ marginTop: "1rem" }}>NAME</p>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="small"
                    style={{ marginTop: "0rem", width: "100%"}}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <p style={{ marginTop: "1rem" }}>EMAIL</p>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    style={{ marginTop: "0rem", width: "100%" }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <p style={{ marginTop: "1rem" }}>PASSWORD</p>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="small"
                    style={{ marginTop: "0rem", width: "100%" }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                color="primary"
                variant="outlined"
                style={{
                  marginLeft: "1rem",
                  width: "100%",
                  backgroundColor: "#484bf2",
                  color: "#ffffff",
                }}
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>
            </CardActions>
            <Typography style={{ margin: "1rem 2rem" }}>
              Don't have an account?{" "}
              <a
                href="/user/sign-up"
                style={{ textDecoration: "none", color: "#484bf2" }}
              >
                <Button variant="text">Sign Up</Button>
              </a>{" "}
            </Typography>
          </Card>
        </div>
      </Stack>
    </div>
  );
};

export default SignIn;

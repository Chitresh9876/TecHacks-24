import React, { useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import SignUpImage from "../../images/SignUpImage.jpg";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);

  const handleSubmit = async () => {
    //e.preventDefault();
    console.log(name, email, password, phoneNo);
    if (name && email && password && phoneNo) {
      await axios
        .post("http://localhost:8000/auth/sign-up", {
          name: name,
          email: email,
          password: password,
          phoneNo: phoneNo,
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
          src={SignUpImage}
          alt="SignUp"
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
            >{`Hello, ${name}`}</Typography>
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
                >
                  <p style={{ marginTop: "1rem" }}>NAME</p>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="small"
                    style={{ marginTop: "0rem", width: "100%" }}
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
                  <p style={{ marginTop: "1rem" }}>PHONE NO</p>
                  <TextField
                    id="outlined-basic"
                    label="PhoneNo"
                    variant="outlined"
                    size="small"
                    style={{ marginTop: "0rem", width: "100%" }}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
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
                SIGN UP
              </Button>
            </CardActions>
              <Typography style={{margin:"1rem 2rem"}}>Already have an account? <a href="/user/sign-in" style={{textDecoration:'none', color:'#484bf2'}}><Button variant="text">Sign In</Button></a> </Typography>
          </Card>
        </div>
      </Stack>
    </div>
  );
};

export default SignUp;

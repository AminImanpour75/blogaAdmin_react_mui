import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeadBox } from "../HeadBox/HeadBox";
import RegisterAction from "../../api/RegisterAction";

const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  padding: "1rem 0.5rem",
  backgroundColor: "#fff",
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
}));

export const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (!email || !username || !password) {
      return;
    }
    RegisterAction(email, username, password)
      .then((response) => {
        const token = response.data.user.token;
        window.localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/");
        }, 600);
      })
      .catch((error) => {
        setEmail("");
        setUsername("");
        setPassword("");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <MyBox sx={{ width: "100%" }}>
        <HeadBox title="Register new user" />

        <Box component="form" sx={{ width: "100%", marginTop: "20px" }}>
          <TextField
            required
            id="outlined-required"
            label="Username"
            placeholder="lublub"
            fullWidth
            size="small"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            sx={{ marginBottom: "5px" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="lublub@lub.com"
            fullWidth
            size="small"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth
            size="small"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            sx={{ margin: "5px 0" }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "0.8rem", color: "gray" }}
            >
              Already have an account? <Link to="/login"> Login</Link>
            </Typography>
            <Button type="button" onClick={handleBtnClick}>
              Register
            </Button>
          </Stack>
        </Box>
      </MyBox>
    </Box>
  );
};

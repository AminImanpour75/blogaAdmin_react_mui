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
import { LoginAction } from "../../api/LoginAction";
import { HeadBox } from "../HeadBox/HeadBox";
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

export const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleBtnClick = () => {
    LoginAction(email, password)
      .then((response) => {
        const token = response.data.user.token;
        window.localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/");
        }, 600);
      })
      .catch((error) => {
        setEmail("");
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
        <HeadBox title="Login user" />

        <Box component="form" sx={{ width: "100%", marginTop: "20px" }}>
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
              Don't have an account? <Link to="/register"> Register</Link>
            </Typography>
            <Button type="button" onClick={handleBtnClick}>
              Login
            </Button>
          </Stack>
        </Box>
      </MyBox>
    </Box>
  );
};

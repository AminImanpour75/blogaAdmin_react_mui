import { Menu, Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const Topbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    window.localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 700);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ dispaly: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div">
              Articles
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button size="small">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "#ddd" : "#fff",
                })}
              >
                Dashboard
              </NavLink>
            </Button>

            <Button size="small">
              <NavLink
                to="/create"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "#ddd" : "#fff",
                })}
              >
                Create
              </NavLink>
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar>
                <Person />
              </Avatar>
            </StyledBadge>
            <Button color="inherit" onClick={Logout}>
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

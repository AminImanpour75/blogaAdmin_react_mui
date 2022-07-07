import {
  CalendarViewMonth,
  ColorLens,
  DesktopMac,
  Home,
  Message,
  Settings,
} from "@mui/icons-material";
import { Box, IconButton, Stack, styled } from "@mui/material";
import React from "react";

const SidebarIcon = styled(IconButton)(({ theme }) => ({
  borderRadius: "6px",
  backgroundColor: "rgba(245,245,245,.1)",
  color: "#f5f5f5",
  cursor: "pointer",
  marginBottom: "0.5rem",
  fontSize: "1.25rem",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
}));

export const Sidebar = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <SidebarIcon
        sx={{
          backgroundColor: "yellow",
          color: "#000",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "yellow",
          },
        }}
      >
        <DesktopMac />
      </SidebarIcon>
      <Box sx={{ overflowX: "hidden", overflowY: "auto" }}>
        <SidebarIcon>
          <Home />
        </SidebarIcon>
        <SidebarIcon>
          <Message />
        </SidebarIcon>
        <SidebarIcon>
          <CalendarViewMonth />
        </SidebarIcon>
        <SidebarIcon>
          <ColorLens />
        </SidebarIcon>
      </Box>
      <SidebarIcon>
        <Settings />
      </SidebarIcon>
    </Stack>
  );
};

import { Stack, styled } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Welcome } from "./api/Welcome";
import { Aside } from "./components/Aside/Aside";
import { Topbar } from "./components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
const SidebarBox = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  position: "sticky",
  width: "4.5rem",
  height: "100vh",
  maxHeight: "calc(100vh - 4.5rem )",
  top: "1.5rem",
  left: "1.5rem",
  padding: "0.75rem",
  borderRadius: "0.3rem",
  backgroundColor: "#2196f3",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  margin: "1.5rem 3rem",
}));

const AsideBox = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  position: "sticky",
  width: "30rem",
  height: "100vh",
  marginTop: "1.5rem",
  maxHeight: "calc(100vh - 4.5rem )",
  top: "1.5rem",
  right: "1.5rem",
  padding: "0.75rem",
  borderRadius: "0.3rem",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

function App() {
  const [username, setUsername] = useState("");
  Welcome()
    .then((response) => {
      setUsername(response.data.user.username);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="App" style={{ backgroundColor: "rgba(245,245,245)" }}>
      <Stack direction="row">
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <ContainerBox>
          <Topbar />
          <Outlet />
        </ContainerBox>
        <AsideBox>
          <Aside username={username} />
        </AsideBox>
      </Stack>
    </div>
  );
}

export default App;

import { Person } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

export const HeadBox = (props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Avatar
          sx={{
            backgroundColor: "rgba(33,150,243,0.1)",
            padding: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Person
            sx={{
              fontSize: "4rem",
              color: "#2196f3",
              borderRadius: "50%",
            }}
          />
        </Avatar>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography variant="h6" component="h2" color="gray">
          {props.title}
        </Typography>
      </Stack>
    </div>
  );
};

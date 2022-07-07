import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { HeadBox } from "../HeadBox/HeadBox";
import React from "react";
import { Delete, Person } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import VerticalLinearStepper from "../Stepper/Stepper";

export const Aside = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <HeadBox title={"Hello " + props.username} />
      <VerticalLinearStepper sx={{ margin: "20px 0" }} />
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Box>
  );
};

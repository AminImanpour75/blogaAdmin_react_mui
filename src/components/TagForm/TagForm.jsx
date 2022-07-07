import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export const TagForm = (props) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (!value) {
      return;
    } else {
      props.setTags([...props.tags, { tag: value, selected: true }]);
      setValue("");
    }
  };

  return (
    <Box padding="1rem">
      <Stack direction="column">
        <Typography variant="h6" component="h2">
          Article Tags
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} mt={2}>
          <TextField
            id="outlined-basic"
            label="Tags"
            variant="outlined"
            size="small"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </Stack>
        <FormGroup sx={{ mt: "10px" }}>
          {props.loading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {!props.loading &&
            props.tags.map((tag, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onClick={() => {
                      props.onClick(index);
                    }}
                    checked={tag.selected}
                  />
                }
                label={tag.tag}
              />
            ))}
        </FormGroup>
      </Stack>
    </Box>
  );
};

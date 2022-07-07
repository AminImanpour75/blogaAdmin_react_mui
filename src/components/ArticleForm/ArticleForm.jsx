import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const ArticleForm = (props) => {
  const [title, setTitle] = useState(props.article ? props.article.title : "");
  const [description, setDescription] = useState(
    props.article ? props.article.description : ""
  );
  const [body, setBody] = useState(props.article ? props.article.body : "");
  return (
    <Box>
      <Stack direction="column" padding="1rem">
        <Box>
          <Typography variant="h6" component="h2">
            {props.title}
          </Typography>
          <Stack direction="row" alignItems="center" mt="1rem">
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Title"
                  placeholder="Write title ..."
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  id="outlined-required"
                  label="Description"
                  placeholder="Write description ..."
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={12}
                  required
                  id="outlined-required"
                  label="Body"
                  placeholder="Write body ..."
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="error">
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    disabled={props.loading}
                    onClick={() => {
                      props.onClick(body, title, description);
                    }}
                  >
                    {props.btnText}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

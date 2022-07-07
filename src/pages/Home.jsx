import { Box, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import DataTable from "../components/DataTable/DataTable";

export const Home = () => {
  return (
    <Box>
      <Stack direction="row" mt="1.5rem">
        <Grid container>
          <Grid item lg={12}>
            <Paper sx={{ overflowY: "auto" }}>
              <DataTable />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

import React from "react";
import { Box, Grid } from "@mui/material";

const MUIGrid = () => {
  return (
    // <Grid container spacing={2}>
    <Grid container rowSpacing={2} columnSpacing={1}>
        {/*
        grid container contains 12 divsion of width so
        xs: for mobile or more than mobile screen (extra small device)
        sm: for tablet or more than tablet screen (small devices)
        */}
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={2}>
          item - 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={2}>
          item - 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={2}>
          item - 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={2}>
          item - 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MUIGrid;

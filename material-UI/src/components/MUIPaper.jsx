import React from "react";
import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MUIPaper = () => {
  return (
    <Paper sx={{ padding: "32px"}} elevation={4}>
        {/* elevation set how more shadow */}
        {/* paper can be used on login forms as a model */}
      <Stack
        sx={{ border: "1px solid #000" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* spacing default (1 = 8px) */}
        {/* default stack has column direction */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Styles
        </Box>
        <Box
          display={"flex"}
          width={"100px"}
          height={"100px"}
          bgcolor={"success.light"}
          p={2}
        >
          few styles
        </Box>
      </Stack>
      <Grid container rowSpacing={2} columnSpacing={1} my={4}>
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
    </Paper>
  );
};

export default MUIPaper;

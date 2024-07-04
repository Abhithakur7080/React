import React from "react";
import { Box, Divider, Stack } from "@mui/material";

const MUIStack = () => {
  return (
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
  );
};

export default MUIStack;

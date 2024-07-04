import React from "react";
import { Box } from "@mui/material";

const MUIBox = () => {
  return (
    <>
      <Box>Plane div tag</Box>
      <Box component={"span"}>span tag</Box>
      {/* inline styles */}
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
      {/* few shorthand style props */}
      <Box
        display={"flex"}
        width={"100px"}
        height={"100px"}
        bgcolor={"success.light"}
        p={2}
      >
        few styles
      </Box>
    </>
  );
};

export default MUIBox;

import React from "react";
import { Link, Stack, Typography } from "@mui/material";

const MUILink = () => {
  return (
    <Stack direction={"row"} spacing={2} m={4}>
      <Link href="#" variant="body2">Primary</Link>
      <Typography variant="h6">
        <Link href="#" color={"secondary"} underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MUILink;

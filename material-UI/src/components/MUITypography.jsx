import React from "react";
import { Typography } from "@mui/material";

const MUITypography = () => {
  return (
    <>
      {/* h tags */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      {/* varient is h4 but the h1 tag here and styles of h4 tag */}
      {/* gutterBottom have some margin on bottom */}
      <Typography variant="h4" component={"h1"} gutterBottom>h1 Heading tag apply styles of h4 tag</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* subtitle varient -> h6 tag but font weight changed */}
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>

      {/* body varient -> p tag but font size changed */}
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
        perferendis saepe corrupti aliquam sequi placeat.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
        voluptatem repellendus fugiat dolor perspiciatis, enim nemo ea quibusdam
        hic fuga.
      </Typography>
    </>
  );
};

export default MUITypography;

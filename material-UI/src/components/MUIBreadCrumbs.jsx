import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";

const MUIBreadCrumbs = () => {
  return (
    <Box m={2}>
      {/* by default separator is "/" but we can change individual */}
      {/* <Breadcrumbs aria-label="breadcrumb"> */}
      {/* <Breadcrumbs aria-label="breadcrumb" separator="-"> */}
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={3} //default max item 8 but we can change
        itemsBeforeCollapse={2} //how much items before collapse button
        // itemsAfterCollapse={2} //how much items after collapse button
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MUIBreadCrumbs;

import React from "react";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: 250,
  width: 250,
//   backgroundColor: theme.status.danger,
  backgroundColor: theme.palette.neutral.main,
}));

const MUIResponsiveness = () => {
  return (
    <>
      {/* <Box
        sx={{
          width: {
            xs: 100, //0< above px
            sm: 200, //600< above px
            md: 300, //900< above px
            lg: 400, //1200< above px
            xl: 500, //1536< above px
          },
          height: 300,
          bgcolor: "primary.main",
        }}
      >
        MUIResponsiveness
      </Box> */}
      <StyledBox
        sx={{
          width: {
            xs: 100, //0< above px
            sm: 200, //600< above px
            md: 300, //900< above px
            lg: 400, //1200< above px
            xl: 500, //1536< above px
          },
          height: 300,
        //   bgcolor: "secondary.main",
        }}
      >
        MUIResponsiveness
      </StyledBox>
    </>
  );
};

export default MUIResponsiveness;

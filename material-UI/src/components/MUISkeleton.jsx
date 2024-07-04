import React, { useEffect, useState } from "react";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";

const MUISkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* <Stack spacing={1} width={250}> */}
      {/* default varient="text" */}
      {/* we can change default animation is pulse */}
      {/* <Skeleton animation="wave" />
        <Skeleton variant="circular" width={30} height={30} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="wave"
        />
      </Stack> */}
      <Box sx={{ width: 250 }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ width: "100%", marginTop: 12 }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>A</Avatar>
          )}
          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">
                  Hey this is Material UI applied in React
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MUISkeleton;

import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MUIRating = () => {
  //   const [value, setValue] = useState(null);
  const [value, setValue] = useState(3);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size="large"
        // by default star icon for rating but we can change according
        icon={<FavouriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size="large"
        // by default star icon for rating but we can change according
        icon={<FavouriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        readOnly // when we haven't to user change rating value
      />
      <Rating
        value={value}
        onChange={handleChange}
        size="large"
        // by default star icon for rating but we can change according
        icon={<FavouriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly //highlight only that point selected by using emojis like facebook feedback
      />
    </Stack>
  );
};

export default MUIRating;

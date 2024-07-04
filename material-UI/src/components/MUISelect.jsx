import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

const MUISelect = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
//   console.log(country);
  console.log(countries);
  //   for country
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  //   for countries
  const handleChange2 = (event) => {
    const value = event.target.value;
    console.log(value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"250px"}>

      {/* single select dropdown */}
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="CN">China</MenuItem>
      </TextField>

      {/* multiple select dropdown */}
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChange2}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country."
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="CN">China</MenuItem>
      </TextField>

    </Box>
  );
};

export default MUISelect;

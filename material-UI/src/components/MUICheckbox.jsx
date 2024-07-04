import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MUICheckbox = () => {
  const [value, setValue] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(value);
  console.log(skills);
  const handleChange = (event) => {
    setValue(event.target.checked);
  };
  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      {/* simple text checkbox */}
      <Box>
        <FormControlLabel
          label="I accept terms and conditions."
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={value}
              onChange={handleChange}
            />
          }
        />
      </Box>
      {/* icon checkbox */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      {/* multiple select checkboxes */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          {/* row props align all elements in row */}
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="React.js"
              control={
                <Checkbox
                  value={"react"}
                  checked={skills.includes("react")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            Please select atleast 1 skill from here.
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MUICheckbox;

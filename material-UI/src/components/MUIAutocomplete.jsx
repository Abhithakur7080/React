import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillOptions = skills.map((skill, index) => ({
    id: index+1,
    label: skill
}))

const MUIAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log({value});
  console.log({skill});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeOptions = (event, newValue) => {
    setSkill(newValue);
  };
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
          />
        )}
        value={value}
        onChange={handleChange}
        freeSolo // add also if value isn't exist in array
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
          />
        )}
        value={skill}
        onChange={handleChangeOptions}
      />
    </Stack>
  );
};

export default MUIAutocomplete;

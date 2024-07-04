import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MUITextfield = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      {/* different type of text field(input/textarea) varients */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* text field(input/textarea) size & colors(default) */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Small Secondary" size="small" color="primary" />
      </Stack>
      {/* text field(input/textarea) with required props */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" size="small" color="secondary" required />
      </Stack>
      {/* text field(input/textarea) with helper text */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Enter Password"
          type="password"
          helperText="Do not share your password with anyone."
        />
      </Stack>
      {/* text field(input/textarea) with read only field */}
      {/* input field can focused & read but cannot write or editable */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      {/* text field(input/textarea) with required & error props */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Enter email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        //   error={true}
          error={!value}
          helperText={!value ? "Email is required" : ""}
        />
      </Stack>
    </Stack>
  );
};

export default MUITextfield;

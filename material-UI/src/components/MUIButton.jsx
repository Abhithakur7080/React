import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MUIButton = () => {
  const [formats, setFormats] = useState(null);
  console.log(formats);
  const handleFormats = (event, updatedFormats) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      {/* different type of button varients */}
      <Stack spacing={2} direction={"row"}>
        {/* href anchor element */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* different type of button colors(default) */}
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* different type of button sizes */}
      {/* <Stack display={"block"} spacing={2} direction={"row"}> */}
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* button including with icon */}
      <Stack spacing={2} direction={"row"}>
        {/* add icon before the text */}
        {/* disableRipple means not ripple effect on click */}
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        {/* add icon after the text */}
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        {/* only icon button */}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* button group components */}
      <Stack spacing={4} direction={"row"}>
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left button clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* toggle buttons and groups */}
      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text-formating"
          value={formats}
          onChange={handleFormats}
          exclusive // for can selected only one field button else can selected multiple buttons
          size="small"
          color="success"
          orientation="vertical"
        >
          <ToggleButton value={"bold"}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MUIButton;

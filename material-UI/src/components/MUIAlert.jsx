import React from "react";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MUIAlert = () => {
  return (
    <Stack spacing={2}>
      {/* default alerts */}
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>
      {/* outlined alerts */}
      <Alert variant="outlined" severity="error" onClose={() => alert("Error closed")}>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning" onClose={() => alert("Warning closed")}>
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info" onClose={() => alert("Info closed")}>
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success" onClose={() => alert("Success closed")}>
        This is an success alert
      </Alert>
      {/* filled alerts */}
      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="success" icon={<CheckIcon fontSize="inherit"/>} action={
        <Button color="inherit" size="small">Undo</Button>
      }>
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};

export default MUIAlert;

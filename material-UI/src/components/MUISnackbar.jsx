import React, { forwardRef, useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";

const SnackbarAlert = forwardRef(function (props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MUISnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    console.log(reason);
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
      /> */}
      {/* custom alert toast notification */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MUISnackbar;

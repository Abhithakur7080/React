import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MUIBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      {/* dot variant and if invisible true, if new notification the invisible false */}
      <Badge variant="dot" color="primary" invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MUIBadge;

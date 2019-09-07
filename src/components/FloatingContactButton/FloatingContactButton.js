import React from "react";
import { Typography, Fab } from "@material-ui/core";
import { Email as EmailIcon } from "@material-ui/icons";

import useStyles from "./FloatingContactButton.style";

export function FloatingActionButtonZoom() {
  const classes = useStyles();

  return (
    <Fab variant="extended" className={classes.fab} color="primary">
      <EmailIcon />
      <Typography variant="body1">Contact</Typography>
    </Fab>
  );
}

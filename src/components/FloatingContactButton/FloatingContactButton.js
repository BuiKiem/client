import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./FloatingContactButton.style";

export function FloatingActionButtonZoom() {
  const classes = useStyles();

  return (
    <Fab className={classes.fab} color="primary">
      <AddIcon />
    </Fab>
  );
}

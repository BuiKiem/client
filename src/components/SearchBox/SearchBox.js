import React from "react";
import { Paper, Grid } from "@material-ui/core";

import useStyles from "./SearchBox.style";

export function SearchBox() {
  const classes = useStyles();

  return (
    <Paper className={classes.searchBox}>
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <div style={{ backgroundColor: "blue" }}>blue</div>
        </Grid>
        <Grid item xs={9}>
          <div style={{ backgroundColor: "green" }}>green</div>
        </Grid>
      </Grid>
    </Paper>
  );
}

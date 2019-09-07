import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  searchBox: {
    height: "250px",
    width: "75%",
    margin: "0 auto"
  }
}));

export function SearchBox() {
  const classes = useStyles();

  return (
    <Paper className={classes.searchBox}>
      <div>ffdsfdsfs</div>
    </Paper>
  );
}

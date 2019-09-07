import React from "react";
import { Paper, Typography } from "@material-ui/core";

import useStyles from "./Footer.style";

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Khoa Luan Tot Nghiep - Bui Van Trung
        </Typography>
        <Typography component="p">@2019 All right reserved</Typography>
      </Paper>
    </footer>
  );
}

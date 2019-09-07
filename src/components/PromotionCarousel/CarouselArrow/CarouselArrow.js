import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  slideArrow: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    cursor: "pointer",
    position: "absolute",
    top: "50%"
  },
  left: {
    left: theme.spacing(1)
  },
  right: {
    right: theme.spacing(1)
  }
}));

export function CarouselArrow({ direction, clickFunction }) {
  const classes = useStyles();

  return (
    <IconButton
      className={`${classes.slideArrow} ${classes[direction]}`}
      onClick={clickFunction}
    >
      {direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </IconButton>
  );
}

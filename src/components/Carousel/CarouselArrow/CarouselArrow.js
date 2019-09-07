import React from "react";
import { IconButton } from "@material-ui/core";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon
} from "@material-ui/icons";

import useStyles from "./CarouselArrow.style";

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

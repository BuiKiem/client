import React from "react";

import useStyles from "./CarouselItem.style";

export function CarouselItem({ url }) {
  const classes = useStyles({ url });

  return <div className={classes.imageSlide} />;
}

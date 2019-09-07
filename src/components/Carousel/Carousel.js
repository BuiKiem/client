import React, { useState } from "react";
import { Button } from "@material-ui/core";

import { CarouselItem } from "./CarouselItem/CarouselItem";
import { CarouselArrow } from "./CarouselArrow/CarouselArrow";

import useStyles from "./Carousel.style";

export function Carousel() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgUrls = [
    "https://picsum.photos/id/0/400/600",
    "https://picsum.photos/id/10/400/600",
    "https://picsum.photos/id/20/400/600"
  ];
  const lastIndex = imgUrls.length - 1;

  function previousSlide() {
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  }

  function nextSlide() {
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }

  return (
    <div className={classes.carousel}>
      <CarouselArrow direction="left" clickFunction={previousSlide} />
      <CarouselItem url={imgUrls[currentIndex]} />

      <CarouselArrow direction="right" clickFunction={nextSlide} />

      <Button size="large" className={classes.carouselButton}>
        Detail
      </Button>
    </div>
  );
}

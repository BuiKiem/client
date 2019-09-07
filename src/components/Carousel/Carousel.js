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
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;

  function previousSlide() {
    setCurrentIndex(prevIndex);
  }

  function nextSlide() {
    setCurrentIndex(nextIndex);
  }

  return (
    <div className={classes.carousel}>
      <CarouselArrow direction="left" clickFunction={previousSlide} />

      <CarouselItem url={imgUrls[prevIndex]} />
      <CarouselItem url={imgUrls[currentIndex]} />
      <CarouselItem url={imgUrls[nextIndex]} />

      <CarouselArrow direction="right" clickFunction={nextSlide} />

      <Button size="large" className={classes.carouselButton}>
        Detail
      </Button>
    </div>
  );
}

import React, { useState } from "react";

import { CarouselItem } from "./CarouselItem/CarouselItem";
import { CarouselArrow } from "./CarouselArrow/CarouselArrow";
import { Paper } from "@material-ui/core";

export function PromotionCarousel() {
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
    <Paper
      className="carousel"
      style={{ position: "relative", width: "100%", height: "400px" }}
    >
      <CarouselArrow
        direction="left"
        clickFunction={previousSlide}
        glyph="&#9664;"
      />
      <CarouselItem url={imgUrls[currentIndex]} />

      <CarouselArrow
        direction="right"
        clickFunction={nextSlide}
        glyph="&#9654;"
      />
    </Paper>
  );
}

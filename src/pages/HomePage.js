import React from "react";

import { Carousel } from "../components/Carousel/Carousel";
import { SearchBox } from "../components/SearchBox/SearchBox";

export function HomePage() {
  return (
    <div>
      <Carousel />
      <SearchBox />
    </div>
  );
}

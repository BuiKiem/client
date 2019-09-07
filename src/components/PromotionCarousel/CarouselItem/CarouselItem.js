import React from "react";

export function CarouselItem({ url }) {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    transition: "background-image .3s ease-in-out"
  };

  return <div component="div" className="image-slide" style={styles} />;
}

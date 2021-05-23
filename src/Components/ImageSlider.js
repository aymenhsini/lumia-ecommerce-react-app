import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageSlider(img) {
  return (
    <>
      <Carousel
        width="400px"
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
      >
        <div>
          <img src={img.img[0]} alt="" />
        </div>
        <div>
          <img src={img.img[1]} alt="" />
        </div>
        <div>
          <img src={img.img[2]} alt="" />
        </div>
      </Carousel>
    </>
  );
}

export default ImageSlider;

import React from "react";
import Image from "next/image";

import classes from "./Slider.module.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? classes["btn-slide next"]
          : classes["btn-slide prev"]
      }>
      <Image src={direction === "next" ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  );
}

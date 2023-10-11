import React, { useState } from "react";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };
};
export default Slideshow

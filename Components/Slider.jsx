import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/add1.jpg";
import img2 from "../images/add2.jpg";
import img3 from "../images/add3.webp";
import img4 from "../images/add4.avif";
import "../src/App";

function Slider({ slideIndex, setSlideIndex }) {
  const products = [
    {
      src: img1,
      caption: "Cars",
    },
    {
      src: img2,
      caption: "washingpowders",
    },
    {
      src: img3,
      caption: "Vehicles",
    },
    {
      src: img4,
      caption: "Mobiles",
    },
  ];
  if (slideIndex > products.length - 1) {
    return setSlideIndex(0);
  }

  return (
    <div>
      <div>
        {products.map((p, i) => (
          <div key={i} id={i === slideIndex ? "myslide" : "myslidenone"}>
            <FontAwesomeIcon
              onClick={() => {
                if (slideIndex <= 0) {
                  return setSlideIndex(products.length - 1);
                } else {
                  setSlideIndex(slideIndex - 1);
                }
              }}
              id="lftarrow"
              icon={faChevronLeft}
            />

            <img id="slideimg" src={p.src} alt={p.caption} />
            <FontAwesomeIcon
              onClick={() => {
                if (slideIndex > products.length - 2) {
                  return setSlideIndex(0);
                } else {
                  setSlideIndex(slideIndex + 1);
                }
              }}
              id="rgtarrow"
              icon={faChevronRight}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

"use client";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import img1 from "../../../public/assets/images/banner-3-min.webp";
import img2 from "../../../public/assets/images/banner-5-min.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarouselData = [
  {
    image: img1,
    title: "Make Your Dreams Comes True",
    subtitle: "Grow with Red Fire AI",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis maxime, reprehenderit ratione adipisci totam, earum explicabo quaerat accusantium repudiandae cumque nisi nulla! Autem laborum est porro at aliquam nostrum provident?",
    button: "About Us",
    btn_link: "#about",
  },
  {
    image: img2,
    title: "Let Us Know What You're Looking",
    subtitle: "for , We 'll Build it For you",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis maxime, reprehenderit ratione adipisci totam, earum explicabo quaerat accusantium repudiandae cumque nisi nulla! Autem laborum est porro at aliquam nostrum provident?",
    button: "Our Services",
    btn_link: "#services",
  },
  // Add more carousel items here
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length
    );
  };

  const currentItem = CarouselData[activeIndex];
  const backgroundImageStyle = {
    backgroundImage: `url(${currentItem.image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Fade>
      <div className="w-full">
        <div className="relative w-full h-[700px]" style={backgroundImageStyle}>
          <div className=" max-w-[1150px] mr-auto ml-auto pt-28 max-lg:p-10">
            <Fade top>
              <h1 className="text-[#cf2e2e] font-bold text-5xl max-sm:text-2xl">
                {currentItem.title}
              </h1>
            </Fade>
            <Fade bottom>
              <h1 className="text-[#cf2e2e] font-semibold text-4xl max-sm:text-xl mt-3">
                {currentItem.subtitle}
              </h1>
              <p className="w-1/2 font-medium text-lg my-4 max-lg:w-full max-md:text-base">
                {currentItem.description}
              </p>
            </Fade>
            <Fade bottom>
              <div className="w-fit bg-black text-white text-lg font-semibold px-5 py-2 cursor-pointer">
                {currentItem.button}
              </div>
            </Fade>
          </div>

          <button
            onClick={handlePrev}
            className="bg-black absolute top-[50%] opacity-60 hover:opacity-100 flex justify-center items-center left-10 max-lg:left-5 text-white w-[35px] h-[35px]  rounded-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "20px" }} />
          </button>
          <button
            onClick={handleNext}
            className="bg-black absolute top-[50%] opacity-60 hover:opacity-100 flex justify-center items-center right-10 max-lg:right-5 text-white w-[35px] h-[35px]  rounded-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </Fade>
  );
}

export default Carousel;

import React, { useEffect, useState } from "react";
import Carousel from "react-simply-carousel";
import { Img } from "../styles/styles";

const Courses = () =>{
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="mt-4">
        <h2 className="pl-3 font-semibold mb-3 text-[#4B4B4B]">Courses</h2>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text"
          }
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
            show: false,
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          }
        }}
        backwardBtnProps={{
            show:false,
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              border: 0,
              background: "gray",
              marginRight:"10px",
            }
          },
          activeItemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              border: 0,
              background: "black",
              marginRight:"10px"
            }
          }
        }}
        itemsToShow={2}
        speed={1000}
        easing="linear"
      >
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            style={{
              width: 220,
              paddingLeft: '1rem',
              boxSizing: "border-box"
            }}
            key={index}
          >
            <div>
                <Img className="cursor-pointer" src="https://res.cloudinary.com/academiageek/image/upload/v1658616724/Liveedu/Mask_group_ru9tlx.png"/>
            </div>
            <div className="flex justify-between mb-3">
                <div>
                    <span className="text-lg">Elementary</span>
                    <p className="text-[10px]">For beginners and intermediates</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169974/Liveedu/Coins_gl9plh.png" alt="" width="15" />
                    <span>520</span>
                </div>
            </div>
          </div>

        ))}
      </Carousel>
    </div>
  );
}
export default Courses
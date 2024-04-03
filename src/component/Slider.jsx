import React from "react";
import Carousel from "react-material-ui-carousel";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1600",
  ];
  return (
    <div>
      <Carousel autoPlay>
        {data.map((item, i) => (
          <div key={i} className="h-[50%]">
            <img src={item} alt="" className="h-[100%]" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

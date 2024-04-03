import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-[280px] flex flex-col gap-[10px] ">
        <div className="w-[100%] h-[400px]">
          {item.isNew && (
            <span className="absolute bg-white text-[#008080] p-[3px]  ">
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <h2 className="text-[16px] font-normal text-black">{item.title}</h2>
        <div className="flex gap-[20px]">
          <h3 className="text-[1em] font-semibold line-through text-gray-500">
            ${item.oldPrice}
          </h3>
          <h3 className="text-[18px] font-medium">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;

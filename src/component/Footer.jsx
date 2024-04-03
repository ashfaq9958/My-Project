import React from "react";
import payment from "../assets/payment.png";

const Footer = () => {
  return (
    <>
      <div className="flex  justify-around ">
        <div className=" w-48">
          <h1 className="text-base font-semibold">Categories</h1>
          <div>Women</div>
          <div>Men</div>
          <div>Shoes</div>
          <div>Accessories</div>
          <div>New Arrivals</div>
        </div>

        <div className="">
          <h1 className="text-base font-semibold">Links</h1>
          <div>FAQ</div>
          <div>Pages</div>
          <div>Stores</div>
          <div>Compare</div>
          <div>Cookies</div>
        </div>

        <div className="flex justify-between w-[40%] gap-10">
          <div className="w-[100%]">
            <h1 className="text-base font-semibold">About</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              deleniti, dolore ipsum laboriosam ducimus nesciunt porro cum
              asperiores fugit aliquam.
            </div>
          </div>

          <div className="w-[100%]">
            <div className="text-base font-semibold">Contact</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              minus ducimus omnis beatae ullam consectetur molestiae illum id
              possimus fugit.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex w-[79%] mx-auto items-center justify-between">
        <div>Ashfaq's Store © Copyright 2024. All Rights Reserved</div>
        <div className="w-[35%]">
          <img src={payment} alt="" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default Footer;

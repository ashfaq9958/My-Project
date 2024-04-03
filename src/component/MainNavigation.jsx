import React from "react";
import { Link } from "react-router-dom";
import india from "../assets/india.png";
import logo from "../assets/elogo2.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MainNavigation = () => {
  return (
    <div className="flex items-center justify-between h-16 px-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <img src={india} alt="" className="w-6" />
          <KeyboardArrowDownIcon />
        </div>

        <div>
          <span>IND</span>
          <KeyboardArrowDownIcon />
        </div>

        <div>
          <Link to="/products/1">Women</Link>
        </div>

        <div>
          <Link to="/products/2">Men</Link>
        </div>

        <div>
          <Link to="/products/3">Children</Link>
        </div>
      </div>

      <div>
        <div className="flex">
          <Link to="/">
            <div className="flex items-center">
              <div>
                <img src={logo} alt="" className="w-[70px]" />
              </div>
              <div className="text-[orange] ">ASHFAQSTORE</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex gap-8 justify-between">
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/contact">Stores</Link>
        </div>

        <div className="flex gap-4 text-[#777] cursor-pointer items-center">
          <SearchIcon />
          <PersonIcon />
          <FavoriteBorderIcon />
          <div className="flex ">
            <ShoppingCartIcon />
            <span className="rounded-[50%] bg-blue-600 text-white relative bottom-3 right-2  h-[20px] w-[20px] text-center flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;

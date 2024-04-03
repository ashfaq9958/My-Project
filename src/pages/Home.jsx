import React from "react";
import Slider from "../component/Slider";
import FeaturedProducts from "../component/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts type='Featured'/>
      <FeaturedProducts type='Trending'/>
    </>
  );
};

export default Home;

import React from "react";
import Slider from "../component/Slider";
import FeaturedProducts from "../component/FeaturedProducts";
import Categories from "../component/Categories";

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </>
  );
};

export default Home;

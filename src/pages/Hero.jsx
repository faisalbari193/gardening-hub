import React from "react";
import Banner from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TopTrendingTips from "../components/TrendingTips";

const Hero = () => {
  return (
    <div>
      <Banner />
      <ActiveGardeners />
      <TopTrendingTips />
    </div>
  );
};

export default Hero;

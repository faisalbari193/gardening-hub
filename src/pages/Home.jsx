import React from "react";
import Hero from "./Hero";
import Reviewers from "../components/Reviewers";
import FuturePlan from "../components/FuturePlan";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reviewers />
      <FuturePlan />
    </div>
  );
};

export default Home;

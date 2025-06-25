import React from "react";
import { useLoaderData } from "react-router";
import GardenerCard from "../components/GardenerCard";

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  return (
    <div className="flex flex-wrap -m-2 p-4">
      {
        gardeners.map(gardener=><GardenerCard key={gardener._id} gardener={gardener}></GardenerCard>)
      }
     
    </div>
  );
};

export default ExploreGardeners;

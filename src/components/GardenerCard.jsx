import React from "react";
import { motion } from "framer-motion";

const GardenerCard = ({ gardener }) => {
  const {
    gardenerName,
    age,
    gender,
    status,
    experiences,
    image,
    totalSharedTips,
  } = gardener;

  return (
    <motion.div
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="card bg-white shadow-lg border rounded-xl hover:shadow-2xl transition-all duration-300 h-full">
        <figure className="px-4 pt-4 flex justify-center">
          <img
            src={image}
            alt={gardenerName}
            className="rounded-full w-20 h-20 object-cover border border-gray-300"
          />
        </figure>
        <div className="card-body text-left px-4 py-3 space-y-1 text-sm sm:text-base text-black">
          <h2 className="text-lg font-bold text-black">{gardenerName}</h2>
          <p className="text-black">
            <span className="font-medium text-black">Age:</span> {age}
          </p>
          <p className="text-black">
            <span className="font-medium text-black">Gender:</span> {gender}
          </p>
          <p className="text-black">
            <span className="font-medium text-black">Status:</span> {status}
          </p>
          <p className="text-black">
            <span className="font-medium text-black">Experience:</span>{" "}
            {experiences}
          </p>
          <p className="text-black">
            <span className="font-medium text-black">Total Tips:</span>{" "}
            {totalSharedTips}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GardenerCard;

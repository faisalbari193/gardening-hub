import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const TipDetails = () => {
  const tip = useLoaderData();
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center">{tip.title}</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="h-64 object-cover rounded mb-6"
        />
        <div className="flex flex-wrap justify-between items-center mb-4">
          <p className="text-lg font-semibold text-green-700">
            Category: <span className="text-gray-800">{tip.category}</span>
          </p>
          {tip.author && (
            <p className="text-sm text-gray-600">
              Shared by: <span className="font-medium">{tip.author}</span>
            </p>
          )}
        </div>
        <p className="text-gray-800 leading-relaxed mb-6">
          {tip.description || "No detailed description provided."}
        </p>
        <button
          onClick={handleLike}
          className={`flex items-center px-4 py-2 rounded text-white transition ${
            liked ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {liked ? (
            <>
              <FaHeart className="mr-2" /> Liked
            </>
          ) : (
            <>
              <FaRegHeart className="mr-2" /> Like
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TipDetails;

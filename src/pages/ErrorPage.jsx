import React from "react";
import { Link } from "react-router";
import { FaSeedling } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('https://i.postimg.cc/6q5kFbLB/3737258.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-8 max-w-md text-center shadow-xl">
        <FaSeedling className="text-green-600 text-5xl mb-4 mx-auto animate-bounce" />
        <h1 className="text-6xl font-bold text-green-700 mb-2">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          This patch of the garden doesn't exist. 🌿
        </p>
        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const FuturePlan = () => {
  const [text] = useTypewriter({
    words: [
      "Educate more people about eco-friendly gardening.",
      "Launch a community seed exchange program.",
      "Organize monthly gardening workshops.",
      "Create a mobile app for smart plant care.",
      "Promote rooftop and urban gardening.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      className="bg-green-50 dark:bg-gray-900 text-center py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800 dark:text-green-300">
        🌿 Our Future Gardening Vision
      </h2>
      <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
        <span>{text}</span>
        <Cursor cursorColor="#22c55e" />
      </p>
    </motion.div>
  );
};

export default FuturePlan;

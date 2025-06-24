import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Reviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gardening-server-coral.vercel.app/reviewers")
      .then((res) => res.json())
      .then((data) => {
        setReviewers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviewers:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading reviewers...</p>;
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        🌼 Garden Reviewers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviewers.map((reviewer, index) => (
          <motion.div
            key={index}
            className="bg-white  shadow-md rounded-lg p-4 border border-green-200 dark:border-green-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl text-black font-semibold mb-2">
              {reviewer.name}
            </h3>
            <p className="text-black ">{reviewer.review}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviewers;

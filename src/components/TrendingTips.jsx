import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopTrendingTips = () => {
  const [topTips, setTopTips] = useState([]);

  useEffect(() => {
    fetch("https://gardening-server-coral.vercel.app/trending")
      .then((res) => res.json())
      .then((data) => setTopTips(data));
  }, []);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`https://gardening-server-coral.vercel.app/trending/${id}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        setTopTips((prevTips) =>
          prevTips.map((tip) =>
            tip._id === id ? { ...tip, totalLiked: tip.totalLiked + 1 } : tip
          )
        );
      }
    } catch (err) {
      console.error("Error updating like:", err);
    }
  };

  return (
    <section className="py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🔥 Top Trending Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topTips.map((tip, index) => (
          <motion.div
            key={tip._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-4 shadow-lg bg-white rounded-xl"
          >
            <h3 className="mt-2 text-xl text-black font-semibold">{tip.title}</h3>
            <p className="text-sm text-gray-600">{tip.category}</p>
            <button
              onClick={() => handleLike(tip._id)}
              className="mt-2 flex items-center space-x-1 text-green-600 hover:text-green-800 text-sm"
            >
              <span>❤️ {tip.totalLiked}</span>
              <span>Like</span>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopTrendingTips;

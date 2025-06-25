import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ActiveGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("https://gardening-server-coral.vercel.app/gardener-active")
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        🌿 Active Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gardeners.map((gardener, index) => (
          <motion.div
            key={gardener._id}
            className="p-4 shadow rounded-lg bg-white border border-green-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-20 h-20 object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg text-black font-semibold mt-3 text-center">
              {gardener.gardenerName}
            </h3>
            <p className="text-center text-black">Gender: {gardener.gender}</p>
            <p className="flex items-center justify-center text-black gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {gardener.status}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActiveGardeners;

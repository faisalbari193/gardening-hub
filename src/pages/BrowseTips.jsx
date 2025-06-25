import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [viewMode, setViewMode] = useState("table");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTips = (difficulty) => {
    setLoading(true);
    let url = "https://gardening-server-coral.vercel.app/tipsall-public";
    if (difficulty && difficulty !== "All") {
      url += `?difficulty=${difficulty}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTips(difficultyFilter);
  }, [difficultyFilter]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
        🌿 Browse Public Garden Tips
      </h2>

      <div className="mb-4 flex flex-col sm:flex-row justify-end gap-2">
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="select select-bordered text-black w-full sm:w-48"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="select select-bordered text-black w-full sm:w-40"
        >
          <option value="table">Table View</option>
          <option value="card">Card View</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center py-6 text-black">Loading tips...</p>
      ) : tips.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          No tips available for this difficulty.
        </p>
      ) : viewMode === "table" ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full min-w-[600px] text-black bg-white text-xs sm:text-sm">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th className="text-black">No</th>
                <th className="text-black">Image</th>
                <th className="text-black">Title</th>
                <th className="text-black">Category</th>
                <th className="text-black">Difficulty</th>
                <th className="text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip, index) => (
                <tr key={tip._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{tip.title}</td>
                  <td>{tip.category}</td>
                  <td>{tip.difficulty}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/tip-details/${tip._id}`)}
                      className="btn btn-xs sm:btn-sm btn-outline btn-success"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <div
              key={tip._id}
              className="card bg-white text-black shadow border p-4 rounded-lg"
            >
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{tip.title}</h3>
              <p className="text-sm text-gray-700">Category: {tip.category}</p>
              <p className="text-sm text-gray-700">
                Difficulty: {tip.difficulty}
              </p>
              <div className="mt-3">
                <button
                  onClick={() => navigate(`/tip-details/${tip._id}`)}
                  className="btn btn-sm btn-outline btn-success"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;

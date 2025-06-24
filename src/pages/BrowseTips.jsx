import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("All");
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
    fetchTips("All");
  }, []);

  useEffect(() => {
    fetchTips(difficultyFilter);
  }, [difficultyFilter]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
        🌿 Browse Public Garden Tips
      </h2>

      <div className="mb-4 flex flex-wrap justify-end">
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="select select-bordered w-full sm:w-48 text-black mb-2 sm:mb-0"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center py-6 text-black">Loading tips...</p>
      ) : (
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
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded"
                    />
                  </td>
                  <td className="whitespace-nowrap">{tip.title}</td>
                  <td className="whitespace-nowrap">{tip.category}</td>
                  <td className="whitespace-nowrap">{tip.difficulty}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/tip-details/${tip._id}`)}
                      className="btn btn-xs sm:btn-sm btn-outline btn-success whitespace-nowrap"
                      title="See More"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))}
              {tips.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">
                    No tips available for this difficulty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BrowseTips;

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://gardening-server-coral.vercel.app/tipsall-mytips/${user.uid}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gardening-server-coral.vercel.app/tipsall/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyTips((prevTips) => prevTips.filter((tip) => tip._id !== id));
              Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
        🌿 My Garden Tips
      </h2>

      {myTips.length === 0 ? (
        <div className="text-center text-black">
          You haven't added any tips yet.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-4">
          <table className="table w-full min-w-[600px] text-black text-sm">
            <thead className="bg-base-200 font-semibold">
              <tr>
                <th className="text-black">No</th>
                <th className="text-black">Title</th>
                <th className="text-black">Category</th>
                <th className="text-black">Availability</th>
                <th className="text-black">Image</th>
                <th className="text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tip, index) => (
                <tr key={tip._id}>
                  <td>{index + 1}</td>
                  <td className="font-semibold">{tip.title}</td>
                  <td>
                    <span className="badge badge-primary text-white">
                      {tip.category}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge text-white ${
                        tip.availability.toLowerCase() === "public"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </td>
                  <td>
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="rounded w-14 h-14 object-cover"
                    />
                  </td>
                  <td className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/update-tip/${tip._id}`}
                      className="btn btn-xs sm:btn-sm btn-outline btn-warning"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-xs sm:btn-sm btn-outline btn-error"
                      onClick={() => handleDelete(tip._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;

import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ShareTip = () => {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    imageUrl: "",
    category: "Plant Care",
    availability: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tipData = {
      ...formData,
      email: user?.email,
      name: user?.displayName,
      createdBy: user?.uid,
      createdAt: new Date(),
      totalLiked: 0,
    };

    try {
      const res = await fetch("https://gardening-server-coral.vercel.app/tipsall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tipData),
      });

      const result = await res.json();
      if (result.insertedId) {
        Swal.fire("Success!", "Tip shared successfully!", "success");
        setFormData({
          title: "",
          plantType: "",
          difficulty: "Easy",
          description: "",
          imageUrl: "",
          category: "Plant Care",
          availability: "Public",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 sm:p-6 bg-base-200 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Share a Garden Tip
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered w-full text-black"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          className="input input-bordered w-full text-black"
          value={formData.plantType}
          onChange={handleChange}
          required
        />

        <select
          name="difficulty"
          className="select select-bordered w-full text-black"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select
          name="category"
          className="select select-bordered w-full text-black"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Soil Management</option>
          <option>Seed Starting</option>
        </select>

        <select
          name="availability"
          className="select select-bordered w-full text-black"
          value={formData.availability}
          onChange={handleChange}
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          className="input input-bordered w-full text-black"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        <div className="col-span-1 sm:col-span-2">
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full h-32 text-black"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <input
          type="text"
          readOnly
          value={user?.displayName || ""}
          className="input input-bordered w-full bg-gray-100 text-black"
        />
        <input
          type="email"
          readOnly
          value={user?.email || ""}
          className="input input-bordered w-full bg-gray-100 text-black"
        />

        <div className="col-span-1 sm:col-span-2">
          <button type="submit" className="btn btn-primary w-full">
            Submit Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareTip;

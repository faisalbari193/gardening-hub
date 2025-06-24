import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const tip = useLoaderData();
  const [formData, setFormData] = useState(tip);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://gardening-server-coral.vercel.app/tipsall/${tip._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success!", "Tip updated successfully.", "success");
        navigate("/my-tips");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Update Garden Tip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="title" value={formData.title} onChange={handleChange} className="input input-bordered w-full" />

        <input name="plantType" value={formData.plantType} onChange={handleChange} className="input input-bordered w-full" />

        <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="select select-bordered w-full">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea name="description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full" />

        <input name="image" value={formData.image} onChange={handleChange} className="input input-bordered w-full" />

        <select name="category" value={formData.category} onChange={handleChange} className="select select-bordered w-full">
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
        </select>

        <select name="status" value={formData.status} onChange={handleChange} className="select select-bordered w-full">
          <option>Public</option>
          <option>Hidden</option>
        </select>
        <button className="btn btn-success w-full">Update Tip</button>
      </form>
    </div>
  );
};

export default UpdateTip;
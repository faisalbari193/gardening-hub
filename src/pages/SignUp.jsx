import React, { useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const [passwordError, setPasswordError] = useState();
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordCheck =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    if (!passwordCheck.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, and 1 special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account created successfully! 🎉");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            toast.warn("User created, but profile update failed.");
          });
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Signup failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4">
      {/* Left: Sign Up Form */}
      <div className="w-full md:w-1/2 max-w-md mx-auto bg-white p-8 shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create your account to get started
        </p>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              required
              type="text"
              name="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              required
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
          <p className="text-sm text-center text-gray-600">
            Already have an account?
            <Link to="/signin" className="text-blue-500 ml-1 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-10">
        <img
          src="https://i.postimg.cc/qRBB8rHW/6333213.jpg"
          alt="Sign Up Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignUp;

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
        const errorMessage = error.message;
        toast.error(`Signup failed: ${errorMessage}`);
      });
  };

  return (
    <div>
      <title>Sign Up</title>
      <div className="flex flex-col max-w-md mx-auto min-h-screen p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign Up to access your account
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                required
                type="text"
                name="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">PhotoURL</label>
              <input
                required
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm p-2">{passwordError}</p>
            )}
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 btn font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account yet?
              <Link
                to="/signin"
                className="hover:underline dark:text-violet-600 ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

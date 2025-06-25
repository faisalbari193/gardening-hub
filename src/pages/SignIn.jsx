import React, { useState, use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error(`Login failed: ${errorCode}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4">
      {/* Left Side: Sign In Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 shadow-xl rounded-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">
          SignIn to your account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 ml-1 hover:underline">
            Sign up here
          </Link>
        </p>

        <div className="mb-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 mr-2 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Login with Google
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <div className="text-right mt-1">
              <Link
                to="/forget-password"
                state={email}
                className="text-xs text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>

      {/* Right Side: Illustration */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-8">
        <img
          src="https://i.postimg.cc/BQ269MpY/3094352.jpg"
          alt="Sign In Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignIn;

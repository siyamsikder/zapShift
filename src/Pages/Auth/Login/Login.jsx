import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email & Password Login
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log("Logged in:", result.user);
        navigate("/"); // Redirect to home after login
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log("Google Login Successful:", res.user);
        navigate("/"); // Redirect after Google login
      })
      .catch((err) => {
        console.error("Google Login Error:", err.message);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Login with ZapShift</p>

        <form onSubmit={handleSubmit(handleLogin)} noValidate>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.email ? "border-red-400" : "border-gray-300 focus:border-black"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.password ? "border-red-400" : "border-gray-300 focus:border-black"
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Forget Password */}
          <div className="flex justify-end mb-4">
            <a className="text-sm text-gray-600 hover:underline cursor-pointer">
              Forget Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#D6FF6B] hover:bg-[#c5f257] transition font-medium py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?
          <Link className="text-black font-semibold ml-1" to="/register">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

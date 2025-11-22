import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, googleSignIn } = useAuth();

  const handleRegistration = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        console.log("User Created:", result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        console.log("Google Login Successful:", res.user);
      })
      .catch((err) => {
        console.log("Google Login Error:", err.message);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 flex items-center justify-center">
      <div className="w-full max-w-sm">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-2">Create an Account</h2>
        <p className="text-gray-500 mb-6">Register with ZapShift</p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegistration)} noValidate>
          {/* name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 80,
                  message: "Name must be 80 characters or less",
                },
              })}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.name
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="text-red-500 mt-1 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address",
                },
                maxLength: { value: 254, message: "Email is too long" },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.email
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: { value: 128, message: "Password is too long" },
              })}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.password
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p
                id="password-error"
                role="alert"
                className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forget Password? */}
          <div className="flex justify-end mb-4">
            <a className="text-sm text-gray-600 hover:underline cursor-pointer">
              Forget Password?
            </a>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white transition font-medium py-2 rounded-lg">
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link className="text-black font-semibold ml-1" to="/login">
            Login
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
          onClick={handleGoogle}
          type="button"
          className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
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

export default Register;

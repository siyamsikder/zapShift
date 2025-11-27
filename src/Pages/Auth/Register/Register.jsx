import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { registerUser, googleSignIn, updateUserProfile } = useAuth();
  const imgbbAPIKey = import.meta.env.VITE_IMAGE_HOST;

  const handleRegistration = (data) => {
    const photoFile = data.photo[0];

    console.log("Uploaded File:", photoFile);

    // 1. Upload image to ImgBB
    const formData = new FormData();
    formData.append("image", photoFile);

    const uploadURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    axios
      .post(uploadURL, formData)
      .then((imgbbRes) => {
        const photoURL = imgbbRes.data.data.url;
        console.log("Uploaded ImgBB URL:", photoURL);

        // 2. Register user in Firebase
        return registerUser(data.email, data.password).then((result) => {
          const user = result.user;

          // 3. Update Firebase Profile
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          return updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated successfully:", user);
              navigate(location?.state || "/");
            })
            .catch((err) => {
              console.error("Failed to update profile:", err);
            });
        });
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        console.log("Google Login Successful:", res.user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.error("Google Login Error:", err.message);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h2 className="text-4xl font-bold mb-2">Create an Account</h2>
        <p className="text-gray-500 mb-6">Register with ZapShift</p>

        <form onSubmit={handleSubmit(handleRegistration)} noValidate>
          {/* Name */}
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
              })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.name
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Photo */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full border-gray-300"
              {...register("photo", { required: "Photo is required" })}
            />
            {errors.photo && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Email */}
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
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.email
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
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
              })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
                errors.password
                  ? "border-red-400"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end mb-4">
            <a className="text-sm text-gray-600 hover:underline cursor-pointer">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white transition font-medium py-2 rounded-lg">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link state={location.state} className="text-black font-semibold ml-1" to="/login">
            Login
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

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

import React, { useState, useEffect } from "react";

const SignIn = ({ isOpen, isSignUp = false, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [mode, setMode] = useState(isSignUp ? "signup" : "signin");

  useEffect(() => {
    setMode(isSignUp ? "signup" : "signin");
  }, [isSignUp]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "signup") {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("Please fill in all fields");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      alert("Account created successfully!");
    } else {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }
      alert("Signed in successfully!");
    }
  };

  return (
    <div className="bg-[#00000099] h-screen flex items-center justify-center absolute z-100 w-full top-0 backdrop-blur-xs p-4 md:p-0">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg animate__animated animate__bounceIn relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold transition cursor-pointer bg-[#00a6f4] h-10 w-10 text-white rounded-full flex items-center justify-center pb-1.5 hover:bg-[#0084d1]"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "signup" ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === "signup" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          {mode === "signup" && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#00a6f4] text-white py-2 px-4 rounded-md hover:bg-[#0084d1] transition cursor-pointer"
          >
            {mode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-700">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-white text-gray-800 flex items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-100">
        <h1 class="text-7xl font-bold text-[#2dc216] mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-2">Oops! Page not found</h2>
        <p class="text-gray-600 mb-6">
          The page you're looking for doesn't exist. Check the URL or head back
          home.
        </p>
        <a
          href="/"
          class="inline-block px-6 py-3 bg-[#2dc216] text-white font-semibold rounded-xl shadow hover:bg-green-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

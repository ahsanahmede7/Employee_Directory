import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 text-6xl animate-bounce">
          🚀
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
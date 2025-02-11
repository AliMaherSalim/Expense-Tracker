import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex bg-white flex-col items-center justify-center min-h-screen text-center text-gray-600">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-xl mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
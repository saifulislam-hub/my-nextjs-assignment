import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
      {/* Visual 404 Backdrop */}
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-slate-100 select-none">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-2xl font-bold text-slate-800">
          Oops! Page Not Found
        </p>
      </div>

      <p className="text-slate-500 mt-4 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>

      <div className="mt-8">
        <Link href="/">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-200 hover:bg-purple-700 hover:scale-105 transition-all duration-200 active:scale-95">
            Back to Home
          </button>
        </Link>
      </div>
      
      {/* Decorative element */}
      <div className="mt-12 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-200"></div>
        <div className="w-2 h-2 rounded-full bg-purple-300"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
      </div>
    </div>
  );
};

export default NotFound;
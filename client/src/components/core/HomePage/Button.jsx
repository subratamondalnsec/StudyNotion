import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-sm sm:text-base px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
        ${
          active 
            ? "bg-[#06b6d4] text-black hover:bg-[#67e8f9] hover:shadow-[0_10px_20px_rgba(6,182,212,0.3)]" 
            : "bg-richblack-800 text-richblack-5 hover:bg-richblack-700 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
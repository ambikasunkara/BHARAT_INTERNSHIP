import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-blue-900">Bharat Internship</div>

      <div className="flex items-center gap-4">
        <button onClick={() => navigate("/login")} className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800">Login</button>
        <button onClick={() => navigate("/register")} className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-500">Register</button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4 p-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white">☰</button>
      </div>

      {menuOpen && (
        <div className="bg-blue-800 text-white flex flex-col p-4 space-y-3 mt-20">
          <Link to="/student-login" className="hover:underline">Student Login</Link>
          <Link to="/industry-register" className="hover:underline">Industry Register</Link>
          <Link to="/industry-login" className="hover:underline">Industry Login</Link>
          <Link to="/admin-login" className="hover:underline">Admin Login</Link>
        </div>
      )}
    </nav>
  );
}

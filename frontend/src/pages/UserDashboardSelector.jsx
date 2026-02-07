import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboardSelector() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Welcome! Choose Your Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Student Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
             onClick={() => navigate("/student-dashboard")}>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Student Dashboard</h3>
          <p className="text-gray-700">
            Access your internships, view opportunities, apply for projects, and track your skill development.
          </p>
        </div>

        {/* Industry Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
             onClick={() => navigate("/industry-dashboard")}>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Industry Dashboard</h3>
          <p className="text-gray-700">
            Post internship opportunities, manage applications, and connect with talented students.
          </p>
        </div>

        {/* Admin Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
             onClick={() => navigate("/admin-dashboard")}>
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Admin Dashboard</h3>
          <p className="text-gray-700">
            Manage users, oversee internship programs, and maintain platform operations.
          </p>
        </div>
      </div>
    </div>
  );
}

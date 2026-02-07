import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Access Your Internships",
      description:
        "View all your current and past internships in one place, and manage your applications efficiently.",
    },
    {
      title: "View Opportunities",
      description:
        "Explore available internship opportunities curated for your skills and interests.",
    },
    {
      title: "Apply for Projects",
      description:
        "Easily submit your applications to projects and track their status in real-time.",
    },
    {
      title: "Track Skill Development",
      description:
        "Monitor your learning progress and skill development across various domains.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="mt-1 text-lg">Welcome! Explore your internships and opportunities below.</p>
        </div>
        <button
          onClick={() => navigate("/matchEngine")}
          className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 font-semibold transition"
        >
          Find Your Dream Internship
        </button>
      </header>

      {/* Dashboard Features */}
      <main className="px-6 md:px-20 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all border-t-4 border-blue-600"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate("/student-opportunities")}
            >
              Explore
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
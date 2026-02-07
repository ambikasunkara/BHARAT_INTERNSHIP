import React, { useState } from "react";
import MatchEnginePage from "./MatchEnginePage"; // make sure this path is correct

export default function StudentDashboard() {
  const [showMatchEngine, setShowMatchEngine] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
  {/* Header */}
  <header className="bg-blue-900 text-white py-6 px-8 flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <p className="mt-1 text-lg">Welcome! Explore your internships and opportunities below.</p>
    </div>
    <button
      onClick={() => navigate("/MatchEngine")}
      className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 font-semibold transition"
    >
      Find Your Dream Internship
    </button>
  </header>

  {/* Features */}
  <main className="px-6 md:px-20 py-10 pt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Student Dashboard
      </h1>

      {/* Dashboard Feature Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="bg-white shadow-lg p-6 rounded-xl w-64 text-center hover:scale-105 transform transition">
          <h2 className="font-bold text-xl mb-2">Access Your Internships</h2>
          <p>View all your active/past internships.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl w-64 text-center hover:scale-105 transform transition">
          <h2 className="font-bold text-xl mb-2">View Opportunities</h2>
          <p>Check available internships/projects.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl w-64 text-center hover:scale-105 transform transition">
          <h2 className="font-bold text-xl mb-2">Apply for Projects</h2>
          <p>Apply to internships directly from the dashboard.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl w-64 text-center hover:scale-105 transform transition">
          <h2 className="font-bold text-xl mb-2">Track Skill Development</h2>
          <p>Track progress and learning milestones.</p>
        </div>
      </div>

      {/* Find Internship Button */}
      <button
        onClick={() => setShowMatchEngine(!showMatchEngine)}
        className="mb-6 px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
      >
        Find Your Dream Internship
      </button>

      {/* Match Engine Form */}
      {showMatchEngine && (
        <div className="w-full max-w-6xl">
          <MatchEnginePage />
        </div>
      )}
    </div>
  );
}

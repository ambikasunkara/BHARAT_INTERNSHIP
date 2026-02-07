import React, { useState } from "react";

// Sample internships posted by the industry
const postedInternships = [
  { title: "ML Intern", studentsApplied: 12, location: "Bengaluru", status: "Open" },
  { title: "Frontend Developer", studentsApplied: 8, location: "Remote", status: "Open" },
  { title: "Backend Developer", studentsApplied: 5, location: "Pune", status: "Closed" },
];

export default function IndustryDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { key: "overview", title: "Overview" },
    { key: "posted", title: "Posted Internships" },
    { key: "applications", title: "Applications Received" },
    { key: "analytics", title: "Analytics" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 px-8 flex justify-between items-center rounded-lg shadow">
        <h1 className="text-3xl font-bold">Industry Dashboard</h1>
      </header>

      {/* Sections */}
      <div className="mt-6 flex gap-4">
        {sections.map(sec => (
          <button
            key={sec.key}
            onClick={() => setActiveSection(sec.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === sec.key ? "bg-green-600 text-white" : "bg-white text-green-700 border border-green-700"
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Dynamic Section Content */}
      <div className="mt-6">
        {activeSection === "overview" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-700">Overview</h2>
            <p className="mt-2 text-gray-700">Welcome! Monitor your posted internships and applications here.</p>
          </div>
        )}

        {activeSection === "posted" && (
          <div className="grid md:grid-cols-2 gap-4">
            {postedInternships.map((intern, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-600">
                <h3 className="font-bold text-green-700">{intern.title}</h3>
                <p>Location: {intern.location}</p>
                <p>Applications Received: {intern.studentsApplied}</p>
                <p>Status: <span className={`font-semibold ${intern.status === "Open" ? "text-green-600" : "text-red-600"}`}>{intern.status}</span></p>
              </div>
            ))}
          </div>
        )}

        {activeSection === "applications" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-700">Applications Received</h2>
            <p className="mt-2 text-gray-700">You can list all student applications here with details like skills, resume, and match score.</p>
          </div>
        )}

        {activeSection === "analytics" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-700">Analytics</h2>
            <p className="mt-2 text-gray-700">Display charts, statistics, or graphs about applications, popular skills, and intern performance here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

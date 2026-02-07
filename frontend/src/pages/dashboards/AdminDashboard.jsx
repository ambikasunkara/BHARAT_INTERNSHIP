import React, { useState } from "react";

// Sample data
const students = [
  { name: "Ambika Srivalli", email: "ambika@example.com", status: "Active" },
  { name: "Rohan Kumar", email: "rohan@example.com", status: "Inactive" },
  { name: "Priya Sharma", email: "priya@example.com", status: "Active" },
];

const industries = [
  { name: "Innovate AI", email: "contact@innovateai.com", status: "Active" },
  { name: "WebWeavers", email: "hr@webweavers.com", status: "Pending" },
  { name: "CodeFactory", email: "support@codefactory.com", status: "Active" },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("users");

  const sections = [
    { key: "users", title: "Manage Users" },
    { key: "internships", title: "Internship Approvals" },
    { key: "analytics", title: "Analytics" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-purple-700 text-white py-6 px-8 flex justify-between items-center rounded-lg shadow">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Sections */}
      <div className="mt-6 flex gap-4">
        {sections.map(sec => (
          <button
            key={sec.key}
            onClick={() => setActiveSection(sec.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === sec.key
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-700 border border-purple-700"
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Dynamic Section Content */}
      <div className="mt-6">
        {activeSection === "users" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Students</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {students.map((student, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>Status: <span className={`${student.status === "Active" ? "text-green-600" : "text-red-600"}`}>{student.status}</span></p>
                  </div>
                  <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                    {student.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-purple-700 mt-6 mb-4">Industries</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{industry.name}</h3>
                    <p>Email: {industry.email}</p>
                    <p>Status: <span className={`${industry.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>{industry.status}</span></p>
                  </div>
                  {industry.status === "Pending" && (
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      Approve
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "internships" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700">Internship Approvals</h2>
            <p className="mt-2 text-gray-700">Here you can approve or reject new internships posted by industries. Each internship card can show details like role, location, capacity, and posted date.</p>
          </div>
        )}

        {activeSection === "analytics" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700">Analytics</h2>
            <p className="mt-2 text-gray-700">Visualize stats like number of active students, industries, posted internships, and application trends.</p>
          </div>
        )}
      </div>
    </div>
  );
}

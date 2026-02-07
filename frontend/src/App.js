import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentRegisterPage from "./pages/StudentRegisterPage";
import StudentLogin from "./pages/StudentLogin";
import UserDashboardSelector from "./pages/UserDashboardSelector"; // ✅

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import MatchEngine from "./pages/MatchEngine";
import IndustryDashboard from "./pages/dashboards/IndustryDashboard";
import IndustryLogin from "./pages/IndustryLogin"
import AdminDashboard from "./pages/dashboards/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-register" element={<StudentRegisterPage />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/dashboard-selector" element={<UserDashboardSelector />} /> {/* ✅ */}
        
      <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/matchEngine" element={<MatchEngine />} />
      <Route path="/industry-dashboard" element={<IndustryDashboard />} />
      <Route path="/industry-login" element={<IndustryLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
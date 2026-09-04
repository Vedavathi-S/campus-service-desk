import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
        <Navbar />
       <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Admin Dashboard
        </h1>

      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Total Requests: 52
        </h3>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Open: 14
        </h3>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        In Progress: 10
        </h3>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Resolved: 28
        </h3>

      <hr />

      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Recent Requests
        </h2>

      <p className="text-slate-700 mb-2">
        Wi-Fi Problem — HIGH — OPEN
      </p>
      <p className="text-slate-700 mb-2">
        Projector Problem — MEDIUM — IN_PROGRESS
      </p>
      <p className="text-slate-700">
        ID Card Issue — LOW — RESOLVED
      </p>
    </div>
  )
}

export default AdminDashboard

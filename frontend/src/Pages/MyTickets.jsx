import React from 'react'
import { Link } from "react-router-dom";

function MyTickets() {

  const tickets = [
    {
      id: 101,
      title: "Wi-Fi not working",
      category: "IT",
      priority: "HIGH",
      status: "OPEN"
    },
    {
      id: 102,
      title: "Projector problem",
      category: "Classroom",
      priority: "MEDIUM",
      status: "RESOLVED"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        My Service Requests
        </h1>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mb-4">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            {ticket.title}</h3>

          <p className="text-slate-700 mb-2">
            Category: {ticket.category}</p>

          <p className="text-slate-700 mb-2">
            Priority: {ticket.priority}</p>

          <p className="text-slate-700">
            Status: {ticket.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyTickets;




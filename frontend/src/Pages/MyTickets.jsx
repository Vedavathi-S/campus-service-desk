import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import TicketCard from '../Components/TicketCard';

const MyTickets=() => {

  const tickets = [
   {
      id: 1001,
      title: "Wi-Fi not working in Block A",
      category: "Internet",
      status: "OPEN",
      date: "04 Sep 2026",
    },
    {
      id: 1002,
      title: "Projector not working in Room 204",
      category: "Classroom Equipment",
      status: "IN_PROGRESS",
      date: "03 Sep 2026",
    },
    {
      id: 1003,
      title: "Lab computer not starting",
      category: "Laboratory",
      status: "RESOLVED",
      date: "01 Sep 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              My Tickets
            </h1>

            <p className="mt-2 text-slate-500">
              Track and manage your service requests.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>

      </main>
    </div>
  );
}

export default MyTickets;




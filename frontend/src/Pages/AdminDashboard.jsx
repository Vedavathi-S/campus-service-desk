import React from 'react'
import { useState,useEffect } from 'react';
import { apiRequest } from '../api';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';

const AdminDashboard = () => {
  const [tickets,setTickets]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "OPEN"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "RESOLVED"
  ).length;

  const closedTickets=tickets.filter(
    (ticket)=>ticket.status==="CLOSED"
  ).length;

  const loadTickets = async () => {
   try{
    const data = await apiRequest("/api/admin/tickets");
    setTickets(JSON.parse(data));
   }
   catch(error)
   {
      console.error(error);
      setError(error.message);
   }
   finally{
    setLoading(false);
   }
  }

  useEffect(()=>{
  loadTickets();
  },[])

  const updateStatus = async (id, status) => {
   try{
     await apiRequest(`/api/admin/tickets/${id}/status`,
      {
        method:"PUT",
        body:JSON.stringify({
        status: status,
      }),
      });
      await loadTickets();
   }
    catch (error) {

    console.error("Status update failed:", error);
    alert("Failed to update status: " + error.message);
    }
  }

  return (
     <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and track campus service requests.
          </p>
        </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Total Tickets
        </p>

        <p className="mt-2 text-3xl font-bold text-slate-800">
          {totalTickets}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Open
        </p>

        <p className="mt-2 text-3xl font-bold text-slate-800">
          {openTickets}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          In Progress
        </p>

        <p className="mt-2 text-3xl font-bold text-slate-800">
          {inProgressTickets}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Resolved
        </p>

        <p className="mt-2 text-3xl font-bold text-slate-800">
          {resolvedTickets}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        Closed
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-800">
        {closedTickets}
      </p>
    </div>

    </div>

        {loading && (
          <p className="text-slate-500">
            Loading tickets...
          </p>
        )}

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">

            <table className="min-w-full">

              <thead className="border-b bg-slate-50">

                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Ticket
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Priority
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Status
                  </th>
                </tr>

              </thead>

              <tbody className="divide-y">

                {tickets.map((ticket) => (

                  <tr key={ticket.id}>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      #{ticket.id}
                    </td>

                    <td className="px-6 py-4">

                      <p className="font-semibold text-slate-800">
                        {ticket.title}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {ticket.description}
                      </p>

                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {ticket.category}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium">
                      {ticket.priority}
                    </td>

                    <td className="px-6 py-4">

                      <select
                        value={ticket.status}
                        onChange={(e) =>
                          updateStatus(
                            ticket.id,
                            e.target.value
                          )
                        }
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                      >

                        <option value="OPEN">
                          OPEN
                        </option>

                        <option value="ASSIGNED">
                          ASSIGNED
                        </option>

                        <option value="IN_PROGRESS">
                          IN PROGRESS
                        </option>

                        <option value="RESOLVED">
                          RESOLVED
                        </option>

                        <option value="CLOSED">
                          CLOSED
                        </option>

                      </select>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </main>

    </div>
  );
};

export default AdminDashboard

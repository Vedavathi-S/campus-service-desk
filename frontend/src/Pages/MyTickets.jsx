import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import { useState,useEffect } from 'react';
import TicketCard from '../Components/TicketCard';
import { apiRequest } from '../api';

const MyTickets=() => {
  const[tickets,setTickets]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  useEffect(()=>{
    const loadTickets=async()=>{
      try{
        const data=await apiRequest("/api/tickets");
        setTickets(JSON.parse(data));

      }
      catch(error){
          console.error(error);
          setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };
    loadTickets();
  }
  ,[]);

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

        {loading && (
          <p className='text-slate-500'>
            Loading Tickets...
          </p>
        )}

         {error && (
          <p className="rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </p>
        )}

         {!loading && !error && tickets.length === 0 && (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="text-slate-500">
              You have not created any tickets yet.
            </p>
          </div>
        )}

        {!loading && !error && tickets.length > 0 && (
          <div className="space-y-4">

            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
              />
            ))}

          </div>
        )}

      </main>
    </div>
  );
}

export default MyTickets;




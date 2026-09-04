import {Link} from "react-router-dom";

import React from 'react'

const TicketCard = ({ticket}) => {
  return (
    <div  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      
        <div className="flex items-start justify-between gap-4">
            <div>
                <p className="text-sm text-slate-500">Ticket #{ticket.id}</p>
                <h3 className="text-lg font-semibold text-slate-800 mt-2">{ticket.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{ticket.description}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold
                 ${ticket.status === 'OPEN' ?
                  'bg-blue-100 text-blue-700' : 
                  ticket.status === 'IN_PROGRESS' ?
                 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {ticket.status.replace("_"," ")}
            </span>      
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-400">
               Created: {ticket.date}
            </p>
            <Link to={`/tickets/${ticket.id}`} className="text-blue-500 hover:text-blue-700">
                View Details →
            </Link>
        </div>
    </div>
  )
}

export default TicketCard

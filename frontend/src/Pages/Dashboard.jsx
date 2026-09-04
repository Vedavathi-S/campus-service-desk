import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">
    <Navbar />

     <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back 👋
          </h1>

          <p className="text-slate-500 mt-1">
            Here's what's happening with your service requests.
          </p>
        </div>


        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Total Requests
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              8
            </h2>
          </div>


          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Open
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              3
            </h2>
          </div>


          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-slate-500">
              In Progress
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              2
            </h2>
          </div>


          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Resolved
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              3
            </h2>
          </div>

        </div>


        {/* Recent Requests */}
        <div className="bg-white rounded-xl shadow-sm">

          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Requests
            </h2>
          </div>


          <div className="divide-y divide-slate-200">

            <div className="p-6 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Wi-Fi not working
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  IT • Request #101
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                OPEN
              </span>

            </div>


            <div className="p-6 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Projector problem
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Classroom • Request #102
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                RESOLVED
              </span>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
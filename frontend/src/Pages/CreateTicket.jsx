import React from 'react'
import { Link } from 'react-router-dom'

const CreateTicket = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
       <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Create Service Request
        </h1>

      <form className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Title
            </label>
          <input
            type="text"
            placeholder="Example: Wi-Fi not working"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Category
          </label>

          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
            <option>IT</option>
            <option>Maintenance</option>
            <option>Laboratory</option>
            <option>Classroom</option>
            <option>ID Card</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Priority
          </label>

          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
            <option>LOW</option>
            <option>MEDIUM</option>
            <option>HIGH</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description
          </label>

          <textarea
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"

            placeholder="Describe your problem"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default CreateTicket

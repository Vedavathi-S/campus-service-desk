import React from 'react'
import Practice from './Practice'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import CreateTicket from './Pages/CreateTicket'
import MyTickets from './Pages/MyTickets'
import AdminDashboard from './Pages/AdminDashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

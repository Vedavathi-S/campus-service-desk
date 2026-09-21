import React from 'react'
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

const Register = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
      const response= await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            name:name,
            email:email,
            password:password,
          }),
        }
      );
      const data= await response.text();
      if(!response.ok)
      {
        alert(data);
        return;
      }
      alert(data);
    }catch(error)
    {
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl mb-4">
            <span className="text-white text-2xl font-bold">
              CS
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Create your account
          </h1>

          <p className="text-slate-500 mt-2">
            Join Campus Service Desk
          </p>

        </div>


        <div className="bg-white rounded-2xl shadow-lg p-8">

          <form className="space-y-5" onSubmit={handleRegister}>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email address
              </label>

              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Create Account
            </button>

          </form>


          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
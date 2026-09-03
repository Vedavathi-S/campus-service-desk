import React from 'react'

const Register = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Register</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
                <form className="flex flex-col gap-4 w-80 ">

                    <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input className="border border-slate-300 rounded-lg" type="text" placeholder='Enter your name' />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input className="border border-slate-300 rounded-lg" type="email" placeholder='Enter your email' />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input className="border border-slate-300 rounded-lg" type="password" placeholder='Enter your password' />
                    </div>

                   <div className="text-center mt-4">
                   <button className="bg-blue-500 text-white rounded-md h-10 w-20 hover:bg-blue-600 hover:scale-y-105 cursor-pointer transition duration-300 " type="submit">Register</button>
                   </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register

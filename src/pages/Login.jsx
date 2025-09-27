import React from 'react'
import login from "../assets/login.svg"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className="py-20 px-3 ">
                <div
                    className='border-0 rounded-xl px-10 pt-20 pb-10 md:px-20  max-w-[600px] mx-auto  bg-slate-50 shadow-md hover:shadow-lg transition duration-700 '>
                    <div className='flex justify-center mb-4'>
                        <img src={login} alt='image' className='w-32 h-32' />
                    </div>
                    <h2 className='text-3xl font-bold text-center text-slate-900'>Welcome Back to Your Car Market</h2>
                    <p className='mt-3 text-sm text-slate-700 tracking-tight'>Log in to manage your car listings, connect with potential buyers, and track your sales with ease. Your next successful deal is just a sign-in away.</p>
                    <div className="mt-6 space-y-5 ">
                        <div className="">
                            <input type='email' placeholder='enter your email ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                        </div>
                        <div className="">
                            <input type='password' placeholder='enter your password ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600  ' />
                            <div className="flex justify-end mt-1">
                                <Link to="/forgot-password" className='text-sm font-medium text-blue-400 hover:text-blue-500 transition duration-200 mr-1 hover:underline'>forgot your password</Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="button" className=' cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 w-full transition duration-300 rounded-lg' >Login</button>
                        </div>

                        <p className='text-sm text-center font-medium text-slate-400 '>Don't have an account ? <Link to="/sign-up" className='text-blue-400 hover:text-blue-500 transition duration-200 hover:underline'>Sign Up</Link></p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login
import React from 'react'
import signup from "../assets/sign-up.svg"
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className="py-20 px-3 ">
                <div
                    className='border-0 rounded-xl px-10 pt-20 pb-10 md:px-20  max-w-[600px] mx-auto  bg-slate-50 shadow-md hover:shadow-lg transition duration-700 '>
                    <div className='flex justify-center mb-4'>
                        <img src={signup} alt='image' className='w-32 h-32' />
                    </div>
                    <h2 className='text-3xl font-bold text-center text-slate-900'>Create Your Free Account</h2>
                    <p className='mt-3 text-sm text-slate-700 tracking-tight ' >Join our community of car sellers and buyers. Sign up today to start posting your listings, reach more customers, and drive your sales forward.</p>
                    <div className="mt-6 space-y-5 ">
                        <div >
                            <input type='text' placeholder='enter your first name e.g: Jon ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                        </div>
                        <div >
                            <input type='text' placeholder='enter your last name e.g: Doe ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                        </div>
                        <div >
                            <input type='email' placeholder='enter your email e.g: jondoe@example.com ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                        </div>
                        <div >
                            <input type='password' placeholder='enter a password ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600  ' />

                        </div>
                        <div className="mt-6">
                            <button type="button" className=' cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 w-full transition duration-300 rounded-lg' >SingUp</button>
                        </div>

                        <p className='text-sm text-center font-medium text-slate-400 '>Already have an account ? <Link to="/login" className='text-blue-400 hover:text-blue-500 transition duration-200 hover:underline'>Log in</Link></p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup
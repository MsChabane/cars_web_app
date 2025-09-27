import React from 'react'
import changePassword from "../assets/changePassword.svg"
import { Link } from 'react-router-dom'

const Step_Two
    = ({ setX }) => {
        return (
            <>
                <div className='flex justify-center mb-4'>
                    <img src={changePassword} alt='image' className='w-32 h-32' />
                </div>
                <h2 className='text-3xl font-bold text-center text-slate-900'>Change your password</h2>
                <p className='mt-3 text-sm text-slate-700 tracking-tight'>Please enter the token we’ve sent to your email along with your new password. This will confirm your identity and allow you to securely reset your account password.</p>

                <div className="mt-6 space-y-5">
                    <div className="">
                        <input type='text' placeholder='Enter your token ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                    </div>
                    <div className="">
                        <input type='text' placeholder='Enter your new password ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                    </div>
                    <div className="mt-6">
                        <button type="button" className=' cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 w-full transition duration-300 rounded-lg' onClick={() => setX(100)}>change </button>
                    </div>

                    <p className='text-sm text-center font-medium text-slate-400 '>Already have an account ? <Link className='text-blue-400 hover:text-blue-500 transition duration-200 hover:underline' onClick={() => setX(33)} >resent the token</Link></p>

                </div>
            </>
        )
    }

export default Step_Two

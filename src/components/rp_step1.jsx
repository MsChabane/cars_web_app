import React from 'react'
import forgotpassword from "../assets/sendToken.svg"

const Step_One = ({ setX }) => {
    return (
        <>
            <div className='flex justify-center mb-4'>
                <img src={forgotpassword} alt='image' className='w-32 h-32' />
            </div>
            <h2 className='text-3xl font-bold text-center text-slate-900'>Send a Token</h2>
            <p className='mt-3 text-sm text-slate-700 tracking-tight'>Start by entering your registered email address, and we’ll send you a secure token. Use this token to verify your request, then create a new password to safely access your account again.</p>

            <div className="mt-6 space-y-5">
                <div className="">
                    <input type='email' placeholder='enter your email ...' className='w-full border-1 outline-none px-3 py-2 rounded-lg ring-0 hover:ring-1 hover:ring-slate-600 ' />
                </div>
                <div className="mt-6">
                    <button type="button" className=' cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 w-full transition duration-300 rounded-lg' onClick={() => setX(66)}>Send token </button>
                </div>
            </div>

        </>
    )
}

export default Step_One
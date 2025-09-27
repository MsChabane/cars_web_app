import React from 'react'
import completed from "../assets/completed.svg"
import { Link } from 'react-router-dom'

const Step_Three
    = ({ }) => {
        return (
            <>
                <div className='flex justify-center mb-4'>
                    <img src={completed} alt='image' className='w-32 h-32' />
                </div>
                <h2 className='text-3xl font-bold text-center text-slate-900'>Congratulations!</h2>
                <p className='mt-3 text-sm text-slate-700 tracking-tight'>Your password has been changed successfully. You can now log in with your new credentials and continue enjoying your account securely.</p>
                <div className="mt-6">
                    <Link to="/login" className=' cursor-pointer text-indigo-600  hover:text-indigo-700 hover:underline transition duration-300 rounded-lg' >login </Link>
                </div>


            </>
        )
    }

export default Step_Three

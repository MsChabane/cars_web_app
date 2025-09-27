import React, { useEffect, useState } from 'react'
import Step_One from '../components/rp_step1'
import Step_Two from '../components/rp_step2'
import Step_Three from '../components/rp_step3'

const ForgotPWD = () => {
    const [x, setX] = useState(0)




    return (
        <div className='min-h-screen bg-gray-100'>
            <div className="py-20 px-3 ">
                <div
                    className={`border-0 rounded-xl px-10 pt-20 pb-10 md:px-20  max-w-[600px] mx-auto relative  bg-slate-50 shadow-md hover:shadow-lg transition duration-700  after:absolute after:top-0 after:left-0 after:h-1 progress after:bg-slate-500 after:rounded-tl-lg ${x == 100 && "after:rounded-tr-lg"}`} style={{ "--progress": `${x}%` }}>
                    {x <= 33 && <Step_One setX={setX} />}
                    {x == 66 && <Step_Two setX={setX} />}
                    {x > 66 && <Step_Three />}


                </div>
            </div>

        </div>
    )
}

export default ForgotPWD
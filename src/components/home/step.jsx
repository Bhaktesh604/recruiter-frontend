import React from 'react'
import vector_1 from '../../assets/image/Vector_1.svg'
import vector_2 from '../../assets/image/Vector_4.svg'
import img_1 from '../../assets/image/post-a-job.svg'
import img_2 from '../../assets/image/get-verified.svg'
import img_3 from '../../assets/image/get-calls-hire.svg'
import Button from '../ui/routerlinks'
const Step = () => {
    const job = [
        {
            id: 1,
            src: img_1,
            title: 'post a job',
            dis: 'Tell us what you need in a candidate in just 5-minutes.'
        }, {
            id: 2,
            src: img_2,
            title: 'Get Verified',
            dis: 'Our team will call to verify your employer account'
        }, {
            id: 3,
            src: img_3,
            title: 'Get calls. Hire.',
            dis: 'You will get calls from relevant candidates within one hour or call them directly from our candidate database.'
        },
    ]
    return (
        <div className='relative w-full'  >
            <div className="relative w-full">
                <img src={vector_1} className='object-cover w-full h-full ' alt="" />
            </div>
            <div className="container h-full mx-auto">
                <div className="flex flex-col h-full">
                    <div className="mb-5 ml-10 head text-[20px] lg:text-[36px] leading-[36px] font-medium text-[#585858] relative">
                        Get started in 3 easy steps
                        <div className="absolute bottom-0 mb-[-5px] h-[4px] w-[70px] rounded-[5px] mt-[2px] bg-[#f9ae08] "></div>
                    </div>
                    <div className="flex items-start justify-around flex-col lg:flex-row pt-[24px] w-full">
                        {job.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-full p-[24px] lg:w-4/12" key={index} >
                                    <div className="relative h-[16rem] w-[16rem]">
                                        <img src={item.src} alt="" />
                                    </div>
                                    <h1 className='mt-[1.25rem] mb-[8px] text-lg md:text-2xl text-[#585858] capitalize' >{item.title}</h1>
                                    <span className='w-9/12 text-sm md:text-lg text-center text-[#585858] mt-[1.25rem] mb-[8px]' >{item.dis}</span>
                                </div>
                            )
                        })}


                    </div>
                    <div className="flex justify-center text-center mt-7">
                        <Button label='hire now' to='/hire' />
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <img src={vector_2} className='w-full h-full border-none' alt="" />
            </div>

        </div>
    )
}

export default Step
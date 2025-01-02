import React, { useState } from 'react'
import Button from '../ui/routerlinks'
import { FiAlertCircle } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
    const [ishover, setishover] = useState(false)
    return (
        <div className='text-center  bg-[#EAEEFF] mt-[55px] py-[10px]  relative ' >

            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] top-[45%] left-[20%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[100px] h-[100px] top-[50%] left-[10%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] bottom-[20%] left-[23%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[100px] h-[100px] top-[20%] right-[10%]"></div>
            <div className="absolute bg-[#e5e7f3] hidden lg:block rounded-full w-[30px] h-[30px] bottom-[50%] right-[23%]"></div>

            <div className="w-full mx-auto">
                <div className="mt-6 text-4xl text-center ">
                    <h1>India’s <span className='font-semibold' >Largest</span>  Job Portal</h1>
                </div>
                <p className='mt-4 text-xl text-center' >WorkIndia helps you hire staff in 2 days</p>
                <div className="relative w-full h-full mx-auto mt-6 lg:w-7/12 lg:h-[20rem]">
                    <img src="http://resources.workindia.in/employer/assets/img/landing_hero.png" className='object-contain w-full h-full aspect-video' alt="" />
                </div>
                <div className="relative flex w-full mx-auto mt-6 lg:w-5/12 ">

                    <Button label='hire now' to='/hire' />
                    <Button label='get a job' to='jobs' />
                </div>
            </div>
            <div className="absolute w-3/12 right-0 top-[55px] "></div>
            <div className="relative w-full mx-auto pt-[50px]">
                <div className="w-full mx-auto lg:w-7/12">
                    <div className="shadow-[0 4px 30px rgba(65,84,175,.13)] rounded-[12px]  bg-white px-[28px] py-[18px] w-full">
                        <div className="flex items-center space-x-2">
                            <span className='mt-1 mb-3 text-2xl text-[rgb(88,88,88)]' >Search candidate database</span>
                            <div className="-mt-1">
                                <div className="flex relative items-center justify-center w-5 h-5 rounded-full cursor-pointer text-[#4154AF]">
                                    <FiAlertCircle onMouseEnter={() => setishover(true)} onMouseLeave={() => setishover(false)} />
                                    {ishover && (
                                        <div className="absolute w-[150px] h-[50px] overflow-hidden text-start px-2 py-1 top-[-45px] left-[61%] rounded-tl-lg rounded-br-lg shadow-lg bg-white">
                                            <IoTriangleSharp className=' absolute bottom-[-8px] left-[-8px] text-[20px] text-white rotate-[224deg]'
                                            />
                                            <span className="text-black text-[10px]">Hovered!</span>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full lg:flex-row">
                            <div className="flex-1 mr-[20px]">
                                <div className="font-medium capitalize text-start mb-1.5">
                                    select job title
                                </div>
                                <div className="relative inline-block w-full">
                                    <input type="text" className='h-[40px] text-[14px] text-[#333] w-full bg-white shadow-[inset 0 1px 1px rgba(0,0,0,.075)]  px-[12px] py-[6px] rounded-[4px] border border-[#ccc]' placeholder='Ex.Bank office job' />
                                </div>
                            </div>
                            <div className="flex-1 mr-[20px]">
                                <div className="font-medium capitalize text-start mb-1.5">
                                    select city
                                </div>
                                <div className="relative inline-block w-full">
                                    <input type="text" className='h-[40px] text-[14px] text-[#333] w-full bg-white shadow-[inset 0 1px 1px rgba(0,0,0,.075)]  px-[12px] py-[6px] rounded-[4px] border border-[#ccc]' placeholder='Ex.Surat' />
                                </div>
                            </div>
                            <button className='w-10 h-10 mt-[28px] flex text-white items-center justify-center rounded bg-[#4154AF]'>
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='mt-[50px]' >
            <div className="container mx-auto px-[15px] ">
                <div className="flex flex-wrap">
                    <div className="w-full text-center">
                        <a href="" className='' >
                            <img src="https://resources.workindia.in/employer/assets/icon/workindia-full.png" className='max-w-[140px] mx-auto' alt="" />
                        </a>
                        <div className="my-[20px] text-xs text-[#66789c] font-medium leading-[18px] ">
                            We're here to help employers find good staff and candidates find a fitting job.
                        </div>
                        <div className="flex items-center justify-center gap-2 *:text-white *:bg-[#676767] *:flex *:items-center *:justify-center *:w-[30px] *:h-[30px] *:rounded-full">
                            <a href="" className='' >
                                <FaFacebookF />
                            </a>
                            <a href="" className='' >
                                <FaXTwitter />
                            </a>
                            <a href="" className='' >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom mt-[50px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-1/2">
                            <span className='text-xs leading-[18px] font-medium text-[#4F5E64]' >© 2024 reekroot. All right reserved</span>
                        </div>
                        <div className="flex items-center justify-start w-1/2 gap-4 md:justify-end ">

                            <a href="" className='text-xs leading-[18px] font-medium text-[#4F5E64]' >Contact us</a>
                            <a href="" className='text-xs leading-[18px] font-medium text-[#4F5E64]' >Privacy Policy</a>
                            <a href="" className='text-xs leading-[18px] font-medium text-[#4F5E64]' >Terms & Conditions</a>
                            <a href="" className='text-xs leading-[18px] font-medium text-[#4F5E64]' >Refund Policy</a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
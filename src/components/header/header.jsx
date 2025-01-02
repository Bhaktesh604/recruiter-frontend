import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
    const [isopenmenu, setisopenmenu] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const hantogglemenu = () => {
        setisopenmenu(!isopenmenu);
    }
    const links = [
        // { id: 1, labal: "apply now", path: "/aboutpage" },
        // { id: 2, labal: "hire now", path: "/service" },
        { id: 3, labal: (<><FaUserAlt />  Login</>), path: "/login" },

    ]

    return (
        <>
            <div
                className={`fixed top-0 hidden shadow-md lg:flex left-0 w-full h-auto  z-[99] px-[3vw] transition-all duration-300 bg-white '}`}
            >
                <div className="w-full">
                    <div className="relative flex items-center justify-between z-[5]">
                        <a className="inline-block me-[16px] py-[8px]" href="/">
                            <img src={'https://resources.workindia.in/employer/assets/icon/workindia-full.png'} className="h-[40px]" alt="Logo" />
                        </a>
                        <div className="items-center flex-grow hidden lg:flex">
                            <ul className="flex flex-row gap-4 ml-auto mr-[3rem]">
                                {links.map((link, id) => {

                                    return (
                                        <li className="relative " key={id}>
                                            <Link
                                                className={` h-[40px] w-[100px]  leading-0 flex items-center justify-center border-2 border-[#2f51b5] rounded-lg text-[#2f51b5] hover:bg-[#2f51b5] duration-1000 hover:text-white `}
                                                to={link.path}
                                            >
                                                {link.labal}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 flex lg:hidden bg-[#f6f6f6] left-0 w-full h-auto z-[99] py-[15px] px-[15px]">
                <div className="container mx-auto">
                    <div className="relative flex items-center flex-col justify-between z-[5]">
                        <div className="flex items-center justify-between w-full">
                            <a className='inline-block me-[16px] py-[8px]' href="/">
                                <img src={'https://resources.workindia.in/employer/assets/icon/workindia-full.png'} className='h-[30px]' alt="" />
                            </a>
                            <div className="menu">
                                <FaBars onClick={hantogglemenu} />
                            </div>
                        </div>
                        {isopenmenu && (
                            <div
                                className={`flex items-center flex-grow w-full transition-all duration-1000 ease-in-out opacity-100 ${isopenmenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <ul className='flex flex-col w-full text-center'>
                                    {links.map((link, id) => {

                                        return (
                                            <li className='relative py-[7px]' key={id}>
                                                <a className={`text-[20px] capitalize   duration-1000 my-[5px] mx-[15px] font-medium p-[15px] `} to={link.path}>
                                                    {link.labal}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
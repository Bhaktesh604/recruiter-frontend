import React from 'react';
import { Link } from 'react-router-dom';

const Routerlinks = ({ label = "Click Me", onClick, to = "/" }) => {
    return (
        <Link
            to={to} // Use `to` for navigation with `Link`
            className="flex justify-center items-center h-[45px] overflow-hidden text-[18px]  bg-transparent w-5/12 mx-[30px] rounded-lg capitalize
                before:left-[-150px] before:hover:left-0 before:z-0 before:top-0 border-2 before:transition-all before:duration-1000 before:ease-out
                border-[#2f51b5] z-1 relative before:absolute before:w-[150px] before:h-[45px] before:bg-[#2f51b5] before:block
                after:right-[-150px] after:hover:right-0 after:z-0 after:top-0 border-2 after:transition-all after:duration-1000
                after:ease-out after:absolute after:w-[150px] after:h-[45px] after:bg-[#2f51b5] after:block group"
            onClick={onClick} // If custom logic is required on click, this is preserved
        >
            <span className="relative text-[#2f51b5] group-hover:z-10 group-hover:text-white">
                {label}
            </span>
        </Link>
    );
};

export default Routerlinks;

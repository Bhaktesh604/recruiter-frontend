import React from 'react';
import { Link } from 'react-router-dom';

const Whitebutton = ({ label = "Click Me", onClick, to = "/" }) => {
    return (
        <Link
            to={to} // Use `to` for navigation with `Link`
            className="flex justify-center items-center h-[45px] overflow-hidden text-[18px]  bg-transparent w-[200px] mx-[30px] rounded-lg capitalize
                before:left-[-150px] before:hover:left-0 before:z-0 before:top-0 border-2 before:transition-all before:duration-1000 before:ease-out
                border-white z-1 relative before:absolute before:w-[150px] before:h-[45px] before:bg-white before:block
                after:right-[-150px] after:hover:right-0 after:z-0 after:top-0 border-2 after:transition-all after:duration-1000
                after:ease-out after:absolute after:w-[150px] after:h-[45px] after:bg-white after:block group"
            onClick={onClick} // If custom logic is required on click, this is preserved
        >
            <span className="relative text-white group-hover:z-10 group-hover:text-[#4154af]">
                {label}
            </span>
        </Link>
    );
};

export default Whitebutton;

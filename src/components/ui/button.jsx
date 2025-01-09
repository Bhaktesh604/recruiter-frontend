import React from 'react';

const Button = ({ label = "Click Me", onClick, to = "/" }) => {
    return (
        <button
            className="flex justify-center items-center h-[45px] overflow-hidden text-[18px]  bg-transparent w-[200px] mx-[30px] rounded-lg capitalize
                before:left-[-150px] before:hover:left-0 before:z-0 before:top-0 border-2 before:transition-all before:duration-1000 before:ease-out
                border-[#2f51b5] z-1 relative before:absolute before:w-[150px] before:h-[45px] before:bg-[#2f51b5] before:block
                after:right-[-150px] after:hover:right-0 after:z-0 after:top-0 border-2 after:transition-all after:duration-1000
                after:ease-out after:absolute after:w-[150px] after:h-[45px] after:bg-[#2f51b5] after:block group"
            onClick={onClick}
        >
            <span className="relative text-[#2f51b5] group-hover:z-10 group-hover:text-white">
                {label}
            </span>
        </button>
    );
};

export default Button;

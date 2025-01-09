import React, { useState } from "react";

const Jobcet = () => {
    const indianCities = [
        { name: "Mumbai", state: "Maharashtra", id: 1 },
        { name: "Delhi", state: "Delhi", id: 2 },
        { name: "Bengaluru", state: "Karnataka", id: 3 },
        { name: "Hyderabad", state: "Telangana", id: 4 },
        { name: "Ahmedabad", state: "Gujarat", id: 5 },
        { name: "Chennai", state: "Tamil Nadu", id: 6 },
        { name: "Kolkata", state: "West Bengal", id: 7 },
        { name: "Pune", state: "Maharashtra", id: 8 },
        { name: "Jaipur", state: "Rajasthan", id: 9 },
        { name: "Lucknow", state: "Uttar Pradesh", id: 10 },
        { name: "Kanpur", state: "Uttar Pradesh", id: 11 },
        { name: "Nagpur", state: "Maharashtra", id: 12 },
        { name: "Indore", state: "Madhya Pradesh", id: 13 },
        { name: "Bhopal", state: "Madhya Pradesh", id: 14 },
        { name: "Thane", state: "Maharashtra", id: 15 },
        { name: "Surat", state: "Gujarat", id: 16 },
        { name: "Vadodara", state: "Gujarat", id: 17 },
        { name: "Patna", state: "Bihar", id: 18 },
        { name: "Ranchi", state: "Jharkhand", id: 19 },
        { name: "Chandigarh", state: "Chandigarh", id: 20 },
        { name: "Mysore", state: "Karnataka", id: 21 },
        { name: "Coimbatore", state: "Tamil Nadu", id: 22 },
        { name: "Vijayawada", state: "Andhra Pradesh", id: 23 },
        { name: "Dehradun", state: "Uttarakhand", id: 24 },
        { name: "Amritsar", state: "Punjab", id: 25 },
    ];


    const [visibleCount, setvisibleCount] = useState(10);
    const [isExpanded, setisExpanded] = useState(false);

    const togglevisiblity = () => {
        if (isExpanded) {
            setvisibleCount(10);
        } else {
            setvisibleCount(indianCities.length);
        }
        setisExpanded(!isExpanded);
    }
    return (
        <div className="py-[100px]">
            <div className="container mx-auto ">
                <div className="mb-5 ml-10 head text-[20px] lg:text-[36px] leading-[36px] font-medium text-[#585858] relative">
                    Hire from {indianCities.length}+ Cities
                    <div className="absolute bottom-0 mb-[-5px] h-[4px] w-[70px] rounded-[5px] mt-[2px] bg-[#f9ae08] "></div>
                </div>
                <div className="mt-[2rem] h-auto flex flex-wrap justify-start px-10 ">
                    {indianCities.slice(0, visibleCount).map((data, index) => (
                        <div className="mr-[.5rem] mb-[1rem] cursor-pointer rounded-[1rem] bg-[#4154af] py-[.25rem] px-[1rem] text-[#fefefe] lg:text-[1rem] lg:leading-[1rem] border-2 border-[#4154af] hover:bg-transparent hover:text-[#4154af]" key={index} >{data.name}</div>
                    ))}
                </div>
                <div className="mt-[1rem] text-center">
                    <button
                        onClick={togglevisiblity}
                        className=" text-[#4154af] py-[.5rem] px-[1rem] rounded-[1rem] hover:text-[#4154af]"
                    >
                        {isExpanded ? "See Less" : "See More"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Jobcet;

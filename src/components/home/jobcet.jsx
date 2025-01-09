import React, { useState } from "react";

const Jobcet = () => {
    const jobCategories = [
        { title: "Accountant", id: 1 },
        { title: "Software Engineer", id: 2 },
        { title: "Marketing Specialist", id: 3 },
        { title: "Data Scientist", id: 4 },
        { title: "Project Manager", id: 5 },
        { title: "Graphic Designer", id: 6 },
        { title: "Human Resources", id: 7 },
        { title: "Customer Support", id: 8 },
        { title: "Sales Executive", id: 9 },
        { title: "Content Writer", id: 10 },
        { title: "Business Analyst", id: 11 },
        { title: "IT Support", id: 12 },
        { title: "UI/UX Designer", id: 13 },
        { title: "Operations Manager", id: 14 },
        { title: "Digital Marketer", id: 15 },
        { title: "Financial Analyst", id: 16 },
        { title: "Social Media Manager", id: 17 },
        { title: "Civil Engineer", id: 18 },
        { title: "Architect", id: 19 },
        { title: "Legal Advisor", id: 20 },
        { title: "Healthcare Professional", id: 21 },
        { title: "Logistics Coordinator", id: 22 },
        { title: "Consultant", id: 23 },
        { title: "Research Scientist", id: 24 },
        { title: "Network Engineer", id: 25 },
    ];

    const [visibleCount, setvisibleCount] = useState(10);
    const [isExpanded, setisExpanded] = useState(false);

    const togglevisiblity = () => {
        if (isExpanded) {
            setvisibleCount(10);
        } else {
            setvisibleCount(jobCategories.length);
        }
        setisExpanded(!isExpanded);
    }
    return (
        <div className="py-[100px]">
            <div className="container mx-auto ">
                <div className="mb-5 ml-10 head text-[20px] lg:text-[36px] leading-[36px] font-medium text-[#585858] relative">
                    Hire from {jobCategories.length}+ Job Categories
                    <div className="absolute bottom-0 mb-[-5px] h-[4px] w-[70px] rounded-[5px] mt-[2px] bg-[#f9ae08] "></div>
                </div>
                <div className="mt-[2rem] h-auto flex flex-wrap justify-start px-10 ">
                    {jobCategories.slice(0, visibleCount).map((data, index) => (
                        <div className="mr-[.5rem] mb-[1rem] cursor-pointer rounded-[1rem] bg-[#4154af] py-[.25rem] px-[1rem] text-[#fefefe] lg:text-[1rem] lg:leading-[1rem] border-2 border-[#4154af] hover:bg-transparent hover:text-[#4154af]" key={index} >{data.title}</div>
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

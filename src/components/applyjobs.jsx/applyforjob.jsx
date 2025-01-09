import React, { useEffect, useRef, useState } from 'react'
import Routerlinks from '../ui/routerlinks'
import Button from '../ui/button';
const Applyforjob = () => {
    const [search, setSearch] = useState('');
    const [isOpenOption, setIsOpenOption] = useState(false);
    const dropdownRef = useRef(null);

    const [searchExperience, setSearchExperience] = useState('');
    const [isOpenExperienceOption, setIsOpenExperienceOption] = useState(false);
    const experienceRef = useRef(null);

    const [searchCity, setSearchCity] = useState('');
    const [isOpenCityOption, setIsOpenCityOption] = useState(false);
    const cityRef = useRef(null);

    const [selectedCity, setSelectedCity] = useState('');
    const [cityAreasFiltered, setCityAreasFiltered] = useState([]);

    const jobOptions = [
        'Telecaller',
        'Account',
        'Back Office',
        'Data Entry',
        'E-Commerce Executive',
        'Sales Executive',
        'Business Development Executive',
        'Team Leader',
        'Computer Operator',
        'Human Resources (HR)',
        'Photographer',
        'Digital Marketing',
        'Counsellor',
        'Collection Boy',
        'Civil Engineer',
        'Electrician',
        'Electrical Engineer',
        'Fashion Designer',
        'Jewellery Designer',
        'Textile Print Design',
        'Digital Print Design',
        'FMCG Sales',
        'Real Estate Sales',
        'UI/UX Designer',
        'Clinic Helper',
        'SEO Executive',
    ];

    const experienceOptions = [
        'Fresher',
        '1 year Experience',
        '2 year Experience',
        '3 & 5 year Experience',
        '5+ year Experience',
    ];

    const itCitiesInIndia = [
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai',
        'Gurgaon',
        'Noida',
        'Ahmedabad GJ',
        'Surat GJ',
        'Vadodara GJ',
        'Rajkot GJ',
        'Mumbai MH',
        'Nashik MH',
        'Nagpur MH',
    ];

    const cityAreas = {
        Bangalore: ["Whitefield", "Electronic City", "Indiranagar", "Koramangala"],
        Hyderabad: ["HITEC City", "Gachibowli", "Madhapur", "Banjara Hills"],
        Pune: ["Hinjewadi", "Kharadi", "Magarpatta", "Baner"],
        Chennai: ["Tidel Park", "Velachery", "OMR", "Guindy"],
        Gurgaon: ["Cyber City", "Udyog Vihar", "Golf Course Road"],
        Noida: ["Sector 62", "Sector 16", "Sector 18"],
        "Ahmedabad GJ": ["SG Highway", "Maninagar", "Prahlad Nagar"],
        "Surat GJ": ["Adajan", "Vesu", "Dumas"],
        "Vadodara GJ": ["Alkapuri", "Gotri", "Manjalpur"],
        "Rajkot GJ": ["Kalavad Road", "Yagnik Road", "150 Feet Ring Road"],
        "Mumbai MH": ["Andheri", "Bandra", "Powai", "Navi Mumbai"],
        "Nashik MH": ["Gangapur Road", "Indira Nagar", "Pathardi Phata"],
        "Nagpur MH": ["Civil Lines", "Dharampeth", "MIHAN"],
    };

    // Filtered options for search
    const filteredOptions = jobOptions.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );
    const filteredCities = itCitiesInIndia.filter((option) =>
        option.toLowerCase().includes(searchCity.toLowerCase())
    );

    useEffect(() => {
        // Close dropdowns if clicked outside
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpenOption(false);
            }
            if (experienceRef.current && !experienceRef.current.contains(e.target)) {
                setIsOpenExperienceOption(false);
            }
            if (cityRef.current && !cityRef.current.contains(e.target)) {
                setIsOpenCityOption(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCitySelection = (city) => {
        setSearchCity(city);
        setSelectedCity(city);
        setCityAreasFiltered(cityAreas[city] || []);
        setIsOpenCityOption(false);
    };

    return (
        <div className='py-[100px]' >
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-8/12   px-[15px]">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <p className='font-sm text-[#3f51b5]' >Welcome to reekroot! </p>
                                <h2 className='mb-[20px] text-[#05264E] text-[36px] leading-[45px] font-bold font_Plus_Jakarta_Sans' >Apply for job now</h2>
                            </div>
                            <div className="">
                                <Routerlinks />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12   px-[15px] bg-[#f6f6f6]">
                        <div className="relative flex flex-col break-words bg-clip-border border-1 border-[rgba(0,0,0,.125)] rounded-[.25rem]">
                            <div className="flex-1 p-[1rem]">
                                <form action="">
                                    <div className="relative mb-[1rem] flex flex-wrap ">
                                        <label htmlFor="" className='text-[14px] px-[12px] py-[7px] w-full md:w-4/12' >Need Job ?</label>
                                        <div className="w-full md:w-8/12 mx-auto flex items-center  px-[15px]">
                                            <label className="md:w-3/12 py-[7px] mr-[15px] leading-[1.5] flex items-center capitalize "  >
                                                <input type="radio" name='yes' className='checked:bg-[#3f51b5] checked:border checked:border-[#3f51b5] h-[24px] w-[24px] mr-[5px] text-[14px]' />
                                                <span>yes</span>
                                            </label>
                                            <label className="md:w-3/12 py-[7px] mr-[15px] leading-[1.5] flex items-center capitalize "  >
                                                <input type="radio" name='no' className='checked:bg-[#3f51b5] checked:border checked:border-[#3f51b5] h-[24px] w-[24px] mr-[5px] text-[14px]' />
                                                <span>no</span>
                                            </label>
                                        </div>

                                    </div>
                                    <hr className='my-[16px]' />
                                    <div className="relative mb-[1rem] flex flex-wrap ">
                                        <label htmlFor="fullname" className='text-[14px] px-[12px] py-[7px] w-full md:w-4/12' >Enter Your Full Name</label>
                                        <div className="w-full md:w-6/12 flex items-center  px-[15px]">
                                            <input type="text" name='fullname' className=' w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6]  focus:border focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]' placeholder='Enter Your Full Name' />
                                        </div>

                                    </div>
                                    <div className="relative mb-[1rem] flex flex-wrap ">
                                        <label htmlFor="contactnumber" className='text-[14px] px-[12px] py-[7px] w-full md:w-4/12' >contact number</label>
                                        <div className="w-full md:w-6/12 flex items-center  px-[15px]">
                                            <input type="text" name='contactnumber' className=' w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6]  focus:border focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]' placeholder='Enter Your contact number' />
                                        </div>

                                    </div>
                                    <div className="relative mb-[1rem] flex flex-wrap ">
                                        <label htmlFor="" className='text-[14px] px-[12px] py-[7px] w-full md:w-4/12' >Gender</label>
                                        <div className="w-full md:w-8/12 mx-auto flex items-center  px-[15px]">
                                            <label className="md:w-3/12 py-[7px] mr-[15px] leading-[1.5] flex items-center capitalize "  >
                                                <input type="radio" name='male' className='checked:bg-[#3f51b5] checked:border checked:border-[#3f51b5] h-[24px] w-[24px] mr-[5px] text-[14px]' />
                                                <span>male</span>
                                            </label>
                                            <label className="md:w-3/12 py-[7px] mr-[15px] leading-[1.5] flex items-center capitalize "  >
                                                <input type="radio" name='female' className='checked:bg-[#3f51b5] checked:border checked:border-[#3f51b5] h-[24px] w-[24px] mr-[5px] text-[14px]' />
                                                <span>female</span>
                                            </label>
                                        </div>

                                    </div>
                                    <hr className='my-[16px]' />


                                    {/* Job Categories Multi-Select */}
                                    <div className="relative flex flex-wrap mb-4">
                                        <label htmlFor="jobcategories" className="w-full px-3 py-2 text-sm md:w-4/12">
                                            Job Categories
                                        </label>
                                        <div className="relative flex flex-col w-full px-4 md:w-6/12">
                                            <input
                                                type="text"

                                                value={search}
                                                onClick={() => setIsOpenOption(true)}
                                                onChange={(e) => setSearch(e.target.value)}
                                                className="w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6] focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]"
                                            />
                                            <span className='text-[12px] text-[#4F5E64]' >(Example: Sales Executive, Account, Data Entry, Telecaller, etc.)</span>
                                            {isOpenOption && (
                                                <div
                                                    id="jobcategories"
                                                    ref={dropdownRef}
                                                    name="keyword[]"
                                                    multiple
                                                    className="absolute top-[100%] left-0 z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-auto"

                                                >
                                                    {filteredOptions.length > 0 ? (
                                                        filteredOptions.map((option, index) => (
                                                            <div key={index} value={option} className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100" onClick={() => {
                                                                setSearch(option);
                                                                setIsOpenOption(false)
                                                            }} >
                                                                {option}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <option disabled>No options found</option>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative mb-[1rem] flex flex-wrap ">
                                        <label htmlFor="uploadresume" className='text-[14px] px-[12px] py-[7px] w-full md:w-4/12' >upload resume</label>
                                        <div className="w-full md:w-6/12 flex items-center  px-[15px]">
                                            <input type="file" name='uploadresume' className=' w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6]  focus:border focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]' placeholder='Enter Your Full Name' />
                                        </div>
                                    </div>
                                    <div className="relative flex flex-wrap mb-4">
                                        <label htmlFor="jobcategories" className="w-full px-3 py-2 text-sm md:w-4/12">
                                            City
                                        </label>
                                        <div className="relative flex flex-col w-full px-4 md:w-6/12">
                                            <input
                                                type="text"

                                                value={searchExperience}
                                                onClick={() => setIsOpenExperienceOption(true)}
                                                onChange={(e) => setSearchExperience(e.target.value)}
                                                className="w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6] focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]"
                                            />

                                            {isOpenExperienceOption && (
                                                <div
                                                    id="jobcategories"
                                                    ref={experienceRef}
                                                    name="keyword[]"
                                                    multiple
                                                    className="absolute top-[100%] left-0 z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-auto"

                                                >

                                                    {
                                                        experienceOptions.filter((option) =>
                                                            option.toLowerCase().includes(searchExperience.toLowerCase())
                                                        ).map((option, index) => (
                                                            <div key={index} value={option} className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100" onClick={() => {
                                                                setSearchExperience(option);
                                                                setIsOpenExperienceOption(false)
                                                            }} >
                                                                {option}
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <hr className='my-[16px]' />
                                    <div className="relative flex flex-wrap mb-4">
                                        <label htmlFor="jobcategories" className="w-full px-3 py-2 text-sm md:w-4/12">
                                            Job Categories
                                        </label>
                                        <div className="relative flex flex-col w-full px-4 md:w-6/12">
                                            <input
                                                type="text"
                                                value={searchCity}
                                                onFocus={() => setIsOpenCityOption(true)}
                                                onChange={(e) => setSearchCity(e.target.value)}
                                                className="w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6] focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]"
                                            />

                                            {isOpenCityOption && (
                                                <div
                                                    id="jobcategories"

                                                    name="keyword[]"
                                                    multiple
                                                    className="absolute top-[100%] left-0 z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-auto"

                                                >

                                                    {
                                                        filteredCities.map((city, index) => (
                                                            <div key={index} value={city} className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100" onClick={() => handleCitySelection(city)} >
                                                                {city}
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {selectedCity && (
                                        <div className="relative flex flex-wrap mb-4">
                                            <label htmlFor="jobcategories" className="w-full px-3 py-2 text-sm md:w-4/12">
                                                Job Area
                                            </label>
                                            <div className="relative flex flex-col w-full px-4 md:w-6/12">

                                                <>
                                                    <select className='w-full h-[50px] text-[14px] bg-white border border-[#E0E6F6] focus:border-[#3f51b5] focus:ring-1 focus:ring-[#3f51b5] rounded-[4px] px-[20px] py-[10px]' >
                                                        {cityAreasFiltered.map((area, index) => (
                                                            <option key={index} value={area} className='px-4 py-2 text-sm cursor-pointer hover:bg-blue-100' >
                                                                {area}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </>

                                            </div>
                                        </div>
                                    )}
                                    <div className="flex justify-center">
                                        <Button label='submit' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applyforjob
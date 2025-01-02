import React from 'react'
import img_1 from '../../assets/image/ic_cities_in_india_55_55.svg'
import img_2 from '../../assets/image/ic_interview_per_month_55_55.svg'
import img_3 from '../../assets/image/ic_qualified_candidate_55_55.svg'
const Webuser = () => {
    return (
        <div className='py-[100px]' >
            <div className="container mx-auto">
                <div className="flex items-center w-full ">

                    <div className="flex items-center flex-col justify-center w-full md:w-4/12 my-[12px] ">
                        <div className="bg-[#F1F3FA] p-10 rounded-lg shadow-lg flex justify-center flex-col">
                            <div className="mx-auto">
                                <img src="" className='w-[50px] h-[50px] aspect-square object-cover' alt="" />
                            </div>
                            <div className="flex flex-col space-y-[10px] text-[#4154af] justify-center my-2 text-center">
                                <span className='text-[24px]' >2Cr+</span>
                                <span className='text-[14px]' >Qualified Candidates</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Webuser
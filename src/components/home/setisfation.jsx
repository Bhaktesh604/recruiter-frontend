import React from 'react'
import img_1 from '../../assets/image/satisfaction/intelligent-recommendations.svg'
import img_2 from '../../assets/image/satisfaction/priority-support.svg'
import img_3 from '../../assets/image/satisfaction/simple-hiring.svg'
import Button from '../ui/whitebutton'
const Setisfation = () => {
    const job = [
        {
            id: 1,
            src: img_3,
            title: 'Simple Hiring',
            dis: 'Recieve calls from qualified candidates in under an hour of posting a job'
        }, {
            id: 2,
            src: img_2,
            title: 'Intelligent Recommendations',
            dis: 'Only the best candidates are recommended by our ML as per your requirement'
        }, {
            id: 3,
            src: img_1,
            title: 'Priority customer support',
            dis: 'Prioritized customer support for the paid plan users'
        },
    ]
    return (
        <div className='relative w-full bg-[#4154af]'  >
            <div className="container relative h-full mx-auto border-none py-[100px] ">
                <div className="flex flex-col h-full">
                    <div className="mb-5 ml-10 head text-[20px] lg:text-[36px] leading-[36px] font-medium text-white relative">
                        What makes WorkIndia better ?
                        <div className="absolute bottom-0 mb-[-5px] h-[4px] w-[70px] rounded-[5px] mt-[2px] bg-[#f9ae08] "></div>
                    </div>
                    <div className="flex items-start justify-around flex-col lg:flex-row pt-[24px] w-full">
                        {job.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-full p-[24px] lg:w-4/12" key={index} >
                                    <div className="relative h-[16rem] w-[16rem]">
                                        <img src={item.src} alt="" />
                                    </div>
                                    <h1 className='mt-[1.25rem] mb-[8px] text-lg md:text-2xl text-[white] capitalize' >{item.title}</h1>
                                    <span className='w-9/12 text-sm md:text-lg text-center text-[#fefefe] mt-[1.25rem] mb-[8px]' >{item.dis}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center text-center mt-7">
                        <Button label='hire now' to='/hire' />
                    </div>
                </div>
            </div>
            {/* <div className="relative w-full">
                <img src={vector_2} className='w-full h-full' alt="" />
            </div> */}

        </div>
    )
}

export default Setisfation
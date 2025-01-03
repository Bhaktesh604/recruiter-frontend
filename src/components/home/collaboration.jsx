import React from 'react'
import img_1 from '../../assets/image/hdfc.png'
import img_2 from '../../assets/image/licious.png'
import img_3 from '../../assets/image/ola.png'
import img_4 from '../../assets/image/swiggy.png'
import img_5 from '../../assets/image/tata.png'
import img_6 from '../../assets/image/urbancompany.png'
import img_7 from '../../assets/image/zomato-brand.png'
const Collaboration = () => {
    const images = [
        {
            id: 1,
            image: img_1
        }, {
            id: 2,
            image: img_2
        }, {
            id: 3,
            image: img_3
        }, {
            id: 4,
            image: img_4
        }, {
            id: 5,
            image: img_5
        }, {
            id: 6,
            image: img_6
        }, {
            id: 7,
            image: img_7
        }
    ]
    return (
        <div className='py-[50px]' >
            <div className="container mx-auto">
                <div className="w-full my-[2rem] gap-[50px] flex item-center flex-col xl:flex-row justify-between">
                    {images.map((data, index) => {
                        return (
                            <div className="w-full my-[20px] xl:w-[100px] xl:my-[20px] h-[50px] flex items-center justify-center relative" key={index} >
                                <img src={data.image} className='object-contain w-full h-full aspect-video' alt="" />

                            </div>
                        )
                    })}
                </div>
                <div className="text-center">
                    <h1 className='text-3xl' > <span className='font-medium' >10L+ top companies</span> trust WorkIndia for their hiring needs</h1>
                </div>
            </div>
        </div>
    )
}

export default Collaboration
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const EmployerReviews = () => {
    const reviews = [
        {
            name: "Madhulika Singh",
            title: "Regional Head HR",
            company: "Justdial",
            logo: "https://via.placeholder.com/50", // Replace with Justdial logo URL
            rating: 5,
            review: "WorkIndia has been a major contributor to our hiring requirements & have been very professional in their approach. Looking forward to continued support.",
        },
        {
            name: "Siddharth Gupta",
            title: "Regional Head HR",
            company: "Uni Cards",
            logo: "https://via.placeholder.com/50", // Replace with Uni Cards logo URL
            rating: 5,
            review: "WI has helped Uni save time and increase efficiency, making mass hiring very convenient. Highly recommended for Blue collar hiring needs.",
        }, {
            name: "Siddharth Gupta",
            title: "Regional Head HR",
            company: "Uni Cards",
            logo: "https://via.placeholder.com/50", // Replace with Uni Cards logo URL
            rating: 5,
            review: "WI has helped Uni save time and increase efficiency, making mass hiring very convenient. Highly recommended for Blue collar hiring needs.",
        },
    ];

    return (
        <div className="py-[100px]">

            <div className="container mx-auto ">
                <div className="mb-5 ml-10 head text-[20px] lg:text-[36px] leading-[36px] font-medium text-[#585858] relative">
                    Employer Reviews
                    <div className="absolute bottom-0 mb-[-5px] h-[4px] w-[70px] rounded-[5px] mt-[2px] bg-[#f9ae08] "></div>
                </div>
                <div className="max-w-[600px] px-4 py-[50px] mr-auto">

                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        spaceBetween={30}
                        slidesPerView={1}
                        style={{ overflow: "visible" }}
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-start p-10 bg-white rounded-lg shadow-md md:flex-row border border-[#4154af] ">
                                    <img
                                        src={item.logo}
                                        alt={`${item.company} logo`}
                                        className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                                    />
                                    <div className="text-center md:text-left">
                                        <div className="flex items-center justify-between mb-4 ">
                                            <div className="">
                                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.title}</p>
                                            </div>
                                            <div className="flex items-center ">
                                                {Array(item.rating)
                                                    .fill(0)
                                                    .map((_, starIndex) => (
                                                        <span key={starIndex} className="text-lg text-yellow-500">
                                                            ★
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                        <p className="mt-2 text-gray-800">{item.review}</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default EmployerReviews;

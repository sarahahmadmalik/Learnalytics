import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewSlider = ({ reviews }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: function (i) {
      return (
        <div className="h-2 w-2 bg-white mx-1 mb-[-40px] rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300"></div>
      );
    },
    style: {
        // Specify the background color you want for the slider
        backgroundColor: '#007A7C',
      },
  };

  return (
    <div className=" bg-[#007A7C] pt-4 pb-6">
    <Slider {...settings}>
      {reviews.map((review) => (
        
        <div key={review.id} className="relative">
          <div className=" text-white py-6 px-4 mb-6  flex items-center justify-between">
            <div className="flex items-center">
              <div className="rounded-full hidden  absolute z-10 left-0 top-[-50px] p-6 lg:flex items-center justify-center border border-3-[#005B5C80]">
                <div className="w-[300px] hidden lg:block h-90 rounded-full ">
                  <img src={review.image} alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col  lg:ml-[34%] 2xl:ml-[30%]">
              <div className="flex justify-between">
                <p className="text-[32px] font-[700]">{review.course}</p>
                <div className="flex space-x-2 items-center">
                    
                  {Array.from({ length: review.stars }).map((_, index) => (
                    
                    <FaStar size={30}  key={index} className="text-yellow-400" />
                    
                  ))}
                  {Array.from({ length: 5 - review.stars }).map((_, index) => (
                    <FaStar size={30} key={index} className="text-gray-400" />
                  ))}
                </div>
                </div>
                <span className="text-[25px] font-[500] text-[#D9D9D9]">{review.user}</span>
                <p className="mt-2 text-[14px]">{review.review}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ReviewSlider;

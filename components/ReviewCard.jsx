import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="">
      <div className="max-w-[380px]  h-[280px] mx-auto bg-white rounded-[25px] px-[1rem]  shadow" style={{ boxShadow: '0px 4px 18.399999618530273px 6px #00000026' }}>
      {/* Fully rounded image at the top (half outside) */}
      <div className="flex" >
        <div className="w-[100px] h-[100] rounded-full mx-auto my-0 py-0 relative top-[-30px]">
          <img src={review.image} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Review details */}
      <div className="px-4 -mt-[20px] overflow-hidden">
        <p className="text-[28px] font-[700] text-center">{review.course}</p>
        <p className="text-[23px] font-[600] text-center mb-2">{review.user}</p>
        <div className="overflow-hidden">
        <p className="text-[12px] font-[600] text-center overflow-hidden">{review.review}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ReviewCard;

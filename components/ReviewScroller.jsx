import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewScroller = ({ reviews }) => {
  return (
    <div className="flex overflow-hidden bg-[#007A7C70] py-8 px-8 my-[8rem]">
      <div className="flex gap-4 animate-scroll mx-8">
        {reviews.map((review) => (
          <div key={review.id} className="w-72 white  p-4 ">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewScroller;

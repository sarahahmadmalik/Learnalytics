import NavBar from '@/components/shared/NavBar'
import Footer from '@/components/shared/Footer'
import React from 'react'

function Enrolled() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center my-[5rem] h-screen">
        {/* Image */}
        <img
          src="./images/enrolled.svg" 
          alt="Enrollment Image"
          className="w-64 h-64 object-cover mb-4"
        />

        {/* Text */}
        <p className="text-[32px] text-[#007A7C] font-[700] text-center mb-2">Congratulations! You are enrolled in the Basics </p>
        <p className="text-[32px] text-[#007A7C] font-[700] text-center mb-2">of Python Programming.</p>
        
        {/* Duration, Start Date, End Date */}
        <div className="py-8 flex items-center justify-center flex-col">
        <p className="text-[24px] font-[700] text-black mb-2">Duration: 4 weeks</p>
        <p className="text-[24px]  text-black font-[700] ">Start Date: 27-01-2023 </p>
        <p className="text-[24px]  text-black font-[700] "> End Date: 27-01-2023</p>
</div>

        {/* Button */}
        <button className="bg-[#007A7C] w-40 text-white px-4 py-2 my-4 rounded-full mb-2">Continue</button>

        {/* Link */}
        <a href="#" className="text-[#666666] underline hover:no-underline">How to access the course</a>
      </div>

      <Footer />
    </div>
  )
}

export default Enrolled;

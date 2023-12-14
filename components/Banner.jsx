import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

function Banner() {
  return (
    <div className="w-full">
    <div className="flex items-center justify-center w-full pt-[20px] pb-[50px]">
      <div className="rounded-xl shadow bg-white w-[80%] 2xl:w-[50%] flex px-6 py-6 h-full my">
        <div className="flex flex-col justify-center">
          <h1 className="font-[800] text-[36px] text-[#007A7C]">Unlock Your Potential</h1>
          <h2 className="font-[800] text-[27px] text-[#333333]">Dive into Limitless Learning with Learnalytics!</h2>
          <button className="bg-[#B3D1D1] flex items-center justify-center space-x-2 py-1 w-[150px] text-[20px] font-[700] rounded-full text-[#007A7C] mt-6 relative overflow-hidden hover:bg-[#007A7C] hover:text-white transition-all duration-300">
  <p>Explore</p>
 
    {/* Arrow icon from react-icons library */}
    <FaArrowRight size={17} />
 
</button>
        </div>

        <div className="relative w-[70%] h-[320px] lg:block hidden">
<Image src="./images/banner.svg" layout="fill" objectFit="contain" />
</div>

      </div>
    </div>
  </div>
  )
}

export default Banner
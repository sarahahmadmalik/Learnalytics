import Link from 'next/link';
import Image from 'next/image';
function Footer() {
  return (
    <footer className="bg-[#007A7C] text-white py-3">
      <div className="text-center">
        <h2 className="text-[25px] font-[700] pt-6">Learnalytics</h2>
        <div className="flex justify-center sm:mt-4 mt-8">
          <Link href="#" className="text-white flex items-center justify-center  hover:text-gray-300 ml-2 mr-4">
          <Image src="./images/linkedin.svg" alt="Microsoft" width={35} height={35} />
          </Link>
          <Link href="#" className="flex items-center justify-center text-white hover:text-gray-300 ml-2 mr-4">
          <Image src="./images/twitter.svg" alt="Microsoft" width={24} height={24} />
          </Link>
          <Link href="#" className="text-white flex items-center justify-center  hover:text-gray-300 mx-2">
          <Image src="./images/fb.svg" alt="Microsoft" width={35} height={35} />
          </Link>
        </div>
      </div>
   
      <div className="flex-col flex sm:flex-row sm:justify-around px-8 py-[2rem]">
        <div className="flex flex-col items-center space-y-4">
          <ul className='flex flex-col items-center space-y-4'>
            <li><Link href="/" className="font-[700] text-[16px] text-white">Home</Link></li>
            <li><Link href="/testimonial" className="font-[700] text-[16px] text-white">Testimonial</Link></li>
            <li><Link href="/dashboard" className="font-[700] text-[16px] text-white">Dashboard</Link></li>
            <li><Link href="/courses" className="font-[700] text-[16px] text-white">Courses</Link></li>
          </ul>
        </div>
        <div className="border-l-2 hidden sm:flex sm:flex-row border-white mx-4"></div>
        <div className="flex flex-col items-center space-y-4 mt-6 sm:mt-0">
          <ul className='flex flex-col items-center space-y-4'>
            <li><Link href="/privacy-policy" className="font-[700] text-[16px] text-white">Privacy Policy</Link></li>
            <li><Link href="/blogs-articles" className="font-[700] text-[16px] text-white">Blogs/Articles</Link></li>
            <li><Link href="/about-us" className="font-[700] text-[16px] text-white">About Us</Link></li>
            <li><Link href="/contact-us" className="font-[700] text-[16px] text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[#D9D9D9] font-[700] text-[16px]">
        <p>2023 Learnalytics</p>
      </div>
    </footer>
  );
}

export default Footer;

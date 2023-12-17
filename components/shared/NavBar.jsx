import { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F9FA] py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-[#007A7C] nav-heading text-[48px] font-[800]">Learnalytics</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/login" className="rounded-full bg-[#007A7C] text-[16px] font-[700] text-white px-6 py-2 hover:bg-[#005B5C] transition-all duration-300 hidden lg:block">
          Log In / Sign Up
        </Link>
        </div>
        <div className={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={() => setIsOpen(false)}></div>
        <div className={`fixed w-64 h-full top-0 left-0 bg-white z-20 overflow-y-auto transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-4 p-8">
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link href="/login" className="rounded-full bg-[#007A7C] text-[16px] font-[700] text-white px-6 py-2 hover:bg-[#005B5C] transition-all duration-300">
          Log In / Sign Up
          </Link>
            </li>
         
          </ul>
        </div>
        <div className="hidden lg:flex  w-full ">
          <ul className="flex justify-end w-full  items-center text-[#333333] space-x-[60px] text-[16px] font-[700]">
            <li className="hover:underline">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="hover:underline">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
  
    </nav>
  );
}

export default NavBar;

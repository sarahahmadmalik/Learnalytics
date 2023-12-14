import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-[#F8F9FA]  py-4 px-8">
      <div className="container mx-auto  flex items-center justify-between">
        {/* Learnalytics Heading */}
        <h1 className="text-[#007A7C] nav-heading text-[48px] font-[800]">Learnalytics</h1>

        {/* Log In / Sign Up Button */}
        <button className="rounded-full bg-[#007A7C] text-[16px] font-[700] text-white px-6 py-2 hover:bg-[#005B5C] transition-all duration-300">
          Log In / Sign Up
        </button>

        {/* Navigation Menus */}
       
      </div>

<div className="flex  justify-end">


      <ul className="flex items-center text-[#333333] space-x-[60px] text-[16px] font-[700]">
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

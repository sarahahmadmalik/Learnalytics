import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="flex w-full h-full justify-center items-center px-[3.2rem] py-[2.9rem]">
        <div className="bg-[#D9D9D9] flex flex-col items-center w-full px-6 py-6 mx-auto">
          <h1 className="text-[#005B5C] block w-[50%] font-[700] text-[40px] text-center">Contact Us</h1>
         
          <ul className=" pl-8 text-[24px] font-[400] space-y-8 text-center pt-[3rem]">
            <li className="flex items-center font-[700] text-[20px]">Phone: <p className="ml-2 font-[400] ">7263 823 780</p></li>
            <li className="flex items-center font-[700] text-[20px]">Email: <p className="ml-2 font-[400]">learnalytics@gmail.com</p></li>
            <li className="flex items-center font-[700] text-[20px]">Address: <p className="ml-2 font-[400]">Lorem Ipsum Street, City, Country</p></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

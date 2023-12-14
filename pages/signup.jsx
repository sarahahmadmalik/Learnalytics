import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Signup() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="lg:flex justify-center items-center lg:flex-1 hidden bg-[#007A7C] text-white p-8">
        <div className="text-center flex flex-col h-full items-center justify-center">
          <h2 className="xxl:text-[48px] text-[37px] font-[700]">Welcome Back</h2>
          <p className="text-[28px] font-[400]">Sign Up now and start learning new skills from the best instructors</p>
        </div>
      </div>
      <div className="flex flex-col w-[78%] flex-1 p-8 justify-center items-center h-full">
        <h2 className="text-center xxl:text-[48px] text-[37px] font-[700] text-[#005B5C] mb-4">Sign Up</h2>
        <div className="flex w-full justify-center mb-4">
          <Link href="/login/google" className="flex items-center mr-4 justify-center">
            <Image src="/google.svg" alt="Google" width={32} height={32} className="mr-4" />
          </Link>
          <Link href="/login/facebook" className="flex items-center mr-4 justify-center">
            <Image src="./images/facebook.svg" alt="Facebook" width={28} height={28} className="mr-4" />
          </Link>
          <Link href="/login/microsoft" className="flex items-center justify-center">
            <Image src="./images/microsoft.svg" alt="Microsoft" width={25} height={25} />
          </Link>
        </div>
        <input
          type="email"
          placeholder="Email"
          className={`rounded-full font-[400] text-[20px] w-full mt-6 py-2 px-6 mb-4 border ${
            emailFocus ? 'focus:border-[#007A7C] focus:ring focus:ring-[#007A7C]' : 'border-[#007A7C]'
          } transition-all duration-300`}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <input
          type="text"
          placeholder="Username"
          className={`rounded-full font-[400] text-[20px] w-full py-2 px-6 mb-4 border ${
            usernameFocus ? 'focus:border-[#007A7C] focus:ring focus:ring-[#007A7C]' : 'border-[#007A7C]'
          } transition-all duration-300`}
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
        />
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={`rounded-full font-[400] text-[20px] w-full py-2 px-6 mb-4 border ${
              passwordFocus ? 'focus:border-[#007A7C] focus:ring focus:ring-[#007A7C]' : 'border-[#007A7C]'
            } transition-all duration-300`}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <button
            onClick={toggleShowPassword}
            className="absolute top-[24px] right-4 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          className={`rounded-full font-[400] text-[20px] w-full py-2 px-6 mb-2 border ${
            confirmPasswordFocus ? 'focus:border-[#007A7C] focus:ring focus:ring-[#007A7C]' : 'border-[#007A7C]'
          } transition-all duration-300`}
          onFocus={() => setConfirmPasswordFocus(true)}
          onBlur={() => setConfirmPasswordFocus(false)}
        />
        <div className="mb-4 w-full flex flex-col justify-center items-center">
          <div className="flex w-full justify-end">
            <Link href="/forgot-password" className="text-[#007A7C] font-[500] underline hover:no-underline">
              Forgot password
            </Link>
          </div>
          <button
            className="rounded-full bg-[#B3D1D1] text-[20px] font-[600] text-[#007A7C] px-[50px] py-2 mt-4 sm:mt-0  hover:bg-[#007A7C] hover:text-white transition-all duration-300"
          >
            Signup
          </button>
        </div>
        <div className="flex w-full justify-center items-center">
          <p className="text-[#5C5C5C]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#007A7C] font-[500] underline hover:no-underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

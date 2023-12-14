import React from 'react';

import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import Banner from '@/components/Banner';
import CourseList from '@/components/CourseList';
import Testimonial from '@/components/Testimonial';
import coursesData from '@/data/course_data';


export default function Courses() {
  const subjects = coursesData.map((subject) => subject.subject);
  
  
  
  return (
    <>
      <NavBar />

      <div className="flex items-center w-full justify-between py-8 px-4 2xl:px-[2rem]">
        {/* Search Bar */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="What you are looking for?"
              className="pl-8 pr-4 py-2 rounded-full bg-[#ECECEC]  focus:outline-none focus:border-[#005B5C]"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <img src="/images/search.svg" alt="Search" className="w-5 h-5" />
            </span>
          </div>

          {/* Sort and Filter Icons */}
          
        </div>
        <div className="ml-4 flex space-x-2">
            <button><img src="/images/sort.svg" alt="Sort" className="w-8 h-8" /></button>
            <button><img src="/images/filter.svg" alt="Filter" className="w-8 h-8" /></button>
          </div>
      </div>

      <div className="pb-[2rem]">
        {subjects.slice(0, subjects.length).map((subject) => (
          <CourseList
            key={subject}
            subjectName={subject}
            courses={coursesData.find((s) => s.subject === subject).courses.slice(0, 5)}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

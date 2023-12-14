import React from 'react';
import Link from 'next/link';
import CourseCard from './CourseCard';

function CourseList({ subjectName, courses }) {
  return (
    <div className="space-y-2 mb-[2.5rem]">
      <div className="flex justify-between items-center px-[2rem]">
        <h2 className="text-[36px] font-[700] text-[#005B5C]">{subjectName}</h2>
        <Link className="text-[#333333] font-[500] underline hover:no-underline" href={`/courses/${subjectName.toLowerCase()}`}>
          Show More
        </Link>
      </div>
      <div className="flex space-x-6 pb-6 pt-4 px-4 overflow-x-auto scrollbar-hide">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            imageUrl={course.image}
            heading={course.title}
            description={course.description}
            label={course.duration}
            link={`/course/${course.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;

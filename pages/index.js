import React from 'react';

import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import Banner from '@/components/Banner';
import CourseList from '@/components/CourseList';
import Testimonial from '@/components/Testimonial';
import coursesData from '@/data/course_data';


export default function Home() {
  const subjects = coursesData.map((subject) => subject.subject);

  const reviewsArray = [
    {
      id: 1,
      image: './images/testimonial.svg',
      course: 'SQL Basics',
      review:
        "I found the SQL Basics course on Learnalytics to be incredibly informative and well-structured. The content was comprehensive, covering everything from basic queries to advanced database management. The hands-on exercises provided a practical understanding of the concepts. Overall, a great learning experience!",
      stars: 5,
      user: 'Alice Johnson',
    },
    {
      id: 2,
      image: './images/testimonial.svg',
      course: 'Information Security',
      review:
        "The Information Security course exceeded my expectations. The instructors demonstrated a deep understanding of the subject, and the real-world examples made the content easy to grasp. The interactive nature of the course kept me engaged throughout. Highly recommended!",
      stars: 5,
      user: 'Bob Anderson',
    },
    {
      id: 3,
      image: './images/testimonial.svg',
      course: 'Python',
      review:
        "Learnalytics' Python course is perfect for beginners and those looking to expand their coding skills. The step-by-step approach and clear explanations helped me build a solid foundation in Python programming. The practical projects were a highlight, allowing me to apply what I learned.",
      stars: 4,
      user: 'Charlie Smith',
    },
    {
      id: 4,
      image: './images/testimonial.svg',
      course: 'UI/UX',
      review:
        "UI/UX on Learnalytics is a game-changer. The course covers the latest design principles and industry trends. The hands-on projects allowed me to create my portfolio, showcasing my skills. The instructors were supportive, and the community aspect added a collaborative element to the learning journey.",
      stars: 4,
      user: 'David Harber',
    },
  ];

  return (
    <>
      <NavBar />
      <Banner />
      <div className="pb-[2rem]">
        {subjects.slice(0, subjects.length - 1).map((subject) => (
          <CourseList key={subject} subjectName={subject} courses={coursesData.find((s) => s.subject === subject).courses.slice(0, 5)} />
        ))}
      </div>
      <div className="mb-8">
     
        <h2 className="text-[36px] text-center font-[700] text-[#005B5C] ml-[2rem] mb-6">What our learners say?</h2>
        <Testimonial reviews={reviewsArray} />
     
      </div>
      <Footer />
    </>
  );
}

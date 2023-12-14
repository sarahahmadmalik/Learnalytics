import React from 'react';
import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import ProgressCard from '@/components/ProgressCard'; // Import the ProgressCard component
import CourseList from '@/components/CourseList';
function Dashboard() {
  const progresses = [
    {
      title: 'SQL Basics',
      startDate: '27-01-2023',
      endDate: '27-03-2023',
      tasks: [
        { taskName: 'Quiz 1', date: '29-01-2023' },
        { taskName: 'Assignment', date: '04-02-2023' },
      ],
    },
    {
      title: 'SQL Basics',
      startDate: '27-01-2023',
      endDate: '27-03-2023',
      tasks: [
        { taskName: 'Quiz 1', date: '29-01-2023' },
        { taskName: 'Assignment', date: '04-02-2023' },
      ],
    },
    {
      title: 'SQL Basics',
      startDate: '27-01-2023',
      endDate: '27-03-2023',
      tasks: [
        'Quiz 1 29-01-2023',
    'Assignment 04-02-2023'
      ],
    },
  ];

  const course = [
    {
      id: 1,
      title: 'SQL Basics 1',
      description: 'ABC Academy',
      duration: '4 weeks',
      image: './images/SQL.svg',
      language: 'English',
      level: 'Beginner',
      about: 'Lorem ipsum dolor sit amet consectetur...',
      reviews: [],
    },
    {
      id: 2,
      title: 'SQL Basics 2',
      description: 'ABC Academy',
      duration: '4 weeks',
      image: './images/SQL.svg',
      language: 'English',
      level: 'Intermediate',
      about: 'Lorem ipsum dolor sit amet consectetur...',
      reviews: [],
    },
    {
      id: 3,
      title: 'SQL Basics 3',
      description: 'ABC Academy',
      duration: '4 weeks',
      image: './images/SQL.svg',
      language: 'English',
      level: 'Advanced',
      about: 'Lorem ipsum dolor sit amet consectetur...',
      reviews: [],
    },
    {
        id: 4,
        title: 'SQL Basics 3',
        description: 'ABC Academy',
        duration: '4 weeks',
        image: './images/SQL.svg',
        language: 'English',
        level: 'Advanced',
        about: 'Lorem ipsum dolor sit amet consectetur...',
        reviews: [],
      },
      {
        id: 5,
        title: 'SQL Basics 3',
        description: 'ABC Academy',
        duration: '4 weeks',
        image: './images/SQL.svg',
        language: 'English',
        level: 'Advanced',
        about: 'Lorem ipsum dolor sit amet consectetur...',
        reviews: [],
      },
      {
        id: 6,
        title: 'SQL Basics 3',
        description: 'ABC Academy',
        duration: '4 weeks',
        image: './images/SQL.svg',
        language: 'English',
        level: 'Advanced',
        about: 'Lorem ipsum dolor sit amet consectetur...',
        reviews: [],
      },
      {
        id: 7,
        title: 'SQL Basics 3',
        description: 'ABC Academy',
        duration: '4 weeks',
        image: './images/SQL.svg',
        language: 'English',
        level: 'Advanced',
        about: 'Lorem ipsum dolor sit amet consectetur...',
        reviews: [],
      },
      {
        id: 8,
        title: 'SQL Basics 3',
        description: 'ABC Academy',
        duration: '4 weeks',
        image: './images/SQL.svg',
        language: 'English',
        level: 'Advanced',
        about: 'Lorem ipsum dolor sit amet consectetur...',
        reviews: [],
      },
  ]

  return(
    <div>
      <NavBar />
      <div className="flex space-x-6 justify-center items-center mt-8">
        {progresses.map((progress, index) => (
          <ProgressCard key={index} progress={progress} />
        ))}
      </div>
      <div className='py-[5rem]'>
        <CourseList courses={course} subjectName="Recommended Courses"/>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

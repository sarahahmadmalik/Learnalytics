import React from 'react'
import Testimonial from '@/components/Testimonial'
import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';
import ReviewScroller from '@/components/ReviewScroller';
function Testimonials() {
  const reviewsArray = [
    {
      id: 1,
      image: './images/testimonial.svg',
      course: 'SQL Basics',
      review: 'Great course! Highly recommended.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 2,
      image: './images/testimonial.svg',
      course: 'Information Security',
      review: 'Excellent content. Informative and engaging.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 3,
      image: './images/testimonial.svg',
      course: 'Python',
      review: 'Fantastic learning experience. Practical and effective.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 4,
      image: './images/testimonial.svg',
      course: 'UI/UX',
      review: 'Incredible insights. Loved the interactive elements.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 5,
      image: './images/testimonial.svg',
      course: 'SQL Basics',
      review: 'Short and sweet course. Covered the essentials.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 6,
      image: './images/testimonial.svg',
      course: 'Information Security',
      review: 'Well-paced and informative. Enjoyed every bit.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 7,
      image: './images/testimonial.svg',
      course: 'Python',
      review: 'Clear and concise. Practical examples were helpful.',
      stars: 4,
      user: 'David Harber',
    },
    {
      id: 8,
      image: './images/testimonial.svg',
      course: 'UI/UX',
      review: 'Engaging content. Great learning platform.',
      stars: 4,
      user: 'David Harber',
    },
  ];

  

      const reviews = [
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
    <div>
        <NavBar/>
          <Testimonial reviews={reviews} />
          <ReviewScroller reviews={reviewsArray} />
          <Footer/>
    </div>
  )
}

export default Testimonials
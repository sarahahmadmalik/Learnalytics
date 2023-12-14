import Footer from "@/components/shared/Footer"
import NavBar from "@/components/shared/NavBar"

function AboutUs() {
  return (
    <>
    <NavBar/>
    <div className="flex w-full h-full justify-center items-center px-[3.2rem] py-[2.9rem]">
        <div className="bg-[#D9D9D9] px-6 py-6 mx-auto">
            <h1 className="text-[#005B5C] font-[700] text-[48px] text-center">About Us</h1>
<p className="text-[24px] font-[400] text-center">
Welcome to Learnalytics – your gateway to a world of transformative learning experiences. At Learnalytics, we believe that education is the cornerstone of personal and professional growth. Our journey began with a simple yet powerful vision: to create an online learning platform that empowers individuals to unlock their full potential.

What sets Learnalytics apart is our unwavering commitment to providing accessible, high-quality education tailored to the unique needs of every learner. We understand that the pursuit of knowledge is a personal journey, and our platform is designed to be a supportive companion on that path.

Our team consists of passionate educators, dedicated professionals, and forward-thinkers who share a common goal – to redefine online education. We aspire to foster a learning community where curiosity is celebrated, and the joy of discovery is at the heart of every educational experience.

Learnalytics is more than just a platform; it's a vibrant ecosystem that connects learners with a diverse range of courses, expert instructors, and a community that shares their enthusiasm for learning. We believe in the power of education to transform lives and open doors to new opportunities.

As you embark on your learning journey with Learnalytics, expect a user-friendly environment, engaging content, and a supportive community that encourages collaboration and growth. Whether you're advancing your career, exploring new interests, or deepening your existing knowledge, Learnalytics is here to guide you every step of the way.

At Learnalytics, we are dedicated to creating a space where learning knows no bounds. Join us on this exciting adventure, and let's embrace the future of education together
</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
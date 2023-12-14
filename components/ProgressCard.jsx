
const ProgressCard = (progress) => {
    console.log(progress)
  return (
    <div className="max-w-[350px]  rounded-[21px] bg-[#007A7C3D] overflow-hidden ">
      {/* Top Section */}
      <div className="flex items-center bg-[#007A7C] rounded-[21px]">
        {/* Left Section with Image */}
        <div className="w-25 h-25 overflow-hidden rounded-full">
          <img
            src="./images/progress.svg" // Use the provided imageUrl prop
            alt="Course Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Section with Title and Dates */}
        <div className=" text-white px-2">
          <p className="text-[24px] font-[700]">SQL Basics</p>
          <p className="text-[15px]">Start Date: 27-01-2023</p>
          <p className="text-[15px]">End Date: 27-01-2023</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-2 pb-[1rem] pt-2 px-8">
        <h2 className="text-lg font-semibold mb-2">Upcoming Assessments</h2>
        <ul className="list-disc list-inside pl-4">
          
            <li>Quiz 1 29-01-2023</li>
            <li>Assignment      04-02-2023</li>
        
        </ul>
      </div>
    </div>
  );
};

export default ProgressCard;

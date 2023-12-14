import Link from 'next/link';

function Card({ imageUrl, heading, description, label, link }) {
  return (
    <Link href={link} className="w-full max-w-sm mx-auto">
  
        <div className="relative bg-white rounded-[24px] w-[230px] shadow-md overflow-hidden cursor-pointer transition-all duration-300 card-shadow hover:shadow-lg">
          {/* Card Image */}
          <div className="overflow-hidden m-4">
            <img src={imageUrl} alt={heading} className="w-full h-40 object-cover rounded-[19px]" />
          </div>

          {/* Card Content */}
          <div className="px-4 pb-4 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-[#007A7C] text-[20px] text-center font-[700]">{heading}</h2>

            {/* Description */}
            <p className="text-[#5C5C5C] text-base text-center font-[600] ">{description}</p>

            {/* Label */}
            <p className="text-[#5C5C5C] text-[14px] text-center font-[600] ">{label}</p>
          </div>
        </div>
    </Link>
  );
}

export default Card;

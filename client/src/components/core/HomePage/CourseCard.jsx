import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] flex flex-col gap-2 rounded-xl transition-all duration-300 cursor-pointer
      ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-[#06b6d4]" // Swapped the harsh shadow for the brand cyan
          : "bg-richblack-800 text-richblack-25 hover:bg-richblack-700 hover:-translate-y-2"
      }`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        
        {/* The active heading now uses the bulletproof cyan hex code */}
        <h3
          className={`font-semibold text-xl transition-colors duration-200 ${
            currentCard === cardData?.heading ? "text-[#06b6d4]" : "text-richblack-5"
          }`}
        >
          {cardData?.heading}
        </h3>
        
        <p className={`text-sm leading-relaxed ${
            currentCard === cardData?.heading ? "text-richblack-500" : "text-richblack-400"
        }`}>
          {cardData?.description}
        </p>
      </div>

      <div
        className={`flex justify-between px-6 py-3 font-medium text-sm ${
          currentCard === cardData?.heading ? "text-[#06b6d4]" : "text-richblack-300"
        }`}
      >
        <div className="flex items-center gap-2">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>
        <div className="flex items-center gap-2">
          <ImTree />
          <p>{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
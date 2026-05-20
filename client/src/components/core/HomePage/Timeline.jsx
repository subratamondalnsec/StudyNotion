import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skill",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full flex justify-center">
      
      {/* The Unified Glassmorphism Card */}
      <div className="relative flex flex-col lg:flex-row gap-20 items-center bg-richblack-900 rounded-3xl border border-richblack-700 p-8 lg:p-16 shadow-2xl overflow-hidden w-full max-w-6xl">
        
        {/* Subtle background glow inside the card */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#06b6d4] blur-[130px] opacity-20 rounded-full pointer-events-none"></div>

        {/* Left Column: Timeline */}
        <div className="lg:w-[45%] flex flex-col gap-14 z-10">
          <div className="flex flex-col gap-11">
            {timeline.map((element, index) => {
              return (
                <div className="flex flex-row gap-8 relative group cursor-default" key={index}>
                  
                  {/* Animated Connecting Line (Updated for Dark Mode) */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[33px] top-[68px] bottom-[-44px] w-[2px] border-r-2 border-dashed border-richblack-600 group-hover:border-[#06b6d4] transition-colors duration-300"></div>
                  )}
                  
                  {/* Icon Box (Updated to Dark Mode) */}
                  <div className="w-[68px] h-[68px] bg-richblack-800 border border-richblack-700 rounded-full flex justify-center items-center shadow-lg z-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300">
                    <img src={element.Logo} alt={element.heading} className="w-[28px] h-[28px] object-contain" />
                  </div>
                  
                  {/* Text (Flipped to Light Colors for Dark Background) */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-xl lg:text-2xl text-richblack-5 group-hover:text-[#06b6d4] transition-colors duration-300">
                      {element.heading}
                    </h3>
                    <p className="text-lg text-richblack-300 mt-2">
                      {element.Description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image & Floating Effects */}
        <div className="relative w-full lg:w-[55%] max-w-[500px] mt-24 lg:mt-0 z-10">
          
          {/* Image Group for synchronized hover effects */}
          <div className="relative group">
            <img 
              src={timelineImage} 
              alt="timeline" 
              className="shadow-[20px_20px_0px_0px] shadow-[#06b6d4]/50 rounded-xl object-cover w-full relative z-10 group-hover:-translate-y-4 group-hover:shadow-[25px_25px_0px_0px] group-hover:shadow-[#06b6d4] transition-all duration-500" 
            />
            
            {/* Overlapping Stats Box */}
            <div className="absolute bg-richblack-800 border border-richblack-700 flex flex-row text-white uppercase py-8 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl shadow-2xl z-20 w-[90%] max-w-[400px] group-hover:-translate-y-6 transition-all duration-500">
              
              <div className="flex flex-row gap-5 items-center border-r border-richblack-600 px-7 w-1/2 justify-center">
                <p className="text-4xl font-bold text-[#06b6d4]">10</p>
                <p className="text-richblack-300 text-sm font-medium w-[75px] leading-snug">
                  Years<br/>Experiences
                </p>
              </div>
              
              <div className="flex flex-row gap-5 items-center px-7 w-1/2 justify-center">
                <p className="text-4xl font-bold text-[#06b6d4]">250</p>
                <p className="text-richblack-300 text-sm font-medium w-[75px] leading-snug">
                  Types of<br/>Courses
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelineSection;
import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex flex-col ${position} my-20 justify-between gap-14 lg:gap-10`}>
      
      {/* Left Section: Text & Buttons */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 relative z-20">
        {heading}
        <div className="text-richblack-300 font-medium text-lg leading-relaxed mt-[-10px]">
          {subheading}
        </div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Right Section: The Code Card */}
      <div className="relative w-[100%] lg:w-[47%] z-20">
        
        {/* The glowing background blob from Home.jsx gets rendered here */}
        {backgroundGradient}

        {/* The Card UI */}
        <div className="relative flex flex-col w-full rounded-xl border border-richblack-700 bg-richblack-800/60 p-4 backdrop-blur-md shadow-2xl shadow-[#06b6d4]/10 transition-all duration-300 hover:scale-[1.02]">
          
          {/* IDE Window Header (Mac Style Buttons) */}
          <div className="flex items-center gap-2 border-b border-richblack-700 pb-3 mb-4 mt-1 pl-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-sm"></div>
          </div>

          {/* Code Content */}
          <div className="flex flex-row text-[14px] sm:text-base w-[100%] font-bold font-mono">
            
            {/* Line Numbers */}
            <div className="text-center flex flex-col w-[10%] text-richblack-400 select-none">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
            </div>

            {/* Typing Animation Code */}
            <div className={`w-[90%] flex flex-col gap-2 ${codeColor} pr-2`}>
              <TypeAnimation
                sequence={[codeblock, 2000, ""]}
                repeat={Infinity}
                cursor={true}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CodeBlocks;
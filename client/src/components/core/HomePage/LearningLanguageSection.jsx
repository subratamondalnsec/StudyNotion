import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div className="w-full mt-12 mb-24 flex justify-center">
      
      <div className="relative flex flex-col gap-5 items-center bg-richblack-900 rounded-3xl border border-richblack-700 p-8 lg:p-16 shadow-2xl overflow-hidden w-full max-w-6xl">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#06b6d4] blur-[120px] opacity-20 rounded-full pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-center text-richblack-5 tracking-wide relative z-10">
            Your swiss knife for
            <HighlightText text={" learning any language"} />
        </h2>

        <p className="text-center text-richblack-300 font-medium lg:w-[75%] mx-auto leading-relaxed text-base mt-4 relative z-10">
          Using spin making learning multiple languages easy. With 20+
          languages, realistic voice-over, progress tracking, custom schedules
          and more.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-16 w-full relative z-10">
          <img
            src={Know_your_progress}
            alt="Know your progress"
            className="object-contain lg:-mr-32 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:z-50 z-10"
          />
          <img
            src={Compare_with_others}
            alt="Compare with others"
            className="object-contain lg:-mb-10 lg:-mt-0 -mt-12 drop-shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-300 hover:scale-110 hover:z-50 z-20"
          />
          <img
            src={Plan_your_lessons}
            alt="Plan your lessons"
            className="object-contain lg:-ml-36 lg:-mt-5 -mt-16 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:z-50 z-30"
          />
        </div>

        <div className="w-fit mx-auto mt-12 lg:mt-16 relative z-10">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="px-4">Learn More</div>
          </CTAButton>
        </div>
        
      </div>
    </div>
  )
}

export default LearningLanguageSection;
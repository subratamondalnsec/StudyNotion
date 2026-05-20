import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className="mt-16 lg:mt-24 mb-24 w-full flex justify-center px-4 md:px-0">
      
      {/* The Glassmorphism Card Wrapper */}
      <div className="relative flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center bg-richblack-900 rounded-3xl border border-richblack-700 p-8 lg:p-16 shadow-2xl overflow-hidden w-full max-w-6xl">
        
        {/* Subtle background glow inside the left side of the card */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#06b6d4] blur-[120px] opacity-20 rounded-full pointer-events-none"></div>

        {/* Left: Image with Premium Cyan UI */}
        <div className="w-full lg:w-[50%] relative group z-10">
          
          <img 
            src={Instructor} 
            alt="Instructor" 
            className="shadow-[-20px_-20px_0_0] shadow-[#06b6d4] rounded-xl object-cover w-full relative z-10 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[-25px_-25px_0_0] group-hover:shadow-[#67e8f9]" 
          />
        </div>
        
        {/* Right: Text & CTA */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 z-10">
          
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-richblack-5 tracking-wide">
            Become an
            <br />
            <HighlightText text={" instructor"} />
          </h2>
          
          <p className="font-medium text-lg lg:w-[85%] text-richblack-300 leading-relaxed mt-2">
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          
          <div className="w-fit mt-4 lg:mt-8">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center px-2">
                Start Teaching Today
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </div>
            </CTAButton>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default InstructorSection
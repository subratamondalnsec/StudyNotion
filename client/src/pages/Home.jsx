import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div className="bg-richblack-900 flex flex-col font-inter">
      
      {/* ================= SECTION 1: Dark Theme Hero ================= */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
        {/* Become an Instructor Pill */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 hover:shadow-md hover:shadow-[#06b6d4]/20 border border-richblack-700">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[6px] transition-all duration-200 group-hover:bg-richblack-900 group-hover:text-[#06b6d4]">
              <p>Become an Instructor</p>
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Hero Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold font-serif tracking-wide mt-4 relative z-20">
          Empower Your Future with
          <HighlightText text={" Coding Skills"} />
        </h1>

        {/* Hero Subheading */}
        <p className="mt-4 w-[90%] text-center text-lg font-medium text-richblack-300 leading-relaxed relative z-20">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-7 w-full items-center justify-center relative z-30">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={true} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video Player */}
        <div className="mx-auto my-12 w-[100%] md:w-[75%] lg:w-[65%] max-w-4xl relative z-10 shadow-[0_20px_50px_rgba(6,182,212,0.15)] rounded-xl">
          <video
            className="w-full h-full object-cover rounded-xl border-r-[12px] border-b-[12px] border-[#06b6d4]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div className="w-full my-12 relative z-20">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <h2 className="text-4xl font-bold">
                Unlock your
                <HighlightText text={" coding potential"} /> with our online
                courses.
              </h2>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="absolute w-[300px] h-[300px] bg-[#06b6d4]/20 blur-[120px] top-10 left-10 rounded-full z-0 pointer-events-none"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div className="w-full my-12 relative z-20">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <h2 className="w-[100%] text-4xl font-bold lg:w-[50%]">
                Start
                <HighlightText text={" coding in seconds"} />
              </h2>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="absolute w-[300px] h-[300px] bg-[#67e8f9]/20 blur-[120px] top-10 right-10 rounded-full z-0 pointer-events-none"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* ================= SECTION 2: Light Background Transition ================= */}
      <div className="bg-pure-greys-5 text-richblack-700">
        
        {/* Transitional Background Image Area */}
        <div className="homepage_bg h-[320px] bg-gradient-to-b from-richblack-900 to-pure-greys-5">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 h-full">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <div className="mt-16 lg:mt-24 w-full">
            <TimelineSection />
          </div>
          <LearningLanguageSection />
        </div>
      </div>

      {/* ================= SECTION 3: Dark Theme Footer Transition ================= */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        
        <InstructorSection />
        
        {/* Premium Styled Review Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-richblack-5 mt-16 mb-12 tracking-tight underline decoration-[#06b6d4] underline-offset-8 decoration-4">
          Reviews from other learners
        </h2>
        
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default Home
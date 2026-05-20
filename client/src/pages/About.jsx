import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats" // Kept your exact spelling!
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div className="bg-richblack-900 flex flex-col font-inter text-richblack-5">
      
      {/* ================= SECTION 1: Hero ================= */}
      <section className="bg-richblack-800 relative">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white pb-20">
          
          <header className="mx-auto pt-20 text-4xl md:text-5xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <br />
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-4 text-center text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>
          
          {/* Hero Images overlapping section border */}
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5 z-10 px-4">
            <img src={BannerImage1} alt="Banner 1" className="shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl object-cover" />
            <img src={BannerImage2} alt="Banner 2" className="shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl object-cover" />
            <img src={BannerImage3} alt="Banner 3" className="shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Quote ================= */}
      <section className="border-b border-richblack-700 mt-[100px] lg:mt-[150px]">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500 pb-20 pt-10">
          <Quote />
        </div>
      </section>

      {/* ================= SECTION 3: The Story & Vision Cards ================= */}
      <section className="mb-24 mt-20">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          
          {/* Founding Story Card */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between bg-richblack-800 p-8 lg:p-14 rounded-3xl border border-richblack-700 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(252,103,103,0.15)]">
            
            {/* Background glow matching the gradient */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FC6767] blur-[130px] opacity-20 rounded-full pointer-events-none"></div>

            <div className="flex lg:w-[50%] flex-col gap-8 z-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent w-fit">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 leading-relaxed">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 leading-relaxed">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="z-10 lg:w-[40%] flex justify-center">
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="shadow-[0_0_30px_0] shadow-[#FC6767]/40 rounded-xl"
              />
            </div>
          </div>

          {/* Vision and Mission Split Cards */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10">
            
            {/* Vision Card */}
            <div className="flex flex-col gap-8 lg:w-1/2 bg-richblack-800 p-8 lg:p-12 rounded-3xl border border-richblack-700 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(240,152,25,0.15)] hover:-translate-y-1">
               <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#F09819] blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent w-fit z-10">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 leading-relaxed z-10">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col gap-8 lg:w-1/2 bg-richblack-800 p-8 lg:p-12 rounded-3xl border border-richblack-700 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(31,162,255,0.15)] hover:-translate-y-1">
               <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#1FA2FF] blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold w-fit z-10">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 leading-relaxed z-10">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: Stats ================= */}
      <StatsComponenet />
      
      {/* ================= SECTION 5: Learning Grid & Get in Touch Card ================= */}
      <section className="mx-auto mt-24 mb-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-24 text-white">
        
        <LearningGrid />
        
        {/* Contact Form wrapped in a sleek card */}
        <div className="w-full flex justify-center mt-12">
          <div className="bg-richblack-800 border border-richblack-700 shadow-2xl shadow-[#06b6d4]/10 rounded-3xl p-8 lg:p-14 w-full max-w-3xl flex flex-col items-center">
              <ContactFormSection />
          </div>
        </div>
        
      </section>

      {/* ================= SECTION 6: Review Slider ================= */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Same unified Review heading style from the Homepage */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-richblack-5 mt-8 mb-12 tracking-tight underline decoration-[#06b6d4] underline-offset-8 decoration-4">
          Reviews from other learners
        </h2>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default About
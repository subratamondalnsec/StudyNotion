import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

// Dummy Data to ensure the slider always renders!
const dummyReviews = [
  {
    user: { firstName: "Jane", lastName: "Cooper", image: "https://api.dicebear.com/5.x/initials/svg?seed=Jane%20Cooper" },
    course: { courseName: "Full Stack Web Development" },
    rating: 5,
    review: "This platform completely changed my career trajectory. The PERN stack projects were incredibly hands-on and practical.",
  },
  {
    user: { firstName: "Wade", lastName: "Warren", image: "https://api.dicebear.com/5.x/initials/svg?seed=Wade%20Warren" },
    course: { courseName: "Advanced Machine Learning" },
    rating: 4.5,
    review: "The breakdown of complex algorithms into digestible visual components was exactly what I needed. Highly recommend!",
  },
  {
    user: { firstName: "Eleanor", lastName: "Pena", image: "https://api.dicebear.com/5.x/initials/svg?seed=Eleanor%20Pena" },
    course: { courseName: "UI/UX Masterclass" },
    rating: 5,
    review: "As a designer, I appreciate a clean interface. The learning environment here is top-notch and completely distraction-free.",
  },
  {
    user: { firstName: "Ralph", lastName: "Edwards", image: "https://api.dicebear.com/5.x/initials/svg?seed=Ralph%20Edwards" },
    course: { courseName: "Data Structures & Algorithms" },
    rating: 4.5,
    review: "Finally conquered dynamic programming thanks to these instructors. The timeline of learning is perfectly paced.",
  }
];

const ReviewSlider = () => {
  return (
    <div className="w-full relative z-20 mt-10">
      <div className="max-w-maxContentTab lg:max-w-maxContent mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {dummyReviews.map((review, i) => (
            <SwiperSlide key={i}>
              {/* The Glassmorphism Review Card */}
              <div className="flex flex-col gap-4 bg-richblack-800/60 backdrop-blur-sm border border-richblack-700 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(6,182,212,0.15)] h-[250px]">
                
                {/* User Info Header */}
                <div className="flex items-center gap-4">
                  <img
                    src={review?.user?.image}
                    alt={`${review?.user?.firstName} profile`}
                    className="h-12 w-12 rounded-full object-cover shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-richblack-5 text-lg">
                      {review?.user?.firstName} {review?.user?.lastName}
                    </h3>
                    <p className="text-[13px] font-medium text-richblack-300">
                      {review?.course?.courseName}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-medium text-richblack-100 text-sm leading-relaxed overflow-hidden">
                  "{review?.review}"
                </p>

                {/* Star Rating Box placed at the bottom */}
                <div className="mt-auto flex items-center gap-2">
                  <p className="font-bold text-[#06b6d4] text-lg">{review?.rating}</p>
                  <div className="flex items-center gap-1 text-[#06b6d4]">
                    {/* Rendering 5 stars statically for the mock data */}
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
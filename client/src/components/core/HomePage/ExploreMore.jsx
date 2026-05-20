import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="w-full relative z-20 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-richblack-5">
        Unlock the
        <HighlightText text={" Power of Code"} />
      </h2>

      {/* Subheading */}
      <p className="text-center text-richblack-300 text-lg font-medium mt-3">
        Learn to Build Anything You Can Imagine
      </p>

      {/* Interactive Tabs */}
      <div className="hidden lg:flex flex-row rounded-full bg-richblack-800 mb-5 mt-5 px-1 py-1 border border-richblack-700 shadow-sm">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 rounded-full transition-all duration-200 cursor-pointer hover:text-richblack-5 px-7 py-[7px]
                ${
                  currentTab === element
                    ? "bg-richblack-900 text-richblack-5 font-medium"
                    : "text-richblack-200 hover:bg-richblack-900/50"
                }
              `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Course Cards Rendering */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:translate-y-[50%] pb-12 lg:pb-0">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
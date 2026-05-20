import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../Common/RatingStars"

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

  useEffect(() => {
    const count = GetAvgRating(course?.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="group flex flex-col gap-2 rounded-xl bg-richblack-800 p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10">
          <div className="overflow-hidden rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumbnail"
              className={`${Height} w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105`}
            />
          </div>
          
          <div className="flex flex-col gap-1 px-1 py-2">
            <h3 className="text-lg font-semibold text-richblack-5 line-clamp-1">
              {course?.courseName}
            </h3>
            <p className="text-sm text-richblack-300">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="font-semibold text-brand-300">
                {avgReviewCount || 0}
              </span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-xs text-richblack-400">
                ({course?.ratingAndReviews?.length} Ratings)
              </span>
            </div>
            
            <p className="text-lg font-bold text-richblack-5 mt-2">
              Rs. {course?.price}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
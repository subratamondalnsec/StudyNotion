import { useSelector } from "react-redux"
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 flex flex-col justify-center">
            {/* Standardized Typography Hierarchy */}
            <h1>{title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-richblack-100">
              {description1}{" "}
              <span className="font-edu-sa font-bold italic text-brand-300">
                {description2}
              </span>
            </p>
            
            <div className="mt-8">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
          
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10 transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
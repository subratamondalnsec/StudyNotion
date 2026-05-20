import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const handleAutoFill = () => {
    setFormData({ email: "barun6169@gmail.com", password: "barun61690" })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <>
      <div className="bg-richblack-800 border border-richblack-700 p-4 rounded-lg text-sm mb-6 shadow-sm">
        <p className="text-richblack-5 mb-2 font-medium">Use this Credential to Login:</p>
        <p className="text-richblack-200">Email: <span className="text-brand-300 font-mono">barun6169@gmail.com</span></p>
        <p className="text-richblack-200">Password: <span className="text-brand-300 font-mono">barun61690</span></p>
        <button
          onClick={handleAutoFill}
          type="button"
          className="mt-3 bg-richblack-700 hover:bg-richblack-600 text-richblack-5 px-4 py-2 rounded-md text-xs font-semibold transition-colors duration-200"
        >
          Fill Automatically
        </button>
      </div>

      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-5">
        <label className="w-full">
          <p className="mb-1 text-sm font-medium text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 shadow-[0_1px_0_0_rgba(255,255,255,0.1)] outline-none focus:ring-2 focus:ring-brand-500 focus:shadow-none transition-all duration-200"
          />
        </label>
        
        <label className="relative">
          <p className="mb-1 text-sm font-medium text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-lg bg-richblack-800 p-3 pr-10 text-richblack-5 shadow-[0_1px_0_0_rgba(255,255,255,0.1)] outline-none focus:ring-2 focus:ring-brand-500 focus:shadow-none transition-all duration-200"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[34px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" className="hover:fill-richblack-5 transition-colors" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" className="hover:fill-richblack-5 transition-colors" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-2 ml-auto max-w-max text-xs font-medium text-brand-300 hover:text-brand-100 transition-colors">
              Forgot Password?
            </p>
          </Link>
        </label>
        
        <button
          type="submit"
          className="mt-4 rounded-lg bg-brand-500 py-3 px-4 font-semibold text-richblack-900 hover:bg-brand-300 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-200"
        >
          Sign In
        </button>
      </form>
    </>
  )
}

export default LoginForm
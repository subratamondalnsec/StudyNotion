import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetching categories
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        if (Array.isArray(res?.data?.data)) {
          setSubLinks(res.data.data)
        } else {
          setSubLinks([])
        }
      } catch (error) {
        console.error("Could not fetch Categories.", error)
        setSubLinks([])
      }
      setLoading(false)
    }
    fetchCategories()
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-16 items-center justify-center border-b-[1px] border-b-richblack-800 ${
        location.pathname !== "/" ? "bg-richblack-900" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 text-richblack-100">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 transition-colors duration-200 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-brand-500 font-semibold"
                          : "hover:text-brand-300"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
                      
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] shadow-xl">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        
                        {loading ? (
                          <p className="text-center font-medium">Loading...</p>
                        ) : subLinks.length > 0 ? (
                          <>
                            {subLinks
                              ?.filter((subLink) => subLink?.courses?.length > 0)
                              .map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-3 pl-4 text-sm font-medium transition-colors duration-200 hover:bg-richblack-100 hover:text-brand-900"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center font-medium">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`transition-colors duration-200 ${
                        matchRoute(link?.path)
                          ? "text-brand-500 font-semibold"
                          : "hover:text-brand-300"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative transition-transform hover:scale-110">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100 hover:text-brand-300 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-brand-500 text-center text-xs font-bold text-richblack-900 shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          
          {token === null && (
            <>
              <Link to="/login">
                <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-5 py-2 text-sm font-medium text-richblack-100 transition-all duration-200 hover:bg-richblack-700 hover:text-richblack-5">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-lg border border-brand-500 bg-brand-500 px-5 py-2 text-sm font-medium text-richblack-900 transition-all duration-200 hover:bg-brand-300 hover:border-brand-300">
                  Sign up
                </button>
              </Link>
            </>
          )}
          
          {token !== null && <ProfileDropdown />}
        </div>
        
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
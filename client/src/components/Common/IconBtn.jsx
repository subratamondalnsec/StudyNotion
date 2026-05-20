export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center justify-center transition-all duration-200 ${
        outline 
          ? "border border-brand-500 bg-transparent hover:bg-brand-500/10" 
          : "bg-brand-500 hover:bg-brand-300 hover:shadow-lg hover:shadow-brand-500/20"
      } cursor-pointer gap-x-2 rounded-lg py-2 px-6 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-brand-500"}`}>{text}</span>
          {children}
        </>
      ) : (
        <span className={`${outline && "text-brand-500"}`}>{text}</span>
      )}
    </button>
  )
}
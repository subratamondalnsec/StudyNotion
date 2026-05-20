import React from 'react'

const HighlightText = ({ text }) => {
  return (
    <span className="font-bold text-[#06b6d4] drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
        {text}
    </span>
  )
}

export default HighlightText
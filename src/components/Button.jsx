import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-[#4188E5] text-white text-xs md:text-sm lg:text-base font-pop font-normal py-1.5 lg:py-2 px-3 rounded-3xl border border-[#4188E5] lg:hover:bg-white lg:hover:text-[#4188E5] duration-300 ${className}`}>{text}</button>
  )
}

export default Button
import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-[#4188E5] text-white text-base font-pop font-normal ${className}`}>{text}</button>
  )
}

export default Button
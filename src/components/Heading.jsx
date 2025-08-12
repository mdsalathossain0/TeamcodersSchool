import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={`text-first text-[45px] font-normal font-source leading-11 ${className}`}>{text}</h2>
  )
}

export default Heading
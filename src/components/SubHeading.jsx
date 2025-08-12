import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <p className={`text-second text-base font-normal font-pop leading-4 ${className}`}>{text}</p>
  )
}

export default SubHeading
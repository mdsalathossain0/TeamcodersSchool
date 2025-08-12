import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`list-none text-sm lg:text-[17px] text-black font-normal font-pop leading-4 ${className}`}>{text}</li>
  )
}

export default List
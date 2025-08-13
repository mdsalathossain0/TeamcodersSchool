import React from 'react'

const FooterList = ({text,className}) => {
  return (
    <li className={`list-none text-[#ffffffcc] text-sm font-pop font-normal leading-4 cursor-pointer ${className}`}>{text}</li>
  )
}

export default FooterList
import React from 'react'
import Image from './Image'

const FacilitiesCard = ({text,src, className}) => {
    return (
        <div className={`relative group/one w-1/3  h-[200px] flex flex-col justify-center items-center ${className}`}>
            <div className='pb-5'><Image src={src} /></div>
            <p className='text-white text-xs md:text-sm lg:text-lg font-source font-normal'>{text}</p>
            <div className={`w-full h-full bg-[#00000080] flex justify-center items-center absolute top-0 left-0 opacity-0 group-hover/one:opacity-100 duration-500 ${className}`}><span className='text-white text-xs lg:text-lg font-source font-normal rounded-4xl border border-white py-2 px-3'>Learn More</span></div>
        </div>
    )
}

export default FacilitiesCard
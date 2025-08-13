import React from 'react'
import Image from './Image'
import SubHeading from './SubHeading'

const AcademicCard = ({title, info , src}) => {
  return (
    <div className='w-[280px] h-auto bg-fourth pl-6 pr-1 pt-8 rounded-2xl'>
        <div className='w-[61px] h-[61px]'>
            <Image className='w-full h-full' src={src}/>
        </div>
        <h4 className='text-2xl text-second font-source font-normal pt-6 pb-3'>{title}</h4>
        <SubHeading text={info}/>
        <div className='py-8'>
            <button className='bg-white text-[#0C4DA2] text-sm font-pop py-3 px-4 rounded-3xl'>Learn More</button>
        </div>
    </div>
  )
}

export default AcademicCard

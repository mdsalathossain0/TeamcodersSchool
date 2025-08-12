import React from 'react'
import Flex from '../components/Flex'

const Header = () => {
  return (
    <section className='bg-third py-4 text-center'>
      <marquee behavior="smooth" direction="ltr">
        <Flex className='justify-center items-center gap-x-3'>
        <p className='text-black text-sm font-pop leading-4 tracking-[0.5px]'>Admission is going on for the Session: 2025-26 from PG to A level.</p>
        <a className='text-black text-base font-pop font-normal leading-4 italic border-b border-black' href="">Contact Us</a>
        <button className='bg-[#0D6EFD] py-[5px] px-4 text-white rounded-[4px] text-base font-pop font-normal italic'>Admission Form</button>
      </Flex>
      </marquee>
    </section>
  )
}

export default Header
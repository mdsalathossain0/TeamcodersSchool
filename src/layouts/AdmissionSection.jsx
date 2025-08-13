import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import banner from '../assets/banner.jpg'

const AdmissionSection = () => {
  return (
    <section className='bg-fourth py-12 lg:py-19 px-4'>
        <Container>
            <Flex className='flex-col lg:flex-row gap-y-10 lg:gap-y-0'>
                <div className='w-full lg:w-7/12'>
                 <p className='text-third text-sm lg:text-base font-pop font-normal leading-4'>We Nurture the Future Leaders</p>
                 <h1 className='text-[32px] md:text-[45px] lg:text-[70px] text-fifth font-source font-extrabold leading-8 lg:leading-18 py-2'>Admission Open</h1>
                 <h1 className='text-[32px] md:text-[45px] lg:text-[70px] text-fifth font-source font-normal leading-8 lg:leading-18 pb-8'>We Nurture the Future Leaders</h1>
                <button className='bg-third text-sm lg:text-base text-white font-pop font-normal py-3 px-4 rounded-[24px]'>Campus Care</button>
                </div>
                <div className='w-full lg:w-5/12'>
                <Image src={banner}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default AdmissionSection
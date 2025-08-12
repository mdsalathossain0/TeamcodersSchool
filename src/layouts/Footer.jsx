import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import FooterList from '../components/FooterList'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { PiYoutubeLogoThin } from 'react-icons/pi'

const Footer = () => {
  return (
    <>
    <section className='py-12 lg:py-20 bg-[#1C1C1C] px-4'>
      <Container>
        <Flex className='flex-col lg:flex-row gap-y-8 lg:gap-y-0'>
          <div className='w-full lg:w-3/12'>
          <Link to='/'><h1 className='text-[22px] text-[#A020F0] font-bold font-source '>My Demo <br /> School</h1></Link>
          <p className='text-sm text-white font-normal font-pop leading-4 tracking-[1px] py-5'>Info@dis.edu.bd</p>
          <p className='text-sm text-white font-normal font-pop leading-4 tracking-[1px]'>+880 0184514017</p>
          </div>
          <div className='w-full lg:w-3/12 '>
          <h3 className='text-[22px] text-third font-normal font-source leading-5 tracking-[1px] pb-10'>Navigation</h3>
          <Flex className='flex-col gap-y-5'>
            <FooterList text='Faculty'/>
            <FooterList text='Teachers'/>
          </Flex>
          </div>
          <div className='w-full lg:w-3/12 text-white'>
          <h3 className='text-[22px] text-third font-normal font-source leading-5 tracking-[1px] pb-10'>Important Links</h3>
          <Flex className='flex-col gap-y-5'>
            <FooterList text='Achievement'/>
            <FooterList text='DIS Blog'/>
            <FooterList text='List of Foreign Guests'/>
            <FooterList text='Photo Achieved'/>
            <FooterList text='Career'/>
            <FooterList text='FAQ'/>
          </Flex>
          </div>
          <div className='w-full lg:w-3/12 text-white'>
          <h3 className='text-[22px] text-third font-normal font-source leading-5 tracking-[1px] pb-10'>Management</h3>
          <Flex className='flex-col gap-y-5'>
            <FooterList text='Management'/>
            <FooterList text='Academic Head'/>
          </Flex>
          </div>
        </Flex>
      </Container>
    </section>
    <section className='bg-third py-6 '>
      <Container>
        <Flex className='flex-col lg:flex-row gap-y-6 lg:gap-y-0 justify-between items-center'>
          <p className='text-sm text-[#1C1C1C] font-pop font-normal leading-4'>©2024 Demo International School</p>
          <div className='flex gap-x-4'>
            <span className='bg-white p-3 rounded-[6px] flex justify-center items-center'><FaFacebook /></span>
            <span className='bg-white p-3 rounded-[6px] flex justify-center items-center'><FaInstagram /></span>
            <span className='bg-white p-3 rounded-[6px] flex justify-center items-center'><PiYoutubeLogoThin /></span>
            <span className='bg-white p-3 rounded-[6px] flex justify-center items-center'><FaWhatsapp /></span>
          </div>
        </Flex>
      </Container>
    </section>
    </>
  )
}

export default Footer
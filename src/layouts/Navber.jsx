import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const Navber = () => {
  let [show, setShow]=useState(false)

  let handleClick=()=>{
    setShow(!show)
  }

  let handleClose =()=>{
    setShow(false)
  }
  return (
    <>
    <section className='bg-fourth py-5 hidden lg:block'>
      <Container>
        <Flex className='gap-x-5 items-center'>
          <div className='w-2/12'>
          <Link to='/'><h1 className='text-[28px] text-[#A020F0] font-bold font-source '>My Demo <br /> School</h1></Link>
          </div>
          <div className='w-8/12'>
          <Flex className='gap-x-8 justify-center'>
            <Link to='/admission'><List text='Admission'/></Link>
            <Link to='/branches'><List text='Branches'/></Link>
            <Link to='/academic'><List text='Academic'/></Link>
            <Link to='/facelities'><List text='Facilities'/></Link>
            <Link to='/aboutus'><List text='About US'/></Link>
          </Flex>
          </div>
        </Flex>
      </Container>

    </section>

    <section className='bg-fourth px-4 lg:hidden'>
      <Flex className='justify-between items-center'>
        <Link to='/'><h1 className='text-[18px] text-[#A020F0] font-bold font-source '>My Demo <br /> School</h1></Link>
        {
          show ? 
          
          <RxCross2 onClick={handleClick} className='text-2xl text-black font-bold'/>
          :<HiOutlineBars3 onClick={handleClick} className='text-2xl text-black font-bold'/> 
        }
        {
          show &&
          <div className='absolute top-[120px] left-0 w-full bg-fourth py-6'>
            <Flex className='flex-col gap-y-5 justify-center items-center'>
            <Link onClick={handleClose} to='/admission'><List text='Admission'/></Link>
            <Link onClick={handleClose} to='/branches'><List text='Branches'/></Link>
            <Link onClick={handleClose} to='/academic'><List text='Academic'/></Link>
            <Link onClick={handleClose} to='/facelities'><List text='Facilities'/></Link>
            <Link onClick={handleClose} to='/aboutus'><List text='About US'/></Link>
          </Flex>
          </div>
        }

      </Flex>
    </section>
    </>
  )
}

export default Navber
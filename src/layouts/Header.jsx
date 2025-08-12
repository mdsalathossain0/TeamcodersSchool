import React from 'react'
import Flex from '../components/Flex'

const Header = () => {
  return (
    <section className='bg-third py-4 text-center'>
      <Flex className='justify-center'>
        <p>Admission is going on for the Session: 2025-26 from PG to A level.</p>
        <a href="">Contact Us</a>
        <button>Admission Form</button>
      </Flex>
    </section>
  )
}

export default Header
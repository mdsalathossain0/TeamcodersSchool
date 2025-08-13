import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import image from '../assets/banner.jpg'
import FacilitiesCard from '../components/FacilitiesCard'
const FacilitiesSection = () => {
  return (
    <section className='bg-fourth py-12 lg:py-19 px-4'>
        <Container>
            <Flex className='justify-between items-center'>
            <Heading text='Our Facilities'/>
            <Button text='Apply Now'/>
        </Flex>
        <SubHeading className='pt-6 pb-20' text='Why we are the best'/>
        <Flex className='flex-col lg:flex-row gap-y-12 lg:gap-y-0'>
            <div className='w-full lg:w-1/2'>
            <div className='max-w-[580px]  h-auto mx-auto rounded-full'>
                <Image className='w-full h-full rounded-full' src={image}/>
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='max-w-[480px] mx-auto  h-[400px] rounded-3xl'>
                <Flex className='flex-wrap'>
                    <FacilitiesCard className='bg-[#0000005e] rounded-tl-2xl' text='Day Care' src={card1}/>
                    <FacilitiesCard className='bg-[#aee6ff52]' text='Safe Transport' src={card2}/>
                    <FacilitiesCard className='bg-[#0000005e] rounded-tr-2xl' text='STEM Labs' src={card3}/>
                    <FacilitiesCard className='bg-[#aee6ff52] rounded-bl-2xl' text='Libraries' src={card1}/>
                    <FacilitiesCard className='bg-[#0000005e]' text='Clubs' src={card2}/>
                    <FacilitiesCard className='bg-[#aee6ff52] rounded-br-2xl' text='My e-kids' src={card3}/>
                </Flex>
            </div>
            </div>
        </Flex>

        </Container>
    </section>
  )
}

export default FacilitiesSection
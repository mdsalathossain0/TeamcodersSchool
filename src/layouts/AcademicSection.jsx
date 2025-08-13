import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import AcademicCard from '../components/AcademicCard'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'

const AcademicSection = () => {
  return (
    <section className='bg-fourth py-12 lg:py-19 px-4'>
        <Container>
        <Flex className='justify-between items-center'>
            <Heading text='Academic Sections'/>
            <Button text='Apply Now'/>
        </Flex>
        <SubHeading className='pt-6 pb-20' text='Explore Our Comprehensive Academic Program, Catering to the Educational Needs of Students.'/>

        <div className='flex flex-wrap justify-center lg:justify-start bg-white rounded-2xl gap-3 py-5 px-4'>
            <AcademicCard src={card1} title='Pre School' info='Grade PG to KG: This section covers classes from...'/>
            <AcademicCard src={card2} title='Junior Section' info='Grade 1 to 4: This section covers classes from grades 1...'/>
            <AcademicCard src={card3} title='Middle Section' info='Grade 5 to 7: This sections covers classes from grades 5...'/>
            <AcademicCard src={card4} title='Senior Scetion' info='Grade 8 to 12: Senior Section Courses taught in this...'/>
        </div>
        </Container>
    </section>
  )
}

export default AcademicSection
import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Heading from './components/Heading'
import SubHeading from './components/SubHeading'

const App = () => {
  return (
    <div >
      <Container>
        <Flex>
          <Heading text='hellllo'/>
          <Heading text='hellllo'/>
          <Heading text='hellllo'/>
          <Heading text='hellllo'/>
        </Flex>
        <SubHeading text='iam uahfuhwothf'/>
      </Container>
    </div>
  )
}

export default App
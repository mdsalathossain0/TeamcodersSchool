import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto bg-red-600'>{children}</div>
  )
}

export default Container
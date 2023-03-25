import React from 'react'
import Container from './Container'

export default function Layout({children}) {
  return (
    <div className='bg-zinc-900 text-white '>
        <Container>
          {children}
        </Container>  
    </div>
  )
};

import React from 'react'
import CarouselComponent from '../CarouselComponent'



const FirstHero = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)] pt-10 flex w-full h-[100vh] items-center justify-center bg-black'>
        <div className='relative justify-center items-center w-[98.6%] h-[85vh] rounded-xl text-black'> 
        <CarouselComponent/>
        </div>
    </div>
  )
}

export default FirstHero

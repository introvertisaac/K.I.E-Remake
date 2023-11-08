import Image from 'next/image'
import React from 'react'
import IntroText from './IntroText'


const Intro = () => {
  return (
    <div>
          <div className='relative w-full  sm:my-0 lg:-my-20 -z-20'>
      
          <img
        src="/worker1.jpg"
        alt="Description of the image"
        style={{ width: '100%', height: '40%', objectFit: 'fill', objectPosition: 'top left' }}
      />
<div className='absolute top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 text-center text-white mx-1/5 sm:w-full md:w-1/3'>
        <p className='sm:text-sm lg:text-xl gap-2'>KENYA INDUSTRIAL ESTATES</p>
        <p className='font-semibold sm:text-sm lg:text-4xl'>INCUBATING, FINANCING & DEVELOPING SMES COUNTRYWIDE</p>
      </div>

</div>
    
       
  

  
    </div>
    

 
  )
}

export default Intro
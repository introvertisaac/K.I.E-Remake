"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Welcome = () => {

  const  [counterOn, setCounterOn] = useState(false);
  return (
    <div className='py-40 -my-20 px-20 flex justify-between '>
        <div className='relative h-screen w-3/6'>
            <Image src="/worker-key.png" 
          alt="Description of the image"
          layout="fill"
          objectFit="contain" />
        </div>

        <div className='w-1/2 lg:my-20 mx-10'>
            <p className='sm:text-4xl lg:text-5xl text-[#1D355E] font-bold'>Welcome to Kenya Industrial Estates</p>
            <p className=' text-base text-[#8696AB] font-normal my-10'>
            Kenya Industrial Estates (KIE) was established by the government of Kenya in 1967 
            with a mandate to promote Small and Medium Industries with focus on Rural Industrialization.

            </p>
            <p className='my-2 text-base text-[#8696AB] font-normal '>
            Micro Small and Medium Enterprises (MSMEs) have emerged to be key and strategic drivers 
            of Socio-economic transformation in developing nations.
            

            </p>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}> 
            <div className='my-10 flex justify-between gap-4'>
              <div>
                <p className='text-4xl text-[#1D355E]'> {counterOn &&<CountUp start={0} end={4000} duration={1.2} delay={0} />}+</p>
                
                <p>SMEs trained Countrywide</p>
            </div>

            <div className='ml-10'>
            <p className='text-4xl text-[#1D355E] '>{counterOn &&<CountUp start={0} end={35} duration={2.2} delay={0} />}</p>
                <p>SME Parks/Sheds/ Incubators across the country</p>
            </div>

            <div className=''>
              <div className='flex'>
              <p className='flex text-4xl text-[#8696AB]'>KES</p>
                <p className='text-4xl text-[#1D355E]'>{counterOn &&<CountUp start={0} end={20} duration={1.2} delay={0} />}</p>
                <p className='text-4xl text-[#8696AB]'>M</p>
              </div>
                
                <p>Ksh 50,000 to Ksh 20M in revenue in Funding.</p>
            </div>
        </div>
        </ScrollTrigger>
    </div>
    </div>
  )
}

export default Welcome
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiFacebookLine} from 'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'


const Midbar = () => {
  return (
    <>
<div className=' flex-wrap z-20  justify-center items-center'>

    <nav className='text-white bg-[#CB3828] flex  px-10 py-4 justify-center items-center '>

<div className='flex justify-between gap-14'>
    <div className=' relative'>

    <Image src="/logo.png" alt="Description of the image"
        height={80}
        width={80}
        />
    </div>
    <div className='text-white hidden lg:flex  cursor-pointer space-x-4  text-xs gap-2 items-center justify-center font-bold'>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold w-fit'> HOME </span> </Link>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold'> ABOUT KIE </span> </Link>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold'> PRODUCTS & SERVICES </span> </Link>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold'> NEWS & EVENTS </span> </Link>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold'> CAREERS </span> </Link>
        <Link href='/'><span className='hover:text-blue-900 hover:font-bold'> CONTACTS </span> </Link>

    </div>
    

    <div className='flex space-x-0 p-1 px-10'>
  <div className='flex items-center justify-center w-8 h-8 bg-[#3B5998]'>
    <RiFacebookLine className='text-white' size={14} />
  </div>
  <div className='flex items-center justify-center w-8 h-8  bg-[#1DA1F2]'>
    <FiTwitter className='text-white' size={14} />
  </div>
  <div className='flex items-center justify-center w-8 h-8  bg-[#F36251]'>
    <AiOutlineYoutube className='text-white' size={14} />
  </div>
</div>


    <div className='mx-10'><BsSearch /></div>
</div>


</nav>

    </div>
    
</>
  )
}

export default Midbar
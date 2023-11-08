import React from 'react'
import {TiMessages} from 'react-icons/ti'
import {BsPersonCircle, BsQuestionCircle} from 'react-icons/bs'
import {TbMessageCheck} from 'react-icons/tb'
import {MdOutlineMailOutline} from 'react-icons/md'
import Image from 'next/image'


const Topbar = () => {
  return (
    <>
        <nav className='text-white bg-[#1D355E] flex justify-between px-10 py-8 flex-wrap'>
            <div className='flex gap-4'>
                <div >
                {/* <Image src='/chat.svg'  height={20} width={20} /> */}
                <div className='relative w-20/.l,m'><TiMessages size={40} color='grey' className=''/></div> 
                </div>
                <div className=''>
                <p className='font-bold text-gray-400 text-sm'>Contact Customer Care Cesk</p>
                <p className='font-extrabold'>0722297636/0733279861</p>
                
                

                </div> 
            </div>

            <div className='flex gap-4'>

                <BsPersonCircle size={40} color='grey' className=''/>
                <div>
                <p className='font-bold text-gray-400 text-sm'>Have a Question?</p>
                <p className='font-bold text-sm'>info@kie.co.ke</p>
                </div>
                
            </div>

            
                <div className=' gap-4 justify-center items-center hidden md:flex sm:text-xs xs:flex'>

                <div className='items-center flex-col'>
                    <div className=''> <BsQuestionCircle size={30}  color='white' className=''/> </div>
                    <p> FAQ </p>
                </div>

                <div className='items-center flex-col'>
                    <div className='pl-2'> <TbMessageCheck size={30}  color='white' className=''/> </div>
                    <p>Tenders</p>
                </div>

                <div className='items-center flex-col'>
                    <div className='pl-2'> <MdOutlineMailOutline size={30} color='white' className=''/> </div>
                    <p>Staff Mail</p>
                </div>
               
            </div>
        </nav>
    </>
  )
}

export default Topbar
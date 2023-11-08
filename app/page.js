import Image from 'next/image'
import Topbar from './components/topbar'
import Midbar from './components/Mid'
import Intro from './components/Intro'
import IntroText from './components/IntroText'
import Welcome from './components/Welcome'

export default function Home() {
  return (
 <>
    <div className='   my-5 mx-5 min-h-screen flex flex-col '>
     <Topbar />
     <Midbar />
     <Intro />
    
     <Welcome />
    </div>
 </>
  )
}

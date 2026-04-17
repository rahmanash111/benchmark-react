import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet'

const Contactus = () => {
  return (
   <>
     <Helmet>
      <title>
        Contact us
      </title>
    </Helmet>
   <section>
   <div className='  flex flex-col items-center justify-center gap-10 py-16'>
                <div className='lg:w-3/4 w-full  h-full flex flex-wrap items-center justify-center  md:justify-evenly lg:justify-evenly '>
                 
                <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{ease:'easeInOut',duration:0.8}} className='h-[200px]  w-[300px] relative flex flex-col items-center justify-center gap-2  shadow-xl rounded-tr-2xl rounded-bl-2xl px-5'>
  <div className='h-[70px] w-[70px] relative flex items-center justify-center'>

    <PhoneIcon className='h-8 w-8 fill-primary'/>
  </div>
  <h3 className='text-center font-bold font-Jakarta'>Contact Us</h3>

  <div className='flex flex-col space-y-1 font-DM-Sans font-medium'>
    <a href="tel:+919946283777">+91-9946283777</a>
  </div>
</motion.div>
                <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{ease:'easeInOut',duration:0.8}} className='h-[200px]  w-[300px] relative flex flex-col items-center justify-center gap-2  shadow-xl rounded-tr-2xl rounded-bl-2xl px-5'>
  <div className='h-[70px] w-[70px] relative flex items-center justify-center'>

    <MapPinIcon className='h-8 w-8 fill-primary'/>
  </div>
  <h3 className='text-center font-bold font-Jakarta'>Address</h3>

  <div className='flex flex-col space-y-1 font-DM-Sans font-medium text-center'>
    <a>37, 3rd Cross St, Venkateswara Colony, Nehru Nagar, Perungudi, Chennai, Tamil Nadu 600041.
</a>
    {/* <a>1st Floor, K L Tower, Mala Vazhi Junction, Above KSFE, Thrissur Pin Code: 680683
</a> */}
   
  </div>
</motion.div>
                <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{ease:'easeInOut',duration:0.8}} className='h-[200px]  w-[300px] relative flex flex-col items-center justify-center gap-2  shadow-xl rounded-tr-2xl rounded-bl-2xl px-5'>
  <div className='h-[70px] w-[70px] relative flex items-center justify-center'>

    <EnvelopeIcon className='h-8 w-8 fill-primary'/>
  </div>
  <h3 className='text-center font-bold font-Jakarta'>Mail</h3>

  <div className='flex flex-col space-y-1 font-DM-Sans font-medium'>
    <a href="mailto:office@benchmark.education">office@benchmark.education</a>
   
  </div>
</motion.div>
               
               
               
                </div>

              
            </div>
   </section>
   </>
  )
}

export default Contactus
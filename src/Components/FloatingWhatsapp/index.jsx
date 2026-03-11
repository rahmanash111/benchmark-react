// import { IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'
import { motion } from 'framer-motion'
import { WhatsApp } from '@mui/icons-material';

const FloatingWhatsapp = () => {
    const whatsappNumber  = parseInt(919946283777);
   
    
  return (
    <motion.a href={`https://wa.me/+${whatsappNumber}?text=Hi`} target='_blank' initial={{opacity:0,translateY:50}} whileInView={{opacity:1,translateY:0}} transition={{ease:'easeInOut',duration:0.8}} onClick={()=>console.log('hello')} className='bg-[#25D366] fixed right-5 bottom-28 h-[40px] w-[40px] flex flex-col items-center justify-center rounded-full hover:bg-secondary z-50'><WhatsApp size={22} className='  stroke-white fill-white' sx={{color:'white',strokeWidth:0.2}}/></motion.a>
  )
}

export default FloatingWhatsapp
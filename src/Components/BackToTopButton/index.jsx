import { ArrowUpIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const BacktoTopButton = () => {
    const [showbtn,setShowBtn]=useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setShowBtn(window.scrollY > 300);
        }
        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    const ScrollToTop = ()=>{
        window.scrollTo({
            behavior:'smooth',
            top:0
        })
    }

    
  return (
    <>
    {
        showbtn && (
            <motion.button initial={{opacity:0,translateY:50}} whileInView={{opacity:1,translateY:0}} transition={{ease:'easeInOut',duration:0.8}} onClick={()=>ScrollToTop()} className='bg-primary fixed right-5 bottom-5 h-[40px] w-[40px] flex flex-col items-center justify-center rounded-full hover:bg-secondary z-50'><ArrowUpIcon className='h-4 w-4 fill-white'/></motion.button>
        )
    }
    </>
  )
}

export default BacktoTopButton
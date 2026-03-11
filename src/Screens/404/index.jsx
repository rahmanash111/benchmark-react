import React from 'react'
import pagenotpic from '../../assets/Images/404.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const PageNotFound = () => {
  return (
<>
<Helmet>
    <title>Page Not Found</title>
</Helmet>
<section className='h-auto py-10 w-[90%] grid grid-cols-1 lg:grid-cols-2 font-Jakarta items-center'>
        
        <div className='flex flex-col items-center  justify-center lg:order-1 xl:order-1 order-2 '>
            <img src={pagenotpic} alt="" />
        </div>
        <div className='flex flex-col items-start justify-center gap-4 lg:order-2 xl:order-2 order-1'>
        <h1 className='text-[5.8rem] font-bold'>404</h1>
        <h2 className='text-[3.5rem] font-medium'>UH OH! You're lost.</h2>
        <p className='text-[1.2rem] text-text'>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <Link to={"/"}><button class="border-2 px-5 py-2 rounded-full border-primary hover:bg-primary hover:text-white text-black font-semibold text-[0.8rem]">HOME</button></Link>
        </div>

    </section>
</>
  )
}

export default PageNotFound
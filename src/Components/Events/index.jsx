import React from 'react'
import {motion} from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const EventSection = () => {
    const query = gql`query Eventslists {
    eventslists {
        eventname
        eventdate
        bannerimg {
            url
        }
        documentId
    }
}`

const navigate = useNavigate()

const {data,loading,error}=useQuery(query);
  return (
    <section className="py-10  flex flex-col items-center justify-center">
    <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
      <motion.h2
        initial={{ translateY: -20, opacity: 0 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: 0.8 }}
        className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
      >
        Prior and 
        <span className="text-text"> Upcoming Events</span>
      </motion.h2>
      <p className="text-text text-center text-[16px]">
        At Benchmark Education, we offer a diverse range of courses tailored
        to meet the demands of today’s job market. 
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center ">
      {loading && (
              <div className="text-center text-xl font-semibold text-primary h-[200px] grid place-items-center">
              <p>Loading</p>
            </div>
            )}
            {error && (
              <div className="text-center text-xl font-semibold text-red-500 h-[200px] grid place-items-center">
                <p>Something went wrong <br/> <br/>{error.message} !!</p>
              </div>
            )}
  {
     data && (
        data?.eventslists.map((obj,index)=>(
        
            <Link to={`events/${obj?.eventname.replace(/\s+/g, "-")}`} state={{eventName:obj.eventname}}>
            <motion.div  initial={{ opacity: 0,translateY:50 }}
            whileInView={{ opacity: 1,translateY:0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg group font-Jakarta cursor-pointer"  key={index} >
                <a>
                    <img class="rounded-t-lg h-[230px] w-full object-cover" src={`https://benchmark-backend.ideassionlive.in${obj?.bannerimg?.url}`}alt="imgage.png" />
                </a>
                <div class="p-5 flex-grow flex flex-col">
                    <a>
                        <h5 class="mb-2 text-xl font-bold tracking-tight group-hover:text-primary text-gray-900 dark:text-white text-ellipsis overflow-hidden text-wrap line-clamp-2">{obj.eventname}</h5>
                    </a>
                    <p class="mb-3 font-semibold text-primary  dark:text-gray-400">{obj?.eventdate}</p>
                    {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                </div>
            </motion.div>
            </Link>
                 
                ))
     )
}
      </div>

  
    </div>
  </section>  
  )
}

export default EventSection
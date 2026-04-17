import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import img from "../../assets/Images/hrenclave.webp"
import img1 from "../../assets/Images/aimasterclass.webp"
import Markdown from 'react-markdown'
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

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

  // const { data, loading, error } = useQuery(query);

  // console.log(data);
  const [currentEvent, setCurrentEvent] = useState(null);

  const data = [{
    image: img, title: "HR Conclave 2026 – New Age Jobs", date: "27/Feb/2026 - Completed", description: "The HR Conclave 2026, organized by Peters Foundation in association with Nirmala College of Management Studies, Meloor, Chalakudy, was successfully conducted with strong participation from industry professionals and academic leaders. The event focused on “New Age Jobs – Skills, Talent & The Future of Work,” bringing together HR professionals, placement officers, and students to explore evolving career opportunities and workforce trends. A key highlight of the conclave was the felicitation of 35 shortlisted HR professionals from diverse industries, recognizing their contributions and excellence in the field. The session created a platform for knowledge sharing, networking, and discussions on future-ready skills required in today’s dynamic job market."
  },
  {
    image: img1, title: "Utkarsh Srivastava AI Masterclass", date: "14/Mar/2026 - Completed", description: `Benchmark Education successfully conducted an exclusive AI Masterclass led by Utkarsh Srivastava, AI Researcher & Architect at Kensaa and IIT Hyderabad alumnus.
     
     The session provided participants with valuable insights into Artificial Intelligence, including AI workflow design, prompt engineering frameworks, and real-world AI applications across industries. 
     
     Attendees gained hands-on exposure to modern AI tools, multi-agent systems, and AI-driven marketing strategies. The program received excellent engagement and positive feedback from students and professionals. This masterclass reflects Benchmark Education’s commitment to delivering industry-relevant, future-focused learning experiences.`
  }]

  useEffect(() => {
    if (currentEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [currentEvent]);



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
        <p className="text-text text-center text-[16px] mb-12">
          At Benchmark Education, we offer a diverse range of courses tailored
          to meet the demands of today’s job market.
        </p>
        <div className="flex flex-col md:flex-row z-20 gap-8 mt-16 font-Jakarta items-center justify-center">
          {/* {loading && (
            <div className="text-center text-xl font-semibold text-primary h-[200px] grid place-items-center">
              <p>Loading</p>
            </div>
          )} */}
          {currentEvent && (
            <EventModal
              event={currentEvent}
              closeModal={() => setCurrentEvent(null)}
            />
          )}

          {
            // data && (data?.eventslists?.length > 0 ? (
            //   data?.eventslists.map((obj, index) => (
            //     <Link to={`events/${obj?.eventname.replace(/\s+/g, "-")}`} state={{ eventName: obj.eventname }}>
            //       <motion.div initial={{ opacity: 0, translateY: 50 }}
            //         whileInView={{ opacity: 1, translateY: 0 }}
            //         viewport={{ once: true }}
            //         transition={{ ease: "easeInOut", duration: 0.8 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg group font-Jakarta cursor-pointer " key={index} >
            //         <a className='group-hover:translate-x-2 transition-all'>
            //           <img class="rounded-t-lg h-[230px] w-full object-cover" src={`${graphqlBaseUrl}${obj?.bannerimg?.url}`} alt="imgage.png" />
            //         </a>
            //         <div class="p-5 flex-grow flex flex-col">
            //           <a>
            //             <h5 class="mb-2 text-xl font-bold tracking-tight group-hover:text-primary text-gray-900 dark:text-white text-ellipsis overflow-hidden text-wrap line-clamp-2">{obj.eventname}</h5>
            //           </a>
            //           <p class="mb-3 font-semibold text-primary  dark:text-gray-400">{obj?.eventdate}</p>
            //           {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            //             Read more
            //              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            //             </svg>
            //         </a> */}
            //         </div>
            //       </motion.div>
            //     </Link>

            //   ))
            // )
            //   :
            //   (
            //     <motion.div initial={{ opacity: 0, translateY: 50 }}>No Events</motion.div>
            //   ))
            data && (
              data?.map((obj, index) => (
                <Link onClick={() => setCurrentEvent(obj)}>
                  <motion.div
                    style={{ "scrollbarColor": "red" }}
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }} class="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg group font-Jakarta cursor-pointer" key={index} >
                    <a className='group-hover:translate-x-2 transition-all'>
                      <img class="rounded-t-lg h-[420px] w-full object-cover" src={obj.image} alt="imgage.png" />
                    </a>
                    <div class="p-5 flex-grow flex flex-col">
                      <p class="mb-3 font-semibold text-primary dark:text-gray-400 text-xs">{obj.date}</p>
                      <a>
                        <h5 class="mb-4 text-2xl font-bold tracking-tight group-hover:text-primary text-gray-900 dark:text-white text-ellipsis overflow-hidden text-wrap">{obj.title}</h5>
                      </a>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
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

function EventModal({ event, closeModal }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div onClick={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }} className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

      {/* Modal Container */}
      <div className="relative w-[90vw] h-[80vh] bg-white flex flex-col md:flex-row overflow-y-scroll rounded-xl">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-xl font-bold bg-gray-50 px-[9px] py-[4px] rounded-full hover:rotate-90 transition-all"
        >
          ✕
        </button>

        {/* Image */}
        <div className="md:w-1/2 h-[40vh] md:h-full">
          <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-3xl font-semibold mb-4">{event?.title}</h2>
          <p className="text-gray-500 mb-4">{event?.date}</p>
          <p className="text-gray-700 leading-relaxed text-justify prose max-w-none">
            {event?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
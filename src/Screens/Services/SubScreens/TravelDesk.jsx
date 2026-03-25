import { ArrowRightIcon, CheckBadgeIcon, HomeIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Helmet } from 'react-helmet'
import {motion} from 'framer-motion'
import BannerSection from '../../../Components/Banner'
import TravelDeskImg from '../../../assets/Services/traveldesk.webp'

const TravelDesk = () => {
    const data ={
        "id": "8",
        "heading": "Travel Desk & Accommodation Support for Students",
        "sections": [
          {
            "id": "8.1",
            "title": "Hassle-Free Travel Arrangements",
            "description": "Our travel booking assistance ensures smooth journey planning with flight reservations, airport pickup services, and travel coordination support. We handle every detail efficiently, helping you avoid last-minute stress and ensuring a comfortable, well-organized travel experience from departure to destination.",
            "icon": PaperAirplaneIcon,
            "bgColor": "#FFEBEE"
          },
          {
            "id": "8.2",
            "title": "Accommodation Solutions",
            "description": "We provide student accommodation services to help you find safe housing options, including student housing, private apartments, and homestays. Our team ensures budget-friendly choices with verified listings, offering comfort, convenience, and proximity to your university for a better living experience.",
            "icon": HomeIcon,
            "bgColor": "#FFCCBC"
          }
        ],
        "steps": [
          {
            "id": "8.1",
            "title": "Flight Bookings",
            "description": "Get affordable flight booking assistance with best airfare deals, flexible options, and confirmed reservations.",
            "icon": PaperAirplaneIcon,
            "bgColor": "#FFDDC1"
          },
          {
            "id": "8.2",
            "title": "Airport Transfers",
            "description": "Enjoy smooth airport transfer service with reliable pickup, drop facilities, and comfortable transportation arrangements.",
            "icon": ArrowRightIcon,
            "bgColor": "#FFEB3B"
          },
          {
            "id": "8.3",
            "title": "Accommodation Search",
            "description": "Find ideal housing through student housing support with verified options matching budget, location, and preferences.",
            "icon": HomeIcon,
            "bgColor": "#C8E6C9"
          }
        ]
      }
      
  return (
    <>
    <Helmet>
      <title>Travel Desk & Accommodation</title>
    </Helmet>
    <BannerSection title={data.heading}/>
    <section className=" flex flex-col items-center my-10">
      <div className="w-[90%] flex flex-col space-y-10 ">
        <motion.h2
          initial={{ translateY: -20, opacity: 0 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", duration: 0.8 }}
          className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
        >
          {data.heading}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
          {data.sections.map((obj, index) => (
            <motion.div
              key={index} // Add a unique key to each mapped item
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="h-[350px] w-full px-5 py-10 border rounded-lg shadow-lg flex flex-col items-start justify-center"
              style={{
                background:" linear-gradient(135deg, #d1d9f2, #ffffff)"
    
              }}
            >
              <div className="flex flex-col items-center space-y-5">
                <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                <h3 className="font-bold text-center">{obj.title}</h3>
                <p className='text-center'>{obj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center my-10 lg:min-h-[50vh] justify-center">
        <div className="w-[90%] flex flex-col items-center">
           <motion.div initial={{width:'0%',opacity:0}} whileInView={{width:'100%',opacity:1}} viewport={{once:false}} transition={{duration:1.5,ease:'easeInOut'}} className="max-h-[500px] h-[700px]">
            <img src={TravelDeskImg} alt="banner.webp" className="h-full w-full object-contain" />
           </motion.div>
        </div>
      </section>
    <section className="py-10 flex flex-col items-center justify-center">
      <div className="w-[90%] flex flex-col space-y-3 bg-sec">
        <motion.h2
          initial={{ translateY: -20, opacity: 0 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", duration: 0.8 }}
          className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
        >
          Steps
          <span className="text-text"> Involved</span>
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center ">
          {data.steps.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 120 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="col-span-1  shadow-lg rounded-xl  z-20 lg:h-[300px] h-fit "
              >
                <div className="before:h-[160px] before:bg-[#f4f8fa] before:w-[70px] before:absolute before:-rotate-45 before:overflow-hidden before:-z-[1] before:-top-[39px] before:left-0 before:rounded-[35px] flex flex-col items-start justify-center relative p-[42px] overflow-hidden rounded-xl">
                  <div
                    className={` p-3 rounded-full my-2`}
                    style={{ backgroundColor: `${service.bgColor}` }}
                  >
                    <service.icon className="h-5 w-5 stroke-white " />
                  </div>
                  <div className="flex flex-col space-y-5">
                    <h4 className="text-[24px] font-semibold">
                      {service.title}
                    </h4>
                    <p className="text-[16px] text-text">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </>
  )
}

export default TravelDesk
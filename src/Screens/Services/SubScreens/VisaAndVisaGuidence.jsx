import React from 'react'
import { Helmet } from 'react-helmet'
import {motion} from 'framer-motion'
import { CheckBadgeIcon, DocumentArrowUpIcon, LockClosedIcon, PaperAirplaneIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import BannerSection from '../../../Components/Banner'
import VisaImg from '../../../assets/Services/visaspouse.webp'

const VisaAndVisaGuidence = () => {

    const data = {
        "id": "6",
        "heading": "Visa & Spouse Visa Guidance Services | Benchmark Education",
        "desc":"Benchmark Education offers spouse visa guidance and visa application support for faster approvals with expert assistance.",
        "sections": [
            {
                "id": "6.1",
                "title": "Student Visa Application Guidance",
                "description": "Get expert student visa application guidance with complete visa process support, including documentation, form filling, and interview preparation. Benchmark Education ensures your student visa approval chances improve with accurate submissions and up-to-date immigration compliance for your chosen study destination.",
                "icon": LockClosedIcon,
                "bgColor": "#FFABAB"
            },
            {
                "id": "6.2",
                "title": "Spouse Visa Guidance Services",
                "description": "Our spouse visa guidance services help students apply for dependent visas in countries like Canada and the UK. We simplify the spouse visa application process, ensuring proper documentation and compliance so families can relocate together smoothly without unnecessary delays or confusion.",
                "icon": UserGroupIcon,
                "bgColor": "#FFCCBC"
            },
            {
                "id": "6.3",
                "title": "Complete Visa Assistance Services",
                "description": "Our visa experts are well-versed in the regulations of various countries and provide personalized support to address any issues or concerns that may arise during the visa process.",
                "icon": UserGroupIcon,
                "bgColor": "#E3F2FD"
            }
        ],
        "steps": [
            {
                "id": "6.4",
                "title": "Document Preparation Support",
                "description": "Expert visa documentation support to gather financial proof, admission letters, and accommodation details for a smooth visa application process.",
                "icon": DocumentArrowUpIcon,
                "bgColor": "#FCE4EC"
            },
            {
                "id": "6.5",
                "title": "Application Process Assistance",
                "description": "Professional visa application assistance to complete forms accurately, avoid errors, and ensure timely submission for faster visa approval success.",
                "icon": PaperAirplaneIcon,
                "bgColor": "#E8F5E9"
            },
            {
                "id": "6.6",
                "title": "Interview Preparation Guidance",
                "description": "Effective visa interview preparation with mock sessions, expert tips, and confidence-building strategies to improve your chances of visa approval.",
                "icon": UserCircleIcon,
                "bgColor": "#D1C4E9"
            }
        ]
    }
    
  return (
    <>
    <Helmet>
      <title>Visa & Spouse Visa Guidance</title>
    </Helmet>
    <BannerSection title={data.heading} desc={data.desc}/>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-5">
          {data.sections.map((obj, index) => (
            <motion.div
              key={index} // Add a unique key to each mapped item
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="h-[350px] w-full px-5 py-10 border rounded-lg shadow-lg flex flex-col items-start justify-start"
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
            <img src={VisaImg} alt="banner.webp" className="h-full w-full object-contain" />
           </motion.div>
        </div>
      </section>
    <section className="py-10flex flex-col items-center justify-center">
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
                className="col-span-1  shadow-lg rounded-xl  z-20 lg:h-[320px] h-fit "
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

export default VisaAndVisaGuidence
import React from 'react'
import { Helmet } from 'react-helmet'
import {motion} from 'framer-motion'
import { CheckBadgeIcon, CheckCircleIcon, ClockIcon, DocumentIcon, PaperClipIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import BannerSection from '../../../Components/Banner'
import EtEImg from '../../../assets/Services/ete.webp'

const EtoE = () => {
    const data = {
        "id": "5",
        "heading": "Complete Admission Guidance",
        "desc":"Expert support for university applications, ensuring smooth enrollment process and international admission planning from start to finish.",
        "sections": [
            {
                "id": "5.1",
                "title": "Seamless Application Management",
                "description": "Our team provides full support for every stage of your university applications. From program selection to submission, we ensure a smooth process with expert application management services and international enrollment guidance tailored to your goals.",
                "icon": UserGroupIcon,
                "bgColor": "#E1F5FE"
            },
            {
                "id": "5.2",
                "title": "Timely Follow-Up and Support",
                "description": "We monitor the status of each application, communicate with universities for updates, and meet all deadlines. Our admissions tracking assistance and university communication support reduce errors and improve your chances of securing an offer.",
                "icon": ClockIcon,
                "bgColor": "#FFFDE7"
            },
            {
                "id": "5.3",
                "title": "Acceptance and Next Steps",
                "description": "After receiving offers, we guide you in evaluating choices and making informed decisions. Our counselors assist with offer assessment support and post-admission planning, including deposits, documentation, and housing arrangements for a seamless transition abroad.",
                "icon": CheckCircleIcon,
                "bgColor": "#E8F5E9"
            }
        ],
        "steps": [
            {
                "id": "5.4",
                "title": "Document Preparation",
                "description": "Organize essential documents efficiently with university document assistance and study abroad paperwork support.",
                "icon": DocumentIcon,
                "bgColor": "#F0F4C3"
            },
            {
                "id": "5.5",
                "title": "Visa Application",
                "description": "Complete visa forms accurately with student visa guidance and international visa application help.",
                "icon": PaperClipIcon,
                "bgColor": "#FFCCBC"
            },
            {
                "id": "5.6",
                "title": "Interview Preparation",
                "description": "Build confidence through visa interview coaching and mock interview practice for smooth approvals.",
                "icon": UserCircleIcon,
                "bgColor": "#D1C4E9"
            }
        ]
    }
    
  return (
    <>
    <Helmet>
      <title>Complete Admission Guidance</title>
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
              className="h-[350px] w-full px-5 py-10 border rounded-lg shadow-lg  flex flex-col items-start justify-start"
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
            <img src={EtEImg} alt="banner.webp" className="h-full w-full object-contain" />
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
                className="col-span-1  shadow-lg rounded-xl bg-white z-20 lg:h-[320px] h-fit "
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

export default EtoE
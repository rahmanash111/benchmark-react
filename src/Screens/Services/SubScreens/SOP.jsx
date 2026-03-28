import React from 'react'
import { Helmet } from 'react-helmet'
import {motion} from 'framer-motion'
import { AdjustmentsVerticalIcon, BriefcaseIcon, CheckBadgeIcon, CheckCircleIcon, DocumentTextIcon, PencilIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'
import BannerSection from '../../../Components/Banner'
import SopImg from '../../../assets/Services/sop.webp'

const SOP = () => {
    const data = {
        "id": "2",
        "heading": "SOP Evaluation & Counseling Services That Elevate Your Application",
        "desc":"Get expert SOP evaluation and counseling to refine your statement of purpose and improve selection chances.",
        "sections": [
          {
            "id": "2.1",
            "title": "Creating a Winning SOP",
            "description": "Our SOP writing services help craft a compelling statement that highlights achievements, goals, and career vision clearly. We ensure your document stands out with strong storytelling, clarity, and relevance for competitive university applications.",
            "icon": PencilIcon,
            "bgColor": "#FFEBEE"
          },
          {
            "id": "2.2",
            "title": "Individualized Feedback",
            "description": "Get personalized SOP review with detailed feedback on structure, clarity, grammar, and narrative flow. Our experts refine your content to highlight strengths, improve impact, and align with admission expectations for better success.",
            "icon": SpeakerWaveIcon,
            "bgColor": "#E3F2FD"
          },
          {
            "id": "2.3",
            "title": "Tailored SOPs for Different Institutions",
            "description": "We provide customized SOP editing services tailored to each university and program requirements. Your document is optimized to match institution values, research goals, and expectations, increasing relevance and improving overall application strength.",
            "icon": BriefcaseIcon,
            "bgColor": "#E8F5E9"
          }
        ],
        "steps": [
          {
            "id": "2.4",
            "title": "SOP Drafting",
            "description": "Understand your background and goals to create a strong, personalized statement draft.",
            "icon": DocumentTextIcon,
            "bgColor": "#FFFDE7"
          },
          {
            "id": "2.5",
            "title": "Detailed Review",
            "description": "Get expert feedback on clarity, structure, storytelling, and overall application impact.",
            "icon": CheckCircleIcon,
            "bgColor": "#E1F5FE"
          },
          {
            "id": "2.6",
            "title": "Finalization",
            "description": "Refine and polish your document to ensure clarity, accuracy, and alignment with specific requirements.",
            "icon": AdjustmentsVerticalIcon,
            "bgColor": "#FCE4EC"
          }
        ]
      }
  return (
    <>
    <Helmet>
      <title> SOP Evaluation & Counseling Services That Elevate Your Application</title>
    </Helmet>
    <BannerSection title={data.heading} desc={"Get expert SOP evaluation and counseling to refine your statement of purpose and improve selection chances."}/>
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
              className="lg:h-[350px] h-[500px] w-full px-5 py-10 border rounded-lg shadow-lg flex flex-col items-start justify-start"
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
            <img src={SopImg} alt="banner.webp" className="h-full w-full object-contain" />
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

export default SOP
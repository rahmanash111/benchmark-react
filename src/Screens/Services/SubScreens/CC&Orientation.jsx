import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ChatBubbleLeftIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import BannerSection from "../../../Components/Banner";
import CCImg from '../../../assets/Services/cco.webp'

const CCAndOrientation = () => {
  const data = {
    id: "1",
    heading: "Career & Course Orientation",
    sections: [
      {
        id: "1.1",
        title: "Personalized Guidance for Career and Education",
        description:
          "Making the right career and course decision is critical for long-term success. Our counsellors offer personalized guidance based on an in-depth understanding of your interests, skills, and aspirations. This process begins with an assessment of your strengths, academic history, and career objectives, followed by expert recommendations for courses and career paths that align with your goals.",
        icon: UserCircleIcon,
        bgColor: "#FFCDD2",
      },
      {
        id: "1.2",
        title: "Global University Network",
        description:
          "With our strong partnerships with over 200 top-tier universities worldwide, we provide detailed insights into various programs across multiple disciplines. Whether you’re interested in science, engineering, arts, or business, we help you navigate the complex world of higher education to find the ideal university and course.",
        icon: GlobeAltIcon,
        bgColor: "#BBDEFB",
      },
      {
        id: "1.3",
        title: "Comprehensive Support",
        description:
          "We provide ongoing support throughout the application process, including preparing documents, filling out forms, and meeting specific university requirements. Our counsellors will ensure you select a program that enhances your skills, improves employability, and fits your personal and academic profile.",
        icon: DocumentCheckIcon,
        bgColor: "#C8E6C9",
      },
    ],
    steps: [
      {
        id: "1.4",
        title: "Initial Consultation",
        description:
          "An in-depth conversation about your background, interests, and career goals.",
        icon: ChatBubbleLeftIcon,
        bgColor: "#FFF9C4",
      },
      {
        id: "1.5",
        title: "Interest and Skill Assessment",
        description:
          "A thorough evaluation of your academic qualifications and personal strengths to help guide the course and career selection process.",
        icon: IdentificationIcon,
        bgColor: "#F0F4C3",
      },
      {
        id: "1.6",
        title: "Program Recommendations",
        description:
          "Curated list of universities and programs based on your profile and career aspirations.",
        icon: ClipboardDocumentCheckIcon,
        bgColor: "#FFE0B2",
      },
      {
        id: "1.7",
        title: "Application Strategy",
        description:
          "Guidance on how to approach applications, deadlines, and course-specific requirements.",
        icon: CalendarIcon,
        bgColor: "#D1C4E9",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Career & Course Orientation</title>
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
            <img src={CCImg} alt="banner.webp" className="h-full w-full object-contain" />
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
  );
};

export default CCAndOrientation;

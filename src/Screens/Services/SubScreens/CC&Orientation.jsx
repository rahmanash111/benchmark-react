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
    heading: "Professional Career Counselling and Course Guidance Services",
    desc:"Benchmark Education provides professional career counselling and course guidance to help individuals choose the right academic path and build a successful future.",
    sections: [
      {
        id: "1.1",
        title: "Career & Course Orientation",
        description:
          "Making the right academic decision requires expert student career planning and personalized education guidance services. Benchmark Education evaluates interests, strengths, and long-term goals to recommend suitable courses and professional pathways, helping individuals make confident decisions for future growth.",
        icon: UserCircleIcon,
        bgColor: "#FFCDD2",
      },
      {
        id: "1.2",
        title: "Global University Network",
        description:
          "Through partnerships with leading institutions, Benchmark Education offers access to diverse international universities and trusted overseas education programs. Our team provides insights into disciplines like technology, management, arts, and science while helping choose institutions aligned with academic ambitions.",
        icon: GlobeAltIcon,
        bgColor: "#BBDEFB",
      },
      {
        id: "1.3",
        title: "Comprehensive Support",
        description:
          "Benchmark Education ensures a smooth journey with reliable college admission assistance and expert application guidance services. From preparing academic documents to meeting university requirements, our team supports every step while helping applicants choose programs that improve career opportunities and global exposure.",
        icon: DocumentCheckIcon,
        bgColor: "#C8E6C9",
      },
    ],
    steps: [
      {
        id: "1.4",
        title: "Initial Consultation",
        description:
          "Start with a detailed discussion about goals, interests, and opportunities in digital marketing training and online marketing skills.",
        icon: ChatBubbleLeftIcon,
        bgColor: "#FFF9C4",
      },
      {
        id: "1.5",
        title: "Interest and Skill Assessment",
        description:
          "Evaluate qualifications and strengths to identify suitable BVoc programs and practical skill-based education opportunities.",
        icon: IdentificationIcon,
        bgColor: "#F0F4C3",
      },
      {
        id: "1.6",
        title: "Program Recommendations",
        description:
          "Receive tailored suggestions for nursing training programs and healthcare career courses matching qualifications and professional aspirations.",
        icon: ClipboardDocumentCheckIcon,
        bgColor: "#FFE0B2",
      },
      {
        id: "1.7",
        title: "Application Strategy",
        description:
          "Get expert guidance for applying to MBA programs abroad with structured planning, documentation support, and admission preparation.",
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

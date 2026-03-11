import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  FlagIcon,
  HandThumbUpIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";
import BannerSection from "../../../Components/Banner";
import AdmissionImg from '../../../assets/Services/admission.webp'

const AdmissionWorldUnversity = () => {
  const data = {
    id: "3",
    heading: "Admission to World-Ranking Universities",
    sections: [
      {
        id: "3.1",
        title: "Strategic Application Support",
        description:
          "Securing admission to a top-ranking university involves more than just filling out forms. We help you identify and apply to the world’s leading institutions, ensuring you meet all the criteria required to gain admission. Our expertise spans a wide range of countries, including the US, UK, Canada, Australia, Europe, and Asia.",
        icon: FlagIcon,
        bgColor: "#FFEB3B",
      },
      {
        id: "3.2",
        title: "Competitive Applications",
        description:
          "Our admissions experts work with you to create a strong application that highlights your academic achievements, extracurricular involvement, and future potential. We guide you through each aspect of the application process, from filling out forms to preparing supporting documents such as recommendation letters, transcripts, and test scores.",
        icon: ClipboardDocumentListIcon,
        bgColor: "#E1BEE7",
      },
      {
        id: "3.3",
        title: "Proven Track Record",
        description:
          "With years of experience helping students gain admission to top universities globally, we have a high success rate in placing students in institutions that best fit their academic and career goals.",
        icon: HandThumbUpIcon,
        bgColor: "#B2EBF2",
      },
    ],
    steps: [
      {
        id: "3.4",
        title: "Target University Identification",
        description:
          "Help you shortlist universities that match your academic profile, interests, and career goals.",
        icon: AcademicCapIcon,
        bgColor: "#FFF3E0",
      },
      {
        id: "3.5",
        title: "Application Preparation",
        description:
          "Assist with filling out application forms, preparing necessary documents (including transcripts, test scores, and essays), and ensuring everything meets university requirements.",
        icon: PencilIcon,
        bgColor: "#E6EE9C",
      },
      {
        id: "3.6",
        title: "Submission and Follow-Up",
        description:
          "Monitor the progress of your applications, follow up with universities, and ensure that all deadlines are met.",
        icon: PaperAirplaneIcon,
        bgColor: "#FFCCBC",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Admission to World-Ranking Universities</title>
      </Helmet>
      <BannerSection title={data.heading} />
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
                className="lg:h-[350px] h-[450px] w-full px-5 py-10 border rounded-lg shadow-lg flex flex-col items-start justify-start"
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
      <section className="flex flex-col items-center my-10 lg:min-h-[50vh] justify-center ">
        <div className="w-[90%] flex flex-col items-center">
           <motion.div initial={{width:'0%',opacity:0}} whileInView={{width:'100%',opacity:1}} viewport={{once:false}} transition={{duration:1.5,ease:'easeInOut'}} className="max-h-[500px] h-[700px]">
            <img src={AdmissionImg} alt="banner.webp" className="h-full w-full object-contain" />
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
                      <service.icon className="h-5 w-5 stroke-white" />
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

export default AdmissionWorldUnversity;

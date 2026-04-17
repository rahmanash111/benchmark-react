import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { BookOpenIcon, CalculatorIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, DocumentArrowUpIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import ScholarImg from '../../../assets/Services/scholarfinance.webp'
import BannerSection from '../../../Components/Banner'

const ScholarshipAndFinance = () => {
  const data = {
    "id": "4",
    "heading": "Scholarship & Financial Aid Guidance",
    "desc": "Unlock funding opportunities with expert scholarship application support and financial aid guidance services to maximize awards and reduce university costs worldwide.",
    "sections": [
      {
        "id": "4.1",
        "title": "Maximizing Financial Opportunities",
        "description": "Studying abroad can be expensive, but Benchmark Education helps you access scholarships, grants, and financial aid options tailored to your needs. With guidance on international scholarship programs and education funding support, we simplify planning and reduce financial stress.",
        "icon": CurrencyDollarIcon,
        "bgColor": "#FFABAB"
      },
      {
        "id": "4.2",
        "title": "Application Strategy",
        "description": "Our team helps you identify scholarships and financial aid programs you’re eligible for, guiding every step. From writing persuasive essays to organizing required documents and meeting deadlines, our scholarship application assistance ensures your submissions are competitive, complete, and aligned with your goals.",
        "icon": BookOpenIcon,
        "bgColor": "#FFEC40"
      },
      {
        "id": "4.3",
        "title": "Financial Planning",
        "description": "We design personalized financial strategies to manage education costs abroad. By exploring student funding opportunities, part-time work options, and loans in your destination country, our experts help you secure resources efficiently, enabling a stress-free study experience while maximizing available financial support.",
        "icon": CalculatorIcon,
        "bgColor": "#D1C4E9"
      }
    ],
    "steps": [
      {
        "id": "4.4",
        "title": "Scholarship Identification",
        "description": " Discover global scholarship opportunities matching your academic achievements and career goals.",
        "icon": MagnifyingGlassCircleIcon,
        "bgColor": "#E0F7FA"
      },
      {
        "id": "4.5",
        "title": "Eligibility and Application Support",
        "description": " Receive scholarship application guidance to meet requirements, submit documents, and craft compelling essays.",
        "icon": DocumentArrowUpIcon,
        "bgColor": "#FFB74D"
      },
      {
        "id": "4.6",
        "title": "Financial Planning",
        "description": " Create student funding strategies to manage tuition, living expenses, and study abroad costs efficiently.",
        "icon": ClipboardDocumentCheckIcon,
        "bgColor": "#C8E6C9"
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Scholarship & Financial Aid Guidance</title>
      </Helmet>
      <BannerSection title={data.heading} desc={data.desc} />
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
                className="lg:h-[350px] h-[450px] w-full px-5 py-10 border rounded-lg shadow-lg flex flex-col items-start justify-center"
                style={{
                  background: " linear-gradient(135deg, #d1d9f2, #ffffff)"

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
          <motion.div initial={{ width: '0%', opacity: 0 }} whileInView={{ width: '100%', opacity: 1 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: 'easeInOut' }} className="max-h-[500px] h-[700px]">
            <img src={ScholarImg} alt="banner.webp" className="h-full w-full object-contain" />
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

export default ScholarshipAndFinance
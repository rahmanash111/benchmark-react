import { CashIcon } from '@heroicons/react/solid';
import { BankIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { DocumentAddIcon } from '@heroicons/react/solid';
import { UserGroupIcon } from '@heroicons/react/solid';
import { BanknotesIcon, CheckBadgeIcon, CurrencyDollarIcon, DocumentArrowUpIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import BannerSection from '../../../Components/Banner';
import EduLoanImg from '../../../assets/Services/eduloan.webp'

const EduLoanAssit = () => {
  const data = {
    "id": "7",
    "heading": "Educational Loan Assistance",
    "desc": "At Benchmark Education, we guide students through education loans with clear documentation, expert support, and smooth approval process.",
        "sections": [
      {
        "id": "7.1",
        "title": "Secure Funding for Your Education",
        "description": "Our education loan assistance helps students access reliable funding through trusted banks and financial institutions. We guide you through eligibility, documentation, and application processes, ensuring a smooth experience while securing the required financial support for your academic journey without unnecessary delays.",
        "icon": CurrencyDollarIcon,
        "bgColor": "#D1C4E9"
      },
      {
        "id": "7.2",
        "title": "Customized Loan Solutions",
        "description": "We offer student loan services tailored to your financial profile, repayment capacity, and course requirements. Our experts help you compare lenders, interest rates, and repayment options, ensuring you choose a plan that supports your education goals without creating financial stress in future.",
        "icon": BanknotesIcon,
        "bgColor": "#FFCCBC"
      },
      {
        "id": "7.3",
        "title": "Quick Approvals",
        "description": "We coordinate with banks to expedite the loan approval process, ensuring that your funds are available when needed for tuition and other expenses.",
        "icon": CheckBadgeIcon,
        "bgColor": "#FFEB3B"
      }
    ],
    "steps": [
      {
        "id": "7.4",
        "title": "Loan Application Support",
        "description": "Get expert education loan assistance for application, documentation, eligibility checks, and accurate submission without delays.",
        "icon": DocumentArrowUpIcon,
        "bgColor": "#FFF3E0"
      },
      {
        "id": "7.5",
        "title": "Bank Coordination",
        "description": "We handle student loan processing by coordinating with banks to ensure smooth approval and faster response.",
        "icon": UserCircleIcon,
        "bgColor": "#FFCDD2"
      },
      {
        "id": "7.6",
        "title": "Loan Disbursement",
        "description": "Ensure timely loan disbursement support for tuition fees, living expenses, and complete financial coverage.",
        "icon": BanknotesIcon,
        "bgColor": "#E8F5E9"
      }
    ]
  }


  return (
    <>
      <Helmet>
        <title>Educational Loan Assist</title>
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
            <img src={EduLoanImg} alt="banner.webp" className="h-full w-full object-contain" />
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

export default EduLoanAssit
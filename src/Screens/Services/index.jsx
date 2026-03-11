import React, { useEffect, useState } from "react";
import s1 from "../../assets/Images/s1.svg";
import s2 from "../../assets/Images/s2.svg";
import s3 from "../../assets/Images/s3.svg";
import s4 from "../../assets/Images/s4.svg";
import s5 from "../../assets/Images/s5.svg";
import s6 from "../../assets/Images/s6.svg";
import st1 from "../../assets/Images/st1.svg";
import st2 from "../../assets/Images/st2.svg";
import st3 from "../../assets/Images/st3.svg";
import st4 from "../../assets/Images/st4.svg";
import AboutImg from "../../assets/Images/14.webp";
import { motion } from "framer-motion";
import partner1 from "../../assets/Images/partner1.webp";
import partner2 from "../../assets/Images/partner2.webp";
import partner3 from "../../assets/Images/partner3.webp";
import partner4 from "../../assets/Images/partner4.webp";
import partner5 from "../../assets/Images/partner5.webp";
import GermanTraining from "../../assets/Images/germantraining.jpg";
import UkVisaStudent from "../../assets/Images/ukvisa.jpg";
import BannerSection from "../../Components/Banner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const Services = () => {
  const serviceData = [
    {
      icon: s1,
      bgcolor: "#FE6C3F",
      name: "Career Counseling",
      description:
        "Assessment of eligibility for different student visas and your documents.",
    },
    {
      icon: s2,
      bgcolor: "#0091FF",
      name: "Visa Guidance",
      description:
        "Offering information on visa procedures, requirements, and providing guidance.",
    },
    {
      icon: s3,
      bgcolor: "#FB3F7E",
      name: "Financial Planning",
      description:
        "Advising on demonstrating sufficient financial stability for international purposes.",
    },
    {
      icon: s4,
      bgcolor: "#00CC99",
      name: "Application Assistance",
      description:
        "Assisting with compiling required documents when a country opens doors to applicants.",
    },
    {
      icon: s5,
      bgcolor: "#897CB5",
      name: "Document Preparation",
      description:
        "Assisting in gathering and organizing necessary documents for your visa application.",
    },
    {
      icon: s6,
      bgcolor: "#FFBD0F",
      name: "Health Insurance",
      description:
        "Offering information about housing, orientation, and other related services. We deliver your insurance and ensure you are ready for your journey.",
    },
  ];

  const stepsData = [
    {
      icon: st1,
      title: "Expert Guidance",
      bgColor: "bg-[#fe6c3f1a]",
    },
    {
      icon: st2,
      title: "Global University Partnerships",
      bgColor: "bg-[#1495f81a]",
    },
    {
      icon: st3,
      title: "Trusted by Students",
      bgColor: "bg-[#00cc991a]",
    },
    {
      icon: st4,
      title: "High Success Rate",
      bgColor: "bg-[#ffbb0f1a]",
    },
  ];

  const PatnersImg = [partner1, partner2, partner3, partner4, partner5];
  const countryData = [
    {
      continent: "Africa",
      countries: [
        {
          country: "Nigeria",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ng.svg",
        },
        {
          country: "South Africa",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/za.svg",
        },
        {
          country: "Egypt",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/eg.svg",
        },
        {
          country: "Kenya",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ke.svg",
        },
        {
          country: "Ethiopia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/et.svg",
        },
      ],
    },
    {
      continent: "Antarctica",
      countries: [
        {
          country: "Antarctica",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/aq.svg",
        },
      ],
    },
    {
      continent: "Asia",
      countries: [
        {
          country: "China",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cn.svg",
        },
        {
          country: "India",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/in.svg",
        },
        {
          country: "Japan",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/jp.svg",
        },
        {
          country: "South Korea",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/kr.svg",
        },
        {
          country: "Indonesia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/id.svg",
        },
      ],
    },
    {
      continent: "Europe",
      countries: [
        {
          country: "France",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fr.svg",
        },
        {
          country: "Germany",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/de.svg",
        },
        {
          country: "Italy",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/it.svg",
        },
        {
          country: "United Kingdom",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/gb.svg",
        },
        {
          country: "Switzerland",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ch.svg",
        },
        {
          country: "Spain",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/es.svg",
        },
      ],
    },
    {
      continent: "North America",
      countries: [
        {
          country: "Canada",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ca.svg",
        },
        {
          country: "United States",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/us.svg",
        },
        {
          country: "Mexico",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/mx.svg",
        },
        {
          country: "Cuba",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cu.svg",
        },
        {
          country: "Panama",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pa.svg",
        },
      ],
    },
    {
      continent: "Oceania",
      countries: [
        {
          country: "Australia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/au.svg",
        },
        {
          country: "New Zealand",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/nz.svg",
        },
        {
          country: "Fiji",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fj.svg",
        },
        {
          country: "Papua New Guinea",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pg.svg",
        },
        {
          country: "Samoa",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ws.svg",
        },
      ],
    },
    {
      continent: "South America",
      countries: [
        {
          country: "Brazil",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/br.svg",
        },
        {
          country: "Argentina",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ar.svg",
        },
        {
          country: "Colombia",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/co.svg",
        },
        {
          country: "Chile",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/cl.svg",
        },
        {
          country: "Peru",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/pe.svg",
        },
      ],
    },
  ];

  const [activeFilter, setActiveFilter] = useState(countryData[0].continent);
  const [countries, setCountries] = useState([]);

  const filterContries = (continent) => {
    const filter = countryData.find((obj) => obj.continent === continent);
    return filter ? setCountries(filter.countries) : setCountries([]);
  };

  useEffect(() => {
    filterContries(activeFilter);
  }, [activeFilter]);

  const servicesdata = [
    {
      id: 1,
      title: "Study Abroad Programs",
      description:
        "Explore global educational opportunities with our tailored study abroad programs.",
      sub_services: [
        {
          id: 1.1,
          name: "University Placement",
          description:
            "We help students find the right fit at top universities across Europe, Asia, North America, and Australia.",
          images: [UkVisaStudent],
          greetings:
            "Congratulations 🎉 to Midhukrishna on receiving his UK Visa! We at Benchmark Education wish him a successful and fulfilling journey ahead.",
        },
        {
          id: 1.2,
          name: "Application Assistance",
          description:
            "Guidance through every step of the application process, from selecting the right courses and preparing documentation to applying for scholarships and financial aid.",
        },
        {
          id: 1.3,
          name: "Visa Support",
          description:
            "Expert assistance with visa applications to ensure a smooth transition to your chosen destination.",
        },
        {
          id: 1.4,
          name: "Cultural Preparation",
          description:
            "Pre-departure orientation sessions to help students adapt to new cultures and environments, ensuring a comfortable and enriching study experience.",
        },
      ],
    },
    {
      id: 2,
      title: "Language Training",
      description:
        "Master new languages and open doors to global opportunities with our specialized training programs.",
      sub_services: [
        {
          id: 2.1,
          name: "IELTS Preparation",
          description:
            "Gain the skills needed to excel in the IELTS exam, essential for academic admission and immigration. Our expert trainers provide comprehensive coaching, practice tests, and personalized feedback to ensure high scores.",
          courseData: {
            courseName: "IELTS/UKVI",
            mode: "ONLINE and OFFLINE",
            duration: "1-2 Months",
            communicationMethods: ["Call", "Google Meet", "Whatsapp"],
            sessionType: "One to One Session",
            features: [
              "Daily Individual Writing Correction",
              "Daily Speaking Activities",
              "Easy Grammar",
              "Daily Listening and Reading",
            ],
            courseDescription: {
              modules: 4,
              liveSessions: "10 Live 1-1 speaking sessions",
              writingCorrections: "Writing corrections with feedback",
              writingMaterialSets: 40,
              mockTests: 4,
            },
            benefits: [
              "Vocabulary Bundle",
              "Free Study Materials",
              "24x7 Availability",
            ],
          },
        },
        {
          id: 2.2,
          name: "German Language Training",
          description:
            "From beginner to advanced levels, our German courses are designed to help you achieve fluency for academic, professional, or personal growth. Benefit from interactive sessions, native-speaking instructors, and practical immersion techniques.",
          images: [GermanTraining],
        },
        {
          id: 2.3,
          name: "Japanese Language Training",
          description:
            "Learn Japanese through our structured courses that cover essential language skills, from speaking and listening to reading and writing. Ideal for those looking to study, work, or live in Japan.",
        },
      ],
    },
    {
      id: 3,
      title: "Institutional Support",
      description:
        "Strengthen your institution with our wide range of support services.",
      sub_services: [
        {
          id: 3.1,
          name: "Curriculum Development",
          description:
            "Collaborate with our experts to design curricula that align with international standards and prepare students for future challenges.",
        },
        {
          id: 3.2,
          name: "Accreditation Support",
          description:
            "Assistance in meeting accreditation requirements and preparing for successful reviews to enhance your institution’s reputation.",
        },
        {
          id: 3.3,
          name: "Strategic Planning",
          description:
            "Develop long-term strategies to achieve institutional goals, including growth, academic excellence, and student engagement.",
        },
        {
          id: 3.4,
          name: "Technology Integration",
          description:
            "Guidance on implementing the latest educational technologies to enhance learning outcomes and administrative efficiency.",
        },
      ],
    },
    {
      id: 4,
      title: "Educational Consultancy",
      description:
        "Navigate the complexities of the education landscape with confidence.",
      sub_services: [
        {
          id: 4.1,
          name: "College Admissions Counseling",
          description:
            "Personalized support for students and families in selecting the right colleges, preparing applications, and securing financial aid.",
        },
        {
          id: 4.2,
          name: "Career Counseling",
          description:
            "Expert advice to help students identify their career goals and create a clear educational path to achieve them.",
        },
        {
          id: 4.3,
          name: "Special Education Consulting",
          description:
            "Customized strategies for families and schools dealing with special education needs, including developing Individualized Education Plans (IEPs).",
        },
      ],
    },
    {
      id: 5,
      title: "Professional Development",
      description: "Empowering educators and leaders to excel in their roles.",
      sub_services: [
        {
          id: 5.1,
          name: "Teacher Training",
          description:
            "Workshops and seminars on the latest teaching methodologies, classroom management, and educational technology.",
        },
        {
          id: 5.2,
          name: "Leadership Coaching",
          description:
            "Programs for school administrators and educational leaders to enhance management and leadership skills.",
        },
        {
          id: 5.3,
          name: "Continuous Improvement",
          description:
            "Support for institutions to implement continuous improvement processes, ensuring ongoing quality and effectiveness in education.",
        },
      ],
    },
  ];

  const [activeServiceFilter, setActiveServiceFilter] = useState(
    servicesdata[0].id
  );

  const filteredServiceData = servicesdata.find(
    (obj) => obj.id === activeServiceFilter
  );

  return (
    <>
      <BannerSection title={"Services"} />
      <Helmet>
        <title>Services</title>
      </Helmet>
      <section className="flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] grid lg:grid-cols-[1fr,3fr] grid-cols-1 gap-5 py-16">
          <div className=" w-full flex flex-col items-center  space-y-10 lg:order-1 xl:order-1 order-2  relative">
            <div className=" w-full px-5 py-5 bg-background h-fit rounded-xl !sticky top-20">
              <div className="flex flex-col w-full items-center space-y-3">
                {servicesdata.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className={`w-full h-[60px] hover:bg-primary/10 ${
                      activeServiceFilter === item.id
                        ? "bg-primary text-white"
                        : "bg-white"
                    }  border rounded-lg font-bold flex flex-row items-center justify-between px-5 text-[#787b84] hover:text-white`}
                    onClick={() => setActiveServiceFilter(item.id)}
                  >
                    <span>{item.title}</span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className="  order-2 lg:order-2 xl:order-2 flex flex-col space-y-4">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="text-[32px] font-semibold"
            >
              {filteredServiceData.title}
            </motion.h2>

            <p className="text-[#787b84] text-[20px]">
              {filteredServiceData.description}
            </p>
            <div className="py-5">
              <ul className="flex flex-col space-y-10">
                {filteredServiceData.sub_services.map((items) => (
                  <li className="animate-fadeindown flex flex-row flex-wrap gap-5 items-center  w-full">
                    <strong className="w-[250px]">{items.name}:</strong>
                    <span className="w-full">{items.description}</span>
                    {items.courseData && (
                      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
                        <div className="flex flex-col gap-4">
                          <h2 className="font-bold">Course Name</h2>
                          <div className="flex flex-col gap-2">
                            <h4 className="text-[16px]">
                              {items.courseData.courseName}
                            </h4>
                            <p className="text-[14px]">
                              <strong>Session Type: </strong>
                              {items.courseData.sessionType}
                            </p>
                            <p className="text-[14px]">
                              <strong>Communication Methods:</strong>{" "}
                              {items.courseData.communicationMethods.join(", ")}
                            </p>
                            <p className="text-[14px]">
                              <strong>Sessions:</strong>{" "}
                              {items.courseData.courseDescription.liveSessions}
                            </p>
                            <p className="text-[14px]">
                              <strong>Mock Test: </strong>
                              {items.courseData.courseDescription.mockTests}
                            </p>
                            <p className="text-[14px]">
                              <strong>Writing Test: </strong>
                              {
                                items.courseData.courseDescription
                                  .writingCorrections
                              }
                            </p>
                            <p className="text-[14px]">
                              <strong>Total Study Material Sets: </strong>
                              {
                                items.courseData.courseDescription
                                  .writingMaterialSets
                              }
                            </p>
                            <p className="text-[14px]">
                              <strong>Duration: </strong>
                              {items.courseData.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-bold">Features</h2>
                          <div className="flex flex-col gap-2">
                            {items.courseData.features.map(
                              (features, index) => (
                                <p
                                  className="text-[14px] flex flex-row gap-2 items-center"
                                  key={index}
                                >
                                  {" "}
                                  <CheckBadgeIcon className="h-5 w-5 fill-primary" />{" "}
                                  {features}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-bold">Benefits</h2>
                          <div className="flex flex-col gap-2">
                            {items.courseData.benefits.map(
                              (benefits, index) => (
                                <p
                                  className="text-[14px] flex flex-row gap-2 items-center"
                                  key={index}
                                >
                                  {" "}
                                  <CheckBadgeIcon className="h-5 w-5 fill-primary" />{" "}
                                  {benefits}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {items?.images &&
                      items.images.map((obj) => (
                        <div className="h-[300px] w-[350px]">
                          <img
                            src={obj}
                            alt=""
                            className="h-[300px] w-full object-cover"
                          />
                        </div>
                      ))}
                    {items?.greetings && (
                      <div className="w-full">
                        <p className="text-center font-bold">
                          {items.greetings}
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Easy study
            <span className="text-text"> abroad</span>
          </motion.h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center ">
            {serviceData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 120 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="col-span-1  shadow-lg rounded-xl bg-white z-20 lg:h-[300px] h-fit "
              >
                <div className="before:h-[160px] before:bg-[#f4f8fa] before:w-[70px] before:absolute before:-rotate-45 before:overflow-hidden before:-z-[1] before:-top-[39px] before:left-0 before:rounded-[35px] flex flex-col items-start justify-center relative p-[42px] overflow-hidden rounded-xl">
                  <div
                    className={` p-3 rounded-full my-2`}
                    style={{ backgroundColor: `${service.bgcolor}` }}
                  >
                    <img src={service.icon} alt="" />
                  </div>
                  <div className="flex flex-col space-y-5">
                    <h4 className="text-[24px] font-semibold">
                      {service.name}
                    </h4>
                    <p className="text-[16px] text-text">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-20 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundPosition: "right",
          backgroundSize: "600px 600px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] flex flex-col space-y-5">
          <motion.h2
            initial={{ opacity: 0, translateY: 150 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20"
          >
            Your Gateway to Global <br />
            <span className="text-text">Education Success</span>
          </motion.h2>
          <p className="text-[20px] text-text lg:w-1/2 md:w-1/2 text-center lg:text-left">
            At Benchmark Education, we provide personalized support for your
            study abroad journey—from course selection to visas—ensuring a
            smooth and successful admission process to top global institutions.
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 w-full lg:w-[70%]">
            {stepsData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="col-span-1 h-[170px] shadow-lg rounded-xl bg-white z-20 "
              >
                <div className="flex flex-col items-start justify-center relative p-[22px] overflow-hidden rounded-xl">
                  <div
                    className={`${step.bgColor}  rounded-full p-3 text-white h-16 w-16 flex flex-col items-center justify-center `}
                  >
                    <img
                      src={step.icon}
                      alt=""
                      style={{ height: 40, width: 40, objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex flex-col space-y-5 my-4">
                    <h4 className="text-[22px] font-semibold">{step.title}</h4>
                    {/* <p className="text-[16px] text-text">{step.description}</p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-[40vh] bg-white flex flex-col items-center justify-center w-full text-[18px] text-text font-Jakarta font-medium space-y-10">
        <div className="flex flex-row space-x-2 items-center w-full justify-center">
          <hr className="w-[10%]  border-text " />
          <p className="text-center">
            We're proud to work with our preffered partners
          </p>
          <hr className="w-[10%] border-text " />
        </div>
        <div className="flex flex-row flex-wrap place-items-center items-center justify-center space-x-0 lg:space-x-16">
          {PatnersImg.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="hover:bg-gray-400/10 hover:shadow-lg px-5 py-3 rounded-lg group"
            >
              <img
                src={obj}
                className="group-hover:grayscale grayscale-0 opacity-50 group-hover:opacity-100 h-[120px] w-[120px] object-contain "
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-[90%] h-full font-Jakarta flex flex-col space-y-8">
        <div className="flex flex-row flex-wrap items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl  leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Discover Your Perfect
              <br />
              <span className="text-text"> Study Abroad Destination</span>
            </motion.h2>
            <p className="w-full md:w-full lg:w-[40%] text-[20px] text-text">
            Unlock global opportunities with Benchmark Education. Let us guide you to the perfect study destination for a brighter future.
            </p>
          </div>

          <div className="bg-background py-2 rounded-lg flex flex-row lg:flex-row md:flex-row xl:flex-row flex-wrap space-x-0 lg:space-x-5 md:space-x-5 justify-start lg:justify-between  px-5">
            {countryData.map((obj, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className={`${
                  activeFilter === obj.continent
                    ? "bg-white rounded-lg shadow-lg text-black"
                    : "text-blue-gray-200 border-r-2 border-blue-gray-200"
                } w-fit px-10 h-10 my-1 font-semibold  `}
                onClick={() => setActiveFilter(obj.continent)}
              >
                {obj.continent}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
            {countries.map((obj, index) => (
              <Link
                key={index}
                to={`/countries/${activeFilter
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/${obj.country
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/`}
                state={{
                  continentName: `${activeFilter}`,
                  countryName: `${obj.country}`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="flex flex-row items-center justify-center space-x-5 border w-[150px] lg:w-[250px] md:w-[250px] xl:w-[250px] py-2 rounded-lg cursor-pointer hover:shadow-lg"
                >
                  <div
                    className="h-[50px] w-[50px] rounded-full bg-no-repeat bg-center bg-cover border "
                    style={{
                      background: `url(${obj.image}) no-repeat center/cover`,
                    }}
                  ></div>
                  <h5>{obj.country}</h5>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Services;

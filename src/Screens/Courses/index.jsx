import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import iotsecurity from "../../assets/Images/iotsecurity.webp"
import graphicdesign from "../../assets/Images/graphicdesign.webp"
import bvocaidigi from "../../assets/Images/bvocaidigitalmarketingandcommerce.webp"
import aidigi from "../../assets/Images/aidigitalmarketing.webp"
import python from "../../assets/Images/python.webp"
import seo from "../../assets/Images/seo.webp"
import datascience from "../../assets/Images/datascience copy.webp"
import fullstack from "../../assets/Images/fullstack.webp"
import mobileapp from "../../assets/Images/mobileapp.webp"
import ui from "../../assets/Images/ui&ux.webp"

import duration from "../../assets/Images/time-svgrepo.svg"

import Markdown from 'react-markdown'
import BannerSection from '../../Components/Banner'
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

const CourseSection = () => {

  const query = gql`query Eventslists {
    eventslists {
        eventname
        eventdate
        bannerimg {
            url
        }
        documentId
    }
}`
  const navigate = useNavigate()

  const [currentEvent, setCurrentEvent] = useState(null);

  const data = [{
    id: 1,
    image: aidigi, title: "DIPLOMA IN AI INTEGRATED DIGITAL MARKETING", duration: "6 Months", shortDescription: "Learn digital marketing with AI tools, automation, and real-world campaign experience.", description: ` The Diploma in AI Integrated Digital Marketing is a comprehensive, industry-oriented program designed to bridge the gap between traditional marketing and modern AI-driven strategies. This course equips learners with the skills required to plan, execute, and optimize digital campaigns across multiple platforms.
Students will gain hands-on experience with SEO, Google Ads, social media marketing, and performance marketing, along with advanced exposure to AI tools used for automation, content creation, and analytics. The program focuses heavily on practical learning through live projects, case studies, and real-time campaign execution.
By integrating AI into marketing workflows, this course ensures learners stay ahead in the competitive digital landscape and are fully prepared for industry demands.
`
  },
  {
    id: 2,
    image: bvocaidigi, title: "B.Voc IN AI DIGITAL MARKETING & E-COMMERCE", duration: "3 Years", shortDescription: "Industry-integrated degree with AI, internships, and real-world projects.", description: `The B.Voc in AI Digital Marketing & E-Commerce is a skill-based degree program designed to provide students with a perfect blend of academic knowledge and practical industry exposure. This program focuses on building strong digital marketing expertise along with e-commerce and business management skills.
Students will learn SEO, social media marketing, Google Ads, content creation, and e-commerce strategies, while also gaining continuous training in graphic design, video editing, and neuro marketing. Each semester includes hands-on projects and real-world applications to ensure practical understanding.
The program also offers internship opportunities, allowing students to gain professional experience and build a strong portfolio before graduation. By the end of the course, students will be well-prepared for careers in digital marketing, freelancing, or entrepreneurship.
`
  },
  {
    id: 3,
    image: python, title: "PYTHON FULL STACK DEVELOPER", duration: "3 Months", shortDescription: "Learn full stack development with Python, Django, and real-time projects.", description: ` The Python Full Stack Developer program is a career-focused course designed to help students master both frontend and backend development using modern technologies. The course is aligned with real IT industry requirements and focuses on practical learning through coding sessions and projects.
Students will begin with web fundamentals such as HTML, CSS, and JavaScript, and gradually move into backend development using Python and Django. The program also includes database management with MySQL and deployment techniques.
In addition to technical skills, students will receive interview preparation, resume building support, and placement assistance. This ensures they are not only skilled developers but also ready to secure job opportunities in the industry.
`
  },
  {
    id: 4,
    image: graphicdesign, title: "AI INTEGRATED GRAPHIC DESIGN", duration: "4 Months", shortDescription: "Master graphic design with AI tools and build a professional portfolio.", description: `The AI Integrated Graphic Design course is a creative program designed to help students develop strong design skills using both traditional tools and modern AI technologies. This course covers everything from basic design principles to advanced branding and portfolio development.
Students will learn industry-standard tools such as Adobe Photoshop, Illustrator, CorelDRAW, and InDesign, along with AI tools like Midjourney, Canva AI, and Adobe Firefly. The program also focuses on branding, logo design, packaging design, and social media creatives.
A key highlight of this course is portfolio development, where students work on real client-based projects and build a professional portfolio suitable for jobs or freelancing opportunities.
`
  },
  {
    id: 5,
    image: seo, title: "Professional SEO Course", duration: "3 Months", shortDescription: "Learn to rank websites and generate organic traffic from Google.", description: `The Professional SEO Course is designed to help students master search engine optimization techniques to improve website visibility and drive organic traffic. This course focuses on both theoretical understanding and practical implementation.
Students will learn keyword research, on-page SEO, technical SEO, and off-page strategies such as link building. The course also includes hands-on training with tools like Google Search Console and analytics platforms.
By the end of the program, learners will be able to optimize websites, improve rankings, and generate consistent organic leads for businesses or personal projects.
`
  },
  {
    id: 6,
    image: datascience, title: "Data Science – AI & ML", duration: "6 Months", shortDescription: "Learn data analysis, machine learning, and AI tools for real-world applications.", description: `The Data Science (AI & ML) program is an industry-aligned course focused on building strong analytical and problem-solving skills using data. This program covers the complete data science lifecycle, from data collection and cleaning to model building and deployment.
Students will learn Python for data analysis, statistics, data visualization, and machine learning algorithms. The course also introduces deep learning concepts and business intelligence tools such as Power BI.
Through real-world datasets and case studies, learners will gain practical experience in solving business problems using AI and data-driven approaches.
`
  },
  {
    id: 7,
    image: fullstack, title: "Full Stack Web Development", duration: "6 Months", shortDescription: "Learn frontend and backend development to build complete web applications.", description: `The Full Stack Web Development course is designed to provide a complete understanding of web application development, covering both frontend and backend technologies. This program enables students to build fully functional, production-ready applications.
Students will learn HTML, CSS, JavaScript, and modern frontend frameworks, along with backend development using Node.js or similar technologies. The course also includes database management, API development, and deployment.
By the end of the program, learners will have the skills to build end-to-end applications and pursue careers as full stack developers.
`
  },
  {
    id: 8,
    image: mobileapp, title: "Mobile App Development", duration: "4 Months", shortDescription: " Build Android and iOS apps using modern frameworks.", description: `The Mobile App Development course is a hands-on program designed to teach students how to build modern mobile applications for both Android and iOS platforms. The course focuses on cross-platform development using tools like React Native or Flutter.
Students will learn mobile UI design, API integration, app testing, and deployment. The program emphasizes practical learning, enabling students to create real-world applications.
By the end of the course, learners will be capable of developing and deploying fully functional mobile apps.
`
  },
  {
    id: 9,
    image: ui, title: "UI/UX Design", duration: "3 Months", shortDescription: "Design user-friendly apps using modern tools and design thinking.", description: `The UI/UX Design course is focused on creating intuitive and user-friendly digital experiences. This program teaches students the complete design process, from research and ideation to prototyping and testing.
Students will learn tools like Figma and Adobe XD, along with concepts such as user research, wireframing, and usability testing. The course also covers collaboration with development teams.
By the end of the program, learners will be able to design professional interfaces and build a strong design portfolio.
`
  },
  {
    id: 10,
    image: iotsecurity, title: "AI-Powered IoT Security", duration: "3 Months", shortDescription: "Learn IoT systems and build AI-based security solutions.", description: `The AI-Powered IoT Security course is a specialized program focused on building smart security systems using IoT devices and artificial intelligence. This course combines hardware and software learning to provide a complete understanding of IoT systems.
Students will work with sensors, microcontrollers, and embedded systems, while also learning network communication and AI-based monitoring systems. The course includes real-time projects and lab-based learning.
By the end of the program, learners will be able to design and implement intelligent security solutions using modern technologies.
`
  }]


  useEffect(() => {
    if (currentEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [currentEvent]);

  return (
    <>
      <BannerSection title={"Courses"} desc={"Empowering Careers Through Quality Education"} />
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Master the Leading Tech
            <span className="text-text">  Kickstart Your Creative Career</span>
          </motion.h2>
          <p className="text-text text-center text-[16px] mb-12">
            At Benchmark Education, we offer a diverse range of courses tailored
            to meet the demands of today’s job market.
          </p>
          <div className="flex flex-col md:flex-row z-20 gap-16 mt-16 font-Jakarta flex-wrap items-center justify-center">
            {currentEvent && (
              <EventModal
                event={currentEvent}
                closeModal={() => setCurrentEvent(null)}
              />
            )}
            {
              data && (
                data?.map((obj, index) => (
                  <Link onClick={() => setCurrentEvent(obj)}>
                    <motion.div
                      style={{ "scrollbarColor": "red" }}
                      initial={{ opacity: 0, translateY: 50 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ ease: "easeInOut", duration: 0.8 }} class="min-h-[500px] max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg group font-Jakarta cursor-pointer" key={index} >
                      <a className='group-hover:translate-x-2 transition-all'>
                        <img class="rounded-t-lg h-[220px] w-full object-cover" src={obj.image} alt="imgage.png" />
                      </a>
                      <div class="min-h-[280px] p-5 flex flex-col items-stretch justify-evenly">
                        <div className='mb-3 flex justify-start items-center gap-2'>
                          <img width={'20px'} height={'20px'} src={duration} alt="duration-icon" />
                          <p class="font-semibold text-primary dark:text-gray-400 text-xs">{obj.duration}</p>
                        </div>
                        <a>
                          <h5 class="mb-4 text-2xl font-bold tracking-tight group-hover:text-primary text-gray-900 dark:text-white text-ellipsis overflow-hidden text-wrap">{obj.title}</h5>
                        </a>
                        <p class="mb-3 font-semibold text-gray-400 text-sm">{obj.shortDescription}</p>
                        <a href="#" class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  </Link>
                ))
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseSection

function EventModal({ event, closeModal }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div onClick={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }} className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

      {/* Modal Container */}
      <div className="relative w-[90vw] h-[80vh] bg-white flex flex-col md:flex-row overflow-y-scroll rounded-xl">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-xl font-bold bg-gray-50 px-[9px] py-[4px] rounded-full hover:rotate-90 transition-all"
        >
          ✕
        </button>

        {/* Image */}
        <div className="md:w-1/2 h-[40vh] md:h-full">
          <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-3xl font-semibold mb-4">{event?.title}</h2>
          <p className="text-gray-500 mb-4">{event?.date}</p>
          <p className="text-gray-700 leading-relaxed text-justify prose max-w-none">
            {event?.description}
          </p>
          <Link onClick={() => { document.body.style.overflow = "auto"; closeModal(); }} to={'/contactus'} class=" w-fit mt-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Now
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
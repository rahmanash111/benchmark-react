import React, { useState } from "react";
// import {
//     ChatAltIcon,
//     GlobeEuropeAfricaIcon,
//     FlagIcon,
//     ClipboardListIcon,
//     CalendarIcon,
//     VideoCameraIcon,
//     QuizIcon,
//     TrophyIcon
//   } from '@heroicons/react/outline';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import TrainerImg from "../../../assets/Images/praveena.webp";
import {
  CalendarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  FlagIcon,
  GlobeAltIcon,
  PencilIcon,
  TrophyIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import BannerSection from "../../../Components/Banner";
import GermanImg from '../../../assets/Services/german.webp'
import IeltsImg from '../../../assets/Services/ielts.webp'
import JapanImg from '../../../assets/Services/japanese.webp'

const LanguageTraining = () => {
  // const data = {
  //   id: "3",
  //   heading: "Language Training and Preparation: Your Path to Success",
  //   sections: [
  //     {
  //       id: "3.1",
  //       title: "IELTS Preparation (IELTS/UKVI)",
  //       description:
  //         "Our IELTS Preparation (IELTS/UKVI) course offers personalized, one-to-one sessions delivered through call, Google Meet, or WhatsApp. The program includes 10 live speaking sessions, 4 mock tests, and writing corrections with detailed feedback.",
  //       icon: ChatBubbleOvalLeftEllipsisIcon,
  //       bgColor: "#F7DC6F",
  //     },
  //     {
  //       id: "3.2",
  //       title: "German Language Training",
  //       description:
  //         "From beginner to advanced, achieve fluency through interactive lessons with native-speaking instructors. Perfect for academic, professional, or personal growth.",
  //       icon: GlobeAltIcon,
  //       bgColor: "#8BC34A",
  //     },
  //     {
  //       id: "3.3",
  //       title: "Japanese Language Training",
  //       description:
  //         "Structured to cover essential skills in speaking, listening, reading, and writing, these courses are ideal for students and professionals looking to study, work, or live in Japan.",
  //       icon: FlagIcon,
  //       bgColor: "#FFC107",
  //     },
  //   ],
  //   steps: [
  //     {
  //       id: "3.4",
  //       title: "Initial Assessment",
  //       description:
  //         "Determine your current skill level and set personalized learning goals.",
  //       icon: ClipboardDocumentListIcon,
  //       bgColor: "#C5CAE9",
  //     },
  //     {
  //       id: "3.5",
  //       title: "Enrollment & Scheduling",
  //       description:
  //         "Confirm course details and schedule live sessions with expert instructors.",
  //       icon: CalendarIcon,
  //       bgColor: "#000",
  //     },
  //     {
  //       id: "3.6",
  //       title: "Live Interactive Sessions",
  //       description:
  //         "Participate in tailored lessons with daily writing and speaking practice.",
  //       icon: VideoCameraIcon,
  //       bgColor: "#4CAF50",
  //     },
  //     {
  //       id: "3.7",
  //       title: "Mock Tests & Regular Practice",
  //       description:
  //         "Take frequent mock exams and receive feedback to enhance your skills.",
  //       icon: PencilIcon,
  //       bgColor: "#9C27B0",
  //     },
  //     {
  //       id: "3.8",
  //       title: "Final Review & Exam Preparation",
  //       description:
  //         "Get ready for your final test with targeted review sessions and ongoing study material access.",
  //       icon: TrophyIcon,
  //       bgColor: "#8E24AA",
  //     },
  //   ],
  // };

  const courseData = [
    {
      id: 1,
      courseName: "German",
      title: "Learn German and Unlock Global Opportunities",
      description:
        "Build strong communication skills with our German Language Course designed for students and professionals aiming to study in Germany, work with international companies, or settle in German-speaking countries.",
  
        courseTitle: "German Language Course",
        
      objectives: [
        "Study, work, or settle in German-speaking countries",
        "Prepare for DSH, TestDaF, and Goethe-Institut exams",
        "Expert-led training with interactive lessons and resources",
      ],
      bannerImg:GermanImg,
      whyChooseUs: {
        title: "Why Choose Our German Language Program?",
        description:
          "Professional coaching focused on building strong German proficiency.",
        details: [
          {
            title: "Expert Trainers with Industry Experience",
            description:
              "Our trainers bring years of experience in German language coaching, helping learners understand pronunciation, grammar, and real-life communication through practical guidance.",
          },
          {
            title: "Structured Learning from A1 to C1",
            description:
              "The program follows internationally recognized German proficiency levels, enabling learners to build strong foundations and progress toward advanced communication abilities.",
          },
          {
            title: "Preparation for International Exams",
            description: "Students receive focused guidance for Goethe certification, TestDaF preparation, and DSH exam training, which are essential for academic and professional opportunities abroad.",
          },
          {
            title: "Interactive Communication Practice",
            description:
              "Our sessions include practical German speaking practice and real-life scenarios that help learners develop confidence in conversations and everyday communication.",
          },
          {
            title: "Global Career and Academic Support",
            description:
              "Develop strong German proficiency skills that help you access international education opportunities and career pathways in global organizations.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "Our structured curriculum supports learners at every stage, from beginners to advanced proficiency, helping students progress through internationally recognized language levels.",
        levels: [
          {
            level: "A1 & A2",
            type: "Beginner Levels",
            description: "Start your journey with A1 German course and A2 German course, designed to build a strong base in vocabulary, pronunciation, and everyday communication.",
          },
          {
            level: "B1 & B2",
            type: "Intermediate Levels",
            description: "Develop confidence through B1 German course and B2 German course, focusing on real-life conversations, comprehension, and academic communication skills.",
          },
          {
            level: "C1 & C2",
            type: "Advanced Levels",
            description: "Achieve professional mastery with C1 German course and C2 German course, designed for advanced fluency, complex communication, and global career opportunities.",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Our program includes essential learning elements designed to support German language learning and create an engaging, structured study experience.",
        features: [
          {
            title: "Live Online Classes",
            description:
              "Interactive two-way sessions with experienced tutors focused on improving German speaking skills through guided practice and communication activities.",
          },
          {
            title: "Personalized Feedback",
            description:
              "Receive detailed corrections and suggestions to strengthen German writing practice and improve communication accuracy.",
          },
          {
            title: "Exclusive Study Material",
            description:
              "Get access to curated resources designed for effective German vocabulary building and continuous language development.",
          },
          {
            title: "Real-Life Projects",
            description:
              "Apply your knowledge through practical exercises that improve German conversation practice in real-world situations.",
          },
          {
            title: "Masterclass & Hackathons",
            description:
              "Participate in special sessions focused on German communication skills along with engaging learning activities and competitions.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Gain valuable skills that support international careers and academic growth through practical training and recognized language certification.",
        benefits: [
          {
            title: "Global Job Opportunities",
            description:
              "Open doors to international careers with strong German workplace communication skills valued by companies across Europe.",
          },
          {
            title: "Boost Your CV & LinkedIn",
            description:
              "Strengthen your professional profile by showcasing German proficiency on your CV and LinkedIn.",
          },
          {
            title: "Freelancing",
            description:
              "Explore global remote opportunities with skills in German translation and online language services.",
          },
          {
            title: "Study Abroad",
            description:
              "Increase your chances of university admission with German academic requirements needed for international education.",
          },
        ],
      },
      whyLearn: {
        title: "Why Study German?",
        description:
          "German is the most spoken native language in Europe, providing global opportunities in business, academia, and culture. Whether you're aiming to move abroad or broaden your career prospects, fluency in German is a valuable skill that can set you apart.",
      },
      supportForYourJourney: {
        title: "How We Support Your Journey",
        description:
          "Our tailored approach ensures that you receive all the support you need to succeed.",
        supportDetails: [
          {
            title: "Tailored Curriculum",
            description:
              "A course plan designed around your schedule and goals.",
          },
          {
            title: "Internship Support",
            description:
              "Gain real-world experience through internships with German-speaking companies.",
          },
          {
            title: "Certification",
            description:
              "Receive an industry-recognized certification upon course completion.",
          },
          {
            title: "Placement Assistance",
            description:
              "We support your job search for up to 1 year after you finish the course.",
          },
        ],
      },
      callToAction: {
        title: "Enroll Now & Start Your German Learning Journey!",
        description:
          "Take the first step towards mastering the German language and unlocking a world of opportunities. Enroll today and receive a 1-year Gold Membership packed with benefits.",
      },
    },
    {
      id: 2,
      courseName: "Japanese",
      title: "Master Japanese and Expand Your Global Reach",
      description:
        "Unlock the Japanese Language with our expertly designed course tailored for beginners to advanced learners. Whether you’re planning to study, work, or live in Japan, this course will help you master all aspects of the language, including speaking, listening, reading, and writing. Get ready to excel in proficiency exams like JLPT and dive deep into the rich cultural heritage of Japan.",
      courseTitle: "Japanese Language Course",
      objectives: [
        "Study, work, or live in Japan",
        "Prepare for the Japanese-Language Proficiency Test (JLPT)",
        "Expert-led sessions with cultural immersion and interactive lessons",
      ],
      bannerImg:JapanImg,
      whyChooseUs: {
        title: "Why Choose Our Japanese Language Course?",
        description:
          "Expert training, practical learning, JLPT preparation, and career-focused guidance to help you achieve fluency and global opportunities.",
        details: [
          {
            title: "Expert-Led Sessions",
            description:
              "Learn from the best Japanese language institute trainers with real teaching experience.",
          },
          {
            title: "Full-Spectrum Language Skills",
            description:
              "Master fluency through our Japanese speaking course online with structured practice.",
          },
          {
            title: "Exam Preparation",
            description:
              "Get complete support for JLPT N5 N4 training with expert guidance.",
          },
          {
            title: "Career-Oriented Learning",
            description:
              "Join a Japanese language training institute that offers career-focused learning and opportunities.",
          },
          {
            title: "Cultural Immersion",
            description:
              "Learn Japanese from scratch while exploring culture, etiquette, and real-life communication.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "Our structured curriculum supports learners at every stage of their Japanese language journey with practical, exam-focused training.",
        levels: [
          {
            level: "N5 & N4",
            type: "Beginner Levels",
            description: "Strong foundation for Japanese course for beginners",
          },
          {
            level: "N3",
            type: "Intermediate Levels",
            description: "Improve skills with intermediate Japanese course N3",
          },
          {
            level: "N2 & N1",
            type: "Advanced Levels",
            description:
              "Achieve fluency through advanced Japanese language training",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Designed to make learning interactive, practical, and easy to apply.",
        features: [
          {
            title: "Live Interactive Classes",
            description:
              "Join live sessions with real-time interaction and expert guidance.",
          },
          {
            title: "Personalized Feedback",
            description:
              "Receive detailed corrections to improve speaking, writing, and accuracy faster.",
          },
          {
            title: "Exclusive Study Material",
            description:
              "Access curated resources, practice tests, and structured learning materials anytime.",
          },
          {
            title: "Cultural Projects",
            description:
              "Work on practical projects to understand traditions, behavior, and communication styles.",
          },
          {
            title: "Masterclasses & Competitions",
            description:
              "Participate in special sessions, activities, and challenges to improve skills.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Unlock global career growth, practical skills, and long-term professional opportunities.",
        benefits: [
          {
            title: "Global Job Opportunities",
            description:
              "Access international roles across industries with strong communication and professional skills.",
          },
          {
            title: "Boost Your CV & LinkedIn",
            description:
              "Enhance your profile with recognized certification and globally valued communication skills.",
          },
          {
            title: "Freelancing Opportunities",
            description:
              "Work independently as translator, tutor, or consultant using your communication expertise.",
          },
          {
            title: "Study in Japan",
            description:
              "Qualify for top universities with required proficiency and strong academic readiness.",
          },
        ],
      },
      whyLearn: {
        title: "Why Learn Japanese?",
        description:
          "Gain advantage in global industries like technology, business, design, and education sectors.",
      },
      supportForYourJourney: {
        title: "How We Support Your Journey",
        description:
          "Receive structured guidance, resources, and mentorship to achieve learning goals confidently.",
        supportDetails: [
          {
            title: "Tailored Learning Plan",
            description:
              "Get personalized schedules and lessons designed based on your learning goals.",
          },
          {
            title: "Internship Support",
            description:
              "Gain real-world experience through opportunities with companies requiring communication skills.",
          },
          {
            title: "Certification",
            description:
              "Earn recognized certification validating your proficiency and enhancing career opportunities globally.",
          },
          {
            title: "Job Placement Assistance",
            description:
              "Receive career support, guidance, and opportunities to secure roles after completion.",
          },
        ],
      },
      callToAction: {
        title: "Enroll Today & Begin Your Japanese Language Adventure!",
        description:
          "Start mastering the Japanese language and experience a world of new opportunities. Sign up today and receive access to exclusive resources, job assistance, and cultural experiences.",
      },
    },
    {
      id: 3,
      courseName: "IELTS",
      title: "Why Choose Our IELTS Course?",
      description:
        "Achieve target band scores with expert training, practice, and guidance.",
      courseTitle: "IELTS Language Course",
      objectives: [
        "Achieve language mastery for academic and professional success",
        "Prepare for the IELTS test with personalized support",
        "Expert-led sessions to build core language skills",
      ],
      bannerImg:IeltsImg,
      whyChooseUs: {
        details: [
          {
            title: "Expert Guidance",
            description:
              "Learn from experienced trainers offering the best IELTS coaching for success.",
          },
          {
            title: "Tailored Curriculum",
            description:
              "Personalized study plans designed for faster improvement and better test performance.",
          },
          {
            title: "Flexible Learning Options",
            description:
              "Choose online or offline IELTS classes based on your schedule flexibility.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "Structured levels designed to improve English skills for IELTS preparation success.",
        levels: [
          {
            level: "Beginner Level (A1-A2)",
            description:
              "Build basic English skills with foundation-level IELTS preparation and vocabulary training.",
          },
          {
            level: "Intermediate Level (B1-B2)",
            description:
              "Improve communication, writing, and comprehension for academic and professional IELTS success.",
          },
          {
            level: "Advanced Level (C1-C2)",
            description:
              "Master advanced English skills for high band score IELTS exam results.",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Practical features designed to improve preparation, performance, and overall test confidence.",
        features: [
          {
            title: "FREE Consultation",
            description:
              "Get expert advice and guidance before joining the best IELTS coaching.",
          },
          {
            title: "Practice Tests",
            description:
              "Attend regular mock tests to improve performance in IELTS exam.",
          },
          {
            title: "Personalized Feedback",
            description:
              "Receive one-on-one feedback to improve weak areas in IELTS preparation.",
          },
          {
            title: "Study Material",
            description:
              "Access curated resources for effective IELTS preparation including exercises and practice.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Develop global skills and unlock opportunities through strong English communication abilities.",
        benefits: [
          {
            title: "Global Opportunities",
            description:
              "Access international jobs requiring strong English communication and IELTS qualification scores.",
          },
          {
            title: "Higher Education Access",
            description:
              "Study abroad by meeting IELTS requirements for universities in top countries.",
          },
          {
            title: "Skill Development",
            description:
              "Enhance communication, confidence, and critical thinking for academic and career success.",
          },
        ],
      },
      whyLearn: {
        title: "Why Learn IELTS?",
        description:
          "Improve English proficiency for study, work, travel, and global opportunities.",
        benefits: [
          {
            title: "Recognized Certification",
            description:
              "IELTS accepted worldwide as proof of English language proficiency skills.",
          },
          {
            title: "Boost Your Confidence",
            description:
              "Gain communication skills for academic, professional, and everyday English usage.",
          },
          {
            title: "Broaden Your Horizons",
            description:
              "Unlock opportunities for higher education, international jobs, and global travel.",
          },
        ],
      },
      supportForYourJourney: {
        title: "How We Support Your Journey",
        description:
          "Receive guidance, mentorship, and structured resources for successful IELTS preparation.",
        supportDetails: [
          {
            title: "Dedicated Mentorship",
            description:
              "Learn from experienced trainers committed to achieving your desired band scores.",
          },
          {
            title: "Community Support",
            description:
              "Engage with learners through discussions, activities, and peer learning opportunities.",
          },
          {
            title: "Continuous Improvement",
            description:
              "Access ongoing resources and support even after course completion for growth.",
          },
        ],
      },
      trainerProfile: {
        title: "Meet Your Trainer: Praveena Nair",
        description: "Lead Trainer – Verbal Abilities & Soft Skills",
        trainerImg: TrainerImg,
        profileDetails: [
          {
            title: "Diverse Experience",
            description:
              "Praveena has worked with various organizations across India, UAE, and Kuwait, equipping her with a deep understanding of different work cultures and collaboration.",
          },
          {
            title: "Innovative Teaching",
            description:
              "As an empaneled trainer with state government initiatives, she empowers learners through engaging, interactive sessions that promote lifelong learning and creativity.",
          },
          {
            title: "Passionate Mentor",
            description:
              "With a commitment to inspiring young learners, Praveena conducts tailored sessions for IELTS aspirants, focusing on empathy, inclusivity, and responsibility.",
          },
        ],
      },
      callToAction: {
        title: "Enroll Now & Start Your IELTS Preparation!",
        description:
          "Begin your IELTS journey today and gain access to exclusive resources, personalized support, and a pathway to international opportunities.",
      },
    },
  ];

  const [activeFilter, setActiveFilter] = useState(courseData[0].id);

  const filteredData = courseData.find((i) => i.id === activeFilter);
  return (
    <>
      <Helmet>
        <title>Professional Language Training at Benchmark Education</title>
      </Helmet>
      <BannerSection title={"Professional Language Training at Benchmark Education"} desc={"At Benchmark Education, our professional language training programs help learners improve communication, build confidence, and develop strong speaking, writing, and comprehension skills for academic and career success."}/>
      <section className="flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] grid lg:grid-cols-[1fr,3fr] grid-cols-1 gap-5 py-16">
          <div className=" w-full flex flex-col items-center  space-y-10 lg:order-1 xl:order-1 order-2  relative">
            <div className=" w-full px-5 py-5 bg-background h-fit rounded-xl !sticky top-20">
              <div className="flex flex-col w-full items-center space-y-3">
                {courseData.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className={`w-full h-[60px] hover:bg-primary/10 ${
                      activeFilter === item.id
                        ? "bg-primary text-white"
                        : "bg-white"
                    }  border rounded-lg font-bold flex flex-row items-center justify-between px-5 text-[#787b84] hover:text-white`}
                    onClick={() => setActiveFilter(item.id)}
                  >
                    <span>{item.courseName}</span>
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className="  order-2 lg:order-2 xl:order-2 flex flex-col space-y-4 font-Jakarta">
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.7rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.description}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.whyChooseUs.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.whyChooseUs.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {filteredData.whyChooseUs.details.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                  >
                    <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full  items-center gap-2">
                      <div className="w-10">
                        <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      </div>
                      <div className="border-r-2 px-2 border-r-gray-500">
                        <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                      </div>
                      <p className="text-text text-[0.9rem]">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-black">
                <img src={filteredData.bannerImg} alt={filteredData.title} className="max-h-[500px] object-cover w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.courseLevels.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.courseLevels.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 place-items-center">
                {filteredData.courseLevels.levels.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
                  >
                    <div className="flex flex-col justify-center h-full  items-center gap-2">
                      {/* <div className="w-10">
                      <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      </div> */}
                      <div className="">
                        <h3 className="font-bold text-[1rem]">{obj.level}</h3>
                      </div>
                      <p className="text-text text-[0.9rem] text-center">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.keyFeatures.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.keyFeatures.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {filteredData.keyFeatures.features.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                  >
                    <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full  items-center gap-2">
                      <div className="w-10">
                        <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      </div>
                      <div className="border-r-2 px-2 border-r-gray-500">
                        <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                      </div>
                      <p className="text-text text-[0.9rem]">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.careerAndLearningBenefits.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.careerAndLearningBenefits.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {filteredData.careerAndLearningBenefits.benefits.map(
                  (obj, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, translateY: 150 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ ease: "easeInOut", duration: 0.8 }}
                      className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                    >
                      <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full  items-center gap-2">
                        <div className="w-10">
                          <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                        </div>
                        <div className="border-r-2 px-2 border-r-gray-500">
                          <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                        </div>
                        <p className="text-text text-[0.9rem]">
                          {obj.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.whyLearn.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.whyLearn.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {filteredData.whyLearn?.benefits?.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                  >
                    <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full  items-center gap-2">
                      <div className="w-10">
                        <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      </div>
                      <div className="border-r-2 px-2 border-r-gray-500">
                        <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                      </div>
                      <p className="text-text text-[0.9rem]">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.h2
                className="text-[1.5rem] font-semibold"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {filteredData.supportForYourJourney.title}
              </motion.h2>
              <p className="text-text text-[1rem]">
                {filteredData.supportForYourJourney.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                {filteredData.supportForYourJourney.supportDetails?.map(
                  (obj, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, translateY: 150 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ ease: "easeInOut", duration: 0.8 }}
                      className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
                    >
                      <div className="flex flex-col justify-around h-full  items-center gap-2">
                        <div className="w-10">
                          <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                        </div>
                        <p className="text-text text-[0.9rem] text-center">
                          {obj.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
         {
          filteredData.trainerProfile && (
            <div className="flex flex-col gap-3">
            <motion.h2
              className="text-[1.5rem] font-semibold"
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              {filteredData?.trainerProfile?.title}
            </motion.h2>

            <div className="flex flex-col w-full gap-2  py-5 items-center justify-center">
              <motion.div initial={{opacity:0,scale:0}} whileInView={{scale:1,opacity:1}} viewport={{once:false}} transition={{ease:'easeInOut',duration:0.8}} className="h-[150px] rounded-full w-[150px] ">
                <img
                  src={filteredData?.trainerProfile?.trainerImg}
                  className="h-full w-full object-cover rounded-full"
                  alt="trainerimg.jpeg"
                />
              </motion.div>
              <p className="text-primary font-semibold text-[1rem]">
              {filteredData?.trainerProfile?.description}
            </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
              {filteredData?.trainerProfile?.profileDetails?.map(
                (obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className=" h-[250px] w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
                  >
                    <div className="flex flex-col justify-around h-full  items-center gap-2">
                      <div className="w-10">
                        <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[1rem]">{obj.title}</h3>
                      </div>
                      <p className="text-text text-[0.9rem] text-center">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
          )
         }
          </div>
        </div>
      </section>
    </>
  );
};

export default LanguageTraining;

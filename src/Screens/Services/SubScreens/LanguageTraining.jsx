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
      title: "Master German and Unlock Global Opportunities",
      description:
        "Join our comprehensive German Language Course to elevate your skills from beginner to advanced levels. Whether you aim to study, work, or settle in German-speaking countries, our course has you covered. With expert-led training, tailored resources, and job placement support, you're set to achieve fluency and unlock new career pathways.",
      courseTitle: "German Language Course",
      objectives: [
        "Study, work, or settle in German-speaking countries",
        "Prepare for DSH, TestDaF, and Goethe-Institut exams",
        "Expert-led training with interactive lessons and resources",
      ],
      bannerImg:GermanImg,
      whyChooseUs: {
        title: "Why Choose Our German Language Course?",
        description:
          "Our German course offers unique benefits, expert instruction, and resources designed to help you master the language and achieve your career and academic goals.",
        details: [
          {
            title: "Expert-Led Training",
            description:
              "Learn from experienced instructors with over 15 years of expertise.",
          },
          {
            title: "Complete Skill Development",
            description:
              "Enhance speaking, listening, reading, and writing skills.",
          },
          {
            title: "Exam Preparation",
            description: "Coaching for DSH, TestDaF, and Goethe exams.",
          },
          {
            title: "Job Placement Support",
            description:
              "1-year guaranteed job assistance for global opportunities.",
          },
          {
            title: "Gold Membership",
            description:
              "Premium benefits including career resources, job alerts, and project opportunities.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "No matter where you are in your learning journey, our structured curriculum will guide you.",
        levels: [
          {
            level: "A1 & A2",
            type: "Beginner Levels",
            description: "Build a strong foundation.",
          },
          {
            level: "B1 & B2",
            type: "Intermediate Levels",
            description: "Gain confidence and fluency.",
          },
          {
            level: "C1 & C2",
            type: "Advanced Levels",
            description: "Master the language with professional proficiency.",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Our course provides comprehensive features to ensure a well-rounded and engaging learning experience.",
        features: [
          {
            title: "Live Online Classes",
            description:
              "Interactive, two-way live sessions with experienced German tutors.",
          },
          {
            title: "Personalized Feedback",
            description:
              "Receive corrections on speaking and writing exercises to improve faster.",
          },
          {
            title: "Exclusive Study Material",
            description:
              "Access 40+ hours of study materials, videos, and assessments.",
          },
          {
            title: "Real-Life Projects",
            description:
              "Work on practical German language projects to apply what you’ve learned.",
          },
          {
            title: "Masterclass & Hackathons",
            description:
              "Participate in soft skill development masterclasses and language competitions.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Gain a competitive edge with our course's career-boosting benefits and practical learning outcomes.",
        benefits: [
          {
            title: "Global Job Opportunities",
            description:
              "Secure positions in top companies across Germany, Austria, Switzerland, and the EU.",
          },
          {
            title: "Boost Your CV & LinkedIn",
            description:
              "Enhance your professional profile with a recognized German certification.",
          },
          {
            title: "Freelancing",
            description:
              "Tap into the global freelance market with expertise in German translation, teaching, and more.",
          },
          {
            title: "Study Abroad",
            description:
              "Become fluent in German and open doors to top universities and academic programs.",
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
          "Our Japanese course offers expert-led instruction, immersive learning, and career support tailored to help you achieve language mastery and career readiness.",
        details: [
          {
            title: "Expert-Led Sessions",
            description:
              "Learn from industry veterans with years of teaching experience.",
          },
          {
            title: "Full-Spectrum Language Skills",
            description:
              "Develop fluency in speaking, reading, writing, and listening.",
          },
          {
            title: "Exam Preparation",
            description:
              "Get personalized coaching to excel in the Japanese-Language Proficiency Test (JLPT).",
          },
          {
            title: "Career-Oriented Learning",
            description:
              "Access job placement support and open doors to global opportunities.",
          },
          {
            title: "Cultural Immersion",
            description:
              "Engage with Japan’s rich culture and language through practical learning methods.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "Our structured curriculum supports learners at every stage of their Japanese language journey.",
        levels: [
          {
            level: "N5 & N4",
            type: "Beginner Levels",
            description: "Build your basic knowledge of Japanese.",
          },
          {
            level: "N3",
            type: "Intermediate Level",
            description: "Develop conversation skills for everyday use.",
          },
          {
            level: "N2 & N1",
            type: "Advanced Levels",
            description:
              "Achieve full professional fluency and master complex language structures.",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Our course provides comprehensive features to ensure effective, immersive, and engaging language learning.",
        features: [
          {
            title: "Live Interactive Classes",
            description:
              "Join two-way live sessions with Japanese language experts.",
          },
          {
            title: "Personalized Feedback",
            description:
              "Improve quickly with detailed corrections on speaking and writing tasks.",
          },
          {
            title: "Exclusive Study Material",
            description:
              "Access a range of resources including practice exams, videos, and exercises.",
          },
          {
            title: "Cultural Projects",
            description:
              "Work on projects that explore Japanese traditions, history, and current events.",
          },
          {
            title: "Masterclasses & Competitions",
            description:
              "Participate in special sessions and hackathons to sharpen your skills.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Open new career pathways and achieve language fluency through our course's practical benefits.",
        benefits: [
          {
            title: "Global Job Opportunities",
            description:
              "Open doors to jobs in Japan and multinational companies worldwide.",
          },
          {
            title: "Boost Your CV & LinkedIn",
            description:
              "Add a recognized certification in Japanese to enhance your professional profile.",
          },
          {
            title: "Freelancing Opportunities",
            description:
              "Work as a translator, language instructor, or consultant with your new skills.",
          },
          {
            title: "Study in Japan",
            description:
              "Become fluent in Japanese to qualify for top universities and academic programs in Japan.",
          },
        ],
      },
      whyLearn: {
        title: "Why Learn Japanese?",
        description:
          "Japan is a global hub for technology, business, and culture. Knowing the language gives you a competitive edge in industries like IT, manufacturing, design, and education. Whether for personal growth or career advancement, mastering Japanese can unlock new pathways for success.",
      },
      supportForYourJourney: {
        title: "How We Support Your Journey",
        description:
          "Our tailored approach ensures that you receive all the support you need to succeed in mastering Japanese.",
        supportDetails: [
          {
            title: "Tailored Learning Plan",
            description:
              "Customized schedules and lesson plans that align with your goals.",
          },
          {
            title: "Internship Support",
            description:
              "Gain practical experience through internships with Japanese-speaking firms.",
          },
          {
            title: "Certification",
            description:
              "Receive an industry-recognized Japanese language certification after completing the course.",
          },
          {
            title: "Job Placement Assistance",
            description:
              "We offer job support for up to 1 year after course completion to help you secure roles in Japan and beyond.",
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
        "Embark on your journey to mastering the English language with our comprehensive IELTS course designed to elevate your skills and confidence.",
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
              "Learn from industry leaders with extensive experience in language training and soft skills enhancement.",
          },
          {
            title: "Tailored Curriculum",
            description:
              "Our course content is customized to meet your unique learning needs, ensuring maximum engagement and effectiveness.",
          },
          {
            title: "Flexible Learning Options",
            description:
              "Choose from various course levels and formats, whether you prefer online, offline, or hybrid classes.",
          },
        ],
      },
      courseLevels: {
        title: "Course Levels We Offer",
        description:
          "Our structured levels cater to learners at each stage of their English language journey.",
        levels: [
          {
            level: "Beginner Level (A1-A2)",
            description:
              "Introduction to basic English language skills, vocabulary, and grammar.",
          },
          {
            level: "Intermediate Level (B1-B2)",
            description:
              "Enhance your speaking, writing, and comprehension skills for everyday and professional contexts.",
          },
          {
            level: "Advanced Level (C1-C2)",
            description:
              "Master complex language structures and refine your proficiency for academic and professional success.",
          },
        ],
      },
      keyFeatures: {
        title: "Key Features of the Course",
        description:
          "Our course offers unique features designed to boost your preparation, engagement, and results.",
        features: [
          {
            title: "FREE Consultation",
            description:
              "Discuss your goals and get personalized course recommendations.",
          },
          {
            title: "Practice Tests",
            description:
              "Regular mock tests to assess your progress and improve test-taking strategies.",
          },
          {
            title: "Personalized Feedback",
            description:
              "One-on-one sessions with trainers to enhance specific areas of improvement.",
          },
          {
            title: "Study Material",
            description:
              "Access to a wealth of resources, including practice exercises, video content, and more.",
          },
        ],
      },
      careerAndLearningBenefits: {
        title: "Career & Learning Benefits",
        description:
          "Gain skills and credentials to open new educational and career opportunities worldwide.",
        benefits: [
          {
            title: "Global Opportunities",
            description:
              "Enhance your employability in international job markets where English is the primary language.",
          },
          {
            title: "Higher Education Access",
            description:
              "Meet the language requirements for universities worldwide, particularly in the UK, Australia, and Canada.",
          },
          {
            title: "Skill Development",
            description:
              "Improve your communication skills, critical thinking, and cultural awareness—essential for personal and professional growth.",
          },
        ],
      },
      whyLearn: {
        title: "Why Learn IELTS?",
        description:
          "IELTS is a globally recognized certification that proves your English proficiency, boosting confidence and opening doors to study, travel, and career advancement.",
        benefits: [
          {
            title: "Recognized Certification",
            description:
              "IELTS is accepted by thousands of institutions globally, serving as proof of your English proficiency.",
          },
          {
            title: "Boost Your Confidence",
            description:
              "Gain the skills and confidence to communicate effectively in both academic and professional settings.",
          },
          {
            title: "Broaden Your Horizons",
            description:
              "Open doors to new opportunities in education, travel, and career advancement.",
          },
        ],
      },
      supportForYourJourney: {
        title: "How We Support Your Journey",
        description:
          "Our support system ensures ongoing guidance, mentorship, and community engagement.",
        supportDetails: [
          {
            title: "Dedicated Mentorship",
            description:
              "Benefit from the guidance of our experienced trainers who are committed to your success.",
          },
          {
            title: "Community Support",
            description:
              "Join a vibrant community of learners and engage in discussions and activities that foster collaboration.",
          },
          {
            title: "Continuous Improvement",
            description:
              "We offer ongoing support and resources even after you complete the course.",
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
        <title>Language Training</title>
      </Helmet>
      <BannerSection title={"Language Training"}/>
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

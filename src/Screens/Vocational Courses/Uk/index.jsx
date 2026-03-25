import React from "react";
import AestheticCoursesLogo from "../../../assets/Vocational/Aesthetics.jpg";
import AdvancedAestheticCoursesLogo from "../../../assets/Vocational/Advancedsesthetics.png";
import BeautyLogo from "../../../assets/Vocational/Advancedbeauty.jpg";
import BodyMassageLogo from "../../../assets/Vocational/Body-Massage.jpg";
import BodyMassageWithAccessoriesLogo from "../../../assets/Vocational/Body-Massage-with-Accessories.png";
import BodyElectricalsLogo from "../../../assets/Vocational/Body-Electricals-Courses.png";
import BodyTreatmentLogo from "../../../assets/Vocational/Body-Treatment.jpg";
import LashCoursesLogo from "../../../assets/Vocational/Eyelash.jpg";
import MakeupCoursesLogo from "../../../assets/Vocational/Make-Up.jpg";
import BrowCoursesLogo from "../../../assets/Vocational/Eyebrow.jpg";
import FacialMassageLogo from "../../../assets/Vocational/Facial-Massage.jpg";
import FacialTreatmentLogo from "../../../assets/Vocational/Facial-Treatment.jpg";
import HairCoursesLogo from "../../../assets/Vocational/Hair.jpg";
import HairRemovalLogo from "../../../assets/Vocational/Hair-Removal.jpg";
import NaturalNailLogo from "../../../assets/Vocational/Natural-Nail-Courses.png";
import NailExtensionLogo from "../../../assets/Vocational/Nails-extension.jpg";
import SPMUCoursesLogo from "../../../assets/Vocational/Semi-Permanent-Make-Up-SPMU.png";
import HolisticCoursesLogo from "../../../assets/Vocational/Holistic.jpg";
import ReflexologyMassageLogo from "../../../assets/Vocational/Reflexology-Massage-Courses.png";
import TanningCoursesLogo from "../../../assets/Vocational/Tanning.jpg";
import Shape1 from "../../../assets/Images/br_shape1.png";
import Shape2 from "../../../assets/Images/br_shape2.png";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/Vocational/banner.jpg";
import BannerImg2 from "../../../assets/Vocational/banner2.jpg";
import HeroIMG from "../../../assets/Images/hero_bg.png";
import HeroIMG2 from "../../../assets/Vocational/hero.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const data = {
  title: "Transform Your Career with UK Vocational Courses",
  description:
    "Take the next step in your professional journey! Our industry-leading vocational courses in the UK offer hands-on training and recognized certifications, designed to help you succeed in the beauty, wellness, and holistic industries.",
  course_categories: [
    {
      category: "Aesthetics & Beauty Courses",
      subcategories: [
        {
          subcategory: "Aesthetics Courses",
          image: AestheticCoursesLogo,
        },
        {
          subcategory: "Advanced Aesthetics Courses",
          image: AdvancedAestheticCoursesLogo,
        },
        {
          subcategory: "Advanced Beauty Courses",
          image: BeautyLogo,
        },
      ],
    },
    {
      category: "Body Treatment & Massage Courses",
      subcategories: [
        {
          subcategory: "Body Massage Courses",
          image: BodyMassageLogo,
        },
        {
          subcategory: "Body Massage with Accessories Courses",
          image: BodyMassageWithAccessoriesLogo,
        },
        {
          subcategory: "Body Electricals Courses",
          image: BodyElectricalsLogo,
        },
        {
          subcategory: "Body Treatment Courses",
          image: BodyTreatmentLogo,
        },
      ],
    },
    {
      category: "Lash, Brow & Make-Up Courses",
      subcategories: [
        {
          subcategory: "Lash Courses",
          image: LashCoursesLogo,
        },
        {
          subcategory: "Make-Up Courses",
          image: MakeupCoursesLogo,
        },
        {
          subcategory: "Brow Courses",
          image: BrowCoursesLogo,
        },
      ],
    },
    {
      category: "Facial & Hair Care Courses",
      subcategories: [
        {
          subcategory: "Facial Massage Courses",
          image: FacialMassageLogo,
        },
        {
          subcategory: "Facial Treatment Courses",
          image: FacialTreatmentLogo,
        },
        {
          subcategory: "Hair Courses",
          image: HairCoursesLogo,
        },
        {
          subcategory: "Hair Removal Courses",
          image: HairRemovalLogo,
        },
      ],
    },
    {
      category: "Nail & Semi-Permanent Make-Up (SPMU) Courses",
      subcategories: [
        {
          subcategory: "Natural Nail Courses",
          image: NaturalNailLogo,
        },
        {
          subcategory: "Nail Extension Courses",
          image: NailExtensionLogo,
        },
        {
          subcategory: "Semi-Permanent Make-Up (SPMU) Courses",
          image: SPMUCoursesLogo,
        },
      ],
    },
    {
      category: "Holistic & Reflexology Courses",
      subcategories: [
        {
          subcategory: "Holistic Courses",
          image: HolisticCoursesLogo,
        },
        {
          subcategory: "Reflexology Massage Courses",
          image: ReflexologyMassageLogo,
        },
      ],
    },
    {
      category: "Tanning Courses",
      subcategories: [
        {
          subcategory: "Tanning Courses",
          image: TanningCoursesLogo,
        },
      ],
    },
  ],
  why_choose_us: {
    title: "Why Choose Our Vocational Courses?",
    reasons: [
      {
        title: "Job-Ready Skills",
        description:
          "Gain job-ready skills through practical, real-world training programs.",
      },
      {
        title: "Fast-Track Your Career",
        description:
          "Accelerate growth with fast-track career courses for quick employment.",
      },
      {
        title: "Industry-Recognized Certifications",
        description: "Earn UK accredited certifications valued by global employers.",
      },
      {
        title: "Flexible Learning Options",
        description:
          "Choose flexible learning options including online, part-time, or full-time.",
      },
      {
        title: "Expert Tutors",
        description:
          " Learn from industry expert trainers with real-world experience.",
      },
      {
        title: "Comprehensive Career Support",
        description:
          "Access career support services including CV and interview preparation.",
      },
    ],
  },

  student_work_details: {
    question: "Work While Studying in the UK",
    answer:
      "Balance studies with income using UK student work rights during your course.",
    work_options: [
      {
        title: "Part-Time Work",
        description:
          " Work legally with part-time jobs UK students up to 20 hours weekly.",
      },
      {
        title: "Full-Time Work",
        description:
          "Earn more through full-time work UK students during holidays and official breaks.",
      },
    ],
  },
};

const VocationalCoursesUK = () => {
  return (
    <section>
      <Helmet>
        <title>Vocational Courses in UK</title>
      </Helmet>
      <section
        className="min-h-[350px] font-Jakarta flex flex-col items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url(${BannerImg})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[138px] w-full flex flex-row items-center justify-center relative">
          <div className="container w-[90%] z-10">
            <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]  font-bold text-left text-white capitalize">
              {" "}
              Vocational Courses in the UK <br /> with Benchmark Education
            </h2>
            

            <ul className="flex flex-row space-x-2 h-fit py-2 items-center bg-white rounded-md capitalize w-fit px-5 font-semibold ">
              <Link to={"/"}>Home /</Link>
              <a>Vocational Courses in UK</a>
            </ul>
          </div>

          <div className="absolute inset-0 w-[95%] flex flex-row justify-between">
            <div className="animate-zoomin">
              <img src={Shape1} alt="" />
            </div>
            <div className="flex flex-row w-[200px] relative animate-zoomin">
              <img src={Shape2} alt="" />
              <div className="absolute flex flex-row justify-between inset-0 space-y-1">
                <div className="aboslute  bottom-0 w-[40px] h-[40px] bg-white rounded-full"></div>
                <div className="w-[80px]  h-[80px] bg-white/10 lg:bg-white md:bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] flex flex-col items-center justify-center ">
        <div className=" w-[90%] h-full font-Jakarta grid grid-cols-1 lg:grid-cols-2 place-items-center ">
          <div className="flex flex-col space-y-5">
            <p className="font-bold text-[16px] animate-fadein text-center lg:text-left text-primary">
              Advance Your Career with UK Vocational Courses
            </p>
            <motion.p
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="text-center lg:text-left xl:text-left md:text-left text-[1.3rem]  w-full  leading-snug "
            >
             Gain in-demand skills through UK vocational courses designed for real-world success.
             Our vocational training UK programs offer practical learning, recognized certifications,
             and strong career opportunities in growing global industries.
            </motion.p>
          </div>
          <div className="h-full w-full ">
            <img
              src={HeroIMG2}
              alt=""
              className="h-full w-full object-contain "
            />
          </div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Explore
            <span className="text-text"> Our Course Categories</span>
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            Explore top beauty and wellness courses with career-focused course categories designed for global opportunities.
          </p>
          {data.course_categories.map((obj, index) => (
            <div className="flex flex-col gap-10 items-center w-full font-Jakarta cursor-pointer py-5">
              <h2 className="text-[1.3rem] font-semibold text-center w-full ">
                {obj.category}
              </h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5  w-full">
                {obj.subcategories.map((items) => (
                  <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    class="w-[350px] rounded-xl overflow-hidden shadow-lg group hover:shadow-primary/25"
                  >
                    <img
                      class="w-full h-full object-cover"
                      src={items.image}
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <h4 class="font-bold text-[1rem] text-center mb-2 group-hover:text-primary">
                        {items.subcategory}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              <hr className="w-full my-10 border-2" />
            </div>
          ))}
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Study in the UK with Career Opportunities
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            Build your future with UK study visa support and clear pathways to global careers.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:h-[250px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
            >
              <div className="flex flex-col items-center space-y-5">
                <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                <h3 className="font-bold">Post-Study Work Opportunities</h3>
                <p>
                  Stay longer with the Graduate Route visa, gaining UK work experience after completing your course.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:h-[250px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
            >
              <div className="flex flex-col items-center space-y-5">
                <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                <h3 className="font-bold">Skilled Worker Visa</h3>
                <p>
                  Qualify for jobs and apply through the Skilled Worker visa, opening doors to long-term UK careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            {data.why_choose_us.title}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-full">
            {data.why_choose_us.reasons.map((obj, index) => (
              <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="lg:h-[250px] h-auto w-full px-5 py-7 border rounded-lg shadow-lg  flex flex-col items-start justify-center"
              >
                <div className="flex flex-col items-center space-y-5">
                  <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                  <h3 className="font-bold text-center">{obj.title}</h3>
                  <p className="text-center">{obj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            {data.student_work_details.question}
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            {data.student_work_details.answer}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 w-full">
            {data.student_work_details.work_options.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="lg:h-[150px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center space-y-5">
                  <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default VocationalCoursesUK;

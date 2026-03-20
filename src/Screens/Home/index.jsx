import React, { useEffect, useRef, useState } from "react";
import {
  BoltIcon,
  CheckIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  GlobeEuropeAfricaIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  PencilIcon,
  CheckCircleIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
  LanguageIcon,
  PlayCircleIcon,
  PauseCircleIcon,
} from "@heroicons/react/24/solid";
import HeroIMG from "../../assets/Images/bg.webp";
import bannermobile1 from "../../assets/hero/bannerformobile copy.webp";
import bannermobile2 from "../../assets/hero/bannerformobile.webp";
import bannermobile3 from "../../assets/hero/bannerformobileBVoc.webp";
import bannermobile4 from "../../assets/hero/bannerformobiledigitalmarketing.webp";
import bannermobile5 from "../../assets/hero/mbamobile.webp";


import banner1 from "../../assets/hero/banner 1.webp";
import banner2 from "../../assets/hero/banner 2nursing entry.webp";
import banner3 from "../../assets/hero/banner bvoc.webp";
import banner4 from "../../assets/hero/banner digital.webp";
import banner5 from "../../assets/hero/banner MBA Banner.webp";
import partner1 from "../../assets/Images/partner1.webp";
import partner2 from "../../assets/Images/partner2.webp";
import partner3 from "../../assets/Images/partner3.webp";
import partner4 from "../../assets/Images/partner4.webp";
import partner5 from "../../assets/Images/partner5.webp";
// import partner6 from "../../assets/Images/img_06.png";
import ServiceBG from "../../assets/Images/service_bg.png";
import VisaLady from "../../assets/Images/17.webp";
import AboutImg from "../../assets/Images/about_img.png";
import CounterBG from "../../assets/Images/14.webp";
import ChildDev from "../../assets/Images/childdev.webp";
import CivilEng from "../../assets/Images/civileng.webp";
import ComputerSci from "../../assets/Images/cs.webp";
import Cyber from "../../assets/Images/cyber.webp";
import DataScience from "../../assets/Images/DataScience.webp";
import Dental from "../../assets/Images/dental.webp";
import EventMarket from "../../assets/Images/eventmarket.webp";
import Film from "../../assets/Images/film.webp";
import DGCyber from "../../assets/Images/dgcyber.webp";
import Finance from "../../assets/Images/finance.webp";
import ForigenInvesti from "../../assets/Images/forigninves.webp";
import GameDev from "../../assets/Images/gamedev.webp";
import HealthInsp from "../../assets/Images/healthinspec.webp";
import Nursing from "../../assets/Images/nursing.webp";
import AthletteNursing from "../../assets/Images/athletenurs.webp";
import farming from "../../assets/Images/farm.webp";
import AGBusiness from "../../assets/Images/agbusiness.webp";
import Architec from "../../assets/Images/archi.webp";
import ACFI from "../../assets/Images/Ac&fi.webp";
import AutoRobot from "../../assets/Images/autorobo.webp";
import Bephsy from "../../assets/Images/bepshy.webp";
import BioInfo from "../../assets/Images/bioinfo.webp";
import BioTech from "../../assets/Images/biotech.webp";
import Hearing from "../../assets/Images/hearinginstr.webp";
import HospitalUnit from "../../assets/Images/hospitunit.webp";
import HrMgmt from "../../assets/Images/hrmgmt.webp";
import InterBusiness from "../../assets/Images/interbusimgmt.webp";
import C1 from "../../assets/Images/C1.svg";
import C2 from "../../assets/Images/C2.svg";
import C3 from "../../assets/Images/C3.svg";
import C4 from "../../assets/Images/C4.svg";
import T1 from "../../assets/Images/praveena.webp";
import T2 from "../../assets/Images/MitaliSaraswat.webp";
import T3 from "../../assets/Images/Benny.webp";
import T4 from "../../assets/Images/Noori.webp";
import ServiceStep from "../../assets/Images/serviceStep.png";
import CourseBanner from "../../assets/Images/coursebanner.webp";
import CountUp from "react-countup";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FQIMG from "../../assets/Images/faq_img.png";
import AccordionItem from "../../Components/Accordian";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import CounsellingForm from "../../Components/CounsellingForm";
import {
  BookOpenIcon,
  DocumentArrowUpIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import {
  button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { gql, useQuery } from "@apollo/client";
import CountryFilter from "../../Components/CountryFilter";
import EventSection from "../../Components/Events";
import gsap from "gsap";
import DigitalMarketingAcdmy from '../../assets/Images/DigitalMarketingAcdmy.jpg'
import StudyAbroadImg3 from "../../assets/Images/bg5.jpg";
import digitalMarketingImg from "../../assets/Images/digitalMarketingImg.webp";
import digitalMarketingImgBvoc from "../../assets/hero/B.Voc.webp";
import admission from "../../assets/Services/admission.webp";
import EduJobFair from '../../assets/Images/EduJobFair.svg'
import CourseSlider from "./CourseSlider";
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

const Home = () => {
  let sliderRef = useRef(null);
  const boxRef = useRef(null); // Added useRef for boxRef
  const PatnersImg = [partner1, partner2, partner3, partner4, partner5];

  const visaData = [
    {
      type: "Career & Course Guidance",
      description:
        "Get expert guidance to choose the right course and career path based on interests, skills, and long-term goals.",
      icon: AcademicCapIcon,
      bgColor: "bg-[#1D4ED8]", // Blue for career and course guidance
    },
    {
      type: "SOP Review & Counseling",
      description:
        "Receive professional support to create a strong Statement of Purpose that clearly presents achievements, goals, and motivations for university admission.",
      icon: PencilIcon,
      bgColor: "bg-[#D97706]", // Orange for creative writing
    },
    {
      type: "Language Training",
      description:
        "Prepare for IELTS and UKVI exams with personalized training, mock tests, speaking practice, and detailed feedback to improve English proficiency.",
      icon: LanguageIcon,
      bgColor: "bg-[#000]", // Orange for creative writing
    },
    {
      type: "Admission to Top Global Universities",
      description:
        "Get guidance for applying to globally recognized universities known for academic excellence, diverse programs, and strong career opportunities.",
      icon: GlobeAltIcon,
      bgColor: "bg-[#10B981]", // Green for opportunities worldwide
    },
    {
      type: "Scholarship & Financial Aid Guidance",
      description:
        "Explore scholarship opportunities and financial aid options with expert guidance to make international education more affordable and accessible.",
      icon: CurrencyDollarIcon,
      bgColor: "bg-[#F59E0B]", // Gold for financial aid and success
    },
    {
      type: "Complete Admission Assistance",
      description:
        "Receive end-to-end admission support, including university selection, application preparation, document review, and submission for a smooth process.",
      icon: CheckCircleIcon,
      bgColor: "bg-[#059669]", // Green for support and approval
    },
    {
      type: "Visa & Spouse Visa Support",
      description:
        "Get expert guidance for student visa and spouse visa applications, ensuring proper documentation and a smoother approval process.",
      icon: IdentificationIcon,
      bgColor: "bg-[#7C3AED]", // Purple for official processes
    },
    {
      type: "Educational Loan Assistance",
      description:
        "Access education loan support through trusted banking partners with guidance on documentation, eligibility, and quick processing.",
      icon: BanknotesIcon,
      bgColor: "bg-[#22D3EE]", // Teal for financial services
    },
    {
      type: "Travel & Accommodation Support",
      description:
        " Receive assistance with flight bookings and accommodation arrangements to ensure a comfortable and hassle-free transition abroad.",
      icon: PaperAirplaneIcon,
      bgColor: "bg-[#EA580C]", // Orange for travel and logistics
    },
  ];

  const stepsData = [
    {
      step: 1,
      title: "Study Abroad Adventures",
      description:
        "Explore diverse international study programs across Europe, Asia, Australia, New Zealand, the USA, and Canada for academic and cultural growth.",
      bgColor: "bg-[#897CB5]",
    },
    {
      step: 2,
      title: "Tailored Educational Consultancy",
      description:
        "Receive expert admission consultancy and academic planning, personalized to help you select the best universities and career paths.",
      bgColor: "bg-primary",
    },
    {
      step: 3,
      title: "Top-Tier Professional Training",
      description:
        "Advance your career with premium nursing courses and professional training in healthcare, delivered by our trusted partner, Amico Care.",
      bgColor: "bg-secondary",
    },
    {
      step: 4,
      title: "Institutional Boost",
      description:
        "Enhance schools and colleges with curriculum development support, accreditation guidance, and strategic planning for educational excellence.",
      bgColor: "bg-[#FFBD0F]",
    },
    {
      step: 5,
      title: "Insightful Market Research",
      description:
        "Stay competitive with education market insights, trends, and data analysis to drive continuous improvement and informed decision-making.",
      bgColor: "bg-[#897CB5]",
    },
  ];

  const counterData = [
    {
      number: "10",
      icon: C1,
      "bg-color": "#fe6c3f1a",
      border: "#FE6C3F",
      unit: "+",
      description: "Experienced education consultants guiding careers",
    },
    {
      number: "50",
      icon: C3,
      "bg-color": "#1495f81a",
      unit: "+",
      border: "#0091FF",
      description: "Collaborated with top educational institutions",
    },
    {
      number: "500",
      icon: C2,
      "bg-color": "#00CC991A",
      border: "#00CC99",
      unit: "+",
      description: "Provided study abroad consultations",
    },
    {
      number: "100",
      icon: C4,
      "bg-color": "#FFBB0F1A",
      border: "#FFBD0F",
      unit: "+",
      description: "Delivered career counselling sessions",
    },
  ];

  const TeamData = [
    {
      id: 1,
      name: "Praveena Nair",
      role: "Lead Trainer – Verbal Abilities & Soft Skills",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      aboutdescription1:
        "Praveena Nair comes with a rich experience into training, spanning across a decade in areas of language enhancement and Soft Skills, for students, teachers and corporates alike. Given her passion for the English language and teaching, Praveena holds a TKT (Teaching Knowledge Test) certification from Cambridge Language Assessment, a division of Cambridge University and is a Speaking Interlocutor for OET (Occupational English Test).  ",
      aboutdescription2:
        "Praveena brings to the table a vast experience that blends the best of both the corporate and training fields with an impressive hands-on-experience into client engagement, recruitment and training. She has delivered a vast number of engaging and interactive sessions on language enhancement, corporate etiquette, soft skills, workplace etiquette and business communication. Praveena has been instrumental in delivering sessions for a diverse audience ranging from Under graduate students to management students to teachers to corporate professionals on a myriad of topics.",
      aboutdescription3:
        "In recognition of her passion for training, Praveena has been empaneled with the Kerala Knowledge Economy Mission (KKEM), a state government initiative, as a Personality Development Trainer and SSK (Samagra Siksha Kerala), also a state government initiative to empower School Heads.",
      aboutdescription4:
        "Praveena has also been a part of an EdTech Startup where she enjoyed conducting webinars, presentations and expos for school students to drive home the importance of robotic education right from the formative years mapped to STEAM based learning and SDGs. This journey was purely driven by a sense of promoting a scientific temper among young minds, while ensuring that learning was holistic, fun-filled, embedded and lifelong. Praveena also has a great love for writing and has contributed effectively to blogs and content development as a part of her association with the EdTech startup.",
      aboutdescription5:
        "Praveena has a good understanding of different work cultures and the power of collaboration, having worked with people from different nationalities and walks of life. She has a rich experience of over two decades in India, UAE and Kuwait. <br/> Given her spare time, Praveena enjoys training students aspiring to write their IELTS/GRE/CAT exams or seeking to improve their level of communicative English. Praveena aspires to inspire young learners and teachers through fun-filled, interactive and engaging sessions that focus on lifelong learning, empathy, inclusiveness, creativity and a deep sense of responsibility.",
      image: T1,
    },
    {
      id: 3,
      name: "Dr Benny Peter",
      role: "Consumer Psychologist and Leading Counsellor",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      image: T3,
    },
    {
      id: 4,
      name: "Noori P Rafeek ",
      role: "Advisor and Mentor Development of Teachers & Students",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      image: T4,
    },
  ];



  const testimonialQuery = gql`
    query Testimonials {
      testimonials {
        title
        description
        rating
        video {
          url
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(testimonialQuery);

  const [currentVideoPlayingIndex, setCurrentVideoPlayingIndex] =
    useState(null);

  const handleEnrollClick = () => {
    window.location.href = "/digital-marketing-academy";
  };

  const [videoRefs, setVideoRefs] = useState([]);

  // useEffect(() => {
  //   videoRefs.forEach((video, index) => {
  //     if (index !== currentVideoPlayingIndex && video) {
  //       video.pause(); // Pause all videos that are not currently playing
  //     }
  //   });
  // }, [currentVideoPlayingIndex, videoRefs]);

  const handleVideoPlay = (index) => {
    // Pause the currently playing video (if any)

    if (currentVideoPlayingIndex !== null) {
      let currentVideo = document.getElementById(
        "testimonial" + currentVideoPlayingIndex
      );
      if (currentVideo) {
        currentVideo.pause();
      }
    }

    // Set the new video as the one playing
    setCurrentVideoPlayingIndex(index);
    let vid = document.getElementById("testimonial" + index);

    console.log(vid);

    // Play the new video
    vid.play();
  };

  const [faq, setFaq] = useState([
    {
      id: 1,
      question:
        "What is the process for applying through Benchmark Education?",
      answer:
        "Our education consultants guide you through university admissions, document preparation, visa assistance, and application submission, ensuring a smooth and successful international education process.",
    },
    {
      id: 2,
      question: "How do I know which program is right for me?",
      answer:
        "Our career guidance experts assess academic interests, career goals, and preferences to recommend suitable higher education programs and universities matching long-term professional objectives.",
    },
    {
      id: 3,
      question: "Are your language training programs online or in-person?",
      answer:
        "Benchmark Education offers flexible IELTS coaching and English language training through online sessions and classroom learning for improved communication and global study preparation.",
    },
    {
      id: 4,
      question:
        "What are the eligibility criteria for your programs?",
      answer:
        " Eligibility depends on university admission requirements, academic qualifications, and English language proficiency. Our team provides guidance to meet necessary criteria for successful applications.",
    },
    {
      id: 5,
      question: "Do you provide career counseling services?",
      answer:
        "Yes, our career counselling services help identify strengths, explore career development opportunities, and choose the right professional courses for long-term career growth.",
    },
  ]);

  const handleClick = (clickedId) => {
    setFaq((prevItems) =>
      prevItems.map((item) =>
        item.id === clickedId
          ? { ...item, open: true }
          : { ...item, open: false }
      )
    );
  };

  const serviceData = [
    {
      title: "University Selection/Admission Guidance",
      description:
        "To select a country/university/college/course is a challenge to the students, we assist to overcome this. Our expert counsellors will help the students at every step. We have the facility for offline and online counselling system.",
      color_palette: {
        background: "#003049",
        text_color: "#00695C",
        border_color: "#004D40",
      },
      icon: AcademicCapIcon,
    },
    {
      title: "Profile Evaluation",
      description:
        "Once you submit your application, our expert team evaluates your profile on education, work experience, and objectives.",
      color_palette: {
        background: "#d62828",
        text_color: "#E65100",
        border_color: "#FF6D00",
      },
      icon: IdentificationIcon,
    },
    {
      title: "Test Preparation",
      description:
        "We provide quality language training and coaching, and give free tips and tricks to crack exams like IELTS, PTE, TOEFL, GRE, GMAT, SAT, NEXT. These are mandatory for the students to get admission in various universities.",
      color_palette: {
        background: "#f77f00",
        text_color: "#6A1B9A",
        border_color: "#8E24AA",
      },
      icon: BookOpenIcon,
    },
    {
      title: "Application, Documentation and SOP",
      description:
        "Our expert team checks every application and document before submitting. We assist you in every step while preparing these documents.",
      color_palette: {
        background: "#fcbf49",
        text_color: "#388E3C",
        border_color: "#66BB6A",
      },
      icon: DocumentArrowUpIcon,
    },
  ];

  const courseList = [
    {
      id: 1,
      name: "Accounting and Finance",
      image: ACFI,
    },
    {
      id: 2,
      name: "Adult Nursing",
      image: Nursing,
    },
    {
      id: 3,
      name: "Ag-Business",
      image: AGBusiness,
    },
    {
      id: 4,
      name: "Applied Mathematics and Statistics",
      image: farming,
    },
    {
      id: 5,
      name: "Architecture Science",
      image: Architec,
    },
    {
      id: 6,
      name: "Athlete Therapy",
      image: AthletteNursing,
    },
    {
      id: 7,
      name: "Automation and Robotics",
      image: AutoRobot,
    },
    {
      id: 8,
      name: "Behavioural Psychology",
      image: Bephsy,
    },
    {
      id: 9,
      name: "Bio-Informatics",
      image: BioInfo,
    },
    {
      id: 10,
      name: "Biotechnology",
      image: BioTech,
    },
    {
      id: 11,
      name: "Child Development",
      image: ChildDev,
    },
    {
      id: 12,
      name: "Civil Engineering",
      image: CivilEng,
    },
    {
      id: 13,
      name: "Computer Science",
      image: ComputerSci,
    },
    {
      id: 14,
      name: "Construction and Project Management",
      image: CourseBanner,
    },
    {
      id: 15,
      name: "Cyber Security",
      image: Cyber,
    },
    {
      id: 16,
      name: "Data Science and Analytics",
      image: DataScience,
    },
    {
      id: 17,
      name: "Dental Hygiene",
      image: Dental,
    },
    {
      id: 18,
      name: "Digital Business Management",
      image: CourseBanner,
    },
    {
      id: 19,
      name: "Digital Forensics and Cyber Security",
      image: DGCyber,
    },
    {
      id: 20,
      name: "Environmental Health Inspector",
      image: HealthInsp,
    },
    {
      id: 21,
      name: "Event Marketing",
      image: EventMarket,
    },
    {
      id: 22,
      name: "Film and Media Studies",
      image: Film,
    },
    {
      id: 23,
      name: "Financial Planning",
      image: Finance,
    },
    {
      id: 24,
      name: "Forensic Investigation",
      image: ForigenInvesti,
    },
    {
      id: 25,
      name: "Game Development",
      image: GameDev,
    },
    {
      id: 26,
      name: "Hearing Instrument Specialist",
      image: Hearing,
    },
    {
      id: 27,
      name: "Hospital Unit Clerk",
      image: HospitalUnit,
    },
    {
      id: 28,
      name: "Human Resource Management",
      image: HrMgmt,
    },
    {
      id: 29,
      name: "International Business Management",
      image: InterBusiness,
    },
    {
      id: 30,
      name: "Management Engineering",
      image: CourseBanner,
    },
    {
      id: 31,
      name: "Marketing",
      image: EventMarket,
    },
    {
      id: 32,
      name: "Mathematics",
      image: CourseBanner,
    },
    {
      id: 33,
      name: "Master of Business Administration",
      image: CourseBanner,
    },
    {
      id: 34,
      name: "Mechanical Engineering",
      image: CourseBanner,
    },
    {
      id: 35,
      name: "Music Education",
      image: CourseBanner,
    },
    {
      id: 36,
      name: "Nano Science",
      image: CourseBanner,
    },
    {
      id: 37,
      name: "Personal Support Worker",
      image: CourseBanner,
    },
    {
      id: 38,
      name: "Pharmacy Technician",
      image: AthletteNursing,
    },
    {
      id: 39,
      name: "Print Media",
      image: Film,
    },
    {
      id: 40,
      name: "Public Health",
      image: CourseBanner,
    },
    {
      id: 41,
      name: "Sculpture",
      image: CourseBanner,
    },
    {
      id: 42,
      name: "Social Service Worker",
      image: CourseBanner,
    },
    {
      id: 43,
      name: "Software Engineering",
      image: ComputerSci,
    },
    {
      id: 44,
      name: "System Design Engineering",
      image: CourseBanner,
    },
    {
      id: 45,
      name: "Therapist Assistant",
      image: Nursing,
    },
    {
      id: 46,
      name: "Workplace Health and Wellness",
      image: CourseBanner,
    },
    // [
    // "pagination": {
    //   "totalPages": 8,
    //   "perPage": 6,
    //   "totalItems": 46
    // ]
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    centerPadding: "60px",
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NextSlide = () => {
    sliderRef.slickNext();
  };
  const PreviousSlide = () => {
    sliderRef.slickPrev();
  };

  const [openform, setOpenForm] = useState(false);

  const handleFormOpen = () => {
    setOpenForm(true);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setOpenForm(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const itemsCoursePerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(courseList.length / itemsCoursePerPage);

  const getPaginatedCourseData = () => {
    const startIndex = (currentPage - 1) * itemsCoursePerPage;
    const endIndex = startIndex + itemsCoursePerPage;
    return courseList.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Define a function to handle the change event
    const handleMediaChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    // Add the listener to monitor screen width
    mediaQuery.addListener(handleMediaChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const section2 = useRef(null);

  // Function to scroll to the element
  const scrollToBottom = () => {
    section2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const heroSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    dots: false,
    pauseOnHover: false
  };

  useEffect(() => {
    gsap.to(boxRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  const images = isLargeScreen ? [banner1, banner2, banner3, banner4, banner5] : [bannermobile1, bannermobile2, bannermobile3, bannermobile4, bannermobile5]

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>BenchMark Educations</title>
      </Helmet>

      <CounsellingForm isopenForm={openform} setOpenForm={setOpenForm} />

      <section className="relative overflow-hidden h-auto md:min-h-[80vh] flex items-center justify-center box-border">
        <div className="w-full h-full">
          <Slider {...heroSettings}>
            {images?.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`banner ${idx + 1}`}
                className="banner-img object-contain"
              />
            ))}
          </Slider>
        </div>
      </section>

      <section style={{ margin: '4rem 0' }}>
        {/*  <p className="events-Upcomming"> OUR UPCOMING EVENT</p>

        <div className="jobFair-Box" ref={boxRef}>
          <img style={{width:'100%', height:'140px'}} src={EduJobFair}/>

          <p className="jobFair-Box-content">Mega Educational Job Fair <br/>With Spot Intakes and Admissions</p>

          <button className="apply-now-btn" onClick={() => window.open('https://forms.gle/AXTJSFqAS5WH8adG9', '_blank')}>Apply Now</button>
        </div> */}
      </section>
      <CourseSlider />

      <section className="my-16 w-full flex justify-center items-center bg-gradient-to-r from-[#fafafa] via-[#f3f4f6] to-[#e5e7eb] py-12 md:py-16">
        <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 font-Jakarta">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="relative w-full md:w-1/2 overflow-hidden shadow-xl group rounded-2xl"
          >
            <img
              src={digitalMarketingImg}
              alt="Digital Marketing Academy"
              className="w-full h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div

            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Diploma in Digital Marketing
            </h2>

            <p className="text-[16px] md:text-[18px] text-text leading-relaxed">
              Benchmark Education offers a comprehensive diploma in digital marketing designed to build practical skills in SEO, social media marketing, content marketing, and online advertising. Our digital marketing course focuses on real-world training, industry tools, and expert guidance to help students gain job-ready skills and grow confidently in today’s competitive digital marketing industry with hands-on learning and career-focused support.
            </p>

            <div className="flex flex-col space-y-3">
              <p className="text-[14px] md:text-[16px] text-text leading-relaxed font-medium">
                <span className="text-primary">New Add-ons:</span> Neuro Digital Marketing, Advanced Excel, and Web Development modules now available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
                <Link
                  to="/digital-marketing-academy"
                  className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-colors duration-300"
                >
                  Explore Course
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="my-16 w-full flex justify-center items-center bg-gradient-to-r from-[#fafafa] via-[#f3f4f6] to-[#e5e7eb] py-12 md:py-16">

        <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 font-Jakarta">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="relative w-full md:w-1/2 overflow-hidden shadow-xl group rounded-2xl"
          >
            <img
              src={digitalMarketingImgBvoc}
              alt="Digital Marketing Academy"
              className="w-full h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              B.Voc Digital Marketing Program
            </h2>

            <p className="text-[16px] md:text-[18px] text-text leading-relaxed">
              Build a future-ready career with our B.Voc digital marketing program designed for real-world learning. Gain hands-on experience through live digital marketing projects, along with a 3 month internship in first year and a 6 month internship in final year. This job-oriented digital marketing degree program equips you with in-demand skills and practical exposure to succeed in the industry.
            </p>

            <div className="flex flex-col space-y-3">
              <p className="text-[14px] md:text-[16px] text-text leading-relaxed font-medium">
                <span className="text-primary">New Add-ons:</span> Video Editing, Graphic Design, UI/UX Design, and Neuro Digital Marketing modules now available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
                <Link
                  to="/digital-marketing-academy"
                  className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-colors duration-300"
                >
                  Explore Course
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Abroad CTA Section */}
      <section className="my-16 w-full flex justify-center items-center bg-gradient-to-r from-blue-50 via-white to-purple-50 py-12 md:py-16">

        <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 font-Jakarta">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Study Abroad
            </h2>

            <p className="text-[16px] md:text-[18px] text-text leading-relaxed">
              Benchmark Education offers expert guidance for study abroad programs,
              helping individuals choose the right country, university, and course.
              From application support and documentation to visa assistance,
              every step is handled with professional care. With trusted advice and updated information,
              the process becomes simple and clear for those planning to pursue higher education in leading international destinations.

            </p>

            <div>
              <Link
                to="/study-abroad"
                className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-colors duration-300"
              >
                Explore Study Abroad
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            // style={{borderRadius:'0 20px 20px 0'}}
            className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src={StudyAbroadImg3}
              alt="Study Abroad"
              className="w-full h-[320px] md:h-[420px] object-cover "
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </div>
      </section>

      {/* Study In India CTA Section */}
      <section className="my-16 w-full flex justify-center items-center bg-gray-50 py-12 md:py-16">
        <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 font-Jakarta">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="relative w-full md:w-1/2 overflow-hidden shadow-xl group rounded-2xl"
          >
            <img
              src={admission}
              alt="Study in India"
              className="w-full h-[320px] md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Study in India
            </h2>

            <p className="text-[16px] md:text-[18px] text-text leading-relaxed">
              Benchmark Education offers reliable guidance for those looking to study in India,
              connecting learners with top universities and diverse academic programs.
              From selecting the right course to assisting with admissions and documentation,
              every stage is supported with expert advice.
              The focus is on making the process simple while ensuring access to quality education and strong career opportunities.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <Link
                to="/study-in-india"
                className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-colors duration-300"
              >
                MBA Courses
              </Link>

              <a
                href="https://nursingentry.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg text-base font-medium shadow-lg transition-colors duration-300"
              >
                Nursing Entry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        ref={section2}
        className="min-h-[40vh] bg-white flex flex-col items-center justify-center w-full text-[18px] text-text font-Jakarta font-medium space-y-10"
        id="section2"
      >
        <div className="flex flex-row space-x-2 items-center w-full justify-center">
          <hr className="w-[10%]  border-text " />
          <p className="text-center">
            Benchmark Education partners with top universities and institutions worldwide
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
                className={`group-hover:grayscale grayscale-0 opacity-50 group-hover:opacity-100 ${index === PatnersImg.length - 1 ? "w-[150px]" : "w-[120px]"
                  } h-[150px] object-contain `}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative font-Jakarta flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "40%" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="absolute h-[100%] right-0  max-h-[790px] z-0 rounded-lg bg-red-400 hidden lg:block md:block"
          style={{
            backgroundImage: `url(${VisaLady})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div
          className="bg-background w-full"
          style={{
            backgroundImage: `url(${ServiceBG})`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" w-full xl:w-1/2 lg:w-1/2 z-20 px-6 lg:px-16 md:px-16 h-full py-28">
            <motion.h2
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl  leading-snug font-semibold z-20 relative"
              style={{ lineHeight: 1.3, zIndex: 20 }}
            >
              Why Choose
              <span className="text-text"> Us? </span>
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 z-20 gap-5 my-5 font-Jakarta w-[90%]">
          {visaData.slice(0, 2).map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="col-span-1 lg:h-auto h-[430px] shadow-lg rounded-xl bg-white z-20 "
            >
              <div className="before:h-[160px] before:bg-[#f4f8fa] before:w-[70px] before:absolute before:-rotate-45 before:overflow-hidden before:-z-[1] before:-top-[39px] before:left-0 before:rounded-[35px] flex flex-col items-start justify-center relative p-[42px] overflow-hidden rounded-xl">
                <div className={`${visa.bgColor} p-3 rounded-full my-2`}>
                  <visa.icon className={`h-6 w-6 fill-white `} />
                </div>
                <div className="flex flex-col space-y-5">
                  <h4 className="text-[24px] font-semibold">{visa.type}</h4>
                  <p className="text-[16px] text-text">{visa.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="col-span-1 invisible"></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 z-20 gap-5 my-5 font-Jakarta w-[90%]">
          {visaData.slice(2).map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="col-span-1 lg:h-auto h-[430px]  shadow-lg rounded-xl bg-white z-20 "
            >
              <div className="before:h-[160px] before:bg-[#f4f8fa] before:w-[70px] before:absolute before:-rotate-45 before:overflow-hidden before:-z-[1] before:-top-[39px] before:left-0 before:rounded-[35px] flex flex-col items-start justify-center relative p-[42px] overflow-hidden rounded-xl">
                <div className={`${visa.bgColor} p-3 rounded-full my-2`}>
                  <visa.icon className={`h-6 w-6 fill-white stroke-none `} />
                </div>
                <div className="flex flex-col space-y-5">
                  <h4 className="text-[24px] font-semibold">{visa.type}</h4>
                  <p className="text-[16px] text-text">{visa.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundPosition: "right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] flex flex-col space-y-5">
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="lg:text-left xl:text-left md:text-left text-4xl text-center md:text-5xl  leading-snug font-semibold"
            style={{ lineHeight: 1.3 }}
          >
            Empowering Futures,
            <span className="text-text">Globally.</span>
          </motion.h2>
          <p className="text-[20px] animate-fadein text-text lg:w-[60%] md:w-1/2 text-center lg:text-left">
            We offer bespoke study abroad programs and expert consultancy to access top universities worldwide,
            ensuring smooth academic and career success..
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full lg:w-[90%]">
            {stepsData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="col-span-1 lg:h-auto shadow-lg rounded-xl bg-white z-20 "
              >
                <div className="before:h-[120px] before:bg-[#f4f8fa] before:w-[70px] before:absolute before:-rotate-45 before:overflow-hidden before:-z-[1] before:-top-[39px] before:left-0 before:rounded-[35px] flex flex-col items-start justify-center relative p-[22px] overflow-hidden rounded-xl">
                  <div
                    className={`${step.bgColor}  rounded-full p-3 text-white h-10 w-10 flex flex-col items-center justify-center `}
                  >
                    {step.step}
                  </div>
                  <div className="flex flex-col space-y-5 my-4">
                    <h4 className="text-[24px] font-semibold">{step.title}</h4>
                    <p className="text-[16px] text-text">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="min-h-screen flex flex-col items-center justify-center my-5"
        style={{
          backgroundImage: isLargeScreen ? `url(${CounterBG})` : "none",
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] h-full font-Jakarta flex flex-col space-y-8">
          <motion.h2
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="lg:text-left xl:text-left md:text-left text-4xl text-center md:text-5xl  leading-snug font-semibold"
            style={{ lineHeight: 1.3 }}
          >
            Our Journey to
            <span className="text-text"> Excellence</span>
          </motion.h2>
          <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-1 place-items-center gap-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2 w-full font-Jakarta gap-5 p-5 rounded-xl">
              {counterData.map((obj, index) => (
                <motion.div
                  initial={{ opacity: 0, translateX: -150 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  key={index}
                  className={`col-span-1 border-l-4  flex flex-row items-center space-x-5 px-2  bg-white hover:shadow-md `}
                  style={{ borderLeftColor: `${obj.border}` }}
                >
                  <div
                    className="w-fit p-5 rounded-full h-fit"
                    style={{ background: `${obj["bg-color"]}` }}
                  >
                    <img src={obj.icon} alt="icon.png" />
                  </div>
                  <div className="flex flex-col">
                    <motion.h4
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ ease: "easeInOut", duration: 0.8 }}
                      className="text-[35px] md:text-[45px] text-center lg:text-left xl:text-left md:text-left xl:text-[50px] lg:text-[50px] leading-snug font-semibold"
                    >
                      <CountUp startVal={0} end={obj.number} delay={2} />
                      {obj.unit}
                    </motion.h4>
                    <p className="lg:text-[18px] text-[14px] text-text">
                      {obj.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="h-full w-full ">
              {!isLargeScreen && (
                <img
                  src={CounterBG}
                  alt=""
                  className="h-full w-full object-contain "
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="h-full flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Overseas
            <span className="text-text"> Education Process</span>
          </motion.h2>
          <div className="lg:h-[500px] lg:w-[800px] md:w-[550px] w-[400px] ">
            <img
              src={ServiceStep}
              alt="step.png"
              className="h-full w-full object-contain"
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
            Our
            <span className="text-text"> Courses</span>
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            At Benchmark Education, we offer a wide range of professional courses and
            skill development programs designed for career growth.
            Our career-oriented courses equip learners with practical skills and industry-relevant knowledge.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center ">
            {getPaginatedCourseData().map((courses, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="col-span-1 w-[300px] lg:w-[380px] h-[200px] flex flex-col overflow-hidden justify-end items-center gap-5 shadow-lg rounded-xl bg-white z-20  "
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${courses.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col space-y-5 bg-white w-full items-center inset-0">
                    <h4 className="text-[16px] font-semibold text-center py-4">
                      {courses.name}
                    </h4>
                    {/* <p className="text-[16px] text-text">{service.description}</p> */}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-row gap-5 items-center justify-center">
            <button
              disabled={currentPage === 1}
              className={`${currentPage === 1
                ? "bg-gray-300 text-gray-100"
                : "bg-primary text-white"
                } px-5 py-1 rounded-lg  `}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            <p className={`text-[13px] font-medium`}>
              <span className="text-primary">{currentPage}</span>/{totalPage}
            </p>
            <button
              disabled={currentPage === totalPage}
              className={`${currentPage === totalPage
                ? "bg-gray-300 text-gray-100"
                : "bg-primary text-white"
                } px-5 py-1 rounded-lg  `}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section className="my-10 flex flex-col items-center justify-start ">
        <CountryFilter />
      </section>
      <section className=" min-h-screen flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] relative ">
          <div className="flex flex-col gap-5 bg-white z-10">
            <motion.h2
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="text-center text-4xl md:text-5xl w-full  leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Meet Our Expert
              <br />
              <span className="text-text"> Guidance Team</span>
            </motion.h2>
            <p className="text-text text-center text-[18px] animate-fadein ">
              Our experienced study abroad consultants provide personalized support,
              guiding students through international education and immigration processes
              to ensure a smooth journey toward global academic and career success.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly font-Jakarta gap-16 bg-background rounded-lg py-10 px-5 relative top-0 w-full">
            {TeamData.map((obj, index) => (
              // to={`/aboutus/${obj.name.replace(/\s+/g, "-").toLowerCase()}`}
              // // state={{ id: obj.id }}
              <Link key={obj.id}>
                <motion.div
                  initial={{ opacity: 0, translateY: 150 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="bg-white border shadow rounded-xl flex flex-col items-center justify-center space-y-2 py-1 relative group h-[375px] xl:max-w-[295px] px-5"
                >
                  <div className="h-[180px] w-[180px] rounded-full">
                    <img
                      src={obj.image}
                      alt="team.png"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <h5 className="text-[24px] font-semibold text-center">
                      {obj.name}
                    </h5>
                    <p className="text-[14px] text-text font-medium text-center">
                      {obj.role}
                    </p>
                  </div>
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="hidden group-hover:flex flex-col gap-2 absolute right-6 top-12 !z-10"
                  >
                    <motion.li
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 0.3 }}
                      className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer z-10"
                    >
                      <a
                        href={obj.twitter}
                        onClick={(e) => e.stopPropagation()} // Prevent Link propagation
                      >
                        <XIcon
                          fontSize="small"
                          sx={{ fontSize: 16 }}
                          className="text-xs hover:text-primary"
                        />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 0.6 }}
                      className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer z-30"
                    >
                      <a
                        href={obj.linkedin}
                        onClick={(e) => e.stopPropagation()} // Prevent Link propagation
                      >
                        <LinkedInIcon
                          fontSize="small"
                          sx={{ fontSize: 16 }}
                          className="text-xs hover:text-primary"
                        />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 0.9 }}
                      className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer z-30"
                    >
                      <a
                        href={obj.instagram}
                        onClick={(e) => e.stopPropagation()} // Prevent Link propagation
                      >
                        <FacebookIcon
                          fontSize="small"
                          sx={{ fontSize: 16 }}
                          className="text-xs hover:text-primary"
                        />
                      </a>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <EventSection /> */}
      {/* <section className="min-h-screen my-5 bg-background  flex flex-col items-center justify-center font-Jakarta py-10">
        <div className="w-[90%]  flex flex-col h-fit gap-10 ">
          <div className="flex flex-col space-y-10 ">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className=" text-4xl md:text-5xl text-center  leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Happy Clients Reflect on Their
              <span className="text-text"> Journey with Us</span>
            </motion.h2>
            <p className="text-text text-center text-[18px]">
              Our satisfied study abroad students share experiences exploring
              international education opportunities across 190+ countries worldwide.

            </p>
          </div>
          <div className="overflow-hidden flex flex-col gap-5">
            {loading && (
              <div className="text-center text-xl font-semibold text-primary h-[200px] grid place-items-center">
                <p>Loading</p>
              </div>
            )}
            {data?.testimonials?.length > 0 ? (
              <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
                {data.testimonials.map((obj, index) => (
                  <div
                    key={index} // Add a unique key for each child element
                    style={{ marginRight: 5 }}
                    className="bg-white md:h-[750px] lg:h-[580px] h-[550px] mx-2 w-[280px] rounded-2xl py-5 px-3 flex flex-col items-center space-y-3 !justify-between"
                  >
                    <div className="h-[50%] relative border-gray-800 w-full flex flex-col items-center justify-center rounded-lg group">
                      <ReactPlayer
                        url={`${graphqlBaseUrl}${obj.video.url}`}
                        playing={currentVideoPlayingIndex === index}
                        onPlay={() => setCurrentVideoPlayingIndex(index)}
                        onEnded={() => setCurrentVideoPlayingIndex(null)}
                        volume={1}
                        width={"100%"}
                        height={"100%"}
                      />
                      {currentVideoPlayingIndex === index ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 rounded-lg">
                          <button
                            onClick={() => setCurrentVideoPlayingIndex(null)}
                          >
                            <PauseCircleIcon className="!h-16 !w-20 !fill-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/50 opacity-100 overflow-hidden rounded-lg">
                          <button
                            onClick={() => setCurrentVideoPlayingIndex(index)}
                          >
                            <PlayCircleIcon className="!h-16 !w-20 !fill-white" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="h-[30%] flex flex-col items-center justify-center">
                      <p className="text-center text-[16px] text-gray-700">
                        {obj.description}
                      </p>
                    </div>
                    <div className="h-[20%] flex flex-col items-center justify-start space-y-3">
                      <Rating
                        name="half-rating-read"
                        defaultValue={obj.rating}
                        precision={0.5}
                        readOnly
                        sx={{ color: "#1A48DB" }}
                      />
                      <h5 className="font-semibold text-[17px] text-center">
                        {obj.title}{" "}
                      </h5>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="no-data text-center m">No data found</div>
            )}
            {
              data && (
                <div className="flex flex-row gap-5  items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, translateX: -50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    onClick={() => PreviousSlide()}
                    className="group p-3 bg-white rounded-full"
                  >
                    <ChevronLeftIcon className="h-7 w-7 fill-gray-300" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    onClick={() => NextSlide()}
                    className="group p-3 bg-white rounded-full"
                  >
                    <ChevronRightIcon className="h-7 w-7 fill-gray-300" />
                  </motion.button>
                </div>
              )
            }
          </div>
        </div>
      </section> */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-[90%] grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col justify-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl text-center  leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Frequently Asked
              <br />
              <span className="text-text">Questions</span>
            </motion.h2>
            <p className="text-[18px] animate-fadein text-text text-center lg:text-left lg:w-[80%] w-full">
              Find answers to common questions about our education consultancy services,
              international education, and professional training programs.

            </p>
            <img src={FQIMG} alt="" />
          </div>
          <div>
            {faq.map((item, index) => (
              <AccordionItem key={item.id} item={item} onClick={handleClick} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

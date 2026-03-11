import React from "react";
import Shape1 from "../../../assets/Images/br_shape1.png";
import Shape2 from "../../../assets/Images/br_shape2.png";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/Vocational/banner.jpg";
import BannerImg2 from "../../../assets/Vocational/banner2.jpg";
import HeroIMG from "../../../assets/Images/hero_bg.png";
import HeroIMG2 from "../../../assets/Vocational/banner3.jpg";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import FirstProductionTechImg from "../../../assets/VocationalFinland/productiontechnology.png";
import ProductionTechImg from "../../../assets/VocationalFinland/productiontechnology.png";
import FitterImg from "../../../assets/VocationalFinland/fitter.png";
import AutomationAssemblerImg from "../../../assets/VocationalFinland/automationassembler.png";
import MachinistImg from "../../../assets/VocationalFinland/machinist.png";
import PlaterWelderImg from "../../../assets/VocationalFinland/platewelder.png";
import BuildingConstructorImg from "../../../assets/VocationalFinland/buildingconstructor.png";
import VehicleMechanicImg from "../../../assets/VocationalFinland/vechiclemechanics.png";
import MechanicalEquipmentRepairerImg from "../../../assets/VocationalFinland/mechrepair.png";
import VehiclePainterImg from "../../../assets/VocationalFinland/vechiclepainter.png";
import CarSalesmanImg from "../../../assets/VocationalFinland/carsales.png";
import SparePartsSalesmanImg from "../../../assets/VocationalFinland/spareparts.png";
import MaintenanceTechnologyImg from "../../../assets/VocationalFinland/maintenancetechnology.png";

import TheatreTechnologyImg from "../../../assets/VocationalFinland/theatretechnology.png";
import MakeUpArtistImg from "../../../assets/VocationalFinland/makeupartist.png";
import MassageImg from "../../../assets/VocationalFinland/massage.png";
import SocialHealthCareImg from "../../../assets/VocationalFinland/socialandhealth.png";
import PracticalNurseImg from "../../../assets/VocationalFinland/practicalnurse.png";
import EquipmentMaintenanceImg from "../../../assets/VocationalFinland/equipmentmaintenance.png";
import CareForTheElderlyImg from "../../../assets/VocationalFinland/careeldery.png";
import MentalHealthWelfareImg from "../../../assets/VocationalFinland/mentalhealth.png";

// import VehicleMechanicImg from '../../../assets/VocationalFinland/vehicle_mechanic.png';
import PipeFitterImg from "../../../assets/VocationalFinland/pipefitter.png";
import VentilationFitterImg from "../../../assets/VocationalFinland/ventilationfiltter.png";
import RefrigerationFitterImg from "../../../assets/VocationalFinland/refrigeratorfilter.png";
import ConstructionSheetMetalWorkerImg from "../../../assets/VocationalFinland/constructionmetal.png";
import TechnicalInsulationFitterImg from "../../../assets/VocationalFinland/technicalinsulation.png";
import ElectricianImg from "../../../assets/VocationalFinland/electrician.png";
import AutomationTechnologyImg from "../../../assets/VocationalFinland/automationtechnology.png";

import MediaVisualExpressionImg from "../../../assets/VocationalFinland/mediaandvisual.png";
import LaboratoryAssistantImg from "../../../assets/VocationalFinland/labratoryasssistant.png";
import GameProductionImg from "../../../assets/VocationalFinland/gameproduction.png";
import ProcessOperatorImg from "../../../assets/VocationalFinland/processoperator.png";
import StageTheatreTechnologyImg from "../../../assets/VocationalFinland/stageandthetre.png";
import PhotographyImg from "../../../assets/VocationalFinland/photographer.png";
import MediaServicesImg from "../../../assets/VocationalFinland/mediaservices.png";
import EventTechnologyImg from "../../../assets/VocationalFinland/eventtechnology.png";

import HairdresserBarberImg from "../../../assets/VocationalFinland/hairdresser.png";
import BeautyConsultantImg from "../../../assets/VocationalFinland/beautyconsultant.png";
import CosmeticianImg from "../../../assets/VocationalFinland/cosmetical.png";
import TailorImg from "../../../assets/VocationalFinland/tailorer.png";
import FashionAssistantImg from "../../../assets/VocationalFinland/fashionassistant.png";
import SoftFurnishingsMakerImg from "../../../assets/VocationalFinland/softfurnishings.png";
import MillinerImg from "../../../assets/VocationalFinland/milliner.png";
import ClothingTextilesIndustryImg from "../../../assets/VocationalFinland/Clothingtextiles.png";

import DietaryCookImg from "../../../assets/VocationalFinland/dietarycook.png";
import IndustrialBakerImg from "../../../assets/VocationalFinland/indusbaker.png";
import RestaurantCookImg from "../../../assets/VocationalFinland/restaurentcook.png";
import TourismServiceAgentImg from "../../../assets/VocationalFinland/tourismservice.png";
import WaiterWaitressImg from "../../../assets/VocationalFinland/restaurentcook.png";
import HotelCateringImg from "../../../assets/VocationalFinland/restaurentcook.png";
import NatureInstructorImg from "../../../assets/VocationalFinland/natureinstructor.png";
import SiteFacilitiesOperativeImg from "../../../assets/VocationalFinland/sitefacilitiesoperative.png";

import ITSupportSpecialistImg from "../../../assets/VocationalFinland/ipsupport.png";
import SoftwareDeveloperImg from "../../../assets/VocationalFinland/softwaredeveloper.png";
import NetworkInstallerImg from "../../../assets/VocationalFinland/networkinstaller.png";
import ElectronicsAssemblerImg from "../../../assets/VocationalFinland/electronicsassembler.png";
import WelfareTechnologyInstallerImg from "../../../assets/VocationalFinland/welfare.png";
import TechnicalDesignImg from "../../../assets/VocationalFinland/technicaldesign.png";

import EntrepreneurshipImg from "../../../assets/VocationalFinland/Entrepreneurship.png";
import LeadershipBusinessManagementImg from "../../../assets/VocationalFinland/businessmgmt.png";
import LearningSupportAssistantImg from "../../../assets/VocationalFinland/learnsupport.png";
import DentalLaboratoryAssistantImg from "../../../assets/VocationalFinland/dentalassit.png";
import MedicalTechnicianImg from "../../../assets/VocationalFinland/medictechni.png";

const data = {
  title: "Elevate Your Career with Finland's Top Vocational Courses",
  description:
    "Discover the gateway to a brighter future! Our diverse vocational courses in Finland equip you with hands-on skills and internationally recognized qualifications in sectors such as business, engineering, health, and the arts. Whether you’re looking to fast-track your career or gain new expertise, Finland offers excellent opportunities for professional growth.",
  course_categories: [
    {
      category:
        "Business and Administration, Engineering, Manufacturing, and Construction",
      subcategories: [
        {
          subcategory: "First-Level Management in Production",
          image: FirstProductionTechImg,
        },
        { subcategory: "Production Technology", image: ProductionTechImg },
        { subcategory: "Fitter", image: FitterImg },
        { subcategory: "Automation Assembler", image: AutomationAssemblerImg },
        { subcategory: "Machinist", image: MachinistImg },
        { subcategory: "Plater-Welder", image: PlaterWelderImg },
        { subcategory: "Building Constructor", image: BuildingConstructorImg },
        { subcategory: "Vehicle Mechanic", image: VehicleMechanicImg },
        {
          subcategory: "Mechanical Equipment Repairer",
          image: MechanicalEquipmentRepairerImg,
        },
        { subcategory: "Vehicle Painter", image: VehiclePainterImg },
        { subcategory: "Car Salesman", image: CarSalesmanImg },
        { subcategory: "Spare Parts Salesman", image: SparePartsSalesmanImg },
        {
          subcategory: "Maintenance Technology",
          image: MaintenanceTechnologyImg,
        },
      ],
    },
    {
      category: "Health and Welfare, Arts and Humanities",
      subcategories: [
        { subcategory: "Theatre Technology", image: TheatreTechnologyImg },
        { subcategory: "Make-Up Artist", image: MakeUpArtistImg },
        { subcategory: "Massage", image: MassageImg },
        { subcategory: "Social and Health Care", image: SocialHealthCareImg },
        { subcategory: "Practical Nurse", image: PracticalNurseImg },
        {
          subcategory: "Equipment Maintenance",
          image: EquipmentMaintenanceImg,
        },
        { subcategory: "Care for the Elderly", image: CareForTheElderlyImg },
        {
          subcategory: "Mental Health and Welfare",
          image: MentalHealthWelfareImg,
        },
      ],
    },
    {
      category: "Engineering, Manufacturing, and Construction",
      subcategories: [
        { subcategory: "Vehicle Mechanic", image: VehicleMechanicImg },
        { subcategory: "Pipe Fitter", image: PipeFitterImg },
        { subcategory: "Ventilation Fitter", image: VentilationFitterImg },
        { subcategory: "Refrigeration Fitter", image: RefrigerationFitterImg },
        {
          subcategory: "Construction Sheet-Metal Worker",
          image: ConstructionSheetMetalWorkerImg,
        },
        {
          subcategory: "Technical Insulation Fitter",
          image: TechnicalInsulationFitterImg,
        },
        { subcategory: "Electrician", image: ElectricianImg },
        {
          subcategory: "Automation Technology",
          image: AutomationTechnologyImg,
        },
      ],
    },
    {
      category: "Arts and Humanities, Media, and Visual Expression",
      subcategories: [
        {
          subcategory: "Media & Visual Expression",
          image: MediaVisualExpressionImg,
        },
        { subcategory: "Laboratory Assistant", image: LaboratoryAssistantImg },
        { subcategory: "Game Production", image: GameProductionImg },
        { subcategory: "Process Operator", image: ProcessOperatorImg },
        {
          subcategory: "Stage and Theatre Technology",
          image: StageTheatreTechnologyImg,
        },
        { subcategory: "Photography", image: PhotographyImg },
        { subcategory: "Media Services", image: MediaServicesImg },
        { subcategory: "Event Technology", image: EventTechnologyImg },
      ],
    },
    {
      category: "Services, Fashion, Hair, and Beauty",
      subcategories: [
        { subcategory: "Hairdresser & Barber", image: HairdresserBarberImg },
        { subcategory: "Beauty Consultant", image: BeautyConsultantImg },
        { subcategory: "Cosmetician", image: CosmeticianImg },
        { subcategory: "Tailor", image: TailorImg },
        { subcategory: "Fashion Assistant", image: FashionAssistantImg },
        {
          subcategory: "Soft Furnishings Maker",
          image: SoftFurnishingsMakerImg,
        },
        { subcategory: "Milliner", image: MillinerImg },
        {
          subcategory: "Clothing and Textiles Industry",
          image: ClothingTextilesIndustryImg,
        },
      ],
    },
    {
      category:
        "Hospitality and Catering, Natural Sciences, and Customer Service",
      subcategories: [
        { subcategory: "Dietary Cook", image: DietaryCookImg },
        { subcategory: "Industrial Baker", image: IndustrialBakerImg },
        { subcategory: "Restaurant Cook", image: RestaurantCookImg },
        { subcategory: "Tourism Service Agent", image: TourismServiceAgentImg },
        { subcategory: "Waiter/Waitress", image: WaiterWaitressImg },
        { subcategory: "Hotel and Catering", image: HotelCateringImg },
        { subcategory: "Nature Instructor", image: NatureInstructorImg },
        {
          subcategory: "Site Facilities Operative",
          image: SiteFacilitiesOperativeImg,
        },
      ],
    },
    {
      category: "Information and Communication Technologies (ICT)",
      subcategories: [
        { subcategory: "IT Support Specialist", image: ITSupportSpecialistImg },
        { subcategory: "Software Developer", image: SoftwareDeveloperImg },
        { subcategory: "Network Installer", image: NetworkInstallerImg },
        {
          subcategory: "Electronics Assembler",
          image: ElectronicsAssemblerImg,
        },
        {
          subcategory: "Welfare Technology Installer",
          image: WelfareTechnologyInstallerImg,
        },
        { subcategory: "Technical Design", image: TechnicalDesignImg },
      ],
    },
    {
      category: "Business, Health, and Welfare",
      subcategories: [
        { subcategory: "Entrepreneurship", image: EntrepreneurshipImg },
        {
          subcategory: "Leadership and Business Management",
          image: LeadershipBusinessManagementImg,
        },
        {
          subcategory: "Learning Support Assistant",
          image: LearningSupportAssistantImg,
        },
        {
          subcategory: "Dental Laboratory Assistant",
          image: DentalLaboratoryAssistantImg,
        },
        { subcategory: "Medical Technician", image: MedicalTechnicianImg },
      ],
    },
  ],
  why_choose_us: {
    title: "Why Choose Vocational Courses in Finland?",
    reasons: [
      {
        title: "Practical Job-Ready Training",
        description:
          "Gain real-world skills that employers value, making you job-ready from day one.",
      },
      {
        title: "Work with Advanced Technologies",
        description:
          "Learn in state-of-the-art facilities, preparing you for the cutting-edge industries of tomorrow.",
      },
      {
        title: "Industry-Recognized Certifications",
        description:
          "Earn internationally respected qualifications that open doors across the globe.",
      },
      {
        title: "High-Quality Education",
        description:
          "Finland is renowned for its education system, providing top-tier vocational training.",
      },
      {
        title: "Pathway to Finnish Employment",
        description:
          "Benefit from Finland’s strong job market and access career opportunities upon course completion.",
      },
      {
        title: "Flexible Learning Options",
        description:
          "Full-time, part-time, and online learning to suit your needs.",
      },
      {
        title: "Visa Support and Post-Study Opportunities",
        description:
          "Get assistance with student visas and explore post-study work options in Finland.",
      },
    ],
  },
  visa_support: {
    title: "Study in Finland with Visa and Work Benefits",
    description:
      "Considering studying in Finland? Our vocational courses not only help you build a promising career but also come with visa support.",
    work_options: [
      {
        title: "Student Visa",
        description:
          "Enroll in eligible vocational courses and obtain a student visa for the duration of your studies.",
      },
      {
        title: "Work While Studying",
        description:
          "Students are allowed to work up to 25 hours per week during the academic term and full-time during holidays.",
      },
      {
        title: "Post-Study Work Options",
        description:
          "Once you complete your vocational training, you can apply for a post-study visa, allowing you to stay and work in Finland for up to two years.",
      },
    ],
  },
  spousal_benefits: {
    title: "Spousal Benefits",
    description:
      "Your spouse or partner can apply for a dependent visa and accompany you during your stay.",
    work_eligibility: [
      {
        title: "Dependent Visa",
        description:
          "Your spouse or partner can apply for a dependent visa and accompany you during your stay.",
      },
      {
        title: "Work Eligibility",
        description:
          "Spouses of students often have the right to work in Finland, making it easier to support your family while you study.",
      },
    ],
  },
};

const VocationalCoursesFinland = () => {
  return (
    <section>
      <Helmet>
        <title>Vocational Courses in Finland</title>
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
              Vocational Courses in Finland
            </h2>

            <ul className="flex flex-row space-x-2 h-fit py-2 items-center bg-white rounded-md capitalize w-fit px-5 font-semibold ">
              <Link to={"/"}>Home /</Link>
              <a>Vocational Courses in Finland</a>
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
        <div className=" w-[90%] h-full font-Jakarta grid grid-cols-1 lg:grid-cols-2 place-items-center  ">
          <div className="flex flex-col space-y-5 w-full">
            <p className="font-bold text-[16px] animate-fadein text-center lg:text-left text-primary">
              Transform Your Career with UK Vocational Courses
            </p>
            <motion.p
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="text-center lg:text-left xl:text-left md:text-left text-[1.3rem]  w-full  leading-snug "
            >
              Take the next step in your professional journey! Our
              industry-leading vocational courses in the UK offer hands-on
              training and recognized certifications, designed to help you
              succeed in the beauty, wellness, and holistic industries.
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
            Choose from a wide range of beauty and wellness courses, tailored to
            your career goals:
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
                      alt={items.subcategory}
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
            Thinking about studying in the UK?
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            Our vocational courses can help you with your visa application:
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
                  Stay in the UK after you finish your course with a Graduate
                  Route visa, allowing you to work for up to two years.
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
                  Once you’ve completed your training, you may qualify for a job
                  with a UK-based company and apply for a Skilled Worker Visa.
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
                className="lg:h-[230px] h-auto w-full px-5 py-7 border rounded-lg shadow-lg  flex flex-col items-start justify-start"
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
            {data.visa_support.title}
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            {data.visa_support.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 w-full">
            {data.visa_support.work_options.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="lg:h-[180px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
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
      <section className="py-10  flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            {data.spousal_benefits.title}
          </motion.h2>
          <p className="text-text text-center text-[16px]">
            {data.spousal_benefits.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 w-full">
            {data.spousal_benefits.work_eligibility.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="lg:h-[180px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-center justify-center"
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

export default VocationalCoursesFinland;

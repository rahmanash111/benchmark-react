import React from "react";
import BannerSection from "../../Components/Banner";
import AboutIMG from "../../assets/Images/12.webp";
import MissionImg from "../../assets/Images/11.webp";
import Certificate from "../../assets/Images/certificate.jpg";
import AImg from "../../assets/Images/16.webp";
import T1 from "../../assets/Images/praveena.webp";
import T2 from "../../assets/Images/MitaliSaraswat.webp";
import T3 from "../../assets/Images/Benny.webp";
import T4 from "../../assets/Images/Noori.webp";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import partner1 from "../../assets/Images/partner1.webp";
import partner2 from "../../assets/Images/partner2.webp";
import partner3 from "../../assets/Images/partner3.webp";
import partner4 from "../../assets/Images/partner4.webp";
import partner5 from "../../assets/Images/partner5.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Aboutus = () => {
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
      id: 2,
      name: "Mitali Saraswat",
      role: "Mentor - CCT College Dublin (South Asia)",
      designation: "CCT College Dublin (South Asia)",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      aboutdescription1:
        "Praveena Nair comes with a rich experience into training, spanning across a decade in areas of language enhancement and Soft Skills, for students, teachers and corporates alike. Given her passion for the English language and teaching, Praveena holds a TKT (Teaching Knowledge Test) certification from Cambridge Language Assessment, a division of Cambridge University and is a Speaking Interlocutor for OET (Occupational English Test).  ",
      image: T2,
    },
    {
      id: 3,
      name: "Dr Benny Peter",
      role: "Consumer Psychologist and Leading Counsellor ",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      image: T3,
    },
    {
      id: 4,
      name: "Noori P Rafeek ",
      role: "Advisor and Mentor Development of Teachers & students",
      twitter: "/",
      instagram: "/",
      linkedin: "/",
      image: T4,
    },
  ];

  const PatnersImg = [partner1, partner2, partner3, partner4, partner5];
  return (
    <>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <BannerSection title={"About"} />
      {/* <BannerSection title={"About"} /> */}
      <section className="min-h-[50vh] flex flex-col gap-8 items-center justify-center  font-Jakarta lg:hidden">
        <div className="flex flex-col gap-8 items-center justify-center w-[90%]">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[1.8rem] font-bold text-center"
          >
            Empowering Education, Transforming Futures
          </motion.h2>
          <p className="text-text text-[1rem] font-medium text-center">
            Discover Our Commitment to Educational Excellence and Success
          </p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[1.2rem] bg-primary py-2 px-4 rounded-lg text-white font-semibold "
          >
            Get in touch
          </motion.button>
        </div>
      </section>
      <section className=" flex flex-col items-center justify-center py-10">
        <div className="w-[90%] h-full font-Jakarta flex flex-col space-y-8">
          <div className="flex flex-row flex-wrap items-center justify-between gap-5">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl text-center leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Your Trusted Partner
              <br />
              <span className="text-text">for Overseas Admissions</span>
            </motion.h2>
            <p className="w-full animate-fadein md:w-full lg:w-[40%] text-[20px] text-text text-center lg:text-justify">
              At Benchmark Education, we transform the admissions process into a
              streamlined, stress-free experience. Our expert team offers
              tailored, one-on-one counseling to guide you through selecting the
              perfect program, institution, and country—aligned perfectly with
              your academic credentials, financial considerations, and career
              ambitions.
            </p>
          </div>
          <hr />
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className=" w-full"
          >
            <p className="w-full animate-fadein text-center  text-[20px] text-text ">
              Leveraging our extensive network of over 200 top-tier
              universities, colleges, and polytechnics worldwide, including
              leading Overseas Program Providers, we ensure a hassle-free
              admission process. Our dedicated follow-ups with universities
              expedite your application, and we also provide personalized
              support for securing spots at institutions outside our direct
              network.
              <br />
              <br />
              From managing application details to prepping you for
              interviews—whether virtual or telephonic—our
              internationally-trained admissions specialists are committed to
              delivering a seamless experience. Best of all, our services come
              at no cost to you.
              <br />
              <br />
              Choose Benchmark Education for a flawless, high-success admission
              journey.
            </p>
            <img
              src={AboutIMG}
              alt="about.jpg"
              className="h-[500px] my-5 w-full object-cover object-center rounded-xl "
            />
          </motion.div>
        </div>
        <div></div>
      </section>
      <section className="min-h-[50vh] my-10 flex flex-col items-center justify-center">
        <div className="w-[90%] h-full font-Jakarta grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1 flex flex-col space-y-5 items-start justify-center">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl text-center leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Guiding Futures with
              <br />
              <span className="text-text">Expertise and Compassion</span>
            </motion.h2>
            <p className="w-full md:w-full text-center  text-[20px] text-text">
              As a leading education counselor, we are dedicated to helping
              students make informed decisions about their academic and career
              paths. With extensive experience, we offer personalized guidance
              at every stage—whether it's choosing the right courses, selecting
              institutions, or navigating admissions.
              <br />
              <br />
              Our approach is tailored to each student's unique goals and
              challenges. We provide one-on-one counseling to identify the best
              paths for their ambitions, staying updated with the latest trends
              in education and career opportunities. We aim to enhance academic
              prospects while building confidence and self-awareness, ensuring
              students are well-prepared for their future. Our goal is to see
              students thrive academically, professionally, and personally.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="h-[400px] w-full grid-cols-1 "
          >
            <img
              src={MissionImg}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>
      <section className="min-h-[50vh] my-10 flex flex-col items-center justify-center">
        <div className="w-[90%] h-full font-Jakarta grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1 order-2 flex flex-col space-y-5 items-start justify-center">
            <motion.h2
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl text-center leading-snug font-semibold"
              style={{ lineHeight: 1.3 }}
            >
              Benchmark Education Receives
              <span className="text-text"> The Quality Counseling Award</span>
            </motion.h2>
            <p className="w-full md:w-full  text-[20px] text-text text-center ">
              Benchmark Education is proud to be honored with the prestigious
              Quality Counseling Award from Peter's Foundation Initiative, in
              partnership with FAB Business Group. This accolade celebrates our
              unwavering commitment to upholding the highest standards of
              counseling excellence. By setting a new benchmark for authenticity
              and quality, we continue to inspire trust and drive positive
              results in the communities we serve.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="h-[400px] order-1 w-full grid-cols-1 "
          >
            <img
              src={Certificate}
              alt=""
              className="h-full w-full object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-background min-h-screen flex flex-col items-center justify-center py-10">
        <div className="w-[90%] flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Meet Our Expert
            <br />
            <span className="text-text">Guidance Team</span>
          </motion.h2>
          <p className="w-full md:w-full  text-[20px] text-text text-center">
            With a wealth of experience and expertise in the field, they guide
            our efforts to ensure that every student receives the best possible
            support throughout their immigration journey.
          </p>

          <div className="grid grid-cols-1 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 font-Jakarta lg:gap-16 xl:gap-5 gap-5  bg-background rounded-lg py-10 px-5 relative top-0 w-full">
            {TeamData.map((obj, index) => (
              // to={`/aboutus/${obj.name.replace(/\s+/g, '-').toLowerCase()}`} state={{id:obj.id}}
              <Link key={obj.id}>
                <motion.div
                  initial={{ opacity: 0, translateY: 150 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="bg-white border shadow rounded-xl flex flex-col items-center justify-center space-y-2 py-1 relative group h-[375px] xl:max-w-[295px] lg: px-5"
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
              initial={{ opacity: 0, translateY: 50 }}
              key={index}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="hover:bg-gray-400/10 hover:shadow-lg px-5 py-3 rounded-lg group"
            >
              <img
                src={obj}
                className={`group-hover:grayscale grayscale-0 opacity-50 group-hover:opacity-100 ${
                  index === PatnersImg.length - 1 ? "w-[150px]" : "w-[120px]"
                } h-[150px] object-contain `}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Aboutus;

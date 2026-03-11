import React from "react";
import { useLocation } from "react-router-dom";
import T1 from "../../assets/Images/praveena.jpg";
import T2 from "../../assets/Images/MitaliSaraswat.jpg";
import T3 from "../../assets/Images/Benny.jpg";
import T4 from "../../assets/Images/Noori.jpg";
import T5 from "../../assets/Images/t5.png";
import T6 from "../../assets/Images/t6.png";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TeamDetail = () => {
  const location = useLocation();

  const { id } = location.state;

  const TeamData = [
    {
      id: 1,
      name: "Praveena Nair",
      role: "Verbal Abilities & Soft Skills",
      designation:
        "Advisor and Mentor Training Programs IELTS & Cambridge Certification",
      twitter: "https://twitter.com/estherhoward",
      instagram: "https://instagram.com/estherhoward",
      linkedin: "https://www.linkedin.com/in/praveena-nair-803380174/",
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
      role: "Mentor",
      designation: "CCT College Dublin (South Asia)",
      twitter: "https://twitter.com/annetteblack",
      instagram: "https://instagram.com/annetteblack",
      linkedin: "https://www.linkedin.com/in/mitali-saraswat-14b76312a/",
      aboutdescription1:
        "Praveena Nair comes with a rich experience into training, spanning across a decade in areas of language enhancement and Soft Skills, for students, teachers and corporates alike. Given her passion for the English language and teaching, Praveena holds a TKT (Teaching Knowledge Test) certification from Cambridge Language Assessment, a division of Cambridge University and is a Speaking Interlocutor for OET (Occupational English Test).  ",
      image: T2,
    },
    {
      id: 3,
      name: "Dr Benny Peter",
      role: "Consumer Psychologist and Leading Counsellor ",
      designation:
        "One decade completed in Education Industry Have been leading campuses as placement and training officer",
      twitter: "https://twitter.com/andrewriis",
      instagram: "https://instagram.com/andrewriis",
      linkedin: "https://linkedin.com/in/andrewriis",
      image: T3,
    },
    {
      id: 4,
      name: "Noori P Rafeek ",
      role: "Advisor and Mentor Development of Teachers & students",
      designation:
        "Principal, MES Bava Residential Senior Secondary School, Thalasseri ",
      twitter: "https://twitter.com/kristinwatson",
      instagram: "https://instagram.com/kristinwatson",
      linkedin: "https://linkedin.com/in/kristinwatson",
      image: T4,
    },
    {
      id: 5,
      name: "Jerome Bell",
      role: "General Manager",
      twitter: "https://twitter.com/jeromebell",
      instagram: "https://instagram.com/jeromebell",
      linkedin: "https://linkedin.com/in/jeromebell",
      image: T5,
    },
    {
      id: 6,
      name: "Eleanor Pena",
      role: "Case Manager",
      twitter: "https://twitter.com/eleanorpena",
      instagram: "https://instagram.com/eleanorpena",
      linkedin: "https://linkedin.com/in/eleanorpena",
      image: T6,
    },
  ];

  const data = TeamData.find((obj) => obj?.id === id);

  return (
    <>
      <Helmet>
        <title>{data?.name}</title>
      </Helmet>
      <section className="min-h-screen flex flex-col items-center justify-center w-full font-Jakarta">
        <div className="w-[90%] grid lg:grid-cols-[1fr,2fr] grid-cols-1 py-10 items-center justify-center gap-5">
          <div className=" h-full w-full flex flex-col items-center space-y-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              and
              transparent
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              src={data?.image}
              alt=""
              className="rounded-full h-[350px] w-[350px] object-cover"
            />
            <motion.ul
              initial={{ opacity: 0, y: -20 }} // Start off-screen and transparent
              animate={{ opacity: 1, y: 0 }} // Fade in and slide into position
              transition={{ ease: "easeInOut", duration: 0.5 }} // Animation settings
              className="flex flex-row gap-2 z-10"
            >
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer"
              >
                <a href={data.twitter}>
                  <XIcon
                    fontSize="small"
                    sx={{ fontSize: 16 }}
                    className="text-xs hover:text-red-400"
                  />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
                className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer"
              >
                <a href={data.linkedin}>
                  <LinkedInIcon
                    fontSize="small"
                    sx={{ fontSize: 16 }}
                    className="text-xs hover:text-red-400"
                  />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.9 }}
                className="bg-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center group cursor-pointer"
              >
                <a href={data.instagram}>
                  <FacebookIcon
                    fontSize="small"
                    sx={{ fontSize: 16 }}
                    className="text-xs hover:text-red-400"
                  />
                </a>
              </motion.li>
            </motion.ul>
          </div>
          <div className="flex flex-col space-y-3  ">
            <div>
              <h5 className="text-[16px] text-primary font-semibold">
                {data?.role}
              </h5>
              <h2 className="font-bold text-4xl">{data?.name}</h2>
            </div>

            <h3 className="font-medium text-[18px]">{data?.designation}</h3>

            <div className="flex flex-col space-y-5">
              <p className="text-[19px]">{data?.aboutdescription1}</p>
              <p className="text-[19px]">{data?.aboutdescription2}</p>
              <p className="text-[19px]">{data?.aboutdescription3}</p>
              <p className="text-[19px]">{data?.aboutdescription4}</p>
              <p className="text-[19px]">{data?.aboutdescription5}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetail;

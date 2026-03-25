import React, { useState } from "react";
import BannerSection from "../../Components/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import PDFIcon from "../../assets/Images/pdficon.svg";
import Logo from "../../assets/Images/logo.png";
import BGIMG from "../../assets/Images/b_bg.jpg";
import StudentImg from "../../assets/Images/g.jpg";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../Components/Loader";
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

const CountryDetails = () => {
  const { continentName, countryName } = useParams();
  const location = useLocation();
  // const { continentName, countryName } = location.state;

  const query = gql`
  query Countries {
    countries(filters: { CountryName: { eqi: "${countryName}" } }) {
        CountryName
        CountryFlag {
            url
        }
        details {
            title
            sub_title
            description
        }
        why_choose_us {
            title
            sub_title
            description
        }
        reasons {
            title
            sub_title
            description
        }
        top_institutes {
            title
            sub_title
            description
        }
        banner_image {
            url
        }
        top_institutes_description
        courselist {
            course_name
        }
    }
}
`;

const { data, loading, error } = useQuery(query);



  const countryData = data?.countries[0];

  if(loading){
   
    return (
      <Loader/>

    )
  }

  if(error){
    return (
      <div className="min-h-screen grid place-items-center font-Jakarta">
        <h2 className="text-xl font-bold text-center text-red-500">Please Try Again Later</h2>
        <p>{error.message}</p>

      </div>
    )
  }


  const germanyAdditionalData = [
    {
      applytitle: "Where Can You Apply In Germany?",
            universities: [
              {
                type: "Public University",
                description:
                  "Public universities in Germany are universities that are owned and operated by the federal government or the state government. These universities are funded by the government and do not have any private ownership or control. Public universities in Germany offer a wide range of degree programs and courses, and they are generally known for their high academic standards and research-oriented approach.",
                tuition:
                  "The tuition fees at public universities in Germany are generally low or free of charge, which makes them accessible to a wide range of students.",
                accessibility:
                  "Public universities in Germany are open to both domestic and international students, and they typically offer a diverse and multicultural environment for learning and research.",
              },
              {
                type: "Private University",
                description:
                  "Private universities in Germany are universities that are owned and operated by private organizations or individuals, rather than by the state or government. Private universities in Germany must meet the same standards and quality requirements as public universities, and are subject to the same accreditation process. They offer a wide range of undergraduate and graduate degree programs, and often have a more specialized focus than public universities.",
                tuition:
                  "Smaller class sizes, which can allow for more individualized attention and a more personalized learning experience.",
                accessibility:
                  "More flexible schedules and course offerings, allowing students to pursue their degrees while balancing work or other responsibilities.",
              },
            ],
    }
  ]
  

  return (
    <>
      <Helmet>
        <title className="capitalize">{countryData?.CountryName}</title>
      </Helmet>
      <BannerSection title={countryName} />
      <section className="flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] grid lg:grid-cols-[1fr,3fr] grid-cols-1 gap-5 py-16">
          <div className=" w-full flex flex-col items-center  space-y-10 lg:order-1 xl:order-1 order-2">
            <div className=" w-full px-5 py-5 bg-background h-fit rounded-xl">
              {/* <div className="flex flex-col w-full items-center space-y-3">
                {countryData
                  .find(
                    (obj, index) =>
                      obj.continent.toLowerCase() === continentName
                  )
                  .countries.map((item, index) => (
                    <Link
                      key={index}
                      to={`/countries/${continentName
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/${item.country
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/`}
                      className="w-full"
                    >
                      <motion.button
                        initial={{ opacity: 0, translateY: 150 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeInOut", duration: 0.8 }}
                        className="w-full h-[60px] hover:bg-primary bg-white border rounded-lg font-bold flex flex-row items-center justify-between px-5 text-[#787b84] hover:text-white"
                      >
                        <span>{item.country}</span>
                        <div className="h-[40px] w-[40px]">
                          <img
                            src={item.image}
                            alt=""
                            className="h-full w-full rounded-full border"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </motion.button>
                    </Link>
                  ))}
              </div> */}
            </div>

            <div className="flex flex-col space-y-2 h-[250px] bg-background rounded-xl w-full p-5">
              <h3 className="text-[25px] font-medium">Downloads</h3>
              <div className="flex flex-row justify-between w-full space-x-5 ">
                <div className="h-[150px] w-1/2 bg-white flex flex-col items-center justify-center relative rounded-lg">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="bg-primary p-2 rounded-full h-[40px] w-[40px] flex flex-col items-center justify-center">
                      <img src={PDFIcon} alt="" />
                    </div>
                    <h5 className="font-semibold text-[14px] h-[45px] text-center">
                      Privacy Policy
                    </h5>
                  </div>
                  <div className="absolute bottom-0 border-t w-full flex flex-row items-center justify-center p-1">
                    <span className="text-center text-xs">3.9 KB</span>
                  </div>
                </div>
                <div className="h-[150px] w-1/2 bg-white flex flex-col items-center justify-center relative rounded-lg">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="bg-primary p-2 rounded-full h-[40px] w-[40px] flex flex-col items-center justify-center">
                      <img src={PDFIcon} alt="" />
                    </div>
                    <h5 className="font-semibold text-[14px] h-[45px] text-center">
                      Terms and conditions
                    </h5>
                  </div>
                  <div className="absolute bottom-0 border-t w-full flex flex-row items-center justify-center p-1">
                    <span className="text-center text-xs">3.9 KB</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col space-y-2 h-[350px] bg-background rounded-xl w-full p-5"
              style={{
                background: `url(${BGIMG})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-center justify-center space-y-10 h-full">
                <img src={Logo} alt="" />
                <h3 className="text-center font-bold text-[22px]">
                  Assured Approval-
                  <br />
                  Guaranteed
                </h3>
                <Link to={"/"}>
                  <button className="bg-primary px-5 py-3 text-white rounded-xl">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="  order-1 lg:order-2 xl:order-2 flex flex-col space-y-4">
            <motion.h2
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="text-[32px] font-semibold capitalize"
            >
              The {countryData?.CountryName}
            </motion.h2>

              <motion.h5
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="text-[24px] font-semibold"
              >
                {countryData?.details?.title}
              </motion.h5>



            <p className="text-[#787b84] text-[20px]">
            {countryData?.details?.description}
            </p>
            <div className="my-5 flex flex-col space-y-5">
              <motion.h2
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="text-[32px] font-semibold "
              >
                Key Reasons to Study in {countryData?.CountryName}
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                {countryData?.reasons.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[350px] h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                    style={{
                      background:" linear-gradient(135deg, #d1d9f2, #ffffff)"
          
                    }}
                  >
                    <div className="flex flex-col items-center space-y-5">
                      <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      <h3 className="font-bold">{obj.title}</h3>
                      <p>{obj.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, translateY: 120 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="h-[500px] w-full rounded-2xl"
            >
              <img
                src={`${graphqlBaseUrl}${countryData?.banner_image?.url}`}
                className="h-full w-full object-cover rounded-2xl"
                alt=""
              />
            </motion.div>
            <div className="my-5 flex flex-col space-y-5">
              <motion.h2
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="text-[32px] font-semibold "
              >
                Why choose us?
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-5">
                {countryData?.why_choose_us.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="lg:h-[150px] md:h-[200px] h-[250px] w-full px-5 lg:py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                    style={{
                      background:" linear-gradient(135deg, #d1d9f2, #ffffff)"
          
                    }}
                  >
                    <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full  items-center space-x-5">
                      <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                      <h3 className="font-bold">{obj.title}</h3>
                      <p>{obj.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
{
  countryData?.CountryName !== 'Germany' && (
    <div className="my-5 flex flex-col space-y-5">
    <motion.h2
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="text-[32px] font-semibold "
    >
      Popular Courses
    </motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
      {countryData?.courselist.map((obj, index) => (
        <motion.div
          key={index} // Add a unique key to each mapped item
          initial={{ opacity: 0, translateY: 150 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="h-[100px] w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
          style={{
            background:" linear-gradient(135deg, #d1d9f2, #ffffff)"

          }}
        >
          <div className="flex flex-row items-center space-x-5">
            <CheckBadgeIcon className="h-8 w-8 fill-primary" />
            <h3 className="font-bold">{obj.course_name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  )
}
                {countryData?.CountryName === 'Germany' &&(
                <div className="my-5 flex flex-col space-y-5">
                  <motion.h2
                    initial={{ opacity: 0, translateY: 150 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="text-[32px] font-semibold "
                  >
                    {germanyAdditionalData[0].applytitle}
                  </motion.h2>

                  <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-5">
                    {germanyAdditionalData[0].universities.map((obj, index) => (
                      <motion.div
                        key={index} // Add a unique key to each mapped item
                        initial={{ opacity: 0, translateY: 150 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeInOut", duration: 0.8 }}
                        className="h-auto w-full px-5 py-7 border rounded-lg border-l-4 border-l-primary flex flex-col items-start justify-center"
                      >
                        <div className="flex flex-col items-start space-y-5">
                          {/* <CheckBadgeIcon className="h-8 w-8 fill-primary" /> */}

                          <h3 className="font-bold">{obj.type}</h3>
                          <p className="text-[0.9rem]">{obj.description}</p>
                          <p className="text-[0.9rem]">{obj.tuition}</p>
                          <p className="text-[0.9rem]">{obj.accessibility}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}


            <div className="my-5 flex flex-col space-y-5">
              <motion.h2
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="text-[32px] font-semibold  "
              >
                Top institutes in {countryData.CountryName}
              </motion.h2>
              <p className="text-[#787b84] text-[20px]">
                {countryData.top_institutes_description}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                <div className="h-[400px]">
                  <img
                    src={StudentImg}
                    alt=""
                    className="h-full w-full object-contain "
                  />
                </div>
                <ul className="flex flex-col space-y-10">
                  {countryData?.top_institutes.map((obj, index) => (
                    <li
                      key={index}
                      className="animate-fadeindown grid grid-cols-[1fr,10fr] items-center gap-5 w-full"
                    >
                      <CheckBadgeIcon className="h-7 w-7 fill-primary" />
                      <p className="flex flex-col">
                        {" "}
                        <strong>{obj.title}</strong>{" "}
                        <span>{obj.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetails;

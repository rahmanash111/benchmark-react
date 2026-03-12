import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDateRangeIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  MapIcon,
  MapPinIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import BGImg from "../../assets/Images/bg5.webp";
import BenefitsImg from "../../assets/Images/bhmsoffice.jpg";
import SakshiImg from "../../assets/Images/Sakshi.png";
import { Rating } from "@material-tailwind/react";
import { Grid } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import BHMSLogo from "../../assets/Images/partner4.webp";
import ReactPlayer from "react-player";
import ReviewVideo from "../../assets/Videos/review.mp4";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
const graphqlBaseUrl = process.env.REACT_APP_GRAPHQL_API_URL.replace('/graphql', '');

const MarketPage = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    confirmation: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [status, setStatus] = useState("idle");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (status === "success") {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      // Refresh page when countdown hits zero
      if (countdown === 0) {
        window.location.reload();
        setStatus("idle");
      }

      return () => clearInterval(timer);
    }
  }, [status, countdown]);


  const CREATE_EVENT_FORM = gql`
  mutation CreateEventForm(
    $name: String!
    $email: String!
    $phone: Long!
    $eventname: String!
    $city: String!
    $benchmarkstudent: Boolean!
  ) {
    createEventForm(
      data: {
        name: $name
        email: $email
        phone: $phone
        eventname: $eventname
        city: $city
        benchmarkstudent: $benchmarkstudent
      }
    ) {
      name
      email
      phone
      eventname
      city
      benchmarkstudent
    }
  }
`;


  const [createEventForm] = useMutation(CREATE_EVENT_FORM);

  // const formloading={loading}=useMutation(CREATE_EVENT_FORM)
  // const formerror={error}=useMutation(CREATE_EVENT_FORM)

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    // Convert numeric fields to integers
    const variables = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventname: urlname,
      city: formData.city,
      benchmarkstudent: formData.confirmation,
    };

    try {
      await createEventForm({ variables });

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        confirmation: "",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      console.log(error);
      
    }
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("loading"); // Indicate loading state
  //   try {
  //     const response = await fetch("https://benchmarkedu.in/switzerland.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setStatus("success");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         city: "",
  //         confirmation: "",
  //       });
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     setStatus("error");
  //   }
  // };

  const [currentVideoPlaying, setCurrentVideoPlaying] = useState(false);

  const { eventname } = useParams();

  //   console.log(eventname);

  const { pathname } = useLocation();


  const urlname = pathname.split("/")[2].replaceAll("-", " ");

  const query = gql`
    query Eventslists {
      eventslists(
        filters: {
          eventname: {
            eq: "${urlname}"
          }
        }
      ) {
        eventname
        eventdate
        bannerimg {
          url
        }
        eventtime
        venue
        section2title
        section2description
        section2shorttitle
        why_you_should_description
        why_you_should_short_title
        why_you_should_short_description
        exciting_program_description
        exciting_program_key_features
        list_of_key_benefits
        guest_name
        guest_designation
        guest_description
        countryname
        guest_img {
          url
        }
        benefits_bannerimg {
          url
        }
          countryflag{
          url
          }
          event_Invite_Video{
          url
          }
      
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen grid place-items-center font-Jakarta">
        <h2 className="text-xl font-bold text-center text-red-500">
          Please Try Again Later
        </h2>
        <p>{error.message}</p>
      </div>
    );
  }


  

  return (
    <>
      <Helmet>
        <title>Event {urlname}</title>
      </Helmet>
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: isLargeScreen
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BGImg})`
            : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-[90%] h-full font-Jakarta grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 py-10">
          <div className="flex flex-col space-y-5">
            {/* <p className="font-semibold text-primary text-[1.5rem] lg:text-left text-center hidden lg:block md:block ">
              <span className="flex flex-row items-center gap-2 lg:justify-start justify-center">
                Open House with Benchmark Education and{" "}
                <span>
                  <img
                    src={BHMSLogo}
                    alt="Bhms.logo"
                    className="h-10 w-full object-cover"
                  />
                </span>
              </span>
              <span className="flex items-center gap-2 lg:justify-start justify-center">
                Switzerland
              </span>
            </p> */}
            <p className="font-semibold text-primary text-[1.5rem] lg:text-left text-center">
              {data && !loading ? data.eventslists[0].eventname : "Dummy"}
            </p>

            <h2 class="text-center lg:text-left  text-[1.8rem] text-white  leading-snug font-bold " ><span>Start Your Career Through Further Education in <span></span></span><span class="flex items-center gap-2 md:justify-center lg:justify-start justify-center">{data && !loading ? data.eventslists[0].countryname : "Dummy"} <img src={`${graphqlBaseUrl}${data.eventslists[0]?.countryflag.url}`} alt=" Flag" class="h-5 w-5 object-cover ml-1"/></span></h2>

            <h5 className="text-[1rem] font-bold text-red-600  text-left">
              Event Details
            </h5>

            <ul className="flex flex-col space-y-2 items-start lg:justify-start justify-center w-full text-[18px] font-medium animate-fadein text-white">
              <li className="flex flex-row space-x-2 items-center gap-5 ">
                {" "}
                <CalendarDaysIcon className="h-5 w-5 fill-primary" /> Date:{" "}
                {new Date(data?.eventslists[0].eventtime).toDateString()}
              </li>
              <li className="flex flex-row space-x-2 items-center gap-5">
                {" "}
                <ClockIcon className="h-5 w-5 fill-primary" /> Time:{" "}
                {new Date(data?.eventslists[0].eventtime).toLocaleTimeString('en-US',{hour12:true})}
              </li>
              <li className="flex flex-row space-x-2 items-center gap-5">
                {" "}
                <MapPinIcon className="h-5 w-5 fill-primary" /> Venue:{" "}
                {data?.eventslists[0].venue}
              </li>
            </ul>
            <div></div>
          </div>
          <div className=" flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="bg-gray-300 py-5 flex flex-col gap-3 items-center h-full lg:w-[80%] w-full rounded-lg shadow-lg overflow-hidden relative"
            >
              <h3 className="text-[1.2rem] text-center font-semibold">
                For free registration, please fill out the form
              </h3>
              <form
                className="flex flex-col items-center w-full lg:px-10 px-5 gap-5"
                onSubmit={handleSubmit}
              >
                <div className="w-full flex flex-col gap-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full indent-5 focus:outline-primary py-2 rounded-lg"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full indent-5 focus:outline-primary py-2 rounded-lg"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    maxLength={10}
                    minLength={10}
                    className="w-full indent-5 focus:outline-primary py-2 rounded-lg"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    maxLength={10}
                    minLength={10}
                    className="w-full indent-5 focus:outline-primary py-2 rounded-lg"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <p className="text-[0.9rem]">
                    Are you a registered student of BenchMark Education?
                  </p>
                  <div className="flex flex-row gap-5">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="confirmation"
                        value="true"
                        required
                        className="mr-2 accent-primary h-4 w-4"
                        checked={formData.confirmation === true}
                        onChange={()=>setFormData((prev)=>({
                          ...prev,
                          confirmation:true
                        }))}
                      />
                      Yes
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="confirmation"
                        value="false"
                        required
                        className="mr-2 h-4 w-4 accent-primary"
                        checked={formData.confirmation === false}
                        onChange={()=>setFormData((prev)=>({
                          ...prev,
                          confirmation:false
                        }))}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <button
                    type="submit"
                    className="bg-primary py-2 text-white font-medium rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {status === "loading" && (
                <div className="bg-white/50  absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                  <Grid
                    visible={true}
                    height="40"
                    width="40"
                    color="#1A48DB"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                  />
                  <p className="text-center font-bold text-[1rem] font-Jakarta my-2">
                    Loading
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="bg-white absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                  <ExclamationTriangleIcon className="fill-red-500 h-16 w-16" />
                  <p className="text-center font-bold text-[1rem] font-Jakarta my-2">
                    Error Submiting Form
                  </p>

                  <button
                    className="text-white px-4 py-2 bg-primary rounded-full text-[0.8rem]"
                    onClick={() => setStatus("idle")}
                  >
                    Try Again
                  </button>
                </div>
              )}
              {status === "success" && (
                <div className="bg-white absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                  <CheckCircleIcon className="fill-green-500 h-16 w-16" />
                  <p className="text-center font-bold text-[1rem] font-Jakarta my-2">
                    Registered Sucessfully
                  </p>

                  <p className="text-[0.9rem] text-text font-semibold">
                    The Page will Refreshing in{" "}
                    <span
                      className={`${
                        countdown === 0 ? "text-red-500" : "text-primary"
                      }`}
                    >
                      {countdown}
                    </span>{" "}
                    Seconds
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            {!loading && data.eventslists[0].section2title}
          </motion.h2>
          <p className="text-text text-center text-[1.3rem]">
            {!loading && data.eventslists[0].section2description}
          </p>
          <div className="my-5 flex flex-col gap-5">
            <h5 className="text-center text-[1.2rem] font-semibold">
              {!loading && data.eventslists[0].section2shorttitle}
            </h5>
          </div>

          {!loading && data.eventslists[0].event_Invite_Video!=null && (
               <div className="h-[300px] relative   border-gray-800 w-[50%] my-10 flex flex-col items-center justify-center  rounded-lg group">
               <ReactPlayer
                 url={`${graphqlBaseUrl}${data.eventslists[0]?.event_Invite_Video?.url}`}
                 playing={currentVideoPlaying}
                 onPlay={() => setCurrentVideoPlaying(true)}
                 // onPause={() => setCurrentVideoPlayingIndex(null)}
                 onEnded={() => setCurrentVideoPlaying(false)}
                 volume={1}
                 // controls
   
                 width={"100%"}
                 height={"100%"}
               />
   
                    {currentVideoPlaying? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 rounded-lg">
                          <button
                            onClick={() => setCurrentVideoPlaying(null)}
                          >
                            <PauseCircleIcon className="!h-16 !w-20 !fill-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/50 opacity-100 overflow-hidden rounded-lg">
                          <button
                            onClick={() => setCurrentVideoPlaying(true)}
                          >
                            <PlayCircleIcon className="!h-16 !w-20 !fill-white" />
                          </button>
                        </div>
                      )}
             </div>
          )}
         

          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center "></div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Why
            <span className="text-text"> You Should Attend</span>
          </motion.h2>
          <p className="text-text text-center text-[1.3rem]">
            {!loading && data.eventslists[0].why_you_should_description}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.9 }}
              className="bg-yellow-700 w-fit px-5 py-5 rounded-lg"
            >
              <span className="font-bold text-white text-[1.5rem] ">QS</span>
            </motion.div>
            <div className="grid place-items-center">
              <Rating value={5} readonly />

              <h5 className="text-[1.2rem] font-bold my-3">Excellence</h5>
            </div>
          </div>
          <motion.h4
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            className="text-[1.5rem] text-center font-semibold"
          >
            {!loading && data.eventslists[0].why_you_should_short_title}
          </motion.h4>
          <p className="text-[1.2rem] text-center">
            {!loading && data.eventslists[0].why_you_should_short_description}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 z-20 gap-5 my-5 font-Jakarta  place-items-center items-center justify-center "></div>
        </div>
      </section>

      <section className="py-10  flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Explore
            <span className="text-text"> Our Exciting Programs</span>
          </motion.h2>
          <p className="text-text text-center text-[1.3rem]">
            {!loading && data.eventslists[0].exciting_program_description}
          </p>
          <ul className="flex flex-row flex-wrap items-center  list-none gap-5 py-5">
            {!loading &&
              data.eventslists[0]?.exciting_program_key_features?.map(
                (obj, index) => (
                  <motion.li
                    key={index}
                    initial={{ translateY: 20, opacity: 0 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "linear", duration: 0.8 }}
                    className="flex flex-row gap-4 items-center font-Jakarta font-semibold"
                  >
                    <CheckBadgeIcon className="h-8 w-8 stroke-white fill-red-500 stroke-1" />{" "}
                    {obj.name}
                  </motion.li>
                )
              )}
          </ul>
        </div>
      </section>
      <section className="min-h-[80vh] flex flex-col items-center justify-center font-Jakarta bg-[#f4f5f7]">
        <div className=" w-[90%] h-full font-Jakarta grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-5 items-center justify-center ">
            <motion.h2
              initial={{ translateY: -20, opacity: 0 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "linear", duration: 0.8 }}
              className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 lg:text-left text-center"
            >
              Exclusive
              <span className="text-text"> Benefits for Attendees:</span>
            </motion.h2>

            <ul className="flex flex-col gap-10 items-start justify-start text-[18px]  font-medium animate-fadein">
              {!loading &&
                data.eventslists[0]?.list_of_key_benefits?.map((obj, index) => (
                  <li className="flex flex-row items-start gap-5">
                    <div className="h-10 w-10">
                      <CheckBadgeIcon className="h-8 w-8 fill-primary" />
                    </div>
                    <a>{obj.name}</a>
                  </li>
                ))}
            </ul>

            <div></div>
          </div>
          <div className=" flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className=" py-5 flex flex-col gap-3 items-center h-full w-[80%] rounded-lg "
            >
              <div className="h-[600px]">
                <img
                  src={`${graphqlBaseUrl}${data.eventslists[0]?.benefits_bannerimg?.url}`}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] flex flex-col items-center justify-center ">
        <div className=" w-[90%] h-full font-Jakarta grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-5  items-start justify-center order-1">
            <motion.h2
              initial={{ translateY: -20, opacity: 0 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "linear", duration: 0.8 }}
              className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 w-full text-center lg:text-left"
            >
              Meet
              <span className="text-text"> Our Inspiring Alumna</span>
            </motion.h2>
            <motion.h2
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "linear", duration: 0.8 }}
              className="text-[30px] lg:text-[30px] md:text-[50px] leading-snug font-semibold z-20  lg:text-left text-center w-full"
            >
              {!loading && data.eventslists[0].guest_name}
            </motion.h2>

            <p className="text-primary font-semibold lg:text-left md:text-center text-center">
              {!loading && data.eventslists[0].guest_designation}
            </p>

            <p className="text-[1.2rem] lg:text-left text-center">
              {!loading && data.eventslists[0].guest_description}
            </p>
            <div></div>
          </div>
          <div className=" flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className=" py-5 flex flex-col gap-3 items-center h-full w-[80%] rounded-lg "
            >
              <div className="h-[400px]">
                <img
                  src={`${graphqlBaseUrl}${data.eventslists[0]?.guest_img?.url}`}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[90%] flex flex-col space-y-3 bg-sec items-center">
          <motion.h2
            initial={{ translateY: -20, opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="text-[30px] lg:text-[50px] md:text-[50px] leading-snug font-semibold z-20 text-center"
          >
            Take the First Step Toward Your Future!
          </motion.h2>
          <p className="text-text text-center text-[1.3rem]">
            Join us for an enlightening day filled with opportunities to
            network, learn, and prepare for your global career. Don’t miss out!
          </p>

          <a href="#">
            <motion.button
              initial={{ translateY: -20, opacity: 0 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              className="text-[0.9rem] bg-primary px-5 py-3 rounded-full text-white text-center font-medium"
            >
              Register Now
            </motion.button>
          </a>
        </div>
      </section>
      <section className="py-10  flex flex-col items-center justify-center font-Jakarta">
        <div className="w-[70%] h-[40vh] bg-secondary/30 flex flex-col justify-center  items-center gap-5">
          <h2 className="text-[1.7rem] text-center font-semibold">
            Contact Us for More Information{" "}
          </h2>
          <p className="text-[1rem] font-semibold">📞 Phone: +91 99462 83777</p>
        </div>
      </section>
    </>
  );
};

export default MarketPage;

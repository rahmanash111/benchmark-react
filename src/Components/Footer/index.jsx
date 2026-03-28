import React, { useEffect, useState } from "react";
import UserIcon from "../../assets/Images/c_user.svg";
import MailIcon from "../../assets/Images/c_mail.svg";
import SelecIcon from "../../assets/Images/c_select.svg";
import CallIcon from "../../assets/Images/c_call.svg";
import MessageIcon from "../../assets/Images/c_message.svg";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dots from "../../assets/Images/dots.svg";
import { gql, useMutation, useQuery } from "@apollo/client";
import { gtag_report_conversion } from "../Utils/Index";

const Footer = () => {
  const date = new Date();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Phone: "",
    Message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)

  // const updateStatus=(code)=>{
  //   setStatusCode(code)
  // }

  const validateField = (name, value) => {
    let errorMessage = "";
    // toast(errorMessage)
    // toast.error(errorMessage,{
    //   position:'bottom-left',
    //   autoClose:5000,
    //   hideProgressBar:false,
    //   closeOnClick:true,
    //   draggable:true,
    // })
    const nameRegex = /^[a-zA-Z\s]{1,50}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    switch (name) {
      case "Name":
        if (!nameRegex.test(value)) {
          errorMessage = "Name must be alphabetic and up to 50 characters long";
        }
        break;
      case "Email":
        if (!emailRegex.test(value)) {
          errorMessage = "Invalid email format";
        }
        break;
      case "Subject":
        if (!value) {
          errorMessage = "Subject is Required";
        }
        break;
      case "Phone":
        if (!phoneRegex.test(value)) {
          errorMessage = "Phone number must be 10 digits long";
        }
        break;
      case "Message":
        if (!value) {
          errorMessage = "Message is required";
        }
        if (value.length < 10) {
          errorMessage = "Message should be minimum 10 characters";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  const navList = [
    {
      name: "About us",
      path: "/aboutus",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Countries",
      path: "/countries",
    },
    {
      name: "Contact Us",
      path: "/contactus",
    },
  ];

  const CREATE_CONTACT_FORM = gql`
    mutation CreateContactForm(
      $Name: String
      $Email: String
      $Subject: String
      $Phone: Long
      $Message: String
    ) {
      createContactForm(
        data: {
          Name: $Name
          Email: $Email
          Subject: $Subject
          Phone: $Phone
          Message: $Message
        }
      ) {
        createdAt
      }
    }
  `;

  // Mutation hook
  const [createContactForm, { data, loading, error }] =
    useMutation(CREATE_CONTACT_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submitting
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmit(true)

    try {
      // Call the GraphQL mutation with correct variable names
      const { data } = await createContactForm({
        variables: {
          Name: formData.Name,
          Email: formData.Email,
          Phone: formData.Phone,
          Message: formData.Message,
          Subject: formData.Subject,
        },
      });
      // Reset form data after successful submission
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        Subject: "",
      });

      gtag_report_conversion();

      // Show success notification
      toast.success("Form submitted successfully!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        containerId: "GlobalToastContainer",
      });

      setIsSubmit(false)
    } catch (err) {
      console.error(
        "Detailed error:",
        err.graphQLErrors || err.networkError || err
      );
      toast.error("Error submitting form. Please try again.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        containerId: "GlobalToastContainer",
      });
      setIsSubmit(false);
    }
  };

  return (
    <footer className="h-full flex flex-col items-center justify-between bg-background font-Jakarta relative pt-16 py-2 ">
      <motion.div
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="w-[85%] h-fit md: bg-white rounded-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10"
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="h-[90%] w-[90%] flex flex-col space-y-1 lg:py-10 py-5">
            <div className="flex flex-row space-x-2 items-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 fill-primary" />
              <h5 className="font-bold text-[17px]">Contact Us</h5>
            </div>
            <h4 className="text-[23px] font-semibold">
              Ready to take the next step in your education? Connect with us today and start your learning journey
            </h4>
            <form className="flex flex-col space-y-7" onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-1 lg:space-y-0 space-y-5">
                <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2">
                  <div className=" border px-2 flex flex-row items-center rounded-lg focus-within:bg-background">
                    <img src={UserIcon} alt="" />
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                      placeholder="Name"
                    />
                  </div>
                  {errors.Name && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.Name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                  <div className=" border px-2 flex flex-row items-center rounded-lg focus-within:bg-background">
                    <img src={MailIcon} alt="" />
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      value={formData.Email}
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                      placeholder="Email"
                    />
                  </div>
                  {errors.Email && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.Email}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-1 lg:space-y-0 space-y-5">
                <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2  ">
                  <div className="border px-2  flex flex-row items-center rounded-lg focus-within:bg-background">
                    <img src={SelecIcon} alt="" />
                    <select
                      id="subject"
                      name="Subject"
                      className="w-full h-12 outline-none bg-transparent sel "
                      onChange={handleChange}
                      value={formData.Subject}
                    >
                      <option value="">Select Subject</option>
                      <option value="For appointment">For appointment</option>
                      <option value="For enquiry">For enquiry</option>
                    </select>
                  </div>
                  {errors.Subject && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.Subject}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                  <div className=" border px-2 flex flex-row items-center rounded-lg focus-within:bg-background">
                    <img src={CallIcon} alt="" />
                    <input
                      type="tel"
                      name="Phone"
                      id="phone"
                      min={10}
                      max={10}
                      value={formData.Phone}
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                      placeholder="Phone Number"
                    />
                  </div>
                  {errors.Phone && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.Phone}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full  border px-2 flex flex-row items-start  rounded-lg focus-within:bg-background">
                <img src={MessageIcon} alt="" className="mt-5" />
                <textarea
                  className="w-full outline-none h-[150px] bg-transparent px-3 placeholder:text-gray-400 py-3 "
                  id="message"
                  name="Message"
                  value={formData.Message}
                  placeholder="Write Your Message.."
                  onChange={handleChange}
                />
              </div>
              {errors.Message && (
                <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                  {errors.Message}
                </span>
              )}
              <button
                className={`w-full lg:w-[60%] md:w-1/2 px-3 py-2 lg:px-10 lg:py-3 md:px-3 ${isSubmit ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-secondary '}  text-white  rounded-lg font-medium`}
                type="submit" disabled={isSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497351.2672528503!2d79.66079511813165!3d13.127240958643812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525df69e94911d%3A0x41a0d5101c99685d!2sBenchmark%20Education!5e0!3m2!1sen!2sin!4v1774690678130!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="h-[550px]"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      <div className="lg:w-[90%] w-[95%] grid lg:grid-cols-3 grid-cols-1 h-full gap-5 py-5">
        <div className="flex flex-col items-start space-y-10 px-5 py-5 ">
          <h4 className="text-[1.6rem] font-bold">
            Ready to take the next step in your education? Connect with us today and
            start your learning journey
          </h4>
          <ul className="flex flex-col gap-5">
            <li className="flex flex-row gap-5 items-center text-[1rem] font-semibold">
              <span className="">
                <PhoneIcon className="h-6 w-6 fill-primary" />{" "}
              </span>
              <a href="tel:+919946283777">+91-9946283777</a>
            </li>
            <li className="flex flex-row gap-5 items-center text-[1rem] font-semibold">
              <span className="">
                <EnvelopeIcon className="h-6 w-6 fill-primary" />{" "}
              </span>
              <a href="mailto:office@benchmark.education">
                office@benchmark.education
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-10 px-5 py-5 ">
          <h4 className="text-[1.2rem] font-bold">Explore Links</h4>
          <ul className="flex flex-col gap-5">
            {navList.map((items, index) => (
              <li
                key={index}
                className="flex flex-row gap-5 items-center text-[0.9rem] font-semibold group"
              >
                <span className="">
                  <img
                    src={Dots}
                    className=" h-[10px] w-[10px] object-contain"
                    alt="mail icon"
                  />{" "}
                </span>
                <a href={items.path} className="group-hover:text-primary">
                  {items.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-10 px-5 py-5 ">
          <h4 className="text-[1.2rem] font-bold">Our Branches</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex flex-row gap-5 items-center text-[0.9rem] font-semibold group">
              <span className="">
                <img
                  src={Dots}
                  className=" h-[10px] w-[10px] object-contain"
                  alt="mail icon"
                />{" "}
              </span>
              <a className="group-hover:text-primary">Chennai</a>
            </li>
            <li className="flex flex-row gap-5 items-center text-[0.9rem] font-semibold group">
              <span className="">
                <img
                  src={Dots}
                  className=" h-[10px] w-[10px] object-contain"
                  alt="mail icon"
                />{" "}
              </span>
              <a className="group-hover:text-primary">Kerala</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative bottom-0 w-full border-t border-t-blue-gray-200 py-4">
        <h5 className="text-center text-[14px] font-semibold">
          Copyright © {date.getFullYear()} Benchmark Educations All rights
          reserved. Powered By Ideassion
        </h5>
      </div>
    </footer>
  );
};

export default Footer;

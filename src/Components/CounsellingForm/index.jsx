import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/Images/logo.png";
import {
  CheckCircleIcon,
  IdentificationIcon,
  MapIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  BookOpenIcon,
  EnvelopeIcon,
  GlobeAmericasIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
// Removed Stepper to avoid useTheme context error from material-tailwind
import Select from "react-select";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const CounsellingForm = ({ isopenForm, setOpenForm }) => {
  const location = useLocation();

  const [localopenForm, setLocalOpenForm] = useState(isopenForm);

  useEffect(() => {
    setLocalOpenForm(isopenForm);   
  }, [isopenForm]);

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalselectedOptions, setAdditionalSelectedOptions] = useState(
    []
  );
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setErrors({});
      setActiveStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
    }
  };
  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const countryoptions = [
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "ireland", label: "Ireland" },
    { value: "nz", label: "New Zealand" },
    { value: "france", label: "France" },
    { value: "germany", label: "Germany" },
    { value: "sweden", label: "Sweden" },
    { value: "latvia", label: "Latvia" },
    { value: "netherlands", label: "Netherlands" },
    { value: "spain", label: "Spain" },
    { value: "switzerland", label: "Switzerland" },
    { value: "dubai", label: "Dubai" },
    { value: "singapore", label: "Singapore" },
    { value: "other", label: "Other" },
  ];

  const additionaloptions = [
    { value: "Higher Salary", label: "Higher Salary" },
    { value: "Career Advancement", label: "Career Advancement" },
    { value: "Academic Interest", label: "Academic Interest" },
    { value: "Immigration", label: "Immigration" },
    { value: "other", label: "Other" },
  ];

  const Countries = [
    { name: "Afghanistan" },
    { name: "Albania" },
    { name: "Algeria" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bahamas" },
    { name: "Bahrain" },
    { name: "Bangladesh" },
    { name: "Barbados" },
    { name: "Belarus" },
    { name: "Belgium" },
    { name: "Belize" },
    { name: "Benin" },
    { name: "Bhutan" },
    { name: "Bolivia" },
    { name: "Bosnia and Herzegovina" },
    { name: "Botswana" },
    { name: "Brazil" },
    { name: "Brunei" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Cabo Verde" },
    { name: "Cambodia" },
    { name: "Cameroon" },
    { name: "Canada" },
    { name: "Central African Republic" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Colombia" },
    { name: "Comoros" },
    { name: "Congo (Congo-Brazzaville)" },
    { name: "Costa Rica" },
    { name: "Croatia" },
    { name: "Cuba" },
    { name: "Cyprus" },
    { name: "Czechia (Czech Republic)" },
    { name: "Democratic Republic of the Congo" },
    { name: "Denmark" },
    { name: "Djibouti" },
    { name: "Dominica" },
    { name: "Dominican Republic" },
    { name: "Ecuador" },
    { name: "Egypt" },
    { name: "El Salvador" },
    { name: "Equatorial Guinea" },
    { name: "Eritrea" },
    { name: "Estonia" },
    { name: "Eswatini" },
    { name: "Ethiopia" },
    { name: "Fiji" },
    { name: "Finland" },
    { name: "France" },
    { name: "Gabon" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Greece" },
    { name: "Grenada" },
    { name: "Guatemala" },
    { name: "Guinea" },
    { name: "Guinea-Bissau" },
    { name: "Guyana" },
    { name: "Haiti" },
    { name: "Holy See" },
    { name: "Honduras" },
    { name: "Hungary" },
    { name: "Iceland" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Iran" },
    { name: "Iraq" },
    { name: "Ireland" },
    { name: "Israel" },
    { name: "Italy" },
    { name: "Jamaica" },
    { name: "Japan" },
    { name: "Jordan" },
    { name: "Kazakhstan" },
    { name: "Kenya" },
    { name: "Kiribati" },
    { name: "Kuwait" },
    { name: "Kyrgyzstan" },
    { name: "Laos" },
    { name: "Latvia" },
    { name: "Lebanon" },
    { name: "Lesotho" },
    { name: "Liberia" },
    { name: "Libya" },
    { name: "Liechtenstein" },
    { name: "Lithuania" },
    { name: "Luxembourg" },
    { name: "Madagascar" },
    { name: "Malawi" },
    { name: "Malaysia" },
    { name: "Maldives" },
    { name: "Mali" },
    { name: "Malta" },
    { name: "Marshall Islands" },
    { name: "Mauritania" },
    { name: "Mauritius" },
    { name: "Mexico" },
    { name: "Micronesia" },
    { name: "Moldova" },
    { name: "Monaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Morocco" },
    { name: "Mozambique" },
    { name: "Myanmar (Burma)" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Netherlands" },
    { name: "New Zealand" },
    { name: "Nicaragua" },
    { name: "Niger" },
    { name: "Nigeria" },
    { name: "North Korea" },
    { name: "North Macedonia" },
    { name: "Norway" },
    { name: "Oman" },
    { name: "Pakistan" },
    { name: "Palau" },
    { name: "Palestine State" },
    { name: "Panama" },
    { name: "Papua New Guinea" },
    { name: "Paraguay" },
    { name: "Peru" },
    { name: "Philippines" },
    { name: "Poland" },
    { name: "Portugal" },
    { name: "Qatar" },
    { name: "Romania" },
    { name: "Russia" },
    { name: "Rwanda" },
    { name: "Saint Kitts and Nevis" },
    { name: "Saint Lucia" },
    { name: "Saint Vincent and the Grenadines" },
    { name: "Samoa" },
    { name: "San Marino" },
    { name: "Sao Tome and Principe" },
    { name: "Saudi Arabia" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leone" },
    { name: "Singapore" },
    { name: "Slovakia" },
    { name: "Slovenia" },
    { name: "Solomon Islands" },
    { name: "Somalia" },
    { name: "South Africa" },
    { name: "South Korea" },
    { name: "South Sudan" },
    { name: "Spain" },
    { name: "Sri Lanka" },
    { name: "Sudan" },
    { name: "Suriname" },
    { name: "Sweden" },
    { name: "Switzerland" },
    { name: "Syria" },
    { name: "Tajikistan" },
    { name: "Tanzania" },
    { name: "Thailand" },
    { name: "Timor-Leste" },
    { name: "Togo" },
    { name: "Tonga" },
    { name: "Trinidad and Tobago" },
    { name: "Tunisia" },
    { name: "Turkey" },
    { name: "Turkmenistan" },
    { name: "Tuvalu" },
    { name: "Uganda" },
    { name: "Ukraine" },
    { name: "United Arab Emirates" },
    { name: "United Kingdom" },
    { name: "United States of America" },
    { name: "Uruguay" },
    { name: "Uzbekistan" },
    { name: "Vanuatu" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Yemen" },
    { name: "Zambia" },
    { name: "Zimbabwe" },
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    fullname: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    country: "",
    educationLevel: "",
    fieldofStudy: "",
    prefferedCountry: [],
    otherprefferedCountry: "",
    previousCounselling: false,
    additionalInfo: [],
    otheradditionalInfo: "",
    specificQuestions: "",
  });

  const validateStep = (step) => {
    const nameRegex = /^[a-zA-Z\s]{1,50}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const errors = {};
    switch (step) {
      case 0:
        if (!formData.firstname.trim()) {
          errors.firstname = "First name is Required";
        }
        if (!nameRegex.test(formData.firstname)) {
          errors.firstname = "Name must be in alphabetic";
        }
        if (!formData.email.trim()) {
          errors.email = "Email is Required";
        }
        if (!emailRegex.test(formData.email)) {
          errors.email = "Invalid email Format";
        }
        if (!formData.phone.trim()) {
          errors.phone = "Contact Number is Required";
        }
        if (!phoneRegex.test(formData.phone)) {
          errors.phone = "Phone Number must be 10 digits";
        }
        break;
      case 1:
        if (!formData.age.trim()) {
          errors.age = "Age is Required";
        }
        if (!formData.country.trim()) {
          errors.country = "Current Country/state is Required";
        }
        break;
      case 2:
        if (!formData.educationLevel) {
          errors.educationLevel = "Education Details is Required";
        }
        if (!formData.fieldofStudy) {
          errors.fieldofStudy = "Education Field is Required";
        }
        if (formData.prefferedCountry.length === 0) {
          errors.prefferedCountry = "At Least one country must be selected";
        }
        if (
          formData.prefferedCountry.includes("other") &&
          !formData.otherprefferedCountry
        ) {
          errors.otherprefferedCountry = "Please specify the other country";
        }
        if (formData.additionalInfo.length === 0) {
          errors.additionalInfo =
            "At Least one additional Info must be selected";
        }
        if (
          formData.additionalInfo.includes("other") &&
          !formData.otheradditionalInfo
        ) {
          errors.otheradditionalInfo = "Please specify the other country";
        }
        // if (!formData.consent) errors.consent = 'Please accept our conditions';
        break;

      default:
        break;
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Please correct the errors in the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        containerId: "GlobalToastContainer",
      });
    }
    return Object.keys(errors).length === 0;
  };

  // const validateField = (name, value) => {
  //   let errorMessage = '';
  //   const nameRegex = /^[a-zA-Z\s]{1,50}$/;
  //   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //   const phoneRegex = /^[0-9]{10}$/;
  //   const countryRegex = /^[a-zA-Z\s]{2,25}$/;

  //   switch (name) {
  //     case 'firstname':
  //       if (!nameRegex.test(value)) {
  //         errorMessage = 'Name must be alphabetic and up to 50 characters long';
  //       }
  //       break;
  //     case 'lastname':
  //       if (!nameRegex.test(value)) {
  //         errorMessage = 'Name must be alphabetic and up to 50 characters long';
  //       }
  //       break;
  //     case 'email':
  //       if (!emailRegex.test(value)) {
  //         errorMessage = 'Invalid email format';
  //       }
  //       break;
  //     case 'phone':
  //       if (!phoneRegex.test(value)) {
  //         errorMessage = 'Phone number must be 10 digits long';
  //       }
  //       break;
  //     case 'country':
  //       if (!countryRegex.test(value)) {
  //         errorMessage = 'Country name must be alphabetic';
  //       }
  //       break;
  //     case 'otherprefferedCountry':
  //       if (!countryRegex.test(value)) {
  //         errorMessage = 'Country name must be alphabetic';
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: errorMessage,
  //   }));
  //   return errorMessage;
  // };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, checked, type } = e.target;

    setFormData((prevdata) => {
      const updatedData = {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
      if (name === "firstname" || name === "lastname") {
        updatedData.fullname =
          `${updatedData.firstname} ${updatedData.lastname}`.trim();
      }
      return updatedData;
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      prefferedCountry: selectedOptions.map((option) => option.value),
    }));
  }, [selectedOptions]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      additionalInfo: additionalselectedOptions.map((option) => option.value),
    }));
  }, [additionalselectedOptions]);

  const handlePrefferedLocation = (options) => {
    // const values = options.map(option=>option.value);
    setSelectedOptions(options);
  };
  const handleadditionaloption = (options) => {
    // const values = options.map(option=>option.value);
    setAdditionalSelectedOptions(options);
    // setFormData((prev)=>({
    //   ...prev,
    //   additionalInfo:options.value
    // }))
  };

  const CREATE_COUNSELLING_FORM = gql`
    mutation CreateCounsellingForm(
      $FirstName: String!
      $LastName: String!
      $Email: String!
      $Phone: Long!
      $Age: Int!
      $Gender: ENUM_COUNSELLINGFORM_GENDER!
      $Country: String!
      $HighestLevelofEducationCompleted: String!
      $FielfOfStudy: String!
      $PreferredStudyDestinations: JSON!
      $PreviousCounsellingExperience: Boolean!
      $AdditionalInformation: JSON!
      $OtherAdditionalInformation: String!
      $Queries: String!
      $OtherCountry: String!
    ) {
      createCounsellingForm(
        data: {
          FirstName: $FirstName
          LastName: $LastName
          Email: $Email
          Phone: $Phone
          Age: $Age
          Gender: $Gender
          Country: $Country
          HighestLevelofEducationCompleted: $HighestLevelofEducationCompleted
          FielfOfStudy: $FielfOfStudy
          PreferredStudyDestinations: $PreferredStudyDestinations
          PreviousCounsellingExperience: $PreviousCounsellingExperience
          AdditionalInformation: $AdditionalInformation
          OtherAdditionalInformation: $OtherAdditionalInformation
          Queries: $Queries
          OtherCountry: $OtherCountry
        }
      ) {
        createdAt
      }
    }
  `;

  const [createCounsellingForm, { loading, error }] = useMutation(
    CREATE_COUNSELLING_FORM
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep(activeStep)) {
    }

    setIsSubmit(true);

    // Convert numeric fields to integers
    const variables = {
      FirstName: formData.firstname,
      LastName: formData.lastname,
      Email: formData.email,
      Phone: parseInt(formData.phone, 10),
      Age: parseInt(formData.age, 10),
      Gender: formData.gender,
      Country: formData.country,
      HighestLevelofEducationCompleted: formData.educationLevel,
      FielfOfStudy: formData.fieldofStudy,
      PreferredStudyDestinations: formData.prefferedCountry,
      PreviousCounsellingExperience: formData.previousCounselling,
      AdditionalInformation: formData.additionalInfo,
      OtherAdditionalInformation: formData.otheradditionalInfo,
      Queries: formData.specificQuestions,
      OtherCountry: formData.otherprefferedCountry,
    };

    try {
      await createCounsellingForm({ variables });

      setFormData({
        firstname: "",
        lastname: "",
        fullname: "",
        email: "",
        phone: "",
        age: "",
        gender: "male",
        country: "",
        educationLevel: "",
        fieldofStudy: "",
        prefferedCountry: [],
        otherprefferedCountry: "",
        previousCounselling: false,
        additionalInfo: [],
        otheradditionalInfo: "",
        specificQuestions: "",
      });

      toast.success("Form submitted successfully!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        containerId: "GlobalToastContainer",
      });
      setActiveStep(0)
      setLocalOpenForm(false);
      setOpenForm(false);
      setIsSubmit(false);
    } catch (err) {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (validateStep(activeStep)) {
  //     toast.success('Form Validated', {
  //       position: 'bottom-left',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       draggable: true,
  //       containerId: 'GlobalToastContainer',
  //     });

  //     setIsSubmit(true); // Set the form as submitted only after validation

  //     const apiUrl = 'https://your-api-endpoint.com/submit';

  //     try {
  //       const response = await fetch(apiUrl, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           ...formData,
  //           otherprefferedCountry: formData.otherprefferedCountry ? formData.otherprefferedCountry : false,
  //           otheradditionalInfo: formData.otheradditionalInfo ? formData.otheradditionalInfo : false,
  //         }),
  //       });

  //       const result = await response.json();
  //       console.log('Form submitted successfully:', result);

  //       // Optionally show success toast or handle response
  //       toast.success('Form submitted successfully!', {
  //         position: 'top-right',
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         draggable: true,
  //         containerId: 'GlobalToastContainer',
  //       });

  //     } catch (error) {
  //       console.error('Error submitting form:', error);
  //       toast.error('Error submitting the form. Please try again.', {
  //         position: 'top-right',
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         draggable: true,
  //         containerId: 'GlobalToastContainer',
  //       });
  //     }
  //   }
  // };

  const handleClose = () => {
    setFormData("");
    setLocalOpenForm(false);
    setOpenForm(false);
  };

  const getActiveStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-3 lg:space-y-0 space-y-5 w-full">
              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                <div className=" border px-2 flex flex-row items-center rounded-lg  bg-white">
                  <UserCircleIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="FirstName"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                  />
                </div>
                {errors.firstname && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.firstname}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                <div className=" border px-2 flex flex-row items-center rounded-lg  bg-white">
                  <UserCircleIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                    placeholder="LastName"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400 bg-white"
                  />
                </div>
                {errors.lastname && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.lastname}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-3 lg:space-y-0 space-y-5 w-full">
              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <EnvelopeIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                  />
                </div>
                {errors.email && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 ">
                <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <PhoneIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                  />
                </div>
                {errors.phone && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="flex flex-col space-x-0  space-y-5 w-full">
              <div className="flex flex-col ">
                <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <UserCircleIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    required
                    type="number"
                    name="age"
                    id="age"
                    maxLength={3}
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                    placeholder="Age"
                  />
                </div>
                {errors.age && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.age}
                  </span>
                )}
              </div>
              <div className="flex flex-col  ">
                <div className="flex flex-col w-full space-y-1  ">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    required
                    onChange={handleChange}
                    value={formData.gender}
                    name="gender"
                    id="gender"
                    className="h-[50px] border border-gray-300 rounded-lg text-gray-700 focus:border-primary outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>

                  {/* {errors.name && <span className='text-[10px] text-red-700 font-semibold font-Jakarta'>{errors.name}</span>} */}
                </div>
                {/* {errors.name && <span className='text-[10px] text-red-700 font-semibold font-Jakarta'>{errors.name}</span>} */}
              </div>

              <div className="flex flex-col ">
                <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <GlobeAmericasIcon className="h-6 w-6 stroke-gray-400" />
                  {/* <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                    placeholder="Country"
                  /> */}
                  <select
                    required
                    name="country"
                    id="country"
                    onChange={handleChange}
                    value={formData.country}
                    className="w-full h-[50px] outline-none border border-transparent"
                  >
                    <option name="">Select Country</option>
                    {Countries.map((items, index) => (
                      <option value={items.name} key={index}>
                        {items.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.country && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.country}
                  </span>
                )}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-1 lg:space-y-0 space-y-2  w-full  items-center">
              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2  space-y-2 ">
                <label htmlFor="educationLevel">
                  Highest Level of Education Completed
                </label>
                <select
                  name="educationLevel"
                  id="educationLevel"
                  onChange={handleChange}
                  className="h-[50px] border w-full border-gray-300 rounded-lg text-gray-700 focus:border-primary outline-none"
                >
                  <option value="">Select an Option</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor’s Degree</option>
                  <option value="masters">Master’s Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
                {errors.educationLevel && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.educationLevel}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full xl:w-1/2 lg:w-1/2 space-y-2 ">
                <label htmlFor="educationLevel">Field of Study</label>
                <div className=" border px-2 flex flex-row items-center rounded-lg bg-white h-[50px]">
                  <BookOpenIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="text"
                    name="fieldofStudy"
                    id="fieldofStudy"
                    onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                    placeholder="Field of Study"
                  />
                </div>
                {errors.fieldofStudy && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.fieldofStudy}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col   space-y-2 w-full items-center justify-center">
              <div className="flex flex-col w-full  items-start space-y-2 ">
                {/* <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <UserCircleIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    // value={formData.name}
                    // onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                    placeholder="John "
                  />
                </div> */}
                <label htmlFor="prefferedCountry">
                  Preferred Study Destinations
                </label>
                <Select
                  isMulti
                  options={countryoptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "#1A48DB" : "#f2f2f2",
                      boxShadow: state.isFocused ? "0 0 0 1px #1A48DB" : "none",
                      "&:hover": {
                        borderColor: "#f2f2f2",
                      },
                      height: "50px",
                      borderRadius: "8px",
                    }),
                  }}
                  name="prefferedCountry"
                  id="prefferedCountry"
                  onChange={handlePrefferedLocation}
                  value={selectedOptions}
                  classNamePrefix="select"
                  className="w-full outline-none border-none focus:border-primary"
                />
                {errors.prefferedCountry && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.prefferedCountry}
                  </span>
                )}
              </div>

              {selectedOptions.some((options) => options.value === "other") && (
                <div className="flex flex-col w-full  space-y-2 ">
                  <label htmlFor="otherprefferedCountry">
                    Specify the other country
                  </label>
                  <div className=" border px-2 flex flex-row items-center rounded-lg bg-white h-[50px]">
                    <GlobeAmericasIcon className="h-6 w-6 stroke-gray-400" />
                    <input
                      type="text"
                      required
                      name="otherprefferedCountry"
                      id="otherprefferedCountry"
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                      placeholder="Other Countries"
                    />
                  </div>
                  {errors.otherprefferedCountry && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.otherprefferedCountry}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col lg:flex-row space-x-0  lg:space-x-1  space-y-0 w-full items-center justify-center">
              <div className="flex flex-col w-full items-start space-y-2">
                <label htmlFor="previousCounselling ">
                  Previous Counselling Experience
                </label>
                <div className="flex flex-row items-center gap-5">
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="Yes"
                      name="previousCounselling"
                      value="true"
                      checked={formData.previousCounselling === true}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          previousCounselling: true,
                        }))
                      }
                      className="h-5 w-5 form-radio text-primary accent-primary border-gray-400"
                    />
                    <label htmlFor="Yes" className="ml-2 text-gray-700">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="No"
                      name="previousCounselling"
                      value="false"
                      checked={formData.previousCounselling === false}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          previousCounselling: false,
                        }))
                      }
                      className="h-5 w-5 form-radio text-primary accent-primary border-gray-400"
                    />
                    <label htmlFor="No" className="ml-2 text-gray-700">
                      No                               
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col   space-y-2 w-full items-center justify-center">
              <div className="flex flex-col w-full  items-start space-y-2 ">
                {/* <div className=" border px-2 flex flex-row items-center rounded-lg bg-white">
                  <UserCircleIcon className="h-6 w-6 stroke-gray-400" />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    // value={formData.name}
                    // onChange={handleChange}
                    className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                    placeholder="John "
                  />
                </div> */}
                <label htmlFor="additionalInfo">Additional Information</label>
                <Select
                  isMulti
                  options={additionaloptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "#1A48DB" : "#f2f2f2",
                      boxShadow: state.isFocused ? "0 0 0 1px #1A48DB" : "none",
                      "&:hover": {
                        borderColor: "#f2f2f2",
                      },
                      height: "50px",
                      borderRadius: "8px",
                    }),
                  }}
                  name="additionalInfo"
                  id="additionalInfo"
                  onChange={handleadditionaloption}
                  value={additionalselectedOptions}
                  classNamePrefix="select"
                  className="w-full h-[50px] outline-none border-none focus:border-primary"
                />
                {errors.additionalInfo && (
                  <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                    {errors.additionalInfo}
                  </span>
                )}
              </div>

              {additionalselectedOptions.some(
                (options) => options.value === "other"
              ) && (
                <div className="flex flex-col w-full  space-y-2 ">
                  <label htmlFor="otheradditionalInfo">
                    Specify the Additional Information
                  </label>
                  <div className=" border px-2 flex flex-row items-center rounded-lg bg-white h-[50px]">
                    <InformationCircleIcon className="h-6 w-6 stroke-gray-400" />
                    <input
                      type="text"
                      required
                      name="otheradditionalInfo"
                      id="otheradditionalInfo"
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none bg-transparent px-3 placeholder:text-gray-400"
                      placeholder="Additional Information"
                    />
                  </div>
                  {errors.otheradditionalInfo && (
                    <span className="text-[10px] text-red-700 font-semibold font-Jakarta">
                      {errors.otheradditionalInfo}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2 w-full items-center justify-center">
              <div className="flex flex-col w-full space-y-2 ">
                <label htmlFor="specificQuestions">
                  Do you have any specific questions or concerns you’d like to
                  discuss with a counselor?
                </label>
                <div className=" border px-2 flex flex-row items-center justify-center rounded-lg bg-white h-[120px]">
                  <textarea
                    type="text"
                    name="specificQuestions"
                    id="specificQuestions"
                    onChange={handleChange}
                    className="w-full h-full outline-none bg-transparent px-3 placeholder:text-gray-400"
                  />
                </div>
                {/* {errors.email && <span className='text-[10px] text-red-700 font-semibold font-Jakarta'>{errors.email}</span>} */}
              </div>

              <div>
                <p>
                  {" "}
                  By submitting this form, I consent to the processing of my
                  personal data in accordance with the privacy policy.
                </p>
              </div>
              {/* {errors.consent && <span className='text-[10px] text-left w-full text-red-700 font-semibold font-Jakarta'>{errors.consent}</span>} */}
            </div>
          </>
        );

      // default:
      //   return setActiveStep(0)
    }
  };
  return (
    <div>
      <Modal
        open={localopenForm}
        onClose={() => (setLocalOpenForm(false), setOpenForm(false))}
      >
        <Box
          maxHeight={"80%"}
          className={`overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[60%] md:w-[80%] w-full bg-white border-none outline-none border-white rounded-xl font-Jakarta h-auto`}
          style={{
            background: " linear-gradient(135deg, #d1d9f2, #ffffff)",
          }}
        >
          <div className="w-full flex flex-col items-center py-5 px-5 h-full relative">
            <button
              className="absolute top-5 right-5 h-[25px] w-[25px] group"
              onClick={() => handleClose()}
            >
              <XMarkIcon
                fontSize={25}
                className=" fill-primary rotate-0 group-hover:rotate-180 transition-all ease-in-out duration-300 group-hover:fill-red-700 stroke-primary group-hover:stroke-red-700 "
              />
            </button>
            <div className="flex flex-col space-y-2 items-center justify-center h-[30%] ">
              <a
                href="/"
                className="flex flex-col items-center h-[20px] w-auto"
              >
                <img
                  src={Logo}
                  alt="Logo.svg"
                  className="h-full w-full object-contain"
                />
              </a>
              <h3 className="font-bold text-[23px] text-center">
                Personalized Counselling Form
              </h3>
              <p className="text-center text-[16px] text-gray-500 w-[90%]">
                Welcome to Benchmark Education We're here to help you navigate
                your educational journey with personalized guidance.
              </p>
            </div>

            <div className="w-[85%] h-[10%] py-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep === 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <h6 className={`${activeStep === 0 ? "text-primary" : "text-gray-500"} font-medium text-[10px] lg:text-[12px] md:text-[12px] mt-2 text-center`}>
                    Personal
                    <br />
                    Details
                  </h6>
                </div>
                <div className={`h-[2px] flex-1 mx-2 ${activeStep >= 1 ? "bg-primary" : "bg-gray-300"}`}></div>
                <div className="flex flex-col items-center flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>
                    <IdentificationIcon className="h-5 w-5" />
                  </div>
                  <h6 className={`${activeStep === 1 ? "text-primary" : "text-gray-500"} font-medium text-[10px] lg:text-[12px] md:text-[12px] mt-2 text-center`}>
                    Identification
                    <br />
                    Details
                  </h6>
                </div>
                <div className={`h-[2px] flex-1 mx-2 ${activeStep >= 2 ? "bg-primary" : "bg-gray-300"}`}></div>
                <div className="flex flex-col items-center flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep === 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <h6 className={`${activeStep === 2 ? "text-primary" : "text-gray-500"} font-medium text-[10px] lg:text-[12px] md:text-[12px] mt-2 text-center`}>
                    Educational
                    <br />
                    Background
                  </h6>
                </div>
              </div>
            </div>

            <form className=" w-full lg:w-[85%] flex flex-col gap-5 items-center justify-center h-[40%] my-10">
              {getActiveStep(activeStep)}
            </form>

            <div className="flex flex-row w-full lg:w-[85%] py-5  items-center justify-between h-[15%] relative">
              {activeStep > 0 && (
                <button
                  className="bg-gray-400 p-2 w-[20%] rounded-lg text-white font-semibold hover:bg-primary"
                  onClick={() => handlePrev()}
                >
                  Back
                </button>
              )}
              <button
                className={`${
                  isSubmit
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-secondary"
                } absolute right-0 p-2 w-[20%] rounded-lg text-white font-semibold `}
                onClick={(event) =>
                  activeStep === 2 ? handleSubmit(event) : handleNext()
                }
                disabled={isSubmit}
              >
                {activeStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CounsellingForm;

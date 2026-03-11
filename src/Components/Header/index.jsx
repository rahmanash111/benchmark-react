import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Logo from "../../assets/Images/logo.png";
import En from "../../assets/Images/en.png";
import Ger from "../../assets/Images/ger.png";
import Uae from "../../assets/Images/uae.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes in the media query
    mediaQueryList.addEventListener("change", documentChangeHandler);

    return () => {
      // Cleanup the listener on component unmount
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [query]);

  return matches;
}

const Header = () => {
  const [openSearchBar, setOpenSearchBar] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");

  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
    {
      name: "Services",
      path: "",
      dropdown: [
        {
          title: "Career & Course Orientation",
          path: "/services/visa-carrer-course&orinetation",
        },
        {
          title: "SOP Evaluation & Counseling",
          path: "/services/SOP",
        },
        {
          title: "Language Training",
          path: "/services/language-training",
        },
        {
          title: "Admission to World-Ranking Universities",
          path: "/services/admission-world-ranking-university",
        },
        {
          title: "Scholarship & Financial Aid Guidance",
          path: "/services/scholarship&finance",
        },
        {
          title: "End-To-End Admission Support",
          path: "/services/end-to-end-admission",
        },
        {
          title: "Visa & Spouse Visa Guidance",
          path: "/services/visa-and-spouse-visa-guidence",
        },
        {
          title: "Educational Loan Assistance",
          path: "/services/education-loan-assist",
        },
        {
          title: "Travel Desk & Accommodation",
          path: "/services/travel-desk-and-accomodation",
        },
      ],
    },
    {
      name: "Countries",
      path: "",
      dropdown: [
        {
          title: "Finland",
          path: "/countries/europe/finland/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/fi.svg",
        },
        {
          title: "Germany",
          path: "/countries/europe/germany/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/de.svg",
        },
        {
          title: "Ireland",
          path: "/countries/europe/ireland/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ie.svg",
        },
        {
          title: "Italy",
          path: "/countries/europe/italy/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/it.svg",
        },
        {
          title: "Switzerland",
          path: "/countries/europe/switzerland/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/ch.svg",
        },
        {
          title: "UK",
          path: "/countries/europe/united-kingdom/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/gb.svg",
        },
        {
          title: "India",
          path: "/countries/asia/india/",
          image:
            "https://github.com/hampusborgos/country-flags/raw/main/svg/in.svg",
        },
      ],
    },
    {
      name: "Universities",
      path: "/universities",
    },
    {
      name: "Vocational Courses",
      path: "",
      dropdown: [
        {
          title: "Vocational Courses in UK",
          path: "/vocational-uk",
        },
        {
          title: "Vocational Courses in Finland",
          path: "/vocational-finland",
        },
      ],
    },
    {
      name: "Contact Us",
      path: "/contactus",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSearchBar = (event) => {
    setOpenSearchBar(event);
  };
  const toggleDrawer = (event) => {
    setOpenDrawer(event);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    // e.preventDefault();
    const matchPage = navList.find((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    );

    setErrorMessage("");

    if (matchPage) {
      navigate(matchPage.path);
      setErrorMessage("");
      toggleSearchBar(false);
    } else {
      setErrorMessage(`No Results Found ${query}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query != "") {
        handleSearch();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const languages = [
    {
      language: "English",
      icon: En,
      code: "en",
    },
    {
      language: "German",
      icon: Ger,
      code: "de",
    },
    {
      language: "Arabic",
      icon: Uae,
      code: "ar",
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleLangugageChange = (event) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);

    // console.log("hsyy",selectedCode);

    // const comboElement = document.querySelector('.goog-te-combo');
    // if(comboElement){
    //   comboElement.value = selectedCode;
    //   comboElement.dispatchEvent(new Event('change'))
    // }
  };

  const [mobileDropDown, setMobileDropDown] = useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(null);

  // const[openServices,setOpenServices]=useState(false);
  // const[openCountries,setOpenCountries]=useState(false);

  const handleMouseEnter = (index) => {
    setIsDropDownOpen(index);
  };

  const handleMouseLeave = () => {
    setIsDropDownOpen(null);
  };

  const toggleDropdown = (index) => {
    setMobileDropDown(mobileDropDown === index ? null : index); // Toggle dropdown for each index
  };

  return (
    <nav className="relative font-Jakarta">
      {location.pathname != "/eventpage" && (
        <div className="min-h-[7vh] bg-background  flex-col justify-center px-10 font-semibold hidden xl:flex lg:flex ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-2  text-[15px]">
              <ChatBubbleLeftRightIcon className="h-6 w-6 fill-primary" />
              {/* <img src={HelpIcon} alt="icon.png" /> */}
              <p className="flex flex-row space-x-3 items-center">
                <span className="text-[12px]">HELP DESK:</span>
                <a className="font-bold" href="tel:+919946283777">
                  +91-9946283777
                </a>
              </p>
            </div>
            <ul className="text-[12px] flex flex-row space-x-10">
              <li className="flex flex-row items-center justify-center space-x-2">
                <ClockIcon className="h-5 w-5 fill-primary" />
                <p>Monday - Friday 09:00 am - 05:00 Pm</p>
              </li>
              <li className="flex flex-row items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 fill-primary" />
                <p>
                  191, 3rd Floor, Hamid Building, Whites Road, Anna Salai,
                  Chennai – 600006.
                </p>
                {/* <p>
            1st Floor, K L Tower, Mala Vazhi Junction,Above KSFE, Thrissur
            Pin Code: 680683
          </p> */}
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`min-h-[13vh]  flex flex-row items-center justify-between px-10 space-x-8 border-2 ${
          isScrolled
            ? "fixed top-0 w-full bg-white animate-fadeindown z-50"
            : ""
        }`}
      >
        <a href="/" className="flex flex-col items-center h-[20px] w-auto">
          <img
            src={Logo}
            alt="Logo.svg"
            className="h-full w-full object-contain"
          />
        </a>

        {location.pathname != "/eventpage" && (
          <ul className="flex-row items-center space-x-16 font-medium text-[14px] hidden xl:flex lg:flex">
            {navList.map((navItem, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {!navItem.dropdown ? (
                  <Link
                    to={navItem.path}
                    className={`${
                      location.pathname === navItem.path
                        ? 'text-primary active: relative after:absolute after:w-full after:content-[""] after:block after:left-0 after:right-0 after:bg-primary after:h-[2px] after:rounded-xl'
                        : 'text-gray-700 relative w-full after:absolute after:content-[""] after:block after:rounded-xl hover:text-primary after:h-[2px] after:hover:bg-primary after:w-full after:scale-0 after:hover:scale-100 after:transition-all after:ease-in-out after:duration-300'
                    }`}
                  >
                    {navItem.name}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      className="text-black hover:text-gray-400 focus:outline-none flex flex-row items-center gap-2"
                      onClick={() => handleMouseEnter(index)}
                    >
                      <span
                        className={`${
                          location.pathname === navItem.path
                            ? 'text-primary active: relative after:absolute after:w-full after:content-[""] after:block after:left-0 after:right-0 after:bg-primary after:h-[2px] after:rounded-xl'
                            : 'text-gray-700 relative w-full after:absolute after:content-[""] after:block after:rounded-xl hover:text-primary after:h-[2px] after:hover:bg-primary after:w-full after:scale-0 after:hover:scale-100 after:transition-all after:ease-in-out after:duration-300'
                        }`}
                      >
                        {navItem.name}
                      </span>
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform ${
                          isDropDownOpen === index ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                    {isDropDownOpen === index && (
                      <ul className="absolute left-0 top-2 mt-2 w-56 bg-white rounded-md overflow-hidden flex flex-col gap-2 shadow-lg !z-50">
                        {navItem.dropdown.map((dropdownItem, idx) => (
                          <Link
                            to={dropdownItem.path}
                            key={idx}
                            onClick={handleMouseLeave}
                            className="flex group flex-row items-center hover:bg-gray-100 px-5 py-2 gap-2"
                          >
                            {dropdownItem?.image && (
                              <div className="h-5 w-5">
                                <img
                                  src={dropdownItem.image}
                                  className="h-full w-full object-cover rounded-full"
                                />
                              </div>
                            )}
                            <span
                              className={`active:text-primary group-hover:text-primary text-text`}
                            >
                              {dropdownItem.title}
                            </span>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* <ul className="flex-row space-x-5 text-[14px] hidden lg:flex xl:flex">
          <li
            className="px-5 border-l border-background border-r flex flex-row items-center justify-center space-x-2 cursor-pointer"
            onClick={() => toggleSearchBar(true)}
          >
            <MagnifyingGlassIcon className="h-6 w-6 fill-black " />
            <span>Search</span>
          </li>
          <li>
                    <select name="language"  onChange={handleLangugageChange} id="" className='bg-white px-5 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        {
                            languages.map((obj,index)=>(
                                <option value={obj.code}>
                                  
                                    <img src={obj.icon} className="bg-red-500 h-5 w-5 object-contain" alt="" />
                                  
                                  <span>{obj.language}</span>  
                                </option>
                               
                            ))
                        }
                    </select>
              

                </li>
        </ul> */}
        <div
          className="flex xl:hidden  lg:hidden"
          onClick={() => toggleDrawer(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>
      {/* <Drawer
        open={openSearchBar}
        onClose={() => toggleSearchBar(false)}
        anchor="top"
      >
        <Box sx={{ width: screenWidth, height: 300, position: "relative" }}>
          <div className="flex flex-col relative gap-10">
            <button
              className="absolute right-10 top-5 cursor-pointer "
              onClick={() => toggleSearchBar(false)}
            >
              <span className="flex flex-row items-center space-x-5 group text-[#c0c2c8] hover:text-red-600">
                Close <XMarkIcon className="h-5 w-5 group-hover:fill-red-600" />
              </span>
            </button>
            <br />
            <div className="flex items-center justify-center gap-3 ">
              <input
                type="search"
                className="w-9/12  py-5 bg-transparent border-b-2 border-[#c0c2c8] outline-none focus:border-primary"
                placeholder="Type here and hit enter"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="fill-gray-400 h-5 w-5" />
            </div>
            <p className="text-red-600 text-center">{errorMessage}</p>
      
          </div>
        </Box>
      </Drawer> */}
      <Drawer
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        anchor="left"
      >
        <Box
          sx={{
            width: screenWidth / 1.5,
            height: "100%",
            position: "relative",
          }}
        >
          <div className="h-full flex flex-col items-center  justify-around space-x-2 border-2 py-10 overflow-x-hidden">
            <div className="h-[150px] w-[150px]">
              <img src={Logo} alt="Logo.svg" />
            </div>
            <ul className="flex-col items-center space-y-16 font-medium text-[14px] flex w-full justify-center my-5">
              <Link
                to={"/"}
                className="w-full text-center justify-center flex flex-row gap-2 items-center "
                onClick={() => setOpenDrawer(false)}
              >
                Home
              </Link>
              <Link
                to={"/aboutus"}
                className="w-full text-center justify-center flex flex-row gap-2 items-center "
                onClick={() => setOpenDrawer(false)}
              >
                About Us
              </Link>
              {navList.map((obj, index) => (
                <>
                  {obj.name === "Services" && (
                    <div className="flex flex-row items-center  ml-2">
                      <Link>{obj.name}</Link>
                      {obj.dropdown && (
                        <button
                          className="flex items-center justify-center h-3.5 w-3.5 ml-2"
                          onClick={() => toggleDropdown(index)} // Toggle dropdown for this specific item
                        >
                          {mobileDropDown === index ? (
                            <ChevronUpIcon className="w-4 h-4 stroke-black" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4 stroke-black" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                  {obj.name === "Countries" && (
                    <div className="flex flex-row items-center  ml-2">
                      <Link>{obj.name}</Link>
                      {obj.dropdown && (
                        <button
                          className="flex items-center justify-center h-3.5 w-3.5 ml-2"
                          onClick={() => toggleDropdown(index)} // Toggle dropdown for this specific item
                        >
                          {mobileDropDown === index ? (
                            <ChevronUpIcon className="w-4 h-4 stroke-black" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4 stroke-black" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                  {obj.name === "Vocational Courses" && (
                    <div className="flex flex-row items-center  ml-2">
                      <Link>{obj.name}</Link>
                      {obj.dropdown && (
                        <button
                          className="flex items-center justify-center h-3.5 w-3.5 ml-2"
                          onClick={() => toggleDropdown(index)} // Toggle dropdown for this specific item
                        >
                          {mobileDropDown === index ? (
                            <ChevronUpIcon className="w-4 h-4 stroke-black" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4 stroke-black" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                  {obj.dropdown && mobileDropDown === index && (
                    <div className="w-full flex flex-col items-center gap-5">
                      {obj.dropdown.map((item, idx) => (
                        <Link
                          to={item.path}
                          key={idx}
                          onClick={() => {
                            setOpenDrawer(false); // Close the mobile drawer on click
                            setMobileDropDown(null); // Close dropdown after selection
                          }}
                          className={` text-center md:ml-28 ml-5 text-w`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ))}
              <Link
                to={"/universities"}
                className="w-full text-center justify-center flex flex-row gap-2 items-center "
                onClick={() => setOpenDrawer(false)}
              >
                Universities
              </Link>
              <Link
                to={"/contactus"}
                className="w-full text-center justify-center flex flex-row gap-2 items-center "
                onClick={() => setOpenDrawer(false)}
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Header;

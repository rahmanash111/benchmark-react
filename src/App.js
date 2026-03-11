import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import ScrollToTop from './scrolltoTop'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Screens/Home'
import Loader from './Components/Loader'
import BacktoTopButton from './Components/BackToTopButton'
import Footer from './Components/Footer'
import Aboutus from './Screens/Aboutus'
import CountryDetails from './Screens/CountryDetails'
import './App.css'
import Contactus from './Screens/Contactus'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './Screens/404'
import FloatingWhatsapp from './Components/FloatingWhatsapp'
import CCAndOrientation from './Screens/Services/SubScreens/CC&Orientation'
import SOP from './Screens/Services/SubScreens/SOP'
import AdmissionWorldUnversity from './Screens/Services/SubScreens/AdmissionWorldUnversity'
import ScholarshipAndFinance from './Screens/Services/SubScreens/Scholarship&Finance'
import EtoE from './Screens/Services/SubScreens/EtoE'
import VisaAndVisaGuidence from './Screens/Services/SubScreens/VisaAndVisaGuidence'
import EduLoanAssit from './Screens/Services/SubScreens/EduLoanAssit'
import TravelDesk from './Screens/Services/SubScreens/TravelDesk'
import LanguageTraining from './Screens/Services/SubScreens/LanguageTraining'
import Universities from './Screens/Universities'
import VocationalCoursesUK from './Screens/Vocational Courses/Uk'
import VocationalCoursesFinland from './Screens/Vocational Courses/Finland'
import MarketPage from './Screens/MarketingPage'
import DigitalMarketingAcademy from './Screens/Digital Marketing Academy'
import StudyAbroad from './Screens/StudyAbroad'
import StudyInUK from './Screens/StudyInUK'
import StudyInDubai from './Screens/StudyInDubai'
import StudyInSingapore from './Screens/StudyInSingapore'
import StudyInAustralia from './Screens/StudyInAustralia'
import StudyInMauritius from './Screens/StudyInMauritius'
import StudyInIndia from './Screens/StudyInIndia'
const App = () => {
  const location = useLocation()
  const[isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false)
      
    }, 1500);

    return ()=>clearTimeout(timer)

  },[location])

  // useEffect(() => {
  //   const googleTranslateElementInit = () => {
  //     if (window.google && window.google.translate) {
  //       new window.google.translate.TranslateElement(
  //         {
  //           pageLanguage: "en",
  //           autoDisplay: false,
  //         },
  //         "google_translate_element"
  //       );
  //     } else {
  //       console.error("Google Translate script failed to load.");
  //     }
  //   };

  //   const addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   addScript.async = true; // Load the script asynchronously
  //   document.body.appendChild(addScript);

  //   window.googleTranslateElementInit = googleTranslateElementInit;

  //   addScript.onerror = () => {
  //     console.error("Google Translate script could not be loaded.");
  //   };

  //   // Cleanup script if the component unmounts
  //   return () => {
  //     if (addScript.parentNode) {
  //       addScript.parentNode.removeChild(addScript);
  //     }
  //   };
  // }, []);
  return (
    <>
    {
      isLoading && <Loader/>
    }
    {
      !isLoading && (

        <>
        <Header/>
        <ScrollToTop/>
        {/* <div id="google_translate_element" className='absolute'></div> */}
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          {/* <Route path='/services' element={<Services/>}/> */}
          <Route path='/services/visa-carrer-course&orinetation' element={<CCAndOrientation/>}/>
          <Route path='/services/SOP' element={<SOP/>}/>
          <Route path='/services/language-training' element={<LanguageTraining/>}/>
          <Route path='/services/admission-world-ranking-university' element={<AdmissionWorldUnversity/>}/>
          <Route path='/services/scholarship&finance' element={<ScholarshipAndFinance/>}/>
          <Route path='/services/end-to-end-admission' element={<EtoE/>}/>
          <Route path='/services/visa-and-spouse-visa-guidence' element={<VisaAndVisaGuidence/>}/>
          <Route path='/services/education-loan-assist' element={<EduLoanAssit/>}/>
          <Route path='/services/travel-desk-and-accomodation' element={<TravelDesk/>}/>
          {/* <Route path='/countries' element={<Country/>}/> */}
          <Route path='/universities' element={<Universities/>}/>
          <Route path='/vocational-uk' element={<VocationalCoursesUK/>}/>
          <Route path='/vocational-finland' element={<VocationalCoursesFinland/>}/>
          <Route path='/countries/:continentName/:countryName' element={<CountryDetails/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/events' element={<MarketPage/>}/>
          <Route path='/events/:eventname' element={<MarketPage/>}/>
          <Route path='/digital-marketing-academy' element={<DigitalMarketingAcademy/>}/>
          <Route path='/study-abroad' element={<StudyAbroad/>}/>
          <Route path='/study-in-uk' element={<StudyInUK/>}/>
          <Route path='/study-in-dubai' element={<StudyInDubai/>}/>
          <Route path='/study-in-singapore' element={<StudyInSingapore/>}/>
          <Route path='/study-in-australia' element={<StudyInAustralia/>}/>
          <Route path='/study-in-mauritius' element={<StudyInMauritius/>}/>
          <Route path='/study-in-india' element={<StudyInIndia/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      
        <Footer/>
        <BacktoTopButton/>
        <FloatingWhatsapp/>
        <ToastContainer containerId="GlobalToastContainer"/>
        </>
      )
      
    }
    
    </>

  )
}

export default App

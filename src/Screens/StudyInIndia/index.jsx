import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import {
  CheckBadgeIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  IdentificationIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

const Section = ({ title, eyebrow, children, className = "", id }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
    {eyebrow && (
      <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-semibold mb-2">{eyebrow}</p>
    )}
    {title && (
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white text-balance mb-8">
        {title}
      </h2>
    )}
    {children}
  </section>
)

const BulletList = ({ items, columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }) => (
  <ul className={`grid ${columns} gap-4 text-slate-700 dark:text-slate-200`}>
    {items.map((item, idx) => (
      <li key={idx} className="group flex items-start gap-3 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 p-4 bg-white/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition">
        <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 text-white shadow-md">
          <CheckBadgeIcon className="h-4 w-4"/>
        </span>
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
)

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <motion.div 
    className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="rounded-[calc(1.5rem-2px)] bg-white dark:bg-slate-900 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50 hover:to-fuchsia-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300"
      >
        <span className="font-semibold text-slate-900 dark:text-white text-lg pr-4">{question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-[#9546ef] flex items-center justify-center`}>
          <span className="text-white font-bold">{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-8 pb-6"
        >
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">{answer}</p>
          </div>
        </motion.div>
      )}
    </div>
  </motion.div>
)

const StudyInIndia = () => {
  const [openFAQItems, setOpenFAQItems] = useState({})
  const [activeFAQCategory, setActiveFAQCategory] = useState('programs')

  const toggleFAQItem = (category, index) => {
    setOpenFAQItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }))
  }

  const mbaGlobalHighlights = [
    'Dual Excellence: Indian curriculum strength meets global business perspective.',
    'International Immersion: Onsite sessions at Singapore Institute of Management (SIM) with corporate visits and innovation hub exposure.',
    'Specializations: HR | Marketing | Finance | Business Analytics.',
    'Industry Integration: Real-world simulations, consulting projects & internships.',
    'Leadership Development: Value-added courses, mentorship & strategic training.',
    "Global Advantage: Learn from international faculty, live business cases, and Singapore's smart city & sustainability models.",
    'Career Boost: Dedicated networking, career counseling, and placement support to launch global careers.'
  ]

  const simAdvantage = [
    'Global Business Models & Emerging Trends',
    'Strategic Thinking & Decision-Making Approaches',
    'Live Case Studies & Simulations',
    'Innovation & Leadership Workshops',
    'Mentorship from International Faculty',
    'Immersive Singapore Experience: Corporate visits, policy & governance insights, smart city exposure, onsite sessions at SIM.'
  ]

  const gemsHighlights = [
    'Work-Study Balance: Work Monday-Friday and attend classes on weekends.',
    "Dual Credentials: Earn an MBA degree from a UGC-recognized, NAAC 'A' Grade University and a PGP certification from GEMS B SCHOOL.",
    'Earn While You Learn: Get full-time job placement with a salary during the program.',
    'Real-World Learning: 70% Practical and 30% Theoretical exposure to match industry needs.',
    '2-Year Duration: Includes 2 years of work experience as part of your learning journey.',
    'Campus Accommodation: Comfortable hostel facilities available within the campus.',
    'Flexible Fee Plan: Pay fees in 8 easy instalments.'
  ]

  const pathwayUniversities = [
    'University of Sunderland - UK',
    'Roosevelt University - USA',
    'La Trobe University - Australia'
  ]

  const faqData = {
    programs: [
      {
        question: 'What is the MBA - Global (Bangalore University x SIM)?',
        answer: 'A 2-year classroom program under Bangalore University with global immersion at Singapore Institute of Management (SIM). Timings: 9:00 AM - 4:00 PM. Eligibility: UG Graduate.'
      },
      {
        question: 'What is the GEMS B SCHOOL Industry Synergised MBA?',
        answer: 'A Work-Study-Work model where students work Mon–Fri and attend weekend classes, earning MBA + PGP while gaining 2 years of work experience.'
      }
    ],
    outcomes: [
      {
        question: 'What is the program outcome for GEMS B SCHOOL MBA?',
        answer: 'MBA + PGP Certification, 2 Years of Work Experience, Industry-Relevant Skills, and Global Career Pathways.'
      },
      {
        question: 'What are the specializations available in MBA - Global?',
        answer: 'HR, Marketing, Finance, and Business Analytics.'
      }
    ]
  }

  const faqCategories = [
    { key: 'programs', title: 'Programs', icon: QuestionMarkCircleIcon },
    { key: 'outcomes', title: 'Outcomes', icon: AcademicCapIcon }
  ]

  return (
    <main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
      <Helmet>
        <title>Study in India | Benchmark Educations</title>
        <meta name="description" content="Study in India programs including MBA - Global with SIM and GEMS B SCHOOL Industry Synergised MBA. Work-Study-Work pathways and international immersion."/>
        <link rel="canonical" href="https://www.benchmarkeducations.com/study-in-india"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Helmet>

      <section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
              Study in India
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
              Explore premier Indian MBA pathways with global immersion and work-integrated learning. Build international exposure while leveraging India’s academic excellence and industry networks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#mba-global" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
                Explore Programs
                <ArrowRightIcon className="ml-2 h-5 w-5"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section id="mba-global" title="MBA - Global (Bangalore University x SIM)" eyebrow="Program in a Nutshell">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
              <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Step into a world-class management journey that blends Indian academic rigor with global exposure. The MBA - Global program, offered under Bangalore University and powered by the Singapore Institute of Management (SIM), prepares students to become globally competent business leaders through immersive, industry-oriented learning.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-4">
                    <p className="font-semibold">University</p>
                    <p>Bangalore University</p>
                  </div>
                  <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-4">
                    <p className="font-semibold">Duration</p>
                    <p>2 Years</p>
                  </div>
                  <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-4">
                    <p className="font-semibold">Mode</p>
                    <p>Classroom</p>
                  </div>
                  <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-4">
                    <p className="font-semibold">Timing</p>
                    <p>9:00 AM - 4:00 PM</p>
                  </div>
                  <div className="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 p-4 sm:col-span-2">
                    <p className="font-semibold">Eligibility</p>
                    <p>UG Graduate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
              <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">The GLOBAL Advantage by SIM</h3>
                <BulletList items={simAdvantage} columns="grid-cols-1"/>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Program Highlights</h3>
            <BulletList items={mbaGlobalHighlights} columns="grid-cols-1"/>
          </div>
        </div>
      </Section>

      <Section id="gems" title="GEMS B SCHOOL - Industry Synergised MBA" eyebrow="Earn - Learn - Earn / Work - Study - Work Model" className="bg-slate-100 dark:bg-slate-800/50">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Program Highlights</h3>
            <BulletList items={gemsHighlights} columns="grid-cols-1"/>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
              <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">International Pathway Opportunities</h3>
                <BulletList items={pathwayUniversities} columns="grid-cols-1"/>
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-white dark:text-slate-300">Students can complete their first year in India and final year abroad. The International Pathway is optional and can be decided within one year of enrollment.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-1 bg-gradient-to-r from-purple-500 to-violet-500">
              <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Program Outcome</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• MBA + PGP Certification</li>
                  <li>• 2 Years of Work Experience</li>
                  <li>• Industry-Relevant Skills</li>
                  <li>• Global Career Pathways</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className='text-center' title="Start Your India Study Journey" eyebrow="Your future awaits">
        <div className="text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to pursue your education in India? Our expert team will guide you through admissions, pathways, and internships.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contactus" className="inline-flex items-center gap-2 rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
              <span>Get Started Now</span>
              <ArrowRightIcon className="h-5 w-5"/>
            </a>
          </div>
        </div>
      </Section>
    </main>
  )
}

export default StudyInIndia



import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import {
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  LightBulbIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  HomeIcon,
  DocumentTextIcon,
  IdentificationIcon,
  PaperAirplaneIcon,
  MapPinIcon,
  StarIcon,
  HeartIcon,
  BuildingOfficeIcon,
  ClockIcon,
  BookOpenIcon,
  TrophyIcon,
  ShieldCheckIcon,
  PlusIcon,
  MinusIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid';
import DubaiFlag from '../../assets/Images/DubaiFlag.png'

const data = {
	quickFacts: [
		{ label: 'Capital', value: 'Abu Dhabi' },
		{ label: 'Major City for Study', value: 'Dubai' },
		{ label: 'Currency', value: 'UAE Dirham (AED)' },
		{ label: 'Official Language', value: 'Arabic (English widely used)' },
		{ label: 'Population', value: 'Approx. 3.6 million (Dubai)' },
		{ label: 'Intakes', value: 'January, May, September' },
		{ label: 'Average Tuition Fees', value: 'AED 40,000 – AED 90,000 per year' },
		{ label: 'Living Expenses', value: 'AED 25,000 – AED 40,000 per year' },
		{ label: 'Post-Study Work Options', value: 'Internship, employment, long-term work visa opportunities' },
		{ label: 'Top Fields of Study', value: 'Business, IT, Engineering, Tourism, Architecture, Media' }
	],
	educationLevels: [
		'Foundation & Diploma Programs: For students transitioning to degree studies.',
		'Undergraduate Programs: 3 to 4 years.',
		'Postgraduate Programs (Master\'s / MBA): 1 to 2 years.',
		'Doctoral Programs (PhD): 3 to 5 years.'
	],
	qualifications: [
		'Undergraduate Degrees (BA, BSc, BBA, BEng)',
		'Postgraduate Degrees (MA, MSc, MBA, MEng)',
		'Doctoral Degrees (PhD, DBA)',
		'Diploma and Certificate Programs',
		'Foundation or Pathway Programs'
	],
	testRequirements: [
		'IELTS: 5.5 – 6.5 overall',
		'TOEFL: 70 – 90',
		'PTE Academic: 50 – 60',
		'MOI (Medium of Instruction Certificate): May be accepted for students who studied in English'
	],
	educationCosts: [
		{ level: 'Diploma / Foundation', cost: 'AED 30,000 – AED 50,000' },
		{ level: 'Undergraduate', cost: 'AED 40,000 – AED 70,000' },
		{ level: 'Postgraduate / MBA', cost: 'AED 55,000 – AED 90,000' },
		{ level: 'PhD / Doctorate', cost: 'AED 60,000 – AED 100,000' }
	],
	workRights: [
		'During Study: Students can work part-time up to 20 hours per week and full-time during breaks with a valid permit.',
		'After Study: Graduates can apply for long-term employment visas upon securing a job. The UAE also offers a Golden Visa for high-achieving graduates.'
	],
	intakes: [
		'January / February – Winter Intake: For most undergraduate & postgraduate programs.',
		'May / June – Summer Intake: Limited programs available.',
		'September / October – Main Intake: Major intake with widest range of courses & scholarships.'
	],
	topCourses: [
		'Business Management & Finance',
		'Engineering & Architecture',
		'Computer Science & Data Analytics',
		'Media, Communication & Design',
		'Hospitality & Tourism Management',
		'Healthcare & Life Sciences',
		'Artificial Intelligence & Robotics'
	],
	universities: [
		'Heriot-Watt University Dubai',
		'Middlesex University Dubai',
		'University of Birmingham Dubai',
		'Manipal Academy of Higher Education (MAHE Dubai)',
		'University of Wollongong Dubai',
		'Amity University Dubai',
		'Canadian University Dubai'
	],
	scholarships: [
		'Academic Excellence Scholarships (25% – 50%)',
		'Sports & Talent Scholarships',
		'Early Bird Discounts',
		'Alumni Scholarships'
	],
	whyStudyDubai: [
		'Globally accredited universities with international recognition',
		'Tax-free living and excellent career opportunities',
		'Modern learning facilities and infrastructure',
		'Multicultural environment and global exposure',
		'Abundant internship and work placement opportunities',
		'Safe and secure environment for international students'
	]
}

const faqData = {
	general: [
		{
			question: 'Why is Dubai a good destination for higher education?',
			answer: 'Dubai hosts globally accredited universities, offers international exposure, tax-free living, and abundant internship and career opportunities.'
		},
		{
			question: 'Are Dubai degrees recognized internationally?',
			answer: 'Yes. Many universities in Dubai are affiliated with top global institutions from the UK, USA, and Australia.'
		},
		{
			question: 'What is the medium of instruction in Dubai universities?',
			answer: 'Most programs are taught in English.'
		}
	],
	education: [
		{
			question: 'What are the entry requirements to study in Dubai?',
			answer: 'A recognized secondary school or bachelor\'s degree, English proficiency, valid passport, and academic transcripts.'
		},
		{
			question: 'How is the education system structured in Dubai?',
			answer: 'Dubai follows a globally integrated education system aligned with international standards, hosting prestigious universities from the UK, USA, Australia, and India.'
		},
		{
			question: 'What are the popular courses to study in Dubai?',
			answer: 'Business Management, Engineering, Computer Science, Media, Hospitality, Healthcare, and Artificial Intelligence.'
		}
	],
	eligibility: [
		{
			question: 'What English proficiency tests are accepted?',
			answer: 'IELTS (5.5-6.5), TOEFL (70-90), PTE Academic (50-60), and MOI certificates for students who studied in English.'
		},
		{
			question: 'Do I need to take entrance exams?',
			answer: 'Some institutions may require interviews or entrance assessments for specific programs like MBA or Engineering.'
		},
		{
			question: 'What documents are required for application?',
			answer: 'Academic transcripts, passport copy, English proficiency certificate, SOP, LORs, and resume (for postgraduate).'
		}
	],
	cost: [
		{
			question: 'What is the average cost of studying in Dubai?',
			answer: 'Tuition fees range between AED 40,000 – AED 90,000 per year, with living costs around AED 25,000 – AED 40,000 annually.'
		},
		{
			question: 'Are scholarships available for international students in Dubai?',
			answer: 'Yes. Universities offer merit-based and need-based scholarships ranging from 10% to 50%.'
		},
		{
			question: 'How can I reduce my cost of studying in Dubai?',
			answer: 'Apply early for scholarships, choose universities with lower fees, and work part-time during studies.'
		}
	],
	work: [
		{
			question: 'Can I work part-time while studying in Dubai?',
			answer: 'Yes. Students can work up to 20 hours per week with a valid work permit during semesters and full-time during breaks.'
		},
		{
			question: 'What are the post-study work options in Dubai?',
			answer: 'Graduates can apply for employment visas or Golden Visas for top-performing graduates.'
		},
		{
			question: 'What are the job opportunities after studying in Dubai?',
			answer: 'Graduates find opportunities in finance, IT, healthcare, engineering, hospitality, and business sectors.'
		}
	],
	applications: [
		{
			question: 'When can I apply to Dubai universities?',
			answer: 'Three major intakes: January/February (Winter), May/June (Summer), September/October (Main).'
		},
		{
			question: 'How far in advance should I apply?',
			answer: 'You should apply at least 6 months before your chosen intake to ensure smooth admission and visa process.'
		},
		{
			question: 'What is the application process like?',
			answer: 'Submit documents, pay application fees, attend interviews if required, receive offer letter, and apply for student visa.'
		}
	],
	visa: [
		{
			question: 'What type of visa is required to study in Dubai?',
			answer: 'A Student Visa is required for full-time study, which is usually sponsored by the university.'
		},
		{
			question: 'How long does it take to get a Dubai student visa?',
			answer: 'Usually 2–4 weeks after submission of complete application and required documents.'
		},
		{
			question: 'What are the basic requirements for a Dubai student visa?',
			answer: 'Offer letter from university, proof of funds, medical certificate, passport, and academic documents.'
		}
	],
	lifestyle: [
		{
			question: 'What kind of accommodation options are available?',
			answer: 'University accommodation, private apartments, shared apartments, and homestays are available.'
		},
		{
			question: 'How safe is Dubai for international students?',
			answer: 'Dubai is one of the safest cities in the world, known for strict laws and a multicultural environment.'
		},
		{
			question: 'How is student life in Dubai?',
			answer: 'Vibrant, multicultural, and full of opportunities to network and explore modern city life.'
		}
	],
	career: [
		{
			question: 'What are the top job sectors for international graduates?',
			answer: 'Finance, IT, Healthcare, Engineering, Hospitality, Business Management, and Media.'
		},
		{
			question: 'Can I get permanent residency after studying in Dubai?',
			answer: 'Yes. Through employment visas, Golden Visas, or long-term residency programs for high-achieving graduates.'
		}
	],
	support: [
		{
			question: 'How can your team help me study in Dubai?',
			answer: 'We offer end-to-end support including counselling, documentation, university selection, visa help, and accommodation assistance.'
		},
		{
			question: 'How do I start my Dubai study journey?',
			answer: 'Contact our counsellors for a personalized consultation to shortlist universities, apply for scholarships, and secure your visa.'
		}
	]
}

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

const FeatureCard = ({ icon: Icon, title, desc, color = "from-indigo-500 via-fuchsia-500 to-cyan-500" }) => (
	<motion.div whileHover={{ y: -6 }} whileTap={{ y: -1 }} className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500">
		<div className="rounded-[calc(1.5rem-2px)] h-full bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-100 dark:ring-slate-800">
			<div className="flex items-center gap-3">
				<div className="h-11 w-11 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 grid place-content-center shadow-lg">
					<Icon className="h-6 w-6 text-[#2782d8]"/>
				</div>
				<h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
			</div>
			<p className="mt-3 text-slate-600 dark:text-slate-300">{desc}</p>
		</div>
	</motion.div>
)

const QuickFactsTable = ({ facts }) => (
	<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
		<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
			<div className="grid gap-4">
				{facts.map((fact, idx) => (
					<div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
						<span className="font-semibold text-slate-900 dark:text-white">{fact.label}</span>
						<span className="text-slate-600 dark:text-slate-300">{fact.value}</span>
					</div>
				))}
			</div>
		</div>
	</div>
)

const CostTable = ({ costs }) => (
	<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
		<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
			<div className="grid gap-4">
				{costs.map((cost, idx) => (
					<div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
						<span className="font-semibold text-slate-900 dark:text-white">{cost.level}</span>
						<span className="text-slate-600 dark:text-slate-300">{cost.cost}</span>
					</div>
				))}
			</div>
		</div>
	</div>
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
				<div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-[#9546ef] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
					{isOpen ? (
						<MinusIcon className="h-5 w-5 text-white" />
					) : (
						<PlusIcon className="h-5 w-5 text-white" />
					)}
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

const FAQSection = ({ title, items, openItems, onToggle }) => (
	<div className="space-y-4">
		<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">{title}</h3>
		{items.map((item, idx) => (
			<FAQItem
				key={idx}
				question={item.question}
				answer={item.answer}
				isOpen={openItems.includes(idx)}
				onToggle={() => onToggle(idx)}
			/>
		))}
	</div>
)

const StudyInDubai = () => {
	const [openFAQItems, setOpenFAQItems] = useState({})
	const [activeFAQCategory, setActiveFAQCategory] = useState('general')

	const toggleFAQItem = (category, index) => {
		setOpenFAQItems(prev => ({
			...prev,
			[`${category}-${index}`]: !prev[`${category}-${index}`]
		}))
	}

	const faqCategories = [
		{ key: 'general', title: 'General Questions', icon: QuestionMarkCircleIcon },
		{ key: 'education', title: 'Education System & Courses', icon: BookOpenIcon },
		{ key: 'eligibility', title: 'Eligibility & Admission', icon: AcademicCapIcon },
		{ key: 'cost', title: 'Cost, Scholarships & Living', icon: CurrencyDollarIcon },
		{ key: 'work', title: 'Work & Post-Study Opportunities', icon: BriefcaseIcon },
		{ key: 'applications', title: 'Intakes & Applications', icon: ClockIcon },
		{ key: 'visa', title: 'Visa & Stay', icon: IdentificationIcon },
		{ key: 'lifestyle', title: 'Accommodation & Lifestyle', icon: HomeIcon },
		{ key: 'career', title: 'Career & Future Path', icon: RocketLaunchIcon },
		{ key: 'support', title: 'Counselling & Support', icon: UserGroupIcon }
	]

	return (
		<main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
			<Helmet>
				<title>Study in Dubai | Benchmark Educations</title>
				<meta name="description" content="Study in Dubai with Benchmark Educations. Get expert guidance for Dubai universities, visa assistance, scholarships, and career opportunities."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/study-in-dubai"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
			</Helmet>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
							Study in Dubai
						</h1>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							Dubai — a global hub for business, technology, and innovation — has rapidly emerged as one of the most popular study destinations for international students. With world-class infrastructure, globally accredited universities, and a thriving multicultural environment, Dubai offers the perfect blend of quality education and international exposure.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<BuildingOfficeIcon className="h-5 w-5 text-indigo-600"/>Innovation
							</span>
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-fuchsia-600"/>Global
							</span>
							<span className="flex items-center gap-2">
								<StarIcon className="h-5 w-5 text-cyan-600"/>Excellence
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600"/>Opportunity
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#education-system" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Dubai Education
								<ArrowRightIcon className="ml-2 h-5 w-5"/>
							</a>
							<a href="#faq" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 transition">
								View FAQ
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<Section title="Overview" eyebrow="Your Dubai education journey">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300  mx-auto leading-relaxed">
						Students in Dubai enjoy the advantage of earning internationally recognized degrees, often from top UK, US, Australian, and Indian universities that have branch campuses in the UAE. The city provides modern learning facilities, tax-free living, and excellent career opportunities, making it an ideal destination for higher education.
					</p>
				</div>
			</Section>

			{/* Quick Facts */}
			<Section title="Quick Facts" eyebrow="Essential information" id="quick-facts">
				<QuickFactsTable facts={data.quickFacts} />
			</Section>

			{/* Education System */}
			<Section title="Education System in Dubai" eyebrow="World-class standards" className="bg-slate-100 dark:bg-slate-800/50" id="education-system">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300 mx-auto leading-relaxed">
						Dubai follows a globally integrated education system aligned with international standards, hosting prestigious universities from the UK, USA, Australia, and India. Many institutions are located in Dubai International Academic City (DIAC) and Knowledge Park, offering students a vibrant academic environment with access to industry and innovation hubs.
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						  <div className="bg-white rounded-3xl p-8 h-full">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Education Levels</h3>
							<BulletList items={data.educationLevels} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Qualifications Offered</h3>
							<BulletList items={data.qualifications} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Test Requirements */}
			<Section title="Test Requirements" eyebrow="Language proficiency">
				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.testRequirements} columns="grid-cols-1 sm:grid-cols-2"/>
						<div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200 dark:border-amber-800">
							<p className="text-slate-700 dark:text-slate-300">
								<strong>Note:</strong> Some institutions may require interviews or entrance assessments for specific programs (like MBA or Engineering).
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Education Cost */}
			<Section title="Education Cost" eyebrow="Investment in your future" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid lg:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Tuition Fees by Level</h3>
						<CostTable costs={data.educationCosts} />
					</div>
					<div className="space-y-6">
						<div className="rounded-3xl p-1 bg-gradient-to-r from-emerald-500 to-teal-500">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Living Expenses</h4>
								<p className="text-slate-600 dark:text-slate-300">AED 25,000 – AED 40,000 annually (includes accommodation, transport, and meals)</p>
							</div>
						</div>
						<div className="rounded-3xl p-1 bg-gradient-to-r from-purple-500 to-[#8b5cf6]">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Application Timeline</h4>
								<p className="text-slate-600 dark:text-slate-300">Apply at least 6 months before your chosen intake to ensure smooth admission and visa process.</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Work Rights & Intakes */}
			<Section title="Work Rights & Intakes" eyebrow="Your opportunities">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 ">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Work Rights & Stay-Back Options</h3>
							<BulletList items={data.workRights} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Intakes in Dubai</h3>
							<BulletList items={data.intakes} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Top Courses & Universities */}
			<Section title="Top Courses & Universities" eyebrow="Excellence awaits" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 h-full rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Courses to Study in Dubai</h3>
							<BulletList items={data.topCourses} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Leading Universities in Dubai</h3>
							<BulletList items={data.universities} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Scholarships & Why Study Dubai */}
			<Section title="Scholarships & Why Study in Dubai" eyebrow="Your advantages">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 h-full rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Scholarships and Financial Aid</h3>
							<BulletList items={data.scholarships} columns="grid-cols-1"/>
							<div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
								<p className="text-[white] dark:text-slate-300">
									Our counsellors assist in identifying suitable scholarships and guiding through the application process.
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Why Study in Dubai?</h3>
							<BulletList items={data.whyStudyDubai} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQ Section */}
			<Section title="Frequently Asked Questions" eyebrow="Get your answers" id="faq" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Find answers to the most common questions about studying in Dubai. Can't find what you're looking for? Contact our experts for personalized guidance.
					</p>
				</div>
				
				<div className="mb-12">
					<div className="flex flex-wrap gap-3 justify-center">
						{faqCategories.map((category) => (
							<motion.button
								key={category.key}
								onClick={() => setActiveFAQCategory(category.key)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
									activeFAQCategory === category.key
										? 'bg-gradient-to-r from-indigo-500 to-[#9546ef] text-white shadow-lg'
										: 'bg-white text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-fuchsia-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 ring-1 ring-slate-200 dark:ring-slate-700'
								}`}
							>
								<category.icon className="h-5 w-5" />
								<span className="hidden sm:inline">{category.title}</span>
								<span className="sm:hidden">{category.title.split(' ')[0]}</span>
							</motion.button>
						))}
					</div>
				</div>
				
				<div className="space-y-4">
					{faqData[activeFAQCategory]?.map((item, idx) => (
						<FAQItem
							key={idx}
							question={item.question}
							answer={item.answer}
							isOpen={openFAQItems[`${activeFAQCategory}-${idx}`]}
							onToggle={() => toggleFAQItem(activeFAQCategory, idx)}
						/>
					))}
				</div>
			</Section>

			{/* CTA Section */}
			<Section className='text-center' title="Start Your Dubai Education Journey Today" eyebrow="Your future awaits">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Ready to pursue your education in Dubai? Our expert team is here to guide you through every step of your journey, from university selection to visa processing.
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

export default StudyInDubai
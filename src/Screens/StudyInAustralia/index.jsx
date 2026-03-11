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
import AustraliaFlag from '../../assets/Images/AustraliaFlag.png'

const data = {
	quickFacts: [
		{ label: 'Capital City', value: 'Canberra' },
		{ label: 'Major Cities', value: 'Sydney, Melbourne, Brisbane, Perth, Adelaide' },
		{ label: 'Currency', value: 'Australian Dollar (AUD)' },
		{ label: 'Official Language', value: 'English' },
		{ label: 'Population', value: 'Approx. 26 million' },
		{ label: 'Intakes', value: 'February, July, November' },
		{ label: 'Average Tuition Fees', value: 'AUD 20,000 – AUD 45,000 per year' },
		{ label: 'Living Expenses', value: 'AUD 21,000 – AUD 25,000 per year' },
		{ label: 'Post-Study Work Visa', value: '2–6 years (depending on qualification and location)' },
		{ label: 'Top Fields of Study', value: 'Business, IT, Engineering, Healthcare, Hospitality, Agriculture' }
	],
	educationLevels: [
		'Vocational Education and Training (VET): Certificate and Diploma programs (1–2 years)',
		'Undergraduate Programs: Bachelor\'s Degrees (3–4 years)',
		'Postgraduate Programs: Master\'s Degrees (1–2 years)',
		'Doctoral Programs (PhD): 3–5 years'
	],
	qualifications: [
		'Certificate & Diploma Courses',
		'Advanced Diploma & Associate Degrees',
		'Bachelor\'s Degrees (BA, BSc, BEng, BCom, BBA)',
		'Master\'s Degrees (MA, MSc, MBA, MEng)',
		'Doctoral Degrees (PhD, DBA)',
		'Foundation Programs & English Language Courses'
	],
	testRequirements: [
		'IELTS Academic: Overall score of 6.0–6.5 (no band less than 6.0)',
		'TOEFL iBT: 79–100',
		'PTE Academic: 58–65',
		'Cambridge Advanced (CAE): 169–176',
		'Duolingo English Test: 105+ (accepted by select universities)',
		'GMAT: Required for MBA programs (550+ score)',
		'GRE: May be required for certain postgraduate or research programs'
	],
	educationCosts: [
		{ level: 'Diploma / Certificate', cost: 'AUD 10,000 – 20,000' },
		{ level: 'Undergraduate', cost: 'AUD 20,000 – 35,000' },
		{ level: 'Postgraduate / MBA', cost: 'AUD 25,000 – 45,000' },
		{ level: 'PhD / Research', cost: 'AUD 20,000 – 40,000' }
	],
	workRights: [
		'During Study: Students can work up to 48 hours per fortnight during semesters and full-time during semester breaks.',
		'After Study: Graduates can apply for the Temporary Graduate Visa (Subclass 485) and stay for 2–6 years depending on their qualification and study location.'
	],
	intakes: [
		'February / March – Main Intake: Most popular; widest course options.',
		'July – Mid-Year Intake: Ideal for those who miss the main intake.',
		'November – Summer Intake: Available for limited programs/universities.'
	],
	topCourses: [
		'Business & Management',
		'Information Technology & Computer Science',
		'Engineering & Technology',
		'Healthcare & Medicine',
		'Hospitality & Tourism',
		'Agriculture & Environmental Science',
		'Education & Social Work',
		'Arts & Design'
	],
	universities: [
		'University of Melbourne',
		'Australian National University',
		'University of Sydney',
		'University of Queensland',
		'Monash University',
		'University of New South Wales',
		'University of Western Australia',
		'University of Adelaide'
	],
	scholarships: [
		'Australia Awards Scholarships',
		'Endeavour Scholarships and Fellowships',
		'University-Specific Merit Scholarships',
		'Research Training Program (RTP) Scholarships',
		'Destination Australia Program'
	],
	whyStudyAustralia: [
		'World-class universities with global recognition',
		'High academic standards and quality education',
		'Multicultural society and vibrant student life',
		'Excellent post-study work opportunities',
		'Strong economy with abundant career prospects',
		'Safe and welcoming environment for international students'
	]
}

const faqData = {
	general: [
		{
			question: 'Why is Australia a top study destination?',
			answer: 'Australia offers world-class education, globally ranked universities, diverse courses, and excellent post-study work options, making it one of the most preferred choices for international students.'
		},
		{
			question: 'Are Australian degrees globally recognized?',
			answer: 'Yes. Degrees from Australian universities are internationally recognized and valued by employers and institutions worldwide.'
		},
		{
			question: 'What is the medium of instruction in Australia?',
			answer: 'English is the primary language of instruction at all universities and colleges in Australia.'
		}
	],
	education: [
		{
			question: 'What are the English test requirements to study in Australia?',
			answer: 'Most universities require IELTS (6.0–6.5), TOEFL (79–100), or PTE (58–65). Some may accept Duolingo or MOI certificates for English-medium students.'
		},
		{
			question: 'How is the education system structured in Australia?',
			answer: 'Australia follows the Australian Qualifications Framework (AQF), which integrates all levels of education from school to university under one national policy, ensuring consistency and global recognition.'
		},
		{
			question: 'What are the popular courses to study in Australia?',
			answer: 'Business & Management, Information Technology & Computer Science, Engineering & Technology, Healthcare & Medicine, Hospitality & Tourism, Agriculture & Environmental Science, Education & Social Work, and Arts & Design.'
		}
	],
	eligibility: [
		{
			question: 'What English proficiency tests are accepted?',
			answer: 'IELTS Academic (6.0–6.5), TOEFL iBT (79–100), PTE Academic (58–65), Cambridge Advanced (CAE) (169–176), Duolingo English Test (105+), GMAT (550+ for MBA), and GRE for certain postgraduate programs.'
		},
		{
			question: 'Do I need to take entrance exams?',
			answer: 'GMAT is required for MBA programs (550+ score). GRE may be required for certain postgraduate or research programs. Students from English-medium institutions may qualify for English test waivers.'
		},
		{
			question: 'What documents are required for application?',
			answer: 'Academic transcripts, passport copy, English proficiency certificate, Statement of Purpose, Letters of Recommendation, and resume (for postgraduate).'
		}
	],
	cost: [
		{
			question: 'How much does it cost to study in Australia?',
			answer: 'Tuition fees range between AUD 20,000 – 45,000 per year, and living costs are around AUD 21,000 – 25,000 per year.'
		},
		{
			question: 'Are scholarships available for international students?',
			answer: 'Yes. The Australian Government and universities offer a wide range of scholarships based on merit and academic performance, including Australia Awards, Endeavour Scholarships, and university-specific merit scholarships.'
		},
		{
			question: 'How can I reduce my cost of studying in Australia?',
			answer: 'Apply early for scholarships, choose universities with lower fees, work part-time during studies, and explore government-funded programs like Destination Australia.'
		}
	],
	work: [
		{
			question: 'Can I work while studying in Australia?',
			answer: 'Yes. Students can work up to 48 hours per fortnight during semesters and full-time during breaks with a valid student visa.'
		},
		{
			question: 'What are the post-study work options in Australia?',
			answer: 'After graduation, students can apply for the Temporary Graduate Visa (Subclass 485) and stay for 2–6 years depending on their qualification and study location.'
		},
		{
			question: 'What are the job opportunities after studying in Australia?',
			answer: 'Graduates find opportunities in business, IT, healthcare, engineering, hospitality, agriculture, education, and creative industries across major cities.'
		}
	],
	applications: [
		{
			question: 'When can I apply to Australian universities?',
			answer: 'Three major intakes: February/March (Main), July (Mid-Year), November (Summer).'
		},
		{
			question: 'When should I apply to study in Australia?',
			answer: 'You should apply 8–10 months before your preferred intake to ensure timely admission, visa approval, and accommodation arrangements.'
		},
		{
			question: 'What is the application process like?',
			answer: 'Submit documents, pay application fees, attend interviews if required, receive offer letter, and apply for student visa.'
		}
	],
	visa: [
		{
			question: 'What type of visa is required to study in Australia?',
			answer: 'A Student Visa (Subclass 500) is required for full-time study in Australia.'
		},
		{
			question: 'How long does it take to get an Australian student visa?',
			answer: 'Usually 4–8 weeks after submission of complete application and required documents.'
		},
		{
			question: 'What are the basic requirements for an Australian student visa?',
			answer: 'Offer letter from university, proof of funds, health insurance (OSHC), passport, academic documents, and English proficiency certificate.'
		}
	],
	lifestyle: [
		{
			question: 'What kind of accommodation options are available?',
			answer: 'University accommodation, private apartments, shared housing, homestays, and purpose-built student accommodation are available.'
		},
		{
			question: 'How safe is Australia for international students?',
			answer: 'Australia is one of the safest and most welcoming countries, known for its inclusive communities and student-friendly policies.'
		},
		{
			question: 'How is student life in Australia?',
			answer: 'Vibrant, multicultural, and full of opportunities to network and explore diverse landscapes, from beaches to mountains, with excellent public transport and amenities.'
		}
	],
	career: [
		{
			question: 'What are the top job sectors for international graduates?',
			answer: 'Business, IT, Healthcare, Engineering, Hospitality, Agriculture, Education, and Creative Industries across major cities like Sydney, Melbourne, Brisbane, Perth, and Adelaide.'
		},
		{
			question: 'Can I get permanent residency after studying in Australia?',
			answer: 'Yes. Through skilled migration programs, employer sponsorship, or regional migration programs after gaining work experience.'
		}
	],
	support: [
		{
			question: 'How can your team help me study in Australia?',
			answer: 'We offer end-to-end support including counselling, documentation, university selection, visa help, accommodation assistance, and post-arrival support.'
		},
		{
			question: 'How do I start my Australia study journey?',
			answer: 'Contact our counsellors for a personalized consultation to shortlist universities, apply for scholarships, and secure your student visa.'
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

const StudyInAustralia = () => {
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
				<title>Study in Australia | Benchmark Educations</title>
				<meta name="description" content="Study in Australia with Benchmark Educations. Get expert guidance for Australian universities, visa assistance, scholarships, and career opportunities."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/study-in-australia"/>
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
							Study in Australia
						</h1>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							Australia stands among the top global education destinations, renowned for its world-class universities, vibrant student life, and post-study work opportunities. Known for its high academic standards and multicultural society, Australia offers students an ideal balance of education, lifestyle, and career growth.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<BuildingOfficeIcon className="h-5 w-5 text-indigo-600"/>Excellence
							</span>
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-fuchsia-600"/>Global
							</span>
							<span className="flex items-center gap-2">
								<StarIcon className="h-5 w-5 text-cyan-600"/>Quality
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600"/>Opportunity
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#education-system" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Australia Education
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
			<Section title="Overview" eyebrow="Your Australia education journey">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						With over 1,100 institutions and 22,000+ courses, students can pursue a wide variety of programs designed to enhance innovation, critical thinking, and global employability. Australian degrees are recognized worldwide, and the country is home to some of the best-ranked universities in the world, including the University of Melbourne, Australian National University, and University of Sydney.
					</p>
				</div>
			</Section>

			{/* Quick Facts */}
			<Section title="Quick Facts" eyebrow="Essential information" id="quick-facts">
				<QuickFactsTable facts={data.quickFacts} />
			</Section>

			{/* Education System */}
			<Section title="Education System in Australia" eyebrow="World-class standards" className="bg-slate-100 dark:bg-slate-800/50" id="education-system">
				<div className="text-left mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						Australia's education system is globally recognized for its quality, flexibility, and emphasis on research and innovation. It follows the Australian Qualifications Framework (AQF), which integrates all levels of education — from school to university — under one national policy, ensuring consistency and global recognition.
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
								<strong>Note:</strong> Students from English-medium institutions may qualify for English test waivers depending on university policy.
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
								<p className="text-slate-600 dark:text-slate-300">AUD 21,000 – 25,000 annually (includes housing, food, transport, and utilities)</p>
							</div>
						</div>
						<div className="rounded-3xl p-1 bg-gradient-to-r from-purple-500 to-[#8b5cf6]">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Application Timeline</h4>
								<p className="text-slate-600 dark:text-slate-300">Start applications 8–10 months in advance for your desired intake to secure admission and visa approval on time.</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Work Rights & Intakes */}
			<Section title="Work Rights & Intakes" eyebrow="Your opportunities">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white h-full dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Work Rights & Stay-Back Options</h3>
							<BulletList items={data.workRights} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Intakes in Australia</h3>
							<BulletList items={data.intakes} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Top Courses & Universities */}
			<Section title="Top Courses & Universities" eyebrow="Excellence awaits" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Courses to Study in Australia</h3>
							<BulletList items={data.topCourses} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Universities in Australia</h3>
							<BulletList items={data.universities} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Scholarships & Why Study Australia */}
			<Section title="Scholarships & Why Study in Australia" eyebrow="Your advantages">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Scholarships & Financial Aid</h3>
							<BulletList items={data.scholarships} columns="grid-cols-1"/>
							<div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
								<p className="text-white dark:text-slate-300">
									Our counsellors assist in identifying suitable scholarships and guiding through the application process.
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Why Study in Australia?</h3>
							<BulletList items={data.whyStudyAustralia} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQ Section */}
			<Section title="Frequently Asked Questions" eyebrow="Get your answers" id="faq" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Find answers to the most common questions about studying in Australia. Can't find what you're looking for? Contact our experts for personalized guidance.
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
			<Section className='text-center' title="Start Your Australia Education Journey Today" eyebrow="Your future awaits">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Ready to pursue your education in Australia? Our expert team is here to guide you through every step of your journey, from university selection to visa processing.
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

export default StudyInAustralia

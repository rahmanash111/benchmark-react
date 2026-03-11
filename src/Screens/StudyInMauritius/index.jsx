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
import MauritiusFlag from '../../assets/Images/mauritiusFlag.png'

const data = {
	quickFacts: [
		{ label: 'Capital City', value: 'Port Louis' },
		{ label: 'Currency', value: 'Mauritian Rupee (MUR)' },
		{ label: 'Official Languages', value: 'English and French' },
		{ label: 'Population', value: 'Approx. 1.3 million' },
		{ label: 'Intakes', value: 'February, July, September' },
		{ label: 'Average Tuition Fees', value: 'USD 3,000 – USD 8,000 per year' },
		{ label: 'Living Expenses', value: 'USD 3,000 – USD 5,000 per year' },
		{ label: 'Post-Study Work Visa', value: '2 years (for eligible graduates)' },
		{ label: 'Top Fields of Study', value: 'Business, IT, Hospitality, Engineering, Medicine, Law' }
	],
	educationLevels: [
		'Diploma and Foundation Programs: 1–2 years',
		'Undergraduate Degrees (Bachelor\'s): 3–4 years',
		'Postgraduate Degrees (Master\'s / MBA): 1–2 years',
		'Doctoral Programs (PhD): 3–5 years'
	],
	qualifications: [
		'Diploma and Advanced Diploma Programs',
		'Bachelor\'s Degrees (BA, BSc, BEng, BBA)',
		'Postgraduate Degrees (MA, MSc, MBA)',
		'Doctoral Degrees (PhD, DBA)',
		'Foundation and Pathway Programs'
	],
	testRequirements: [
		'IELTS: 5.5 – 6.5 overall',
		'TOEFL iBT: 60 – 90',
		'PTE Academic: 50 – 60',
		'MOI (Medium of Instruction Certificate): Accepted in most universities if prior education was in English'
	],
	educationCosts: [
		{ level: 'Diploma', cost: 'USD 2,000 – 4,000' },
		{ level: 'Undergraduate', cost: 'USD 3,000 – 6,000' },
		{ level: 'Postgraduate / MBA', cost: 'USD 5,000 – 8,000' },
		{ level: 'PhD / Doctorate', cost: 'USD 6,000 – 9,000' }
	],
	workRights: [
		'During Study: International students can work up to 20 hours per week during semesters and full-time during holidays with a valid student visa.',
		'After Study: Graduates are eligible to apply for a 2-year post-study work visa to gain professional experience in Mauritius. Students can also transition to long-term employment permits if hired by Mauritian or international companies.'
	],
	intakes: [
		'February – Main Intake: Most programs available.',
		'July – Mid-Year Intake: Ideal for late applicants.',
		'September / October – Fall Intake: For select programs and universities.'
	],
	topCourses: [
		'Business & Management',
		'Computer Science & Artificial Intelligence',
		'Engineering & Technology',
		'Medicine & Healthcare',
		'Hospitality & Tourism Management',
		'Law & International Relations',
		'Finance & Accounting'
	],
	universities: [
		'University of Mauritius (UoM)',
		'Middlesex University Mauritius',
		'Curtin University Mauritius',
		'Anna Medical College',
		'Amity Institute of Higher Education',
		'University of Technology Mauritius',
		'Open University of Mauritius'
	],
	scholarships: [
		'Mauritius-Africa Scholarship Scheme (Government-funded)',
		'Institutional Merit Scholarships',
		'Early Bird Discounts',
		'International Student Bursaries'
	],
	whyStudyMauritius: [
		'Globally recognized UK-affiliated degrees',
		'Affordable tuition and living costs',
		'Safe, friendly, and English-speaking environment',
		'Multicultural society and tropical lifestyle',
		'Easy visa process and post-study work opportunities',
		'Pathway options to the UK, Australia, and France'
	]
}

const faqData = {
	general: [
		{
			question: 'Why is Mauritius an ideal destination for higher education?',
			answer: 'Mauritius offers globally recognized degrees, affordable education, and a safe multicultural environment — all while providing career opportunities and a tropical lifestyle.'
		},
		{
			question: 'Are degrees from Mauritian universities recognized internationally?',
			answer: 'Yes. Many Mauritian institutions are affiliated with globally reputed universities from the UK, India, and Australia, making their degrees internationally accepted.'
		},
		{
			question: 'What is the medium of instruction?',
			answer: 'English is the primary language of instruction, with French commonly used in everyday communication.'
		}
	],
	education: [
		{
			question: 'What are the entry requirements to study in Mauritius?',
			answer: 'Students generally need academic transcripts, a valid passport, proof of English proficiency (IELTS/TOEFL/MOI), and a completed application form.'
		},
		{
			question: 'How is the education system structured in Mauritius?',
			answer: 'Mauritius follows a British-based education system, ensuring that qualifications are internationally recognized. The higher education sector includes public and private universities, technical institutes, and international branch campuses offering globally accredited programs.'
		},
		{
			question: 'What are the popular courses to study in Mauritius?',
			answer: 'Business & Management, Computer Science & Artificial Intelligence, Engineering & Technology, Medicine & Healthcare, Hospitality & Tourism Management, Law & International Relations, and Finance & Accounting.'
		}
	],
	eligibility: [
		{
			question: 'What English proficiency tests are accepted?',
			answer: 'IELTS (5.5–6.5), TOEFL iBT (60–90), PTE Academic (50–60), and MOI certificates for students who studied in English.'
		},
		{
			question: 'Do I need to take entrance exams?',
			answer: 'No additional entrance exams are required for most programs except for Medicine or Law, which may have specific eligibility criteria.'
		},
		{
			question: 'What documents are required for application?',
			answer: 'Academic transcripts, passport copy, English proficiency certificate, and completed application form.'
		}
	],
	cost: [
		{
			question: 'What is the cost of studying in Mauritius?',
			answer: 'Tuition fees range from USD 3,000 to 8,000 per year, with living expenses between USD 3,000 to 5,000 per year.'
		},
		{
			question: 'Are scholarships available for international students?',
			answer: 'Yes. Mauritius offers government and institutional scholarships to meritorious and deserving students, including Mauritius-Africa Scholarship Scheme, Institutional Merit Scholarships, Early Bird Discounts, and International Student Bursaries.'
		},
		{
			question: 'How can I reduce my cost of studying in Mauritius?',
			answer: 'Apply early for scholarships, choose universities with lower fees, work part-time during studies, and explore government-funded programs.'
		}
	],
	work: [
		{
			question: 'Can I work while studying in Mauritius?',
			answer: 'Yes. International students can work up to 20 hours per week during semesters and full-time during holidays.'
		},
		{
			question: 'What are the post-study work options?',
			answer: 'Graduates can apply for a 2-year post-study work visa, and those employed by Mauritian companies can extend to a work permit or residence visa.'
		},
		{
			question: 'What are the job opportunities after studying in Mauritius?',
			answer: 'Graduates find opportunities in business, IT, healthcare, engineering, hospitality, law, and finance sectors, with many international companies having operations in Mauritius.'
		}
	],
	applications: [
		{
			question: 'When can I apply to Mauritian universities?',
			answer: 'Three major intakes: February (Main), July (Mid-Year), September/October (Fall).'
		},
		{
			question: 'When should I apply to universities in Mauritius?',
			answer: 'It\'s best to apply 4–6 months before your preferred intake to secure your admission, visa, and accommodation.'
		},
		{
			question: 'What is the application process like?',
			answer: 'Submit documents, pay application fees, attend interviews if required, receive offer letter, and apply for student visa.'
		}
	],
	visa: [
		{
			question: 'What type of visa is required to study in Mauritius?',
			answer: 'A Student Visa is required for full-time study in Mauritius.'
		},
		{
			question: 'How long does it take to get a Mauritian student visa?',
			answer: 'Usually 2–4 weeks after submission of complete application and required documents.'
		},
		{
			question: 'What are the basic requirements for a Mauritian student visa?',
			answer: 'Offer letter from university, proof of funds, passport, academic documents, and English proficiency certificate.'
		}
	],
	lifestyle: [
		{
			question: 'What kind of accommodation options are available?',
			answer: 'University accommodation, private apartments, shared housing, homestays, and purpose-built student accommodation are available.'
		},
		{
			question: 'Is Mauritius safe for international students?',
			answer: 'Yes. Mauritius is one of the safest countries in Africa, known for its political stability and welcoming community.'
		},
		{
			question: 'How is student life in Mauritius?',
			answer: 'Vibrant, multicultural, and full of opportunities to explore tropical beaches, mountains, and diverse cultural experiences with excellent infrastructure.'
		}
	],
	career: [
		{
			question: 'What are the top job sectors for international graduates?',
			answer: 'Business, IT, Healthcare, Engineering, Hospitality, Law, and Finance sectors, with many international companies having operations in Mauritius.'
		},
		{
			question: 'Can I get permanent residency after studying in Mauritius?',
			answer: 'Yes. Through employment visas, work permits, or residence visas after gaining work experience and meeting specific criteria.'
		}
	],
	support: [
		{
			question: 'How can your team help me study in Mauritius?',
			answer: 'We offer end-to-end support including counselling, documentation, university selection, visa help, accommodation assistance, and post-arrival support.'
		},
		{
			question: 'How do I start my Mauritius study journey?',
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

const StudyInMauritius = () => {
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
				<title>Study in Mauritius | Benchmark Educations</title>
				<meta name="description" content="Study in Mauritius with Benchmark Educations. Get expert guidance for Mauritian universities, visa assistance, scholarships, and career opportunities."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/study-in-mauritius"/>
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
							Study in Mauritius
						</h1>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							Mauritius, known for its world-class education and tropical island lifestyle, is one of the fastest-growing international education hubs in Africa. Offering high-quality education at affordable costs, Mauritius combines academic excellence with a safe, welcoming, and multicultural environment.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<BuildingOfficeIcon className="h-5 w-5 text-indigo-600"/>Affordable
							</span>
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-fuchsia-600"/>Global
							</span>
							<span className="flex items-center gap-2">
								<StarIcon className="h-5 w-5 text-cyan-600"/>Excellence
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600"/>Tropical
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#education-system" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Mauritius Education
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
			<Section title="Overview" eyebrow="Your Mauritius education journey">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						The country is home to globally reputed universities and international campuses from the UK, France, India, and Australia, offering globally recognized degrees. English and French are widely spoken, making it easy for international students to adapt. With its stable economy, advanced infrastructure, and career opportunities, Mauritius provides a perfect platform for students seeking a global education experience with an island advantage.
					</p>
				</div>
			</Section>

			{/* Quick Facts */}
			<Section title="Quick Facts" eyebrow="Essential information" id="quick-facts">
				<QuickFactsTable facts={data.quickFacts} />
			</Section>

			{/* Education System */}
			<Section title="Education System in Mauritius" eyebrow="World-class standards" className="bg-slate-100 dark:bg-slate-800/50" id="education-system">
				<div className="text-left mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						Mauritius follows a British-based education system, ensuring that qualifications are internationally recognized and accepted worldwide. The higher education sector includes public and private universities, technical institutes, and international branch campuses offering globally accredited programs. Mauritius' education system emphasizes innovation, employability, and practical training, preparing students for successful global careers.
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
				
				<div className="rounded-3xl p-1 bg-gradient-to-r from-emerald-500 to-teal-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
						<p className="text-slate-700 dark:text-slate-300 text-center">
							<strong>Note:</strong> Many institutions are affiliated with UK and Indian universities, enabling students to earn dual or transnational degrees at lower costs.
						</p>
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
								<strong>Note:</strong> No additional entrance exams are required for most programs except for Medicine or Law, which may have specific eligibility criteria.
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
								<p className="text-slate-600 dark:text-slate-300">USD 3,000 – 5,000 annually (includes accommodation, transport, food, and personal costs)</p>
							</div>
						</div>
						<div className="rounded-3xl p-1 bg-gradient-to-r from-purple-500 to-[#8b5cf6]">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Application Timeline</h4>
								<p className="text-slate-600 dark:text-slate-300">Apply at least 6 months before the preferred intake to ensure smooth admission and visa processing.</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Work Rights & Intakes */}
			<Section title="Work Rights & Intakes" eyebrow="Your opportunities">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Work Rights & Stay-Back Options</h3>
							<BulletList items={data.workRights} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Intakes in Mauritius</h3>
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
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Courses to Study in Mauritius</h3>
							<BulletList items={data.topCourses} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Universities in Mauritius</h3>
							<BulletList items={data.universities} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Scholarships & Why Study Mauritius */}
			<Section title="Scholarships & Why Study in Mauritius" eyebrow="Your advantages">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white h-full dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Scholarships & Financial Aid</h3>
							<BulletList items={data.scholarships} columns="grid-cols-1"/>
							<div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
								<p className="text-white dark:text-slate-300">
									Our counsellors assist in finding the best scholarship options and guide you through the application process.
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Why Study in Mauritius?</h3>
							<BulletList items={data.whyStudyMauritius} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQ Section */}
			<Section title="Frequently Asked Questions" eyebrow="Get your answers" id="faq" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Find answers to the most common questions about studying in Mauritius. Can't find what you're looking for? Contact our experts for personalized guidance.
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
			<Section className='text-center' title="Start Your Mauritius Education Journey Today" eyebrow="Your future awaits">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Ready to pursue your education in Mauritius? Our expert team is here to guide you through every step of your journey, from university selection to visa processing.
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

export default StudyInMauritius

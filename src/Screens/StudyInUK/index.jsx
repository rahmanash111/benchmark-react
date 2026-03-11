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
import heroImg from '../../assets/Images/hero_bg.webp'

const data = {
	quickFacts: [
		{ label: 'Capital City', value: 'London' },
		{ label: 'Official Language', value: 'English' },
		{ label: 'Currency', value: 'Pound Sterling (£)' },
		{ label: 'Population', value: 'Approx. 68 million' },
		{ label: 'International Students', value: 'Over 600,000 annually' },
		{ label: 'Top Intakes', value: 'January, May, September' },
		{ label: 'Post-Study Work Visa', value: '2 Years (UG/PG), 3 Years (PhD)' },
		{ label: 'Average Tuition Fees', value: '£10,000 – £25,000 per year' },
		{ label: 'Living Expenses', value: '£10,000 – £12,000 per year' },
		{ label: 'Popular Courses', value: 'Business, IT, Engineering, Law, Medicine, Marketing' }
	],
	educationLevels: [
		'Undergraduate (Bachelor\'s Degree): Typically 3 years (4 years in Scotland)',
		'Postgraduate (Master\'s Degree): Usually 1 year',
		'Doctoral Programs (PhD): 3–4 years',
		'Foundation and Diploma Courses: Pathways to degree programs for international students'
	],
	qualifications: [
		'Undergraduate Degrees (BA, BSc, BEng, LLB)',
		'Postgraduate Degrees (MA, MSc, MBA, LLM)',
		'Doctoral Degrees (PhD, DPhil)',
		'Foundation Programs & Diplomas',
		'Higher National Diplomas (HND)',
		'Pre-Masters & Language Preparation Courses'
	],
	testRequirements: [
		'IELTS: Overall score 6.0–6.5 (no band less than 5.5)',
		'TOEFL iBT: 80–100',
		'PTE Academic: 56–65',
		'Duolingo English Test: 105–120 (accepted by selected universities)',
		'GMAT: 550+ (for MBA/Management programs where applicable)'
	],
	educationCosts: [
		{ level: 'Undergraduate Programs', cost: '£10,000 – £20,000 per year' },
		{ level: 'Postgraduate Programs', cost: '£12,000 – £25,000 per year' },
		{ level: 'MBA Programs', cost: '£20,000 – £40,000 per year' },
		{ level: 'PhD / Research Programs', cost: '£15,000 – £25,000 per year' }
	],
	workRights: [
		'While Studying: Students can work up to 20 hours per week during term time and full-time during holidays.',
		'After Graduation (Graduate Route Visa): 2 years stay-back after completing a Bachelor\'s or Master\'s degree, 3 years for PhD graduates.'
	],
	intakes: [
		'September / October – Main Intake: Largest number of programs & scholarships.',
		'January / February – Mid-Year Intake: Ideal for students who miss main intake.',
		'May / June – Limited Intake: Available for select courses/universities.'
	],
	topCourses: [
		'Business Management & Finance',
		'Computer Science & Artificial Intelligence',
		'Engineering & Technology',
		'Law & International Relations',
		'Medicine & Healthcare',
		'Media, Marketing & Communication',
		'Hospitality & Tourism Management'
	],
	universities: [
		'University of Oxford',
		'University of Cambridge',
		'University College London (UCL)',
		'University of Edinburgh',
		'King\'s College London',
		'University of Manchester',
		'University of Birmingham'
	],
	scholarships: [
		'Chevening Scholarships (UK Government)',
		'Commonwealth Scholarships',
		'GREAT Scholarships (British Council)',
		'University-specific Merit Awards',
		'Need-based Financial Grants'
	],
	whyStudyUK: [
		'Globally recognized, prestigious qualifications',
		'Research-driven and innovative education',
		'Internship and work placement opportunities',
		'Post-study work visa (Graduate Route)',
		'Multicultural and inclusive campus life',
		'Shorter course durations — save time and cost'
	]
}

const faqData = {
	general: [
		{
			question: 'Why should I choose the UK for higher education?',
			answer: 'The UK is home to some of the world\'s top-ranked universities known for academic excellence, innovation, and global recognition. It offers a rich multicultural environment, shorter course durations, and strong post-study work opportunities through the Graduate Route Visa.'
		},
		{
			question: 'What are the key benefits of studying in the UK?',
			answer: 'Globally recognized degrees; High-quality education and research opportunities; Shorter duration programs; Internship and work placement options; Multicultural and safe environment; 2–3 years post-study work visa.'
		},
		{
			question: 'Is the UK degree recognized globally?',
			answer: 'Yes. Degrees from UK universities are highly respected and recognized worldwide, giving graduates a competitive edge in global job markets.'
		}
	],
	education: [
		{
			question: 'How is the UK education system structured?',
			answer: 'The UK system emphasizes independent learning and analytical skills. It consists of Undergraduate (3 years), Postgraduate (1 year), Doctoral (3–4 years), and Foundation/Diploma Courses for international students.'
		},
		{
			question: 'What are the popular courses to study in the UK?',
			answer: 'Business Management, Engineering, Computer Science, Medicine, Law, Marketing, Media, Hospitality, and Tourism.'
		},
		{
			question: 'Do UK universities offer practical exposure or internships?',
			answer: 'Yes. Most programs integrate internships, live projects, and research opportunities to ensure students gain real-world experience.'
		}
	],
	eligibility: [
		{
			question: 'What are the general eligibility requirements to study in the UK?',
			answer: 'Recognized secondary (for UG) or bachelor\'s degree (for PG), English proficiency, SOP, LORs, and academic transcripts.'
		},
		{
			question: 'Do I need to take an English proficiency test?',
			answer: 'Yes, most universities require IELTS, TOEFL, PTE, or Duolingo scores. Some universities waive this requirement if you\'ve studied in English.'
		},
		{
			question: 'What is the minimum IELTS score required?',
			answer: 'Generally, universities require an overall IELTS score of 6.0–6.5, with no band less than 5.5.'
		},
		{
			question: 'Is GMAT required for MBA in the UK?',
			answer: 'It depends on the university. Some top business schools require a GMAT score (around 550+), while others consider professional experience.'
		}
	],
	cost: [
		{
			question: 'How much does it cost to study in the UK?',
			answer: 'Undergraduate: £10,000–£20,000; Postgraduate: £12,000–£25,000; MBA: £20,000–£40,000; PhD: £15,000–£25,000. Living: £10,000–£12,000 per year.'
		},
		{
			question: 'Are scholarships available for international students?',
			answer: 'Yes. Chevening, Commonwealth, GREAT, and University-specific scholarships are available.'
		},
		{
			question: 'How can I reduce my cost of studying in the UK?',
			answer: 'Apply early for scholarships, choose universities outside London, and work part-time during studies.'
		}
	],
	work: [
		{
			question: 'Can I work while studying in the UK?',
			answer: 'Yes. International students can work up to 20 hours per week during term time and full-time during holidays.'
		},
		{
			question: 'What is the Graduate Route Visa?',
			answer: 'It allows students to stay and work for 2 years after UG/PG or 3 years after PhD.'
		},
		{
			question: 'Can I extend my stay after the Graduate Route Visa?',
			answer: 'Yes, by applying for a Skilled Worker Visa with an approved employer.'
		},
		{
			question: 'What are the job opportunities after studying in the UK?',
			answer: 'Graduates find jobs in finance, IT, healthcare, engineering, marketing, and management sectors.'
		}
	],
	applications: [
		{
			question: 'When can I apply to UK universities?',
			answer: 'Three major intakes: September/October (Main), January/February (Mid-Year), May/June (Limited).'
		},
		{
			question: 'How far in advance should I apply?',
			answer: 'Start your application 6–9 months before your preferred intake.'
		},
		{
			question: 'What documents are needed to apply?',
			answer: 'Transcripts, Passport, English score, SOP, LORs, Resume (for PG).'
		}
	],
	visa: [
		{
			question: 'What type of visa is required to study in the UK?',
			answer: 'A Student Route Visa (Tier 4) is required for full-time study.'
		},
		{
			question: 'How long does it take to get a UK student visa?',
			answer: 'Usually 3–6 weeks after submission of a complete application.'
		},
		{
			question: 'What are the basic requirements for a UK student visa?',
			answer: 'CAS from a UK university, proof of funds, English proficiency, and valid passport.'
		}
	],
	lifestyle: [
		{
			question: 'What kind of accommodation options are available?',
			answer: 'University halls (on-campus) and private accommodation (shared flats/studios).'
		},
		{
			question: 'Is the UK safe for international students?',
			answer: 'Yes. The UK is one of the safest countries for international students with strong campus safety systems.'
		},
		{
			question: 'How is student life in the UK?',
			answer: 'Vibrant, multicultural, and full of opportunities to network and explore.'
		}
	],
	career: [
		{
			question: 'What are the top job sectors for international graduates?',
			answer: 'Finance, IT, Healthcare, Engineering, Marketing, Business Management.'
		},
		{
			question: 'Can I get permanent residency (PR) after studying in the UK?',
			answer: 'Yes. After 5 years of work under a Skilled Worker Visa, you can apply for Indefinite Leave to Remain (ILR).'
		}
	],
	support: [
		{
			question: 'How can your team help me study in the UK?',
			answer: 'We offer end-to-end support including counselling, documentation, SOP/LOR guidance, visa help, and accommodation assistance.'
		},
		{
			question: 'How do I start my UK study journey?',
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

const StudyInUK = () => {
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
				<title>Study in the United Kingdom (UK) | Benchmark Educations</title>
				<meta name="description" content="Study in the UK with Benchmark Educations. Get expert guidance for UK universities, visa assistance, scholarships, and career opportunities."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/study-in-uk"/>
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
							Study in the United Kingdom (UK)
						</h1>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							The United Kingdom has long been a global leader in education, research, and innovation. With its world-class universities, centuries-old academic traditions, and multicultural environment, the UK continues to attract ambitious students from around the world.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<AcademicCapIcon className="h-5 w-5 text-indigo-600"/>Excellence
							</span>
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-fuchsia-600"/>Global
							</span>
							<span className="flex items-center gap-2">
								<StarIcon className="h-5 w-5 text-cyan-600"/>Prestige
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600"/>Opportunity
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#education-system" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore UK Education
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
			<Section title="Overview" eyebrow="Your UK education journey">
				<div className="text-left mb-4">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						UK degrees are internationally recognized, combining academic excellence with practical, career-oriented learning. Whether you want to study business, technology, healthcare, or the arts, the UK provides the perfect balance of academic rigor, global exposure, and personal growth.
					</p>
				</div>
			</Section>

			{/* Quick Facts */}
			<Section title="Quick Facts" eyebrow="Essential information" id="quick-facts">
				<QuickFactsTable facts={data.quickFacts} />
			</Section>

			{/* Education System */}
			<Section title="About UK Education System" eyebrow="World-class standards" className="bg-slate-100 dark:bg-slate-800/50" id="education-system">
				<div className="text-left mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
						The UK education system is globally admired for its high academic standards and research-based approach. It encourages independent thinking, analytical skills, and hands-on learning — ensuring students are well-prepared for the professional world.
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
								<strong>Note:</strong> Some universities waive English proficiency tests if previous education was in English.
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
								<p className="text-slate-600 dark:text-slate-300">£10,000 – £12,000 per year (depending on city and lifestyle)</p>
							</div>
						</div>
						<div className="rounded-3xl p-1 bg-gradient-to-r from-purple-500 to-[#8b5cf6]">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Application Timeline</h4>
								<p className="text-slate-600 dark:text-slate-300">Apply 6–9 months in advance for best chances at admission and scholarships.</p>
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
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Intakes in the UK</h3>
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
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Top Courses to Study in the UK</h3>
							<BulletList items={data.topCourses} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Leading Universities in the UK</h3>
							<BulletList items={data.universities} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Scholarships & Why Study UK */}
			<Section title="Scholarships & Why Study in UK" eyebrow="Your advantages">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Scholarships and Financial Aid</h3>
							<BulletList items={data.scholarships} columns="grid-cols-1"/>
							<div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
								<p className="text-[white] dark:text-slate-300">
									Our experts guide you in identifying and applying for scholarships that suit your profile.
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Why Study in the UK?</h3>
							<BulletList items={data.whyStudyUK} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQ Section */}
			<Section title="Frequently Asked Questions" eyebrow="Get your answers" id="faq" className="bg-slate-100 text-center dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Find answers to the most common questions about studying in the UK. Can't find what you're looking for? Contact our experts for personalized guidance.
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
			<Section className='text-center' title="Start Your UK Education Journey Today" eyebrow="Your future awaits">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Ready to pursue your education in the UK? Our expert team is here to guide you through every step of your journey, from university selection to visa processing.
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

export default StudyInUK

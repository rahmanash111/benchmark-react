import React from 'react'
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
	BuildingOfficeIcon
} from '@heroicons/react/24/solid';
import heroImg from '../../assets/Images/hero_bg.webp'
import DubaiFlag from '../../assets/Images/DubaiFlag.png'
import mauritiusFlag from '../../assets/Images/mauritiusFlag.png'
import UkFlag from '../../assets/Images/UkFlag.png'
import AustraliaFlag from '../../assets/Images/AustraliaFlag.png'
import SingaporeFlag from '../../assets/Images/singaporeFlag.png'
import placementconsulting from '../../assets/Images/placement-consulting.webp'

const data = {
	whyStudyAbroad: [
		'Global Exposure: Experience international learning environments and multicultural classrooms.',
		'Career Advantage: Gain qualifications recognized worldwide and access global job markets.',
		'Personal Growth: Develop independence, adaptability, and cross-cultural understanding.',
		'Networking Opportunities: Build valuable connections with global peers and professionals.'
	],
	destinations: [
		{
			name: 'Dubai',
			description: 'A dynamic international education hub offering world-class universities, affordable tuition, and excellent employment opportunities. Students gain exposure to global business and innovation in one of the world\'s fastest-growing cities.',
			icon: DubaiFlag,
			color: 'from-amber-500 to-orange-600'
		},
		{
			name: 'Singapore',
			description: 'Known for academic excellence and safety, Singapore offers globally recognized degrees with strong industry connections — the perfect blend of quality education and cultural diversity close to home.',
			icon: SingaporeFlag,
			color: 'from-red-500 to-pink-600'
		},
		{
			name: 'Australia',
			description: 'A global leader in research and innovation, Australia offers hands-on learning, a vibrant student lifestyle, and post-study work options, making it one of the most preferred study destinations worldwide.',
			icon: AustraliaFlag,
			color: 'from-green-500 to-emerald-600'
		},
		{
			name: 'United Kingdom',
			description: 'Home to some of the world\'s oldest and most prestigious universities, the UK offers a perfect mix of academic rigor, global exposure, and multicultural experience — ideal for shaping successful international careers.',
			icon: UkFlag,
			color: 'from-blue-500 to-indigo-600'
		},
		{
			name: 'Mauritius',
			description: 'A fast-emerging education destination offering quality British-based degrees in a tropical setting. Students benefit from affordable tuition, safe surroundings, and excellent international exposure.',
			icon: mauritiusFlag,
			color: 'from-purple-500 to-violet-600'
		}
	],
	services: [
		'Career Counselling: Discover the right course and destination based on your goals.',
		'University Selection: Apply to globally recognized universities in your preferred country.',
		'Application Assistance: Get expert help in preparing error-free, impactful applications.',
		'Scholarship Guidance: Learn about available scholarships and financial aid options.',
		'Visa & Travel Support: Smooth processing and complete travel assistance.',
		'Accommodation Support: Find safe and convenient housing near your campus.'
	],
	whyChooseUs: [
		'Extensive experience in global education consulting.',
		'Trusted tie-ups with leading universities across multiple countries.',
		'Personalized counselling and transparent guidance.',
		'Proven track record of successful student placements.'
	]
}

const Section = ({ id, title, eyebrow, children, className = "" }) => (
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
					<CheckBadgeIcon className="h-4 w-4" />
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
					<Icon className="h-6 w-6 text-[#2782d8]" />
				</div>
				<h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
			</div>
			<p className="mt-3 text-slate-600 dark:text-slate-300">{desc}</p>
		</div>
	</motion.div>
)

const DestinationCard = ({ destination }) => {
	const isUK = destination.name === 'United Kingdom';
	const isDubai = destination.name === 'Dubai';
	const isSingapore = destination.name === 'Singapore';
	const isAustralia = destination.name === 'Australia';
	const isMauritius = destination.name === 'Mauritius';

	// Assign link dynamically
	const destinationLink = isUK
		? '/study-in-uk'
		: isDubai
			? '/study-in-dubai'
			: isSingapore
				? '/study-in-singapore'
				: isAustralia
					? '/study-in-australia'
					: isMauritius
						? '/study-in-mauritius'
						: null;

	return (
		<motion.div
			whileHover={{ y: -6 }}
			whileTap={{ y: -1 }}
			className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500"
		>
			{destinationLink ? (
				// Clickable card for UK and Dubai
				<a href={destinationLink} className="block h-full">
					<div className="rounded-[calc(1.5rem-2px)] h-full bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-100 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
						<div className="flex items-center gap-3 mb-4">
							<img
								src={destination.icon}
								alt={`${destination.name} flag`}
								className="h-11 w-11 rounded-2xl object-contain"
							/>
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
								{destination.name}
							</h3>
						</div>
						<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
							{destination.description}
						</p>
						<div className="mt-4 flex items-center text-indigo-600 font-medium">
							<span>Learn More</span>
							<ArrowRightIcon className="ml-2 h-4 w-4" />
						</div>
					</div>
				</a>
			) : (
				// Normal non-clickable card for others
				<div className="rounded-[calc(1.5rem-2px)] h-full bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-100 dark:ring-slate-800">
					<div className="flex items-center gap-3 mb-4">
						<img
							src={destination.icon}
							alt={`${destination.name} flag`}
							className="h-11 w-11 rounded-2xl object-contain"
						/>
						<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
							{destination.name}
						</h3>
					</div>
					<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
						{destination.description}
					</p>
				</div>
			)}
		</motion.div>
	);
};


const StudyAbroad = () => {
	return (
		<main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
			<Helmet>
				<title>Study Abroad | Benchmark Educations</title>
				<meta name="description" content="Study abroad with confidence at Benchmark Educations. Expert guidance for global education, university selection, visa assistance, and career counseling." />
				<link rel="canonical" href="https://www.benchmarkeducations.com/study-abroad" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
			</Helmet>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
							Study Abroad with Confidence
						</h1>
						<h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
							Your Global Education Journey Starts Here
						</h2>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							Dreaming of studying overseas? We make it happen. Our expert team guides you to explore top-ranked universities, diverse programs, and life-changing experiences across the world. From course selection to visa assistance, we ensure a smooth and successful journey toward your international education goals.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-indigo-600" />Explore
							</span>
							<span className="flex items-center gap-2">
								<AcademicCapIcon className="h-5 w-5 text-fuchsia-600" />Learn
							</span>
							<span className="flex items-center gap-2">
								<RocketLaunchIcon className="h-5 w-5 text-cyan-600" />Grow
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600" />Succeed
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#destinations" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Destinations
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Why Study Abroad Section */}
			<Section title="Why Study Abroad?" eyebrow="Transform your future">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						Studying abroad is not just about earning a degree — it's an experience that transforms your life, expands your career possibilities, and builds your confidence on a global stage.
					</p>
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mt-4">
						Here's why students choose to study overseas:
					</p>
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.whyStudyAbroad} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>

			{/* Top Study Destinations */}
			<Section id="destinations" title="Top Study Destinations" eyebrow="Explore the world" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{data.destinations.map((destination, index) => (
						<DestinationCard key={index} destination={destination} />
					))}
				</div>
			</Section>

			{/* Our Services */}
			<Section title="Our Services" eyebrow="Complete support">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						We provide comprehensive support throughout your study abroad journey, ensuring you have everything you need for a successful international education experience.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<FeatureCard icon={UserGroupIcon} title="Career Counselling" desc="Discover the right course and destination based on your goals." />
					<FeatureCard icon={AcademicCapIcon} title="University Selection" desc="Apply to globally recognized universities in your preferred country." />
					<FeatureCard icon={DocumentTextIcon} title="Application Assistance" desc="Get expert help in preparing error-free, impactful applications." />
					<FeatureCard icon={CurrencyDollarIcon} title="Scholarship Guidance" desc="Learn about available scholarships and financial aid options." />
					<FeatureCard icon={IdentificationIcon} title="Visa & Travel Support" desc="Smooth processing and complete travel assistance." />
					<FeatureCard icon={HomeIcon} title="Accommodation Support" desc="Find safe and convenient housing near your campus." />
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Complete Service List</h3>
						<BulletList items={data.services} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>

			{/* Why Choose Us */}
			<Section title="Why Choose Us?" eyebrow="Your trusted partner" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						With years of experience and a proven track record, we are your trusted partner in making your study abroad dreams a reality.
					</p>
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.whyChooseUs} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>

			{/* CTA Section */}
			<Section className='text-center' title="Start Your Global Education Journey Today" eyebrow="Your future awaits">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Don't let your dreams of studying abroad remain just dreams. Take the first step towards your global education journey with Benchmark Educations. Our expert team is ready to guide you every step of the way.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a href="/contactus" className="inline-flex items-center gap-2 rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
							<span>Get Started Now</span>
							<ArrowRightIcon className="h-5 w-5" />
						</a>
					</div>
				</div>
			</Section>
		</main>
	)
}

export default StudyAbroad



export const PlacementConsulting = () => {
	return (
		<main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
			<Helmet>
				<title>Placement Consulting | Benchmark Educations</title>
				<meta name="description" content="Study abroad with confidence at Benchmark Educations. Expert guidance for global education, university selection, visa assistance, and career counseling." />
				<link rel="canonical" href="https://www.benchmarkeducations.com/placement-consulting" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
			</Helmet>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
							Bridging Talent with Opportunity Through Placement Support
						</h1>
						{/* <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
							Your Global Education Journey Starts Here
						</h2> */}
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							At Benchmark Education, we bridge talent and opportunity with expert placement support and industry-focused career preparation.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<GlobeAltIcon className="h-5 w-5 text-indigo-600" />Explore
							</span>
							<span className="flex items-center gap-2">
								<AcademicCapIcon className="h-5 w-5 text-fuchsia-600" />Learn
							</span>
							<span className="flex items-center gap-2">
								<RocketLaunchIcon className="h-5 w-5 text-cyan-600" />Grow
							</span>
							<span className="flex items-center gap-2">
								<BriefcaseIcon className="h-5 w-5 text-emerald-600" />Succeed
							</span>
						</div>
						{/* <div className="flex flex-wrap justify-center gap-4">
							<a href="#destinations" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Destinations
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</a>
						</div> */}
					</div>
				</div>
			</section>

			{/* Why Study Abroad Section */}
			<Section title="" eyebrow="">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						Benchmark Education offers expert placement consulting with placement training programs, job placement assistance, and career counseling services. We provide resume building support, mock interview preparation, and connect students with hiring companies to ensure successful career opportunities and faster job placement outcomes.
					</p>
					{/* <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mt-4">
						Here's why students choose to study overseas:
					</p> */}
				</div>

				{/* <div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.whyStudyAbroad} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div> */}
			</Section>

			{/* Top Study Destinations */}
			{/* <Section id="destinations" title="Top Study Destinations" eyebrow="Explore the world" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{data.destinations.map((destination, index) => (
						<DestinationCard key={index} destination={destination} />
					))}
				</div>
			</Section> */}

			{/* Our Services */}
			{/* <Section title="Our Services" eyebrow="Complete support">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						We provide comprehensive support throughout your study abroad journey, ensuring you have everything you need for a successful international education experience.
					</p>
				</div>
				
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<FeatureCard icon={UserGroupIcon} title="Career Counselling" desc="Discover the right course and destination based on your goals."/>
					<FeatureCard icon={AcademicCapIcon} title="University Selection" desc="Apply to globally recognized universities in your preferred country."/>
					<FeatureCard icon={DocumentTextIcon} title="Application Assistance" desc="Get expert help in preparing error-free, impactful applications."/>
					<FeatureCard icon={CurrencyDollarIcon} title="Scholarship Guidance" desc="Learn about available scholarships and financial aid options."/>
					<FeatureCard icon={IdentificationIcon} title="Visa & Travel Support" desc="Smooth processing and complete travel assistance."/>
					<FeatureCard icon={HomeIcon} title="Accommodation Support" desc="Find safe and convenient housing near your campus."/>
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Complete Service List</h3>
						<BulletList items={data.services} columns="grid-cols-1 sm:grid-cols-2"/>
					</div>
				</div>
			</Section> */}

			{/* Why Choose Us */}
			<Section title="Our Placement Services" eyebrow="" className="bg-slate-100 dark:bg-slate-800/50">

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={['Build ATS-friendly resumes with resume optimization services to improve job search success and visibility.', 'Practice with experts using mock interview training to boost confidence and improve interview performance skills', 'Access top opportunities through job placement assistance and reliable placement support for faster career growth.', 'Get expert advice with career guidance services to choose the right career path confidently.', 'Gain practical experience through internship opportunities programs to build skills and enhance employability quickly.']} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>


			{/* Why Choose Us */}
			<Section title="Placement Training Process" eyebrow="" className="bg-slate-100 dark:bg-slate-800/50">

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={['Evaluate strengths using skill assessment tests to identify gaps and improve job readiness effectively.', 'Create professional profiles with resume preparation services to attract recruiters and increase hiring chances.', 'Enhance performance through interview training programs to build confidence and crack real job interviews.', 'Connect with employers using company matching services to find suitable job roles based on skills.', 'Receive end-to-end help with placement support services to secure job offers and start your career.']} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>


			{/* Why Choose Us */}
			<Section title="Why Choose Benchmark Education" eyebrow="" className="bg-slate-100 dark:bg-slate-800/50">

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={['Learn with industry aligned training designed to match current job market trends and employer expectations.', 'Get support from a placement support team focused on guiding you through every stage of hiring.', 'Prepare with real interview practice sessions to handle actual interview scenarios confidently and successfully.', 'Access opportunities through our hiring partner network connecting students with top companies and recruiters.', 'Benefit from proven placement support ensuring consistent job opportunities and successful career placements for students.']} columns="grid-cols-1 sm:grid-cols-2" />
					</div>
				</div>
			</Section>

			{/* CTA Section */}
			<Section className='text-center' title="" eyebrow="Your future awaits">
				<div className="text-center">
					{/*	<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Don't let your dreams of studying abroad remain just dreams. Take the first step towards your global education journey with Benchmark Educations. Our expert team is ready to guide you every step of the way.
					</p>*/}
					<div className="flex flex-wrap justify-center gap-4">
						<a href="/contactus" className="inline-flex items-center gap-2 rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
							<span>Get Started Now</span>
							<ArrowRightIcon className="h-5 w-5" />
						</a>
					</div>
				</div>
			</Section>
		</main>
	)
}
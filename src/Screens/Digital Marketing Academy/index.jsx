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
  CodeBracketIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/solid';
import heroImg from '../../assets/Images/DigitalMarketingAcdmy.jpg'
import pdfIcon from '../../assets/Images/pdficon.svg'
import digitalMarketingImg from "../../assets/Images/digitalMarketingImg.webp";
import bvocDigitalMarketingImg from "../../assets/hero/B.Voc.webp";
import CounsellingForm from '../../Components/CounsellingForm';

const data = {
	programHighlights: [
		'AI-Integrated Curriculum',
		'Hands-on Live Campaigns and Real Projects',
		'5-Months Practical + 1-Month Internship',
		'Creative Design Training in Photoshop, Illustrator, CorelDRAW and Canva',
		'Portfolio Development and Certifications',
		'Placement Assistance and Career Mentorship'
	],
	modules: [
		'Introduction to Digital Marketing and AI',
		'Website Creation and Landing Page Optimization',
		'Content Marketing and Copywriting',
		'SEO and Keyword Research with AI Tools',
		'SEM - Google Ads and Meta Ads',
		'Social Media Marketing and AI Content Tools',
		'Email Marketing and Marketing Automation',
		'Influencer and Affiliate Marketing',
		'Web Analytics and Performance Optimization',
		'Capstone Project and Internship'
	],
	outcomes: 'By the end of this program, learners gain a complete digital marketing and design portfolio, real-world client experience, and confidence to work in the marketing industry.',
	whyUs: [
		'AI-Integrated Curriculum: Learn to use AI tools that redefine marketing strategy, content creation, and graphic design.',
		'Expert Mentorship: Get trained by experienced marketing professionals, creative directors, and digital strategists.',
		'Real-Time Practice:  Work on live client campaigns, design projects, and analytics tools.',
		'Career-Focused Learning: Resume building, interview training, and placement support included.',
		'Flexible Learning Modes: Online, offline, or hybrid options for your convenience.',
		'Global Certifications: Receive recognized credentials to boost your career prospects.'
	],
	careerSupport: [
		'1-Month Internship with Live Projects',
		'Resume and LinkedIn Profile Optimization',
		'Interview Coaching and Soft-Skill Training',
		'Job Placement Assistance'
	],
	careerRoles: [
		'Digital Marketing Executive',
		'SEO / SEM Specialist',
		'Social Media Manager',
		'Performance Marketing Analyst',
		'Content Strategist',
		'AI Marketing Automation Expert'
	],
	tools: {
		'AI Tools': ['ChatGPT', 'Jasper AI', 'Copy.ai', 'Canva AI', 'MidJourney'],
		'SEO & Analytics': ['Google Analytics', 'SEMrush', 'SurferSEO', 'Moz'],
		'Social Media': ['Meta Business Suite', 'LinkedIn Ads', 'YouTube Studio'],
		'Automation & CRM': ['HubSpot AI', 'Hootsuite', 'Buffer', 'Zoho CRM', 'Mailchimp'],
		'Design & Video': ['Canva', 'Adobe Express', 'InVideo', 'Pictory'],
		'Project Tools': ['Notion', 'Trello', 'Google Workspace']
	},
	addOnModules: [
		{
			title: 'Neuro Digital Marketing',
			description: 'Behaviour psychology, neuromarketing tactics, ethical persuasion, practical use cases.',
			duration: '4 Weeks',
			icon: LightBulbIcon
		},
		{
			title: 'Advanced Excel',
			description: 'Data analysis, pivot tables, dashboards, lookups, intro to automation.',
			duration: '3 Weeks',
			icon: ChartBarIcon
		},
		{
			title: 'Web Development',
			description: 'HTML/CSS fundamentals, responsive design basics, launching a simple site.',
			duration: '4 Weeks',
			icon: CodeBracketIcon
		}
	]
}


const data1 = {
	programHighlights: [
		'AI-Integrated Curriculum',
		'Hands-on Live Campaigns and Real Projects',
		'5-Months Practical + 1-Month Internship',
		'Portfolio Development & Certifications',
		'Placement Assistance and Career Mentorship'
	],
	modules: [
		'Introduction to Digital Marketing & AI',
		'Website Creation & Landing Page Optimization',
		'Content Marketing & Copywriting',
		'SEO and Keyword Research with AI Tools',
		'SEM - Google Ads & Meta Ads',
		'Social Media Marketing & AI Content Tools',
		'Email Marketing & Marketing Automation',
		'Influencer & Affiliate Marketing',
		'Web Analytics & Performance Optimization',
		'Capstone Project & Internship'
	],
	outcomes: 'By the end of this program, learners gain a complete digital marketing and design portfolio, real-world client experience, and confidence to work in the marketing industry.',
	whyUs: [
		'AI-Integrated Curriculum: Learn to use AI tools that redefine marketing strategy, content creation, and graphic design.',
		'Expert Mentorship: Get trained by experienced marketing professionals, creative directors, and digital strategists.',
		'Real-Time Practice:  Work on live client campaigns, design projects, and analytics tools.',
		'Career-Focused Learning: Resume building, interview training, and placement support included.',
		'Flexible Learning Modes: Online, offline, or hybrid options for your convenience.',
		'Global Certifications: Receive recognized credentials to boost your career prospects.'
	],
	careerSupport: [
		'1-Month Internship with Live Projects',
		'Resume and LinkedIn Profile Optimization',
		'Interview Coaching and Soft-Skill Training',
		'Job Placement Assistance'
	],
	careerRoles: [
		'Digital Marketing Executive',
		'SEO / SEM Specialist',
		'Social Media Manager',
		'Performance Marketing Analyst',
		'Content Strategist',
		'AI Marketing Automation Expert'
	],
	tools: {
		'AI Tools': ['ChatGPT', 'Jasper AI', 'Copy.ai', 'Canva AI', 'MidJourney'],
		'SEO & Analytics': ['Google Analytics', 'SEMrush', 'SurferSEO', 'Moz'],
		'Social Media': ['Meta Business Suite', 'LinkedIn Ads', 'YouTube Studio'],
		'Automation & CRM': ['HubSpot AI', 'Hootsuite', 'Buffer', 'Zoho CRM', 'Mailchimp'],
		'Design & Video': ['Canva', 'Adobe Express', 'InVideo', 'Pictory'],
		'Project Tools': ['Notion', 'Trello', 'Google Workspace']
	},
	addOnModules: [
		{
			title: 'Neuro Digital Marketing',
			description: 'Behaviour psychology, neuromarketing tactics, ethical persuasion, practical use cases.',
			duration: '4 Weeks',
			icon: LightBulbIcon
		},
		{
			title: 'Advanced Excel',
			description: 'Data analysis, pivot tables, dashboards, lookups, intro to automation.',
			duration: '3 Weeks',
			icon: ChartBarIcon
		},
		{
			title: 'Web Development',
			description: 'HTML/CSS fundamentals, responsive design basics, launching a simple site.',
			duration: '4 Weeks',
			icon: CodeBracketIcon
		}
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
					<CheckBadgeIcon className="h-4 w-4"/>
				</span>
				<span className="leading-relaxed">{item}</span>
			</li>
		))}
	</ul>
)

const FeatureCard = ({ icon: Icon, title, desc }) => (
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

const AddOnModuleCard = ({ module }) => {
	const Icon = module.icon;
	return (
		<motion.div 
			whileHover={{ y: -6 }} 
			whileTap={{ y: -1 }} 
			className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500"
		>
			<div className="rounded-[calc(1.5rem-2px)] h-full bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-100 dark:ring-slate-800">
				<div className="flex items-start gap-4">
					<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 text-white grid place-content-center shadow-lg flex-shrink-0">
						<Icon className="h-6 w-6"/>
					</div>
					<div className="flex-1">
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-lg font-semibold text-slate-900 dark:text-white">{module.title}</h3>
							<span className="text-xs whitespace-nowrap font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
								{module.duration}
							</span>
						</div>
						<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{module.description}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

const DigitalMarketingAcademy = () => {
	const [openForm, setOpenForm] = useState(false);

	return (
		<main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
			<Helmet>
				<title>BVOC Digital Marketing | Benchmark Educations</title>
				<meta name="description" content="AI-integrated Digital Marketing Academy by Benchmark Educations. Live campaigns, internship, placement support, and global certifications."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/bvoc-digital-marketing"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
			</Helmet>

			<CounsellingForm isopenForm={openForm} setOpenForm={setOpenForm} />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
							Digital Marketing Academy
						</h1>
						<h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
							Empowering the Next Generation of AI-Driven Marketers
						</h2>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							Learn AI-powered digital marketing and creative design with hands-on projects, internship, and job-ready portfolio.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<LightBulbIcon className="h-5 w-5 text-indigo-600"/>Learn
							</span>
							<span className="flex items-center gap-2">
								<CodeBracketIcon className="h-5 w-5 text-fuchsia-600"/>Create
							</span>
							<span className="flex items-center gap-2">
								<SparklesIcon className="h-5 w-5 text-cyan-600"/>Innovate
							</span>
							<span className="flex items-center gap-2">
								<RocketLaunchIcon className="h-5 w-5 text-emerald-600"/>Lead
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#program" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Program
								<ArrowRightIcon className="ml-2 h-5 w-5"/>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<Section title="About Us" eyebrow="Where Digital Meets Intelligence">
				<div className="grid lg:grid-cols-2 gap-12 ">
					<div>
						<p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
							 Benchmark Education’s AI-Integrated Digital Marketing & Creative Graphic Designing program combines cutting-edge AI tools with practical training in SEO, social media marketing, paid advertising, and creative design. Students gain real-world experience through live projects, portfolio development, and a structured internship.
						</p>
						<p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
							The program equips learners with future-ready skills to excel in digital marketing, branding, and design roles globally.
						</p>
						<div className="space-y-6">
							<div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-200 dark:border-indigo-800">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Vision</h3>
								<p className="text-slate-700 dark:text-slate-300"> To empower students with AI-driven digital marketing and creative design skills, creating industry-ready professionals for global opportunities.</p>
							</div>
							<div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-200 dark:border-fuchsia-800">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Mission</h3>
								<p className="text-slate-700 dark:text-slate-300"> Deliver practical training, hands-on projects, and internships to build strong portfolios and future-ready skills in AI-powered marketing and design.</p>
							</div>
						</div>
					</div>
					<div className="relative">
						<img src={bvocDigitalMarketingImg} alt="Digital Marketing Academy" className="w-full rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 object-cover"/>
						<div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-2xl"></div>
					</div>
				</div>
			</Section>

			{/* Program Section */}
			<Section id="program" title="Redefining Digital Marketing and Creative Design with AI – 6 Months" eyebrow="5 Months Practical + 1 Month Internship" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						A complete professional program that transforms you into a certified AI-powered digital marketer and creative designer. This course covers all aspects of digital marketing and graphic design, from fundamentals to advanced AI-driven analytics, helping you stay ahead in a data-driven business world. 
					</p>
				</div>
				
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<FeatureCard icon={SparklesIcon} title="AI-Integrated" desc="Master cutting-edge AI tools for research, content creation, and design optimization."/>
					<FeatureCard icon={RocketLaunchIcon} title="Live Projects" desc="Run real campaigns, create real designs, and build a job-ready portfolio with impact."/>
					<FeatureCard icon={AcademicCapIcon} title="Internship and Mentors" desc="Work with mentors, gain internship exposure, and receive interview guidance."/>
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Program Highlights</h3>
						<BulletList items={data.programHighlights} columns="grid-cols-1 sm:grid-cols-2"/>
					</div>
				</div>
			</Section>

			{/* Modules Section */}
			<Section title="Modules Covered" eyebrow="From fundamentals to growth">
				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.modules} columns="grid-cols-1 sm:grid-cols-2"/>
						<div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
							<h4 className="text-lg font-semibold text-white dark:text-white mb-3">Outcome</h4>
							<p className="text-white ">{data.outcomes}</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Add-on Modules Section */}
			<Section title="Add-on Modules" eyebrow="Enhance your skills" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						Expand your expertise with our specialized add-on modules. These complementary courses are designed to give you a competitive edge in the digital marketing landscape.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{data.addOnModules.map((module, index) => (
						<AddOnModuleCard key={index} module={module} />
					))}
				</div>
			</Section>

			{/* Why Choose Us */}
			<Section title="Why Choose Benchmark Educations" eyebrow="Designed for outcomes">
				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data.whyUs} columns="grid-cols-1 sm:grid-cols-2"/>
					</div>
				</div>
			</Section>

			{/* Career Development */}
			<Section title="Internship & Career Development" eyebrow="Launch your career">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
						At Benchmark Educations, we don't just teach. We help you launch your career. Our Career Development Cell ensures every student gains real-world exposure and placement opportunities in leading firms.
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Career Support Includes</h3>
							<BulletList items={data.careerSupport} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Career Roles You Can Pursue</h3>
							<BulletList items={data.careerRoles} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Tools Section */}
			<Section title="Tools You'll Master" eyebrow="Real tools, real work" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Object.entries(data.tools).map(([category, tools], index) => (
						<div key={category} className="rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category}</h3>
								<div className="flex flex-wrap gap-2">
									{tools.map((tool, idx) => (
										<span key={idx} className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700">
											{tool}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* CTA Section */}
			<Section className='text-center' title="Join Benchmark Educations Today" eyebrow="Step into the future">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Step into the future of digital marketing with Benchmark Educations LLP — where innovation meets opportunity. Our programs are built to turn your creativity into career success. Start your journey with us and become a certified AI-driven digital marketer.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a href="/contactus" className="inline-flex items-center gap-2 rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
							<span>Enroll Now</span>
							<ArrowRightIcon className="h-5 w-5"/>
						</a>
						<button 
							onClick={() => setOpenForm(true)}
							className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 transition text-slate-900 dark:text-white"
						>
							<span>Talk to a Counselor</span>
							<UserGroupIcon className="h-5 w-5"/>
						</button>
					</div>
				</div>
			</Section>
		</main>
	)
}

export default DigitalMarketingAcademy



export const DigitalMarketingAcademy2 = () => {
	const [openForm, setOpenForm] = useState(false);

	return (
		<main className="min-h-screen w-full bg-slate-50 dark:bg-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui' }}>
			<Helmet>
				<title>Digital Marketing Academy | Benchmark Educations</title>
				<meta name="description" content="AI-integrated Digital Marketing Academy by Benchmark Educations. Live campaigns, internship, placement support, and global certifications."/>
				<link rel="canonical" href="https://www.benchmarkeducations.com/digital-marketing-academy"/>
				
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
			</Helmet>

			<CounsellingForm isopenForm={openForm} setOpenForm={setOpenForm} />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 dark:from-indigo-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-4">Benchmark Educations LLP</p>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white text-balance mb-6">
							Digital Marketing Academy
						</h1>
						<h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
							Empowering the Next Generation of AI-Driven Marketers
						</h2>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
							At Benchmark Educations LLP, we help learners master the digital world through innovation, creativity, and technology. We are a leading Digital Marketing Academy in Kerala & Chennai, offering programs that blend traditional marketing foundations with AI-powered digital tools.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-slate-700 dark:text-slate-300 mb-12">
							<span className="flex items-center gap-2">
								<LightBulbIcon className="h-5 w-5 text-indigo-600"/>Learn
							</span>
							<span className="flex items-center gap-2">
								<CodeBracketIcon className="h-5 w-5 text-fuchsia-600"/>Create
							</span>
							<span className="flex items-center gap-2">
								<SparklesIcon className="h-5 w-5 text-cyan-600"/>Innovate
							</span>
							<span className="flex items-center gap-2">
								<RocketLaunchIcon className="h-5 w-5 text-emerald-600"/>Lead
							</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="#program" className="inline-flex items-center justify-center rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
								Explore Program
								<ArrowRightIcon className="ml-2 h-5 w-5"/>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<Section title="About Us" eyebrow="Where Digital Meets Intelligence">
				<div className="grid lg:grid-cols-2 gap-12 ">
					<div>
						<p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
							Benchmark Educations LLP is a premier institute focused on delivering industry-relevant, AI-integrated digital marketing education. Our programs are designed by marketing experts to combine strategic thinking, hands-on practice, and advanced tools that shape you into a job-ready digital professional.
						</p>
						<p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
							We believe in learning by doing — every learner works on live projects, campaigns, and analytics tools to gain real-world exposure.
						</p>
						<div className="space-y-6">
							<div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-200 dark:border-indigo-800">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Vision</h3>
								<p className="text-slate-700 dark:text-slate-300"> To build a generation of marketing innovators who drive growth using data, creativity, and technology.</p>
							</div>
							<div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-indigo-200 dark:border-fuchsia-800">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Mission</h3>
								<p className="text-slate-700 dark:text-slate-300"> To provide affordable, practical, and globally competitive digital marketing education powered by AI tools and modern learning methods.</p>
							</div>
						</div>
					</div>
					<div className="relative">
						<img src={digitalMarketingImg} alt="Digital Marketing Academy" className="w-full rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 object-cover"/>
						<div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-2xl"></div>
					</div>
				</div>
			</Section>

			{/* Program Section */}
			<Section id="program" title="Advanced AI-Integrated Digital Marketing Program – 6 Months" eyebrow="5 Months Practical + 1 Month Internship" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						A complete professional program that transforms you into a certified AI-powered digital marketer. This course covers all aspects of digital marketing, from fundamentals to advanced AI-driven analytics, helping you stay ahead in a data-driven business world.
					</p>
				</div>
				
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<FeatureCard icon={SparklesIcon} title="AI-Integrated" desc="Master cutting-edge AI tools for research, content, and optimization."/>
					<FeatureCard icon={RocketLaunchIcon} title="Live Projects" desc="Run real campaigns and build a job-ready portfolio with impact."/>
					<FeatureCard icon={AcademicCapIcon} title="Internship and Mentors" desc="Work with mentors, gain internship exposure and interview guidance."/>
				</div>

				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Program Highlights</h3>
						<BulletList items={data1.programHighlights} columns="grid-cols-1 sm:grid-cols-2"/>
					</div>
				</div>
			</Section>

			{/* Modules Section */}
			<Section title="Modules Covered" eyebrow="From fundamentals to growth">
				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data1.modules} columns="grid-cols-1 sm:grid-cols-2"/>
						<div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800">
							<h4 className="text-lg font-semibold text-white dark:text-white mb-3">Outcome</h4>
							<p className="text-white ">{data1.outcomes}</p>
						</div>
					</div>
				</div>
			</Section>

			{/* Add-on Modules Section */}
			<Section title="Add-on Modules" eyebrow="Enhance your skills" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="text-center mb-12">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
						Expand your expertise with our specialized add-on modules. These complementary courses are designed to give you a competitive edge in the digital marketing landscape.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{data1.addOnModules.map((module, index) => (
						<AddOnModuleCard key={index} module={module} />
					))}
				</div>
			</Section>

			{/* Why Choose Us */}
			<Section title="Why Choose Benchmark Educations" eyebrow="Designed for outcomes">
				<div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500">
					<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
						<BulletList items={data1.whyUs} columns="grid-cols-1 sm:grid-cols-2"/>
					</div>
				</div>
			</Section>

			{/* Career Development */}
			<Section title="Internship & Career Development" eyebrow="Launch your career">
				<div className="text-left mb-8">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
						At Benchmark Educations, we don't just teach. We help you launch your career. Our Career Development Cell ensures every student gains real-world exposure and placement opportunities in leading firms.
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-3xl p-1">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Career Support Includes</h3>
							<BulletList items={data1.careerSupport} columns="grid-cols-1"/>
						</div>
					</div>
					<div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
						<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-8">
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Career Roles You Can Pursue</h3>
							<BulletList items={data1.careerRoles} columns="grid-cols-1"/>
						</div>
					</div>
				</div>
			</Section>

			{/* Tools Section */}
			<Section title="Tools You'll Master" eyebrow="Real tools, real work" className="bg-slate-100 dark:bg-slate-800/50">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Object.entries(data1.tools).map(([category, tools], index) => (
						<div key={category} className="rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500">
							<div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-4px)] p-6">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category}</h3>
								<div className="flex flex-wrap gap-2">
									{tools.map((tool, idx) => (
										<span key={idx} className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700">
											{tool}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* CTA Section */}
			<Section className='text-center' title="Join Benchmark Educations Today" eyebrow="Step into the future">
				<div className="text-center">
					<p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
						Step into the future of digital marketing with Benchmark Educations LLP — where innovation meets opportunity. Our programs are built to turn your creativity into career success. Start your journey with us and become a certified AI-driven digital marketer.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a href="/contactus" className="inline-flex items-center gap-2 rounded-2xl bg-[#1c48dc] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl dark:bg-white dark:text-slate-900 transition">
							<span>Enroll Now</span>
							<ArrowRightIcon className="h-5 w-5"/>
						</a>
						<button 
							onClick={() => setOpenForm(true)}
							className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 transition text-slate-900 dark:text-white"
						>
							<span>Talk to a Counselor</span>
							<UserGroupIcon className="h-5 w-5"/>
						</button>
					</div>
				</div>
			</Section>
		</main>
	)
}
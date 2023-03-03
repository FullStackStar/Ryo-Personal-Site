import emoji from "react-easy-emoji";

export const greetings = {
	name: "Shabir Nawabi",
	title: "Hi all, I'm Shabir Nawabi.",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with React.js, Node.js, Vue.js, GatsbyJS",
	resumeLink:
		"https://drive.google.com/file/d/1KbCV08ZdwJW7NnRSJWujBJcVdJirxzok/view?usp=share_link",
};

export const openSource = {
	githubUserName: "ShabirNawabi",
};

export const contact = {};

export const socialLinks = {
	url: "https://app.joinrise.co/professional/shibayashihirobm7av",
	linkedin: "https://shibayashihiro.vercel.app",
	github: "https://github.com/ShibaYashihiro",
	instagram: "https://shibayashihiro.vercel.app",
	facebook: "https://shibayashihiro.vercel.app",
	twitter: "https://shibayashihiro.vercel.app",
};

export const skillsSection = {
	title: "My skills",
	subTitle:		
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
				emoji("⚡ Building RESTful APIs in Node.js"),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "jQuery",
					fontAwesomeClassname: "logos:jquery",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "vscode-icons:file-type-php",
				},
				{
					skillName: "mysql",
					fontAwesomeClassname: "vscode-icons:file-type-mysql",
				},
				{
					skillName: "Laravel",
					fontAwesomeClassname: "logos:laravel",
				},
				{
					skillName: "CodeIgniter",
					fontAwesomeClassname: "logos:codeigniter",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				}
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on serverless architecture"),
				emoji("⚡ Proficiency in using terraform"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "84", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "89",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Bolton",
		subHeader: "Bachelor's Degree in Computer Science",
		duration: "2010 - 2013",
		desc: "Relevant Coursework:",
		grade: "Grade A",
		descBullets: [
			"Operating Systems Architecture",
			"Linux/Unix Programming",
			"Usability in Website and Software Design",
			"Web Page Development",
			"Relational Database Design & SQL",
			"Data Engineering",
			"Advanced Software Programming",
		],
	},
];

export const experience = [
	{
		role: "Senior Laravel Developer",
		company: "UniRanks Inc",
		companylogo: "/img/icons/common/UNIRANK.png",
		date: "Jul 2022 – Jan 2023",
		desc: "Key Qualifications & Responsibilities",
		descBullets: [
			"Using Laravel 9",
			"Livewire",
			"AlpineJS",
			"Using high quality Eloquent query in backend",
			"Mentored and knowledge",
			"Shared with younger colleagues on",
		],
	},
	{
		role: "Senior React Developer",
		company: "ZealousWeb",
		companylogo: "/img/icons/common/ZealousWeb.png",
		date: "Feb 2016 – Jun 2022",
		desc: "Key Qualifications & Responsibilities",
		descBullets: [
			" Web Designing (UI/UX)",
			" Web Development (MERN)",
			" Mobile App Development (React-Native)",
		],
	},
	{
		role: "React developer",
		company: "SBR Technologies",
		companylogo: "/img/icons/common/SBRTechnologies.png",
		date: "Dec 2013 – Sep 2015",
		desc: "Key Qualifications & Responsibilities",
		descBullets: [
			" Web Development (MERN)",
			" Cloud Engineering (Serverless architecture, AWS)",
			" Mobile Technology (React-Native)",
		],
	},
	
];

export const projects = [
	{
		name: "Catering Spares (React + Node)",
		desc: "This Site built with react and node, updated new latest version.",
		github: "https://github.com/ShibaYashihiro/Caterinspares_magento2.4.3_p3",
		link: "https://www.cateringspares.com.au",
	},
	{
		name: "Seravo (React + Node)",
		desc: "A WordPress project layout for use with Git, Composer and Nginx. It also includes a config a Vagrant box and Docker image for local development.",
		github: "https://github.com/ShibaYashihiro/Seravo_WP",
		link: "https://seravo.com/en/",
	},
	{
		name: "SchoolMaster (Laravel 9.0)",
		desc: "This site built with Laravel 9.0.",
		github: "https://github.com/ShibaYashihiro/SchoolMaster_livewire",
		link: "https://www.uniranks.com",
	}
];

export const feedbacks = [
	{
		name: "Charis O.",
		feedback:
			"Excellent and timely communication. Work was done very well, high technical knowledge. ",
	},
	{
		name: "Gibran S.",
		feedback:
			"It was extremely nice working with Nawabi. The communication was easy and clear, the work was high quality, and done within time & budget. Highly recommended. Will hire again!",
	},
	{
		name:"Jorge D.",
		feedback:
			"Working with Nawabi was great. He was accessible and extremely collaborative on this project. He completed all milestones quickly and ahead of schedule. I will definitely go back to him for my next project.",
	},
	{
		name:"Cristi B.",
		feedback:
			"Nawabi was punctual, creative and hard-working. He's a great lovely peep to work with!"
	}
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Shabir Nawabi",
	description:
		"A passionate Full Stack Web Developer.",
	author: "Shabir Nawabi",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://shibayashihiro.vercel.app",
	keywords: [
		"Nawabi",
		"Shabir Nawabi",
		"@devstack777",
		"devstack777",
		"Portfolio",
		"Nawabi Portfolio ",
		"Shabir Nawabi Portfolio",
	],
}

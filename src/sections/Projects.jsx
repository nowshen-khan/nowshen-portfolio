// src/sections/Projects.jsx
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "../components/Image";

// Project data
const allProjects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description:
			"Full-featured online store with shopping cart, authentication, and payment processing.",
		technologies: ["React", "Node.js", "MongoDB", "Stripe"],
		category: "Web",
		image: "/projects.png",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Task Management App",
		description:
			"Productivity application with drag-and-drop functionality and team collaboration.",
		technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
		category: "Web",
		image: "/projects.png",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "Weather Dashboard",
		description:
			"Real-time weather application with forecasts, maps, and location services.",
		technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
		category: "Web",
		image: "/projects.png",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 4,
		title: "Social Media Platform",
		description:
			"Community platform with posts, comments, likes, and real-time notifications.",
		technologies: ["React", "Express", "Socket.io", "MySQL"],
		category: "Fullstack",
		image: "/projects.png",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 5,
		title: "Fitness Tracker",
		description:
			"Workout and nutrition tracking with progress charts and recommendations.",
		technologies: ["React Native", "GraphQL", "MongoDB", "Chart.js"],
		category: "Mobile",
		image: "/projects.png",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 6,
		title: "Portfolio Website",
		description:
			"Responsive portfolio with dark mode, project showcase, and contact form.",
		technologies: ["React", "Tailwind CSS", "EmailJS", "Framer Motion"],
		category: "Web",
		image: "/portfolio-project-hero.png",
		githubUrl: "https://github.com/nowshen-khan/nowshen-portfolio",
		liveUrl: "#",
	},
	// More Project
];

export default function ProjectSection({ id }) {
	const [visible, setVisible] = useState(6); // initially show 6 projects
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Filter projects by category
	const filteredProjects = allProjects.filter(
		(p) => selectedCategory === "All" || p.category === selectedCategory
	);

	// Slice visible projects
	const projectsToShow = filteredProjects.slice(0, visible);

	// Handle Load More
	const handleLoadMore = () => setVisible((prev) => prev + 6);

	const categories = ["All", "Web", "Fullstack", "Mobile"];

	return (
		<section
			id={id}
			className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-background dark:text-white`}
		>
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4  dark:text-gray-100">
						My Projects
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-500">
						Here are some of the projects I've worked on. Each one represents
						different skills and technologies I've mastered.
					</p>

					{/* Category Filters */}
					<div className="flex justify-center gap-4 mt-6 flex-wrap">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => {
									setSelectedCategory(cat);
									setVisible(6); // reset visible count on category change
								}}
								className={`px-4 py-2 rounded-lg transition ${
									selectedCategory === cat
										? "bg-indigo-600 text-white"
										: "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-800 hover:bg-indigo-500 hover:text-white"
								}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsToShow.map((project) => (
						<div
							key={project.id}
							className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 bg-white`}
						>
							<div className="h-48 overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700">
								<span className="text-lg text-gray-500 dark:text-gray-300">
									<Image src={project.image} />
									{/* <img src={project.image} alt={project.title} /> */}
								</span>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-bold mb-2">{project.title}</h3>
								<p className="mb-4 text-gray-600 dark:text-gray-300">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-700"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center mt-4">
									<a
										href={project.githubUrl}
										className="flex items-center px-4 py-2 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-800"
									>
										<FaGithub size={18} className="mr-2" />
										Code
									</a>
									<a
										href={project.liveUrl}
										className="flex items-center px-4 py-2 rounded-lg transition-colors dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white bg-blue-500 hover:bg-blue-400 text-white"
									>
										<ExternalLink size={18} className="mr-2" />
										Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Load More Button */}
				{visible < filteredProjects.length && (
					<div className="flex justify-center mt-8">
						<button
							onClick={handleLoadMore}
							className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
						>
							Load More
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

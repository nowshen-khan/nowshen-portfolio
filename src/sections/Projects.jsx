// src/sections/Projects.jsx
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "../components/Image";
import { forwardRef } from "react";
import { allProjects } from "../contents/projects";

const Projects = forwardRef(({ id, className }, ref) => {
	const [visible, setVisible] = useState(6); // initially show 6 projects
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Handle Load More
	const handleLoadMore = () => setVisible((prev) => prev + 6);

	const categories = ["All", "Web", "WordPress", "Show Live Only"];
	// Filter projects by category
	const filteredProjects = allProjects.filter(
		(p) =>
			selectedCategory === "All" ||
			(p.status === "live" && selectedCategory === "Show Live Only") ||
			p.category === selectedCategory
	);
	// Slice visible projects
	const projectsToShow = filteredProjects.slice(0, visible);

	return (
		<section
			ref={ref}
			id={id}
			className={`${className} py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-background dark:text-white`}
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
							className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 bg-white`}
						>
							{/* Coming Soon / Offline Badge */}
							{project.status === "coming-soon" && (
								<div className="absolute top-3 right-0 bg-yellow-400 text-black px-3 py-1 rounded-l-lg font-semibold text-sm z-10">
									Coming Soon
								</div>
							)}
							{project.status === "offline" && (
								<div className="absolute top-3 right-0 bg-red-400 text-white px-3 py-1 rounded-l-lg font-semibold text-sm z-10">
									Offline
								</div>
							)}

							{/* Project Image */}
							<div className="h-48 overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700">
								<span className="text-lg text-gray-500 dark:text-gray-300">
									<Image src={project.image} alt={project.title} />
									{/* <img src={project.image} alt={project.title} /> */}
								</span>
							</div>

							{/* Project Details */}
							<div className="p-4">
								<h3 className="text-lg font-bold mb-2">{project.title}</h3>
								<p className="mb-4 text-gray-600 dark:text-gray-300">
									{project.description}
								</p>

								{/* Project Technologies */}
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

								{/* Action Buttons */}
								<div className="flex justify-between items-center mt-4">
									{/* Render GitHub button only if available */}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
												// project.status === "coming-soon"
												// 	? "bg-gray-400 text-gray-700 cursor-not-allowed"
												// :
												"dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-800"
											}`}
											// onClick={(e) =>
											// 	project.status === "coming-soon" && e.preventDefault()
											// }
										>
											<FaGithub size={18} className="mr-2" />
											Code
										</a>
									)}

									{/* Render Live Demo button only if available */}

									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
												// project.status === "coming-soon"
												// ? "bg-indigo-300 text-gray-700 cursor-not-allowed" :
												"dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white bg-blue-500 hover:bg-blue-400 text-white"
											}`}
											// onClick={(e) =>
											// 	project.status === "coming-soon" && e.preventDefault()
											// }
										>
											<ExternalLink size={18} className="mr-2" />
											Live Demo
										</a>
									)}
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
});

export default Projects;

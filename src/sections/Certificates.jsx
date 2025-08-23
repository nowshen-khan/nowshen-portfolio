// src/sections/Certificates.jsx
import { Award, BookOpen, GraduationCap } from "lucide-react";

// ✅ DRY approach: Certificates array
const certificates = [
	{
		icon: Award,
		title: "Web Development Bootcamp",
		description:
			"Completed MERN stack course covering frontend & backend development.",
		colorClass: "text-indigo-500",
		linkColor: "text-indigo-600 dark:text-indigo-400",
		link: "#",
	},
	{
		icon: BookOpen,
		title: "JavaScript Mastery",
		description: "Hands-on projects with modern ES6+, async JS, and APIs.",
		colorClass: "text-green-500",
		linkColor: "text-green-600 dark:text-green-400",
		link: "#",
	},
	{
		icon: GraduationCap,
		title: "Responsive Web Design",
		description:
			"Learned HTML, CSS, Tailwind, and accessibility best practices.",
		colorClass: "text-pink-500",
		linkColor: "text-pink-600 dark:text-pink-400",
		link: "#",
	},
];

export default function Certificates({ id }) {
	return (
		<section id={id} className="py-16 bg-white dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-6">
				{/* Section Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
					Certificates & Learning
				</h2>

				{/* Grid of Certificates */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certificates.map(
						(
							{ icon: Icon, title, description, colorClass, linkColor, link },
							index
						) => (
							<div
								key={index}
								className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition"
							>
								{/* Certificate Icon */}
								<Icon className={`w-12 h-12 mb-4 ${colorClass}`} />

								{/* Certificate Title */}
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
									{title}
								</h3>

								{/* Certificate Description */}
								<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
									{description}
								</p>

								{/* View Certificate Link */}
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className={`text-sm font-medium hover:underline ${linkColor}`}
								>
									View Certificate
								</a>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}

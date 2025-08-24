// src/sections/Certificates.jsx
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { FaCertificate } from "react-icons/fa";

// ✅ DRY approach: Certificates array
const certificates = [
	{
		icon: FaCertificate, // course complete icon
		title: "Certified Full Stack Developer Curriculum",
		description:
			"Master frontend & backend development with HTML, CSS, JS, React, Node.js, Python, and real-world projects to become a confident Full Stack Developer.",
		colorClass: "text-green-500",
		linkColor: "text-green-600 dark:text-green-400",
		link: "https://www.freecodecamp.org/learn/full-stack-developer/",
		assessment: "On going",
	},
	{
		icon: Award,
		title: "Full Stack Web Development with MERN",
		description:
			"Completed MERN stack course covering frontend & backend development.",
		colorClass: "text-indigo-500",
		linkColor: "text-indigo-600 dark:text-indigo-400",
		link: "https://ostad.app/share/certificate/c19962-nowshen-anjuman-khan-prapte",
		assessment: "Score: 92%",
	},
	// {
	// 	icon: BookOpen,
	// 	title: "JavaScript Mastery",
	// 	description: "Hands-on projects with modern ES6+, async JS, and APIs.",
	// 	colorClass: "text-green-500",
	// 	linkColor: "text-green-600 dark:text-green-400",
	// 	link: "#",
	// 	assessment: "",
	// },
	{
		icon: GraduationCap,
		title: "Responsive Web Design",
		description: "Learned HTML, CSS, and accessibility best practices.",
		colorClass: "text-pink-500",
		linkColor: "text-pink-600 dark:text-pink-400",
		link: "https://www.freecodecamp.org/certification/nowshen/responsive-web-design",
		assessment: "Completed 100% of challenges.",
	},
];

export default function Certificates({ id, className }) {
	return (
		<section id={id} className={`${className} py-20 bg-white dark:bg-gray-900`}>
			<div className="max-w-6xl mx-auto px-6">
				{/* Section Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
					Certificates & Learning
				</h2>

				{/* Grid of Certificates */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certificates.map(
						(
							{
								icon: Icon,
								title,
								description,
								colorClass,
								linkColor,
								link,
								assessment,
							},
							index
						) => (
							<div
								key={index}
								className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
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

								{/* Optional Assessment */}
								{assessment && (
									<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
										{assessment}
									</p>
								)}

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

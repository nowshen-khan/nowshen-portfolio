// src/sections/Experience.jsx
import { motion } from "framer-motion";

// Timeline data
const experiences = [
	{
		title: "MERN Stack Practice",
		description:
			"Learned to build full-stack apps using MongoDB, Express.js, React, and Node.js. Created projects like a To-Do App and Blog Platform.",
	},
	{
		title: "Frontend Development",
		description:
			"Practiced HTML, CSS, JavaScript, and frameworks like TailwindCSS to build responsive, user-friendly UIs.",
	},
	{
		title: "Self Learning & Projects",
		description:
			"Actively learning through courses, documentation, and personal projects. Sharing work on GitHub and improving skills every day.",
	},
];

export default function Experience({ id, className }) {
	return (
		<section
			id={id}
			className={`${className} px-6 py-20 bg-gradient-to-t from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500`}
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>

				<div className="relative border-l border-gray-300 dark:border-gray-700">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className={`mb-10 ml-6 ${
								index === experiences.length - 1 ? "mb-0" : ""
							} p-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300`}
						>
							{/* Dot */}
							<div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 top-5"></div>

							{/* Content */}
							<h3 className="text-2xl font-semibold">{exp.title}</h3>
							<p className="text-gray-700 dark:text-gray-300 mt-2">
								{exp.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

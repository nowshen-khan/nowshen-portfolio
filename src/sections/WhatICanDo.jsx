import { Code, Globe, Layers, Smartphone } from "lucide-react";

// Card data as array → DRY: avoids repeating same JSX for each card
const services = [
	{
		icon: Code,
		title: "Web Development",
		desc: "Build fast, responsive websites using React, TailwindCSS, and the MERN stack.",
	},
	{
		icon: Globe,
		title: "Responsive Design",
		desc: "Design layouts that adapt to any device, ensuring the best user experience.",
	},
	{
		icon: Layers,
		title: "Fullstack Apps",
		desc: "Develop complete applications with frontend, backend, and database integration.",
	},
	{
		icon: Smartphone,
		title: "Landing Pages",
		desc: "Create high-converting, professional landing pages for businesses.",
	},
];

export default function WhatICanDo({ id, className }) {
	return (
		<section
			id={id}
			className={`${className} py-20 bg-gray-50 dark:bg-gray-900`}
		>
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Section Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					What I Can Do
				</h2>

				{/* Section subtitle/tagline */}
				<p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					I build modern, scalable, and user-friendly digital solutions that
					help businesses grow online.
				</p>

				{/* Grid container for cards */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Map through services array → DRY: avoid repeating each card */}
					{services.map(({ icon: Icon, title, desc }, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800
								hover:shadow-xl hover:-translate-y-2 transform transition duration-300"
						>
							{/* Card icon */}
							<Icon className="mx-auto mb-4 w-12 h-12 text-indigo-500" />

							{/* Card title */}
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								{title}
							</h3>

							{/* Card description */}
							<p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

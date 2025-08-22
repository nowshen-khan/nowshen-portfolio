import { Code, Globe, Layers, Smartphone } from "lucide-react";

export default function WhatICanDo() {
	return (
		<section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
					What I Can Do
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Card 1 */}
					<div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
						<Code className="mx-auto mb-4 w-12 h-12 text-indigo-500" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Web Development
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Build modern, fast, and responsive websites using React,
							TailwindCSS, and the MERN stack.
						</p>
					</div>

					{/* Card 2 */}
					<div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
						<Globe className="mx-auto mb-4 w-12 h-12 text-green-500" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Responsive Design
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Design mobile-friendly layouts that adapt perfectly to any device
							for the best user experience.
						</p>
					</div>

					{/* Card 3 */}
					<div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
						<Layers className="mx-auto mb-4 w-12 h-12 text-blue-500" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Fullstack Apps
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Develop full-featured applications with frontend, backend, and
							database integration.
						</p>
					</div>

					{/* Card 4 */}
					<div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
						<Smartphone className="mx-auto mb-4 w-12 h-12 text-pink-500" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Landing Pages
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Create high-converting, professional landing pages to help
							businesses grow online.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

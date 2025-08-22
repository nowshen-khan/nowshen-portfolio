import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function Certificates() {
	return (
		<section id="certificates" className="py-16 bg-white dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
					Certificates & Learning
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Certificate 1 */}
					<div className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition">
						<Award className="w-12 h-12 text-indigo-500 mb-4" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Web Development Bootcamp
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
							Completed MERN stack course covering frontend & backend
							development.
						</p>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
						>
							View Certificate
						</a>
					</div>

					{/* Certificate 2 */}
					<div className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition">
						<BookOpen className="w-12 h-12 text-green-500 mb-4" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							JavaScript Mastery
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
							Hands-on projects with modern ES6+, async JS, and APIs.
						</p>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
						>
							View Certificate
						</a>
					</div>

					{/* Certificate 3 */}
					<div className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition">
						<GraduationCap className="w-12 h-12 text-pink-500 mb-4" />
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							Responsive Web Design
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
							Learned HTML, CSS, Tailwind, and accessibility best practices.
						</p>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="text-pink-600 dark:text-pink-400 text-sm font-medium hover:underline"
						>
							View Certificate
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

// src/sections/Experience.jsx
export default function Experience({ id }) {
	return (
		<section
			id={id}
			className="min-h-screen px-6 py-20 dark:from-gray-900 dark:to-gray-800 dark:bg-gradient-to-t bg-gradient-to-t from-gray-100 to-gray-200 transition-colors duration-500"
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>

				<div className="relative border-l border-gray-300 dark:border-gray-700">
					{/* Item 1 */}
					<div className="mb-10 ml-6">
						<div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 top-2"></div>
						<h3 className="text-2xl font-semibold">MERN Stack Practice</h3>
						<p className="text-muted-foreground mt-2">
							Learned to build full-stack apps using MongoDB, Express.js, React,
							and Node.js. Created projects like a To-Do App and Blog Platform.
						</p>
					</div>

					{/* Item 2 */}
					<div className="mb-10 ml-6">
						<div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 top-2"></div>
						<h3 className="text-2xl font-semibold">Frontend Development</h3>
						<p className="text-muted-foreground mt-2">
							Practiced HTML, CSS, JavaScript, and frameworks like TailwindCSS
							to build responsive, user-friendly UIs.
						</p>
					</div>

					{/* Item 3 */}
					<div className="ml-6">
						<div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 top-2"></div>
						<h3 className="text-2xl font-semibold">Self Learning & Projects</h3>
						<p className="text-muted-foreground mt-2">
							Actively learning through courses, documentation, and personal
							projects. Sharing work on GitHub and improving skills every day.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

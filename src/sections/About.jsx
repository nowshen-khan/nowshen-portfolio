// About.jsx
import Image from "../components/Image";
export default function About({ id }) {
	return (
		<section
			id={id}
			className="p-8 py-20 rounded-lg grid md:grid-cols-2 items-center gap-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
		>
			{/* Left side - Image */}
			<div className="flex justify-center">
				<Image
					src="/photos/img.jpg"
					alt="Photo of Nowshen Anjuman Khan"
					className=" max-w-96 rounded-2xl shadow-lg object-cover border-4 border-indigo-500 dark:border-indigo-400"
				/>
			</div>

			{/* Right side - Content */}
			<div className="text-center md:text-left">
				<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
					About Me
				</h2>

				<p className="text-indigo-600 dark:text-indigo-400 mb-4">
					MERN Stack Developer | Passionate Coder | Problem Solver
				</p>
				<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
					Hi, I’m{" "}
					<span className="font-semibold text-indigo-600 dark:text-indigo-400">
						Nowshen
					</span>{" "}
					— a passionate MERN Stack Developer. I love building modern,
					responsive, and user-friendly web applications that solve real-world
					problems. My focus is on clean code, smooth UI/UX, and scalable
					backend solutions.
				</p>
				<div className="flex gap-4 justify-center md:justify-start">
					<a
						href="#projects"
						className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
					>
						View Projects
					</a>
					<a
						href="#contact"
						className="px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}

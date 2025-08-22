export default function AboutSection({ id }) {
	return (
		<section
			id={id}
			className="p-8 rounded-lg my-8 grid  items-center gap-8  dark:from-gray-900 dark:to-gray-800 dark:bg-gradient-to-t bg-gradient-to-t from-gray-100 to-gray-200 transition-colors duration-500"
		>
			<p className=" mb-4 items-center justify-self-center dark:bg-gray-700 rounded-full px-2 py-1">
				About Me
			</p>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="flex-shrink-0 w-62 p-10 m-10">
					<img
						src="/profile.jpeg"
						alt="Profile"
						className="w-64 h-64 object-cover rounded-lg shadow-lg"
					/>
				</div>
				<div className="flex-1 w-38 pr-10">
					<h2 className="text-3xl font-bold mb-4">
						Curious about me? Here you have it:
					</h2>
					<p className="leading-relaxed text-justify">
						I'm Nowshen, a motivated MERN stack developer ready to turn your
						ideas into reality. As a recent graduate of a comprehensive web
						development program, I am equipped with cutting-edge skills in the
						modern tech stack, including{" "}
						<span className="font-bold">
							React, Next.js, Node.js, and Tailwind CSS.
						</span>
						<br />
						<br />I may be new to the freelance scene, but I bring a fresh
						perspective, a deep passion for coding, and a commitment to learning
						exactly what your project needs to thrive. I prioritize clear
						communication, clean code, and on-time delivery.
						<br />
						<br />I am currently building my portfolio and am offering
						competitive rates for projects. I'm looking for opportunities to
						prove my skills and deliver exceptional value. If you have a website
						or a small web app in mind, I would be thrilled to discuss how we
						can work together.
						<br />
						<br />
						<span className="font-bold py-40 pt-10">
							Let's talk about your project!
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}

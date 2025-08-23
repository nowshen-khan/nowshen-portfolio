import Image from "./../components/Image";
import { MapPin } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
export default function Hero({ id }) {
	const projects = document.getElementById("projects");
	const contact = document.getElementById("contact");
	const scrollToSection = (section) => {
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id={id}
			className="xt-foreground dark:text-foreground py-20 md:py-28 dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#0d0d2a] dark:to-[#000000] "
		>
			<div className="container mx-auto flex flex-col items-center justify-between px-6 lg:px-12 md:flex-row-reverse">
				{/* Right Image */}
				<div className="md:w-1/3 md:mt-0 flex justify-center md:justify-items-center relative pt-10">
					<Image
						src="/photo.png"
						alt="Nowshen Anjuman Khan"
						height={300}
						className="rounded-lg shadow-2xl  object-cover border-4 border-indigo-500 dark:border-indigo-400"
					/>
				</div>

				{/* Left Content */}
				<div className="md:w-2/3 space-y-6 mt-10">
					<h1 className="text-3xl md:text-4xl font-bold">
						Hi, I&#39;m Nowshen Anjuman Khan <span className="wave">👋</span>
					</h1>
					<p className="text-lg md:text-xl">
						I&#39;m a full stack developer (React.js & Node.js) with a focus on
						creating exceptional digital experiences that are fast, accessible,
						visually appealing, and responsive.
					</p>

					<div className="flex flex-wrap items-center gap-4">
						<span className="flex items-center space-x-2">
							<MapPin /> Gazipur, Bangladesh
						</span>
						<span className="text-green-500 font-semibold">
							Available for new projects
						</span>
					</div>

					{/* Call To Action Button */}
					<div className="mt-6 flex gap-4">
						<button
							onClick={() => scrollToSection(projects)}
							className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 
                     transition shadow-lg font-medium"
						>
							View My Work
						</button>
						<button
							onClick={() => scrollToSection(contact)}
							className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-300"
						>
							Hire Me
						</button>
					</div>

					{/* Social Icons */}
					<SocialLinks className="flex space-x-4 mt-4" />
				</div>
			</div>
		</section>
	);
}

import Image from "./../components/Image";
import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function Hero({ id }) {
	const socialLinks = [
		{
			icon: <FaGithub />,
			href: "https://github.com/nowshen-khan",
		},
		{
			icon: <FaLinkedin />,
			href: "https://www.linkedin.com/in/nowshen-khan/",
		},
		{
			icon: <IoMdMail />,
			href: "mailto:contact@nowshen.com",
		},
	];

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id={id}
			className="text-foreground dark:text-foreground py-20 md:py-28"
		>
			<div className="container mx-auto flex flex-col items-center justify-between px-6 lg:px-12 md:flex-row-reverse">
				{/* Right Image */}
				<div className="md:w-1/3 md:mt-0 flex justify-center md:justify-items-center relative pt-10">
					<Image
						src="/profile.jpeg"
						alt="Nowshen Anjuman Khan"
						width={250}
						height={250}
						className="rounded-lg shadow-2xl"
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
					<div className="mt-6">
						<button
							onClick={scrollToContact}
							className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-300"
						>
							Hire Me
						</button>
					</div>

					{/* Social Icons */}
					<div className="flex space-x-4 mt-4">
						{socialLinks.map((link, index) => {
							return (
								<a
									href={link.href}
									key={index}
									className="text-2xl hover:text-green-500 transition"
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.icon}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

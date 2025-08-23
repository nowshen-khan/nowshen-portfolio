import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const SocialLinks = ({ id, className }) => {
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
			icon: <SiGmail />,
			href: "mailto:nowshen.anjum@gmail.com",
		},
		{
			icon: <IoMdMail />,
			href: "mailto:contact@nowshen.com",
		},
	];
	return (
		<div id={id} className={className}>
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
	);
};

export default SocialLinks;

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
			icon: <IoMdMail />,
			href: "mailto:contact@nowshen.com",
		},
		{
			icon: <IoMdMail />,
			href: "mailto:nowshen.anjum@gmail.com",
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

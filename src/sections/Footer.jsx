// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
				{/* Brand / Name */}
				<div className="text-lg font-semibold mb-4 md:mb-0">
					© {new Date().getFullYear()} Nowshen. All Rights Reserved.
				</div>

				{/* Social Links */}
				<div className="flex space-x-6 text-xl">
					<a
						href="https://github.com/nowshen-khan"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-900 dark:hover:text-white transition"
					>
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com/in/nowshen-khan"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-900 dark:hover:text-white transition"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://twitter.com/NowshenK"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-900 dark:hover:text-white transition"
					>
						<FaTwitter />
					</a>
				</div>
			</div>
		</footer>
	);
}

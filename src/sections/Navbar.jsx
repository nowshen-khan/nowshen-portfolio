import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Navbar() {
	const menuItems = [
		{ label: "About", href: "#about" },
		{ label: "Projects", href: "#projects" },
		{ label: "Testimonials", href: "#testimonials" },
		{ label: "Contact", href: "#contact" },
	];

	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-background text-foreground shadow-md transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<Link
					to="/"
					className="text-xl font-bold text-foreground dark:text-foreground transition-colors duration-300"
				>
					&lt;NK /&gt;
				</Link>

				{/* Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{menuItems.map((item) => (
						<button
							key={item.label}
							onClick={() => handleScroll(item.href.slice(1))}
							className=" text-foreground dark:text-foreground hover:text-indigo-500 transition-colors duration-300"
						>
							{item.label}
						</button>
					))}
				</div>

				{/* Right side */}
				<div className="flex items-center space-x-4">
					{/* Dark Mode Toggle */}
					<DarkModeToggle />

					{/* Download CV */}
					<a
						href="/cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full  transition-colors duration-300"
					>
						Download CV
					</a>
				</div>
			</div>
		</nav>
	);
}

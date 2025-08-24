import { useState, useEffect } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar(id, className) {
	const menuItems = [
		{ label: "About", href: "about" },
		{ label: "Services", href: "services" },
		{ label: "Projects", href: "projects" },
		//{ label: "Testimonials", href: "testimonials" },
		{ label: "Contact", href: "contact" },
	];

	const [activeSection, setActiveSection] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false); // track scroll for shadow effect

	// Handle scroll to update active section and navbar shadow
	useEffect(() => {
		const handleScroll = () => {
			const sections = menuItems.map((item) =>
				document.getElementById(item.href)
			);
			const scrollY = window.scrollY + 120; // offset for navbar

			for (let section of sections) {
				if (
					section &&
					scrollY >= section.offsetTop &&
					scrollY < section.offsetTop + section.offsetHeight
				) {
					setActiveSection(section.id);
				}
			}

			// Add shadow when scrolled
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false); // close mobile menu after click
		}
	};

	return (
		<nav
			id={id}
			className={`${className}
        fixed top-0 w-full z-50 transition-colors duration-300
        ${
					scrolled
						? "shadow-lg bg-background/95 backdrop-blur-md"
						: "bg-background/70 backdrop-blur-md"
				}
      `}
		>
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<button
					onClick={() => handleScroll("home")}
					className="text-xl font-bold transition-colors duration-300 text-foreground hover:text-indigo-500"
				>
					&lt;NK /&gt;
				</button>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{menuItems.map((item) => (
						<button
							key={item.label}
							onClick={() => handleScroll(item.href)}
							className={`
                transition-colors duration-300
                ${
									activeSection === item.href
										? "text-indigo-600 font-semibold"
										: "text-foreground hover:text-indigo-500"
								}
              `}
						>
							{item.label}
						</button>
					))}
				</div>

				{/* Right Side */}
				<div className="flex items-center space-x-4">
					<DarkModeToggle />

					{/* Download CV */}
					<a
						href="/nowshenCV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-400  duration-300"
					>
						Download CV
					</a>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-foreground"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="md:hidden bg-background shadow-md px-6 py-4 space-y-4 transition-colors duration-300">
					{menuItems.map((item) => (
						<button
							key={item.label}
							onClick={() => handleScroll(item.href)}
							className={`
                block w-full text-left transition-colors duration-300
                ${
									activeSection === item.href
										? "text-indigo-600 font-semibold"
										: "text-foreground hover:text-indigo-500"
								}
              `}
						>
							{item.label}
						</button>
					))}
				</div>
			)}
		</nav>
	);
}

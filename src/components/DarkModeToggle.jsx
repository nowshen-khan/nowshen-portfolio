import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const isDark = saved ? saved === "dark" : prefersDark;

		setDark(isDark);
		document.documentElement.classList.toggle("dark", isDark);
	}, []);

	const toggleTheme = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};

	return (
		<button onClick={toggleTheme} className="p-2 rounded-full  ">
			{dark ? (
				<Sun className="w-5 h-5 text-yellow-400" />
			) : (
				<Moon className="w-5 h-5 text-gray-600" />
			)}
		</button>
	);
}

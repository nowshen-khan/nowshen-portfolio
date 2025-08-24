import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme"; // hook

export default function ThemeColorUpdater() {
	const { theme } = useTheme(); // light / dark

	useEffect(() => {
		let metaThemeColor = document.querySelector("meta[name=theme-color]");

		// যদি meta tag না থাকে, তখন তৈরি হবে
		if (!metaThemeColor) {
			metaThemeColor = document.createElement("meta");
			metaThemeColor.setAttribute("name", "theme-color");
			document.head.appendChild(metaThemeColor);
		}

		// theme অনুযায়ী update হবে
		if (theme === "dark") {
			metaThemeColor.setAttribute("content", "#0f172a"); // dark mode color
		} else {
			metaThemeColor.setAttribute("content", "#ffffff"); // light mode color
		}
	}, [theme]);

	return null;
}

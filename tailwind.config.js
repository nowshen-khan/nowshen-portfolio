/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Light mode colors
				background: {
					primary: "#ffffff",
					secondary: "#f5f5f5",
				},
				foreground: {
					primary: "#171717",
					secondary: "#737373",
				},
				primary: "#3b82f6", // Your primary color for buttons, etc.
			},
		},
	},
	plugins: [],
};

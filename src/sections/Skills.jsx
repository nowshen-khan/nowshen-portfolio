// src/components/Skills.jsx
import { useTheme } from "../hooks/useTheme"; // Custom hook to get current theme (light/dark)
import {
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiTailwindcss,
	SiFigma,
	SiBootstrap,
	SiMongodb,
	SiMongoose,
	SiGit,
	SiGithub,
} from "react-icons/si";

// ✅ DRY array - সব skill একসাথে define করা হয়েছে
const skills = [
	{ icon: SiJavascript, label: "JavaScript" },
	{ icon: SiReact, label: "React" },
	{ icon: SiNextdotjs, label: "Next.js" },
	{ icon: SiNodedotjs, label: "Node.js" },
	{ icon: SiExpress, label: "Express.js" },
	{ icon: SiBootstrap, label: "Bootstrap" },
	{ icon: SiTailwindcss, label: "TailwindCSS" },
	{ icon: SiFigma, label: "Figma" },
	{ icon: SiMongodb, label: "MongoDB" },
	{ icon: SiMongoose, label: "Mongoose" },
	{ icon: SiGit, label: "Git" },
	{ icon: SiGithub, label: "Github" },
];

export default function Skills({ id }) {
	const { theme } = useTheme(); // current theme (future use: custom styling)

	return (
		<section
			id={id}
			className="
				p-8 rounded-lg
				bg-gradient-to-br from-blue-50 to-indigo-50 
				dark:from-gray-900 dark:to-gray-800 
				transition-colors duration-500
			"
		>
			{/* Section Title */}
			<h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

			{/* Responsive Grid - Mobile(2), Tablet(3), Desktop(6) */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
				{skills.map(({ icon: Icon, label }) => (
					<div
						key={label}
						className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
					>
						{/* Icon */}
						<Icon className="text-4xl hover:text-green-500 transition-colors" />

						{/* Label */}
						<span className="text-sm">{label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

// src/components/Skills.jsx
import { useTheme } from "../hooks/useTheme";
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiTailwindcss,
	SiBootstrap,
	SiFigma,
	SiMongodb,
	SiMongoose,
	SiGit,
	SiGithub,
	SiWordpress,
	SiElementor,
	SiVercel,
	SiNetlify,
	SiWoocommerce,
	SiPostman,
	SiCpanel,
	SiGithubpages,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = {
	Languages: {
		colorLight: "text-yellow-400",
		colorDark: "text-yellow-300",
		skills: [
			{ icon: SiJavascript, label: "JavaScript" },
			{ icon: SiTypescript, label: "TypeScript" },
		],
	},
	Frontend: {
		colorLight: "text-cyan-500",
		colorDark: "text-cyan-400",
		skills: [
			{ icon: SiReact, label: "React" },
			{ icon: SiNextdotjs, label: "Next.js" },
		],
	},
	Backend: {
		colorLight: "text-green-500",
		colorDark: "text-green-400",
		skills: [
			{ icon: SiNodedotjs, label: "Node.js" },
			{ icon: SiExpress, label: "Express.js" },
		],
	},
	"CSS / UI": {
		colorLight: "text-purple-500",
		colorDark: "text-purple-400",
		skills: [
			{ icon: SiTailwindcss, label: "TailwindCSS" },
			{ icon: SiBootstrap, label: "Bootstrap" },
		],
	},
	Database: {
		colorLight: "text-orange-500",
		colorDark: "text-orange-400",
		skills: [
			{ icon: SiMongodb, label: "MongoDB" },
			{ icon: SiMongoose, label: "Mongoose" },
		],
	},
	CMS: {
		colorLight: "text-blue-600",
		colorDark: "text-blue-400",
		skills: [
			{ icon: SiWordpress, label: "WordPress" },
			{ icon: SiElementor, label: "Elementor (Page Builder)" },
			{ icon: SiWoocommerce, label: "WooCommerce" },
		],
	},
	Tools: {
		colorLight: "text-gray-500",
		colorDark: "text-gray-400",
		skills: [
			{ icon: VscVscode, label: "VS Code" },

			{ icon: SiPostman, label: "Postman" },
			{ icon: SiGit, label: "Git" },
			{ icon: SiGithub, label: "Github" },
			{ icon: SiFigma, label: "Figma" },
		],
	},
	Deployment: {
		colorLight: "text-dark-500",
		colorDark: "text-dark-400",
		skills: [
			{ icon: SiVercel, label: "Vercel" },
			{ icon: SiNetlify, label: "Netlify" },
			{ icon: SiCpanel, label: "cPanel" },
			{ icon: SiGithubpages, label: "GitHub Pages" },
		],
	},
};

export default function Skills({ id, className }) {
	const { theme } = useTheme();

	return (
		<section
			id={id}
			className={`${className} py-20 px-8 rounded-lg
                 bg-gradient-to-br from-blue-50 to-indigo-50 
                 dark:from-gray-900 dark:to-gray-800
                 transition-colors duration-500`}
		>
			<h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

			<div className="flex flex-wrap justify-center gap-8">
				{Object.entries(skillCategories).map(
					([category, { colorLight, colorDark, skills }]) => (
						<div
							key={category}
							className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md w-60 flex flex-col"
						>
							<h3 className="text-lg font-semibold mb-4 text-center">
								{category}
							</h3>
							<div className="grid grid-cols-3 gap-4 justify-items-center">
								{skills.map(({ icon: Icon, label }) => (
									<div
										key={label}
										className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
									>
										<Icon
											className={`text-3xl ${
												theme === "dark" ? colorDark : colorLight
											}`}
										/>
										<span className="text-xs text-center">{label}</span>
									</div>
								))}
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

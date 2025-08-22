// src/components/SkillsSection.js
import { useTheme } from "../hooks/useTheme";
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiTailwindcss,
	SiFigma,
	SiCypress,
	SiStorybook,
	SiBootstrap,
	SiMongodb,
	SiMongoose,
	SiGit,
	SiGithub,
} from "react-icons/si";

const skills = [
	{ icon: SiJavascript, label: "JavaScript" },
	// { icon: SiTypescript, label: "TypeScript" },
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

export default function Skills() {
	const { theme } = useTheme();

	return (
		<section
			id="skills"
			className="p-8 rounded-lg my-8 transition-colors duration-300"
		>
			<h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
				{skills.map(({ icon: Icon, label }) => (
					<div key={label} className="flex flex-col items-center gap-2">
						<Icon className="text-4xl hover:text-green-500 transition" />
						<span className="text-sm">{label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

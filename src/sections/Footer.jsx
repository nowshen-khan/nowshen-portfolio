// Footer.jsx
import SocialLinks from "../components/SocialLinks";

export default function Footer({ id, className }) {
	return (
		<footer
			id={id}
			className={`${className}bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 
			mt-10`}
		>
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
				{/* Brand / Name */}
				<div className="text-lg font-semibold mb-4 md:mb-0">
					© {new Date().getFullYear()} Nowshen. All Rights Reserved.
				</div>

				{/* Social Links */}
				<SocialLinks className="flex space-x-6 text-xl" />
			</div>
		</footer>
	);
}

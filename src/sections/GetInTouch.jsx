import { forwardRef } from "react";

const GetInTouch = forwardRef(({ id, className }, ref) => {
	return (
		<section
			ref={ref}
			id={id}
			className={`${className} flex items-center justify-center bg-background text-foreground px-6 py-20`}
		>
			<div className="max-w-3xl w-full text-center">
				<h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
				<p className="text-lg text-muted-foreground mb-10">
					Have a project in mind or just want to say hello? Fill out the form
					below and I’ll get back to you as soon as possible.
				</p>

				<form
					action="https://formspree.io/f/xovlgnpb" // <-- আপনার Formspree endpoint
					method="POST"
					className="space-y-6"
				>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:ring-2 focus:ring-indigo-500 outline-none"
							required
						/>
					</div>

					<div>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:ring-2 focus:ring-indigo-500 outline-none"
							required
						/>
					</div>

					<div>
						<textarea
							name="message"
							rows="5"
							placeholder="Your Message"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:ring-2 focus:ring-indigo-500 outline-none"
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
});

export default GetInTouch;

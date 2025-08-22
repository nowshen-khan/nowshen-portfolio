import { useState } from "react";

const TestimonialSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			id: 1,
			name: "Sarah Johnson",
			role: "Product Manager at TechCorp",
			content:
				"Working with this developer was an absolute pleasure. The attention to detail and commitment to quality resulted in a product that exceeded our expectations. I would highly recommend their services.",
			avatar:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			rating: 5,
		},
		{
			id: 2,
			name: "Michael Chen",
			role: "CTO at StartupHub",
			content:
				"The web application delivered was robust, scalable, and user-friendly. The communication throughout the project was excellent, and deadlines were consistently met. A true professional!",
			avatar:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			rating: 5,
		},
		{
			id: 3,
			name: "Emma Rodriguez",
			role: "Marketing Director at Brandify",
			content:
				"Our e-commerce platform saw a 40% increase in conversions after the redesign. The intuitive interface and smooth user experience have significantly improved customer satisfaction.",
			avatar:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			rating: 4,
		},
		{
			id: 4,
			name: "David Wilson",
			role: "Freelance Designer",
			content:
				"Collaborating on this project was seamless. The code was clean, well-documented, and followed best practices. I look forward to working together again on future projects.",
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			rating: 5,
		},
	];

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevTestimonial = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	const goToTestimonial = (index) => {
		setCurrentIndex(index);
	};

	const renderStars = (rating) => {
		return Array.from({ length: 5 }, (_, i) => (
			<svg
				key={i}
				className={`w-5 h-5 ${
					i < rating ? "text-yellow-400" : "text-gray-300"
				}`}
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center items-center mb-6">
						<div className="h-1 w-12 bg-blue-500 rounded-full mr-4"></div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
							Client Testimonials
						</h2>
						<div className="h-1 w-12 bg-blue-500 rounded-full ml-4"></div>
					</div>
					<p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
						Discover what my clients have to say about working with me
					</p>
				</div>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{testimonials.slice(0, 2).map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
						>
							<div className="flex mb-4">{renderStars(testimonial.rating)}</div>
							<p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">
								"{testimonial.content}"
							</p>
							<div className="flex items-center">
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-blue-100 dark:ring-blue-900/50"
								/>
								<div>
									<h3 className="font-bold text-gray-800 dark:text-white">
										{testimonial.name}
									</h3>
									<p className="text-blue-500 dark:text-blue-400">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Carousel Section */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg mb-16">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex justify-center">
							<div className="relative">
								<img
									src={testimonials[currentIndex].avatar}
									alt={testimonials[currentIndex].name}
									className="w-48 h-48 rounded-full object-cover shadow-lg ring-8 ring-blue-100 dark:ring-blue-900/30"
								/>
								<div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										></path>
									</svg>
								</div>
							</div>
						</div>

						<div className="md:w-2/3">
							<div className="flex mb-4">
								{renderStars(testimonials[currentIndex].rating)}
							</div>
							<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic">
								"{testimonials[currentIndex].content}"
							</p>
							<div>
								<h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-2">
									{testimonials[currentIndex].name}
								</h3>
								<p className="text-blue-500 dark:text-blue-400 text-lg">
									{testimonials[currentIndex].role}
								</p>
							</div>

							<div className="flex mt-8">
								<button
									onClick={prevTestimonial}
									className="p-3 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-500 dark:text-white mr-4 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
									aria-label="Previous testimonial"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 19l-7-7 7-7"
										></path>
									</svg>
								</button>

								<div className="flex space-x-2 mr-4">
									{testimonials.map((_, index) => (
										<button
											key={index}
											onClick={() => goToTestimonial(index)}
											className={`w-3 h-3 rounded-full ${
												index === currentIndex
													? "bg-blue-500"
													: "bg-gray-300 dark:bg-gray-600"
											}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>

								<button
									onClick={nextTestimonial}
									className="p-3 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-500 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
									aria-label="Next testimonial"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;

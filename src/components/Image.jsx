import React, { useState } from "react";

export default function Image({
	src,
	alt,
	width,
	height,
	objectFit = "cover",
	objectPosition = "center",
	blurDataURL, // optional tiny base64 blurred image
	className = "",
	...props
}) {
	const [loaded, setLoaded] = useState(false);

	const style = {
		width: width ? `${width}px` : undefined,
		maxWidth: width ? `${width}px` : undefined,
		height: height ? `${height}px` : undefined,
		maxHeight: height ? `${height}px` : undefined,
		objectFit,
		objectPosition,
	};

	return (
		<div className={`relative overflow-hidden ${className}`} style={style}>
			{/* Placeholder */}
			{!loaded && blurDataURL ? (
				<img
					src={blurDataURL}
					alt="placeholder"
					className="absolute inset-0 w-full h-full object-cover filter blur-sm"
				/>
			) : (
				!loaded && (
					<div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
				)
			)}

			<img
				src={src}
				alt={alt}
				loading="lazy"
				onLoad={() => setLoaded(true)}
				className={`block w-full h-full transition-opacity duration-300 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
				style={{ objectFit, objectPosition }}
				{...props}
			/>
		</div>
	);
}

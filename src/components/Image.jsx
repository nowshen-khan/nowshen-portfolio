import React, { useState } from "react";

export default function Image({
	src,
	alt,
	width,
	height,
	className = "",
	...props
}) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div
			style={{
				position: "relative",
				width: width ? `${width}px` : "auto",
				height: height ? `${height}px` : "auto",
				overflow: "hidden",
			}}
			className={className}
		>
			{/* Placeholder (blur effect before load) */}
			{!loaded && (
				<div
					style={{
						backgroundColor: "#e5e7eb", // light gray
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
			)}

			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				loading="lazy" // lazy loading like Next.js
				onLoad={() => setLoaded(true)}
				style={{
					display: "block",
					width: width ? `${width}px` : "100%",
					height: height ? `${height}px` : "auto",
					transition: "opacity 0.3s ease-in-out",
					opacity: loaded ? 1 : 0,
				}}
				{...props}
			/>
		</div>
	);
}

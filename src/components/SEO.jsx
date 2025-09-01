import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, image, url }) {
	const siteUrl = "https://nowshen.com";
	const defaultImage = `${siteUrl}/images/nowshen-portfolio.png`;

	return (
		<Helmet>
			{/* Title & Meta */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="author" content="Nowshen Anjuman Khan Prapte" />

			{/* Canonical */}
			<link rel="canonical" href={url || siteUrl} />

			{/* Open Graph / Facebook / LinkedIn */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url || siteUrl} />
			<meta property="og:image" content={image || defaultImage} />
			<meta property="og:image:alt" content={title} />
			<meta property="og:site_name" content="Nowshen Portfolio" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image || defaultImage} />
			<meta name="twitter:site" content="@NowshenK" />
			<meta name="twitter:creator" content="@NowshenK" />
		</Helmet>
	);
}

export default SEO;

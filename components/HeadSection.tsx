import Head from "next/head";
import React from "react";

const HeadSection = () => {
	return (
		<Head>
			<title>Melios - Application Mobile</title>
			<meta
				name="description"
				content="Découvrez Melios, l'application mobile qui révolutionne votre quotidien."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property="og:title" content="Melios - Application Mobile" />
			<meta
				property="og:description"
				content="Découvrez Melios, l'application mobile qui révolutionne votre quotidien."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.melios.com" />
			<meta property="og:image" content="https://www.melios.com/og-image.jpg" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Melios - Application Mobile" />
			<meta
				name="twitter:description"
				content="Découvrez Melios, l'application mobile qui révolutionne votre quotidien."
			/>
			<meta
				name="twitter:image"
				content="https://www.melios.com/twitter-image.jpg"
			/>
		</Head>
	);
};

export default HeadSection;

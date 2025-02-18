import Head from "next/head";
import Script from "next/script";
import React from "react";

const HeadSection = () => {
	return (
		<>
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
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8322235778805536"
				crossOrigin="anonymous"
			></Script>
			<Script
				id="iubenda-configuration"
				type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: `
						var _iub = _iub || [];
						_iub.csConfiguration = {"siteId":3931484,"cookiePolicyId":50936195,"lang":"fr","storage":{"useSiteId":true}};
					`,
				}}
			/>
			<Script
				type="text/javascript"
				src="https://cs.iubenda.com/autoblocking/3931484.js"
			/>
			<Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" />
			<Script
				type="text/javascript"
				src="//cdn.iubenda.com/cs/iubenda_cs.js"
				charSet="UTF-8"
				async
			/>
		</>
	);
};

export default HeadSection;
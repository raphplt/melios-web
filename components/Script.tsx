"use client";
import React from "react";
import Script from "next/script";

const Scripte = () => {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=G-98S1QD8H2L`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-98S1QD8H2L', {
						page_path: window.location.pathname,
						});
					`}
			</Script>
		</>
	);
};

export default Scripte;

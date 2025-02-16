"use client";
import React from "react";
import Script from "next/script";

const Scripte = () => {
	const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${googleAnalyticsId}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true,
                        storage: 'none'              
                    });
                    `}
			</Script>
		</>
	);
};

export default Scripte;
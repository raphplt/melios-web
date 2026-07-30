/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/melios-web" : ""),
	images: {
		unoptimized: true,
		domains: ["dismivwflmiuojhwoxlw.supabase.co"],
	},
};

export default nextConfig;

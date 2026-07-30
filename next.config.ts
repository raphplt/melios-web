import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	basePath: isProd ? "/melios-web" : "",
	images: {
		unoptimized: true,
		domains: ["dismivwflmiuojhwoxlw.supabase.co"],
	},
};

export default nextConfig;
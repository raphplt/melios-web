import { heroui } from "@heroui/react";
import tailwindcssMotion from "tailwindcss-motion";

import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(8, 32, 159)",
				primaryLight: "rgb(8, 32, 159, 0.5)",
				secondary: "rgb(135, 206, 250)",
				background: "#ffffff",
				card: "#ffffff",
				text: "rgb(28, 28, 30)",
				textSecondary: "#F8F9FF",
				textTertiary: "rgb(78, 78, 80)",
				border: "rgb(213, 213, 221)",
				notification: "rgb(255, 59, 48)",
				backgroundSecondary: "rgb(240, 240, 240)",
				backgroundTertiary: "rgb(200, 200, 255)",
				cardBackground: "#F6F6F6",
				greenPrimary: "#47A86C",
				greenSecondary: "#CDEAD6",
				yellowPrimary: "#D1A916",
				yellowSecondary: "#FFF4C2",
				redPrimary: "#C95355",
				redSecondary: "#FFD1CC",
				orangePrimary: "#FFA500",
				orangeSecondary: "#FFE5B3",
				bluePrimary: "#448BAD",
				blueSecondary: "#CDEAF7",
				blueTertiary: "#2a4365",
				purplePrimary: "#955CD3",
				purpleSecondary: "#E5D1F7",
				grayPrimary: "#B0B0B0",
			},
		},
	},
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: "rgb(8, 32, 159)",
						secondary: "rgb(135, 206, 250)",
						background: "#ffffff",
						danger: "rgb(255, 59, 48)",
						warning: "rgb(255, 149, 0)",
						success: "rgb(76, 217, 100)",
					},
				},
				dark: {
					colors: {
						primary: "rgb(8, 32, 159)",
						secondary: "rgb(135, 206, 250)",
						background: "#ffffff",
						danger: "rgb(255, 59, 48)",
						warning: "rgb(255, 149, 0)",
						success: "rgb(76, 217, 100)",
					},
				},
			},
		}),
		tailwindcssMotion,
	],
} satisfies Config;

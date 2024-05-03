/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				spectral: ['Spectral SC', 'serif']
			},
			backdropBlur: {
				none: '0',
				blur: 'blur(20px)'
			}
		}
	},
	plugins: []
};

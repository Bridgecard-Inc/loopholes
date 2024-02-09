/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0F4F57",
				secondary: "#141414",
				white: "#FFFFFF",
				"primary-lte": "#CCE3E4",
			},
		},
	},
	plugins: [],
};

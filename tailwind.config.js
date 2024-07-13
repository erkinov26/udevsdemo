/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				md: { max: "960px" },
				xs: { max: "576px" },
				s: { max: "330px" },
			},
		},
	},
	plugins: [],
};

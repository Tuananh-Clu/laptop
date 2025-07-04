import motion from 'tailwindcss-motion'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [motion],
}
module.exports = {
	theme: {
		// ...
	},
	plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}
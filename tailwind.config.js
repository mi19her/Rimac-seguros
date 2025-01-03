/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(86.01deg, #00F4E2 0%, #00FF7F 100%)',
      },
    },
  },
  plugins: [],
}



import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
      colors: {
        'custom-orange': '#07A685',
        'custom-color': '#422503',
        'custom-brown': '#000000',
        'custom-grey': '#603A16'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
export default config
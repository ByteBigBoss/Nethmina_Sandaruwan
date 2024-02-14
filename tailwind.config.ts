import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor: {
        
        "ns-primary":"#FFFFFF",
        "ns-primary-dark":"#000000",

        "ns-heighlight":"#0780FF",
        "ns-heighlight-dark":"#329AFF",

        "ns-secondary":"#FDFEFF",
        "ns-secondary-dark":"#0F1010",

        "ns-space":"#FFFFFF",
        "ns-space-dark":"#161718",

        "ns-fade-darkblue":"#04101B08",
        "ns-fade-darkblue-dark":"#04101B08",

        "ns-teal-flash":"#29D7EFA3",
        "ns-teal-flash-dark":"#4D5C5E99",

        "ns-badge":"#FFFFFF",
        "ns-badge-dark":"#0F111214",

        "ns-seperator":"#00000029",
        "ns-seperator-dark":"#FFFFFF1F",

        "ns-input":"#FAFAFA",
        "ns-input-dark":"#0A0A0A",

        "ns-Footer":"#000000",
        "ns-Footer-dark":"#0C0C0D",

      },
      colors:{

        "ns-primary":"#000000",
        "ns-primary-dark":"#FFFFFF",

        "ns-secondary":"#00000099",
        "ns-secondary-dark":"#FFFFFF99",

        "ns-heighlight":"#0780FF",
        "ns-heighlight-dark":"#329AFF",

        "ns-badge":"#ABABAB",
        "ns-badge-dark":"#FFFFFF99",

        "ns-paragraph":"#4E4E4E",
        "ns-paragraph-dark":"#FFFFFF7A",

        "ns-caption":"#9D9D9D",
        "ns-caption-dark":"#FFFFFF33",

      },
      borderColor:{

        "ns-primary":"#DBDBDB",
        "ns-primary-dark":"#1B1C1D",

        "ns-secondary":"#DEDEDE",
        "ns-secondary-dark":"#3C3C3C38",

        "ns-input":"#A4A4A4",
        "ns-input-dark":"#FFFFFF1F",

        "ns-heighlight":"#0780FF",
        "ns-heighlight-dark":"#329AFF",
      },
      maxWidth: {
        '10xl': '1728px',
      },
      screens: {
        'ns': {'max': '359px'},
        // => @media (max-width: 349px) { ... }

        'ss': {'min':'360px','max': '640px'},
        // => @media (min-width: 360px) and (max-width: 640px) { ... }


        'shs': {'min':'360px','max': '499px'},
        'shm':{'min': '500px','max': '639px'},

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px) and (max-width: 767px) { ... }

        'md': {'min': '768px', 'max': '1119px'},
        // => @media (min-width: 768px) and (max-width: 1023px) { ... }

        'lg': {'min': '1120px', 'max': '1279px'},
        // => @media (min-width: 1024px) and (max-width: 1279px) { ... }

        'xl': {'min': '1280px', 'max': '1399px'},
        // => @media (min-width: 1280px) and (max-width: 1399px) { ... }

        '2xl': {'min': '1400px', 'max': '1859px'},
        // => @media (min-width: 1400px) and (max-width: 1859px) { ... }

        '3xl': {'min': '1860px'},
        // => @media (min-width: 1860px) { ... }

        /////////////////////////////////OUTER @MEDIA///////////////////////////////
        'nsTsm': {'min':'279px', 'max': '767px'},
        // => @media (min-width: 359px) and (max-width: 767px) { ... }

        'mdTxl': {'min':'768px', 'max': '1399px'},
        // => @media (min-width: 768px) and (max-width: 1399px) { ... }
        
        'ssUp': {'min':'360px'},
        // => @media (min-width: 360px)  { ... }

        'smUp': {'min': '640px'},
        // => @media (min-width: 640px)  { ... }

        'mdUp': {'min': '768px'},
        // => @media (min-width: 768px) { ... }

        'lgUp': {'min': '1120px'},
        // => @media (min-width: 1024px) { ... }

        'xlUp': {'min': '1280px'},
        // => @media (min-width: 1280px){ ... }

        '2xlUp': {'min': '1400px'},
        
        // => @media (min-width: 1400px) { ... }

      },

    },
  },
  plugins: [],
};
export default config;

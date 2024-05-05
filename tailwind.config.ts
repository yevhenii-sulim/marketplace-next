import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "480px",
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        colors: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#43C550",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
            white: "white",
            black: "#000000",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                25: "25%",
                31: "31%",
                40: "40%",
                98: "98%",
                button: "120px",
                "8px": "8px",
                "2px": "2px",
                "3px": "3px",
                "1px": "1px",
                m1px: "-1px",
            },

            rotate: {
                45: "-45deg",
                135: "45deg",
            },
            width: {
                "w-4/12": "40%",
            },
            borderRadius: {
                "4xl": "2rem",
                50: "50%",
            },
            fontSize: {
                "text-xs": "",
                "logo-xl": "2.7rem",
                "logo-l": "2.4rem",
                "logo-m": "2.1rem",
                "logo-s": "1.8rem",
                "logo-adapt": [
                    "calc(36px + (16 * 0.7)  * ((100vw - 320px) / 1440))",
                    { lineHeight: "2rem" },
                ],
            },
            scale: {
                130: "1.3",
            },
        },
    },
    plugins: [],
}
export default config

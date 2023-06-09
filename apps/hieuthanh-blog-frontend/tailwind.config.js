/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-text": "var(--color-text)",
                "color-background": "var(--color-background)",
                "color-primary": "var(--color-primary)",
                "color-blurred-background": "var(--color-blurred-background)",
                "color-secondary": "var(--color-secondary)",
                "color-tertiary": "var(--color-tertiary)",
                "color-decorative": "var(--color-decorative)",
                "color-muted": "var(--color-muted)",
                "color-muted-background": "var(--color-muted-background)",
                "color-info": "var(--color-info)",
                "color-success": "var(--color-success)",
                "color-success-background": "var(--color-success-background)",
                "color-error": "var(--color-error)",
                "color-error-background": "var(--color-error-background)",
                "color-alert": "var(--color-alert)",
                "color-alert-background": "var(--color-alert-background)",
                "color-venn-0": "var(--color-venn-0)",
                "color-venn-1": "var(--color-venn-1)",
                "color-gray-100": "var(--color-gray-100)",
                "color-gray-200": "var(--color-gray-200)",
                "color-gray-300": "var(--color-gray-300)",
                "color-gray-400": "var(--color-gray-400)",
                "color-gray-500": "var(--color-gray-500)",
                "color-gray-600": "var(--color-gray-600)",
                "color-gray-700": "var(--color-gray-700)",
                "color-gray-900": "var(--color-gray-900)",
                "color-gray-1000": "var(--color-gray-1000)",
                "color-subtle-background": "var(--color-subtle-background)",
                "color-subtle-floating": "var(--color-subtle-floating)",
                "color-homepage-light": "var(--color-homepage-light)",
                "color-homepage-dark": "var(--color-homepage-dark)",
                "color-homepage-bg": "var(--color-homepage-bg)",
                "color-syntax-bg": "var(--syntax-bg)",
                "color-syntax-highlight": "var(--syntax-highlight)",
                "color-syntax-txt": "var(--syntax-txt)",
                "color-syntax-comment": "var(--syntax-comment)",
                "color-syntax-prop": "var(--syntax-prop)",
                "color-syntax-bool": "var(--syntax-bool)",
                "color-syntax-val": "var(--syntax-val)",
                "color-syntax-str": "var(--syntax-str rgb(155, 109, 2)",
                "color-syntax-name": "var(--syntax-name)",
                "color-syntax-del": "var(--syntax-del)",
                "color-syntax-regex": "var(--syntax-regex)",
                "color-syntax-fn": "var(--syntax-fn)",
                "color-syntax-dark": "var(--syntax-dark)",
                pink: {
                    100: "#FF80AB",
                    300: "#FF4081",
                    500: "#f40088",
                    700: "#cc0072",
                },
                red: {
                    500: "#EF5350",
                    700: "#D50000",
                },
                orange: {
                    500: "#FF9100",
                    700: "#FF6D00",
                },
                yellow: {
                    500: "#FFC400",
                    700: "#FFAB00",
                },
                lime: {
                    500: "#C6FF00",
                    700: "#AEEA00",
                },
                green: {
                    500: "#00E676",
                    700: "#00C853",
                },
                blue: {
                    500: "#3D5AFE",
                    700: "#304FFE",
                },
                indigo: {
                    500: "#000bef",
                    700: "#0000e0",
                },
                violet: {
                    500: "#D500F9",
                    700: "#AA00FF",
                },
                purple: {
                    500: "#651fff",
                    700: "#4919b7",
                },
                gray: {
                    50: "#f8f8f8",
                    100: "#f2f2f2",
                    200: "#eaeaea",
                    300: "#cccccc",
                    400: "#aaaaaa",
                    500: "#888888",
                    600: "#666666",
                    700: "#444444",
                    800: "#2A2A2A",
                    900: "#111111",
                },
                white: "#FFF",
                black: "#000",
            },
        },
    },
    plugins: [],
}

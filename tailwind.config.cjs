/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "josefin-sans": [`"Josefin Sans"`, "sans-serif"],
            },
            colors: {
                "bg-blue": "#295196",
                "about-bg": "#28323C",
            },
            backgroundImage: {
                "landing-background": "url('./images/header.jpg')",
            },
        },
    },
    plugins: [],
};

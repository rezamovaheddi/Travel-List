/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'Monoton': ['Monoton'],
        },
        padding: {
            'p': ['4rem 0'],
            're': ['3.2rem 0'],
            'pX-rp': ['0.8rem 2.4rem'],
            'p-f': ['1.2rem 3.2rem']
        },
        gridTemplateColumns: {
            'grAuto': ['repeat(auto-fit, minmax(250px, 1fr))']
        },
        extend: {},
    },
    plugins: [],
}
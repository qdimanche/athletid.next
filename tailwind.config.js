module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
// Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'md': '768px',
            'lg' : '1024px',
            'xl' : '1280px',
            '2xl' : '1536px',
            '3xl' : '1700px',
        },
        extend: {
            colors: {
                'timeRed': '#E63D31',
                'greyShade' : 'rgba(0, 0, 0, 0.02)',
                'timeRedHover' : '#D93A2F',
                'blackShade' : '#242629',
                'almostBlack' : '#25282B'
            },
            borderRadius: {
                'medium': '20px'
            },
            margin: {
                'medium': "72px",
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}

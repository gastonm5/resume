module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            exo: ['Exo', 'sans-serif'],
            krona: ['"Krona One"', 'sans-serif']
        },
        textColor: (theme) => ({
            ...theme('colors'),
            primary: '#132227',
            secondary: '#2c4b57',
            accent: '#efd80a'
        }),
        backgroundColor: (theme) => ({
            ...theme('colors'),
            primary: '#132227',
            secondary: '#2c4b57',
            accent: '#efd80a'
        })
    },
    variants: {
        extend: {}
    },
    plugins: []
}

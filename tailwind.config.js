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
            title: '#efd80a'
        }),
        backgroundColor: (theme) => ({
            ...theme('colors'),
            pill: '#efd80a'
        })
    },
    variants: {
        extend: {}
    },
    plugins: []
}

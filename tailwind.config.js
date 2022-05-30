module.exports = {

    // darkMode: 'media',
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        // PROVIDES TAILWIND OBE:WDS DEFAULT DESIGN SYSTEM CLASSES
        // ---> this NO LONGER will ever work again "./node_modules/@obewds/obewds-tw-config/dist/*.js", <--- !!!
        "./node_modules/@obewds/**/dist/*.js",
        "./obewds.tw.config.json"
    ],

    // safelist: [
        // Include to ensure TW can parse all app config default classes
        //JSON.stringify(require('./obewds.tw.config.json'), null, 0),
    // ],

    // theme: {
    //     extend: {},
    // },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],

}

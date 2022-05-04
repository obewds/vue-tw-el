// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-tw-el/',
    title: '@obewds/vue-tw-el',
    description: 'A documentation site for the VueTwEl component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-tw-el" },
            { text: "GitHub", link: "https://github.com/obewds/vue-tw-el" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}

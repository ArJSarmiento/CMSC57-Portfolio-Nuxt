export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        base: '/CMSC57-Portfolio-Nuxt/'
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'CMSC57Portfolio',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '../img/icon.png' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Epilogue&display=swap" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'view-design/dist/styles/iview.css',
        '~/assets/css/main',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/view-ui',
        { src: "~plugins/vue-particles", ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/fontawesome'
    ],

    fontawesome: {
        icons: {
            solid: true,
            brands: true
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
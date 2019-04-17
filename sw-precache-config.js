module.exports = {
    staticFileGlobs: [
        // 'dist/prod/**.html',
        // 'dist/prod/**.js',
        // 'dist/prod/**.css',
        // 'dist/prod/assets/images/*',
        // 'dist/prod/assets/icons/*'
        'dist/prod/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'
    ],
    root: 'dist/prod',
    stripPrefix: 'dist/prod/',
    navigateFallback: '/home',
    runtimeCaching: [{
        urlPattern: /freakick\.com/,
        handler: 'networkFirst'
    }]
};
requirejs.config({
    baseUrl: 'dist/',
    bundles: {
        'module': ['app', 'path/to/module/greet']
    }
});

requirejs(['app'], function(app) {
    console.log(app);
});
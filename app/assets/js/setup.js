(function(global) {
    var version = '0.1.alpha';

    requirejs.config({
        baseUrl: "./",
        paths: {
            'jquery': 'assets/js/jquery-1.11.2.min',
            'foundation': 'assets/js/foundation.min',
            'foundation-dropdown': 'assets/js/foundation/foundation.dropdown',
            'underscore': 'assets/js/underscore-min',
            'backbone': 'assets/js/backbone-min',
            'template': 'assets/js/template',
            'json': 'assets/js/json',
            'xploration.app': 'views/xploration.app',
            'vidbg': 'assets/js/vidbg.min'
        },
        shim: {
            'foundation': {
                deps: ['jquery']
            },
            'foundation-dropdown': {
                deps: ['foundation']
            },
            'backbone': {
                deps: ['jquery', 'underscore']
            },
            'template': {
                deps: ['jquery', 'underscore', 'backbone']
            },
            'xploration.app': {
                deps: ['jquery', 'underscore', 'backbone', 'foundation', 'vidbg', 'foundation-dropdown']
            },
        },
        urlArgs: "version=" + version
    });

    /* App initialize */
    requirejs(['xploration.app'], function(App)  {
        var app = global['app'] = new App();
    });
})(window);

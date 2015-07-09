(function () {
    'use strict';
    angular.module('app.controller.about', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "js/controller/about/about.tpl.html"
                }
            }
        });
    }
})();
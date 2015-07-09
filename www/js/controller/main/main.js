(function () {
    'use strict';
    angular.module('app.controller.main', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('app.main', {
            url: "/main",
            views: {
                'menuContent': {
                    templateUrl: "js/controller/main/main.tpl.html"
                }
            }
        });
    }
})();
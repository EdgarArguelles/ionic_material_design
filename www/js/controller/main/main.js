(function () {
    'use strict';
    angular.module('app.controller.main', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('main', {
            url: "/main",
            templateUrl: "js/controller/main/main.tpl.html"
        });
    }
})();
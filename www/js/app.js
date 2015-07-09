(function () {
    'use strict';
    angular.module('app', [
        'ionic',
        'ngMaterial',
        'app.security.login',
        'app.directive.inputclear',
        'app.controller'
    ])
        .run(run)
        .config(config);

    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    function config($mdGestureProvider, $urlRouterProvider) {
        //prevent to fire angular calls twice when Ionic and ngMaterial are being used
        $mdGestureProvider.skipClickHijack();

        //provide the default route
        $urlRouterProvider.otherwise('/login');
    }
})();
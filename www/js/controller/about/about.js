(function () {
    'use strict';
    angular.module('app.controller.about', ['ngMap'])
        .config(config)
        .controller('AboutCtrl', AboutCtrl);

    function config($stateProvider) {
        $stateProvider.state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "js/controller/about/about.tpl.html",
                    controller: "AboutCtrl as ctrl"
                }
            }
        });
    }

    function AboutCtrl($scope, $ionicModal) {
        var self = this;
        $scope.$on('mapInitialized', function (evt, evtMap) {
            self.map = evtMap;
        });

        $ionicModal.fromTemplateUrl('js/controller/about/map.tpl.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            self.mapModal = modal;
        });
    }

    AboutCtrl.prototype = {
        showMap: function () {
            this.mapModal.show();
        },
        closeMap: function () {
            this.mapModal.hide();
        },
        setCurrentLocation: function () {
            this.map.setCenter("current_location");
        }
    };
})();
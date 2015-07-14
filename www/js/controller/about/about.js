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
        $scope.$on('mapInitialized', function (evt, map) {
            self.map = map;
            self.map.destinations = ["mexico, city", "current_location"];
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
            var self = this;
            this.mapModal.show().then(function () {
                self.toUserPosition();
            });
        },
        closeMap: function () {
            this.mapModal.hide();
        },
        toUserPosition: function () {
            this.map.setCenter(this.map.markers[0].getPosition());
            this.map.setZoom(10);
        },
        toMyPosition: function () {
            this.map.setCenter(this.map.markers[1].getPosition());
            this.map.setZoom(17);
        },
        showBoth: function () {
            if (!this.markerBounds) {
                this.markerBounds = new google.maps.LatLngBounds();
                var self = this;
                angular.forEach(this.map.markers, function (mark) {
                    self.markerBounds.extend(mark.getPosition());
                });
            }
            this.map.fitBounds(this.markerBounds);
        }
    };
})();
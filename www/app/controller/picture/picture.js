(function () {
    'use strict';
    angular.module('app.controller.picture', [])
        .config(config)
        .controller('PictureCtrl', PictureCtrl);

    // @ngInject
    function config($stateProvider) {
        $stateProvider.state('app.picture', {
            url: "/picture",
            views: {
                'menuContent': {
                    templateUrl: "app/controller/picture/picture.tpl.html",
                    controller: "PictureCtrl as ctrl"
                }
            }
        });
    }

    // @ngInject
    function PictureCtrl($mdDialog) {
        this._$mdDialog = $mdDialog;
        this.pictures = [];
    }

    PictureCtrl.prototype = {
        new: function () {
            var self = this;
            navigator.camera.getPicture(function (url) {
                self.pictures.push(url);
            });
        },
        remove: function (index) {
            var confirm = this._$mdDialog.confirm()
                .parent(angular.element(document.body))
                .title('confirm remove')
                .content('Would you like to remove this picture?')
                .ok('Yes')
                .cancel('No');

            var self = this;
            this._$mdDialog.show(confirm).then(function () {
                self.pictures.splice(index, 1);
            });
        }
    };
})();
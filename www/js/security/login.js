(function () {
    'use strict';
    angular.module('app.security.login', [])
        .config(config)
        .controller('LoginCtrl', LoginCtrl)
        .factory('LoginSvc', LoginSvc);

    function config($stateProvider) {
        $stateProvider.state('login', {
            url: "/login",
            templateUrl: "js/security/login.tpl.html",
            controller: "LoginCtrl as ctrl"
        });
    }

    function LoginCtrl($ionicPopup, LoginSvc) {
        this._$ionicPopup = $ionicPopup;
        this._loginSrv = LoginSvc;
        this.userName = '';
        this.password = '';
    }

    LoginCtrl.prototype = {
        login: function () {
            var self = this;
            this._loginSrv.login(this.userName, this.password).then(function (data) {
                self._$ionicPopup.alert({
                    title: 'Ok',
                    template: data
                });
            }, function (err) {
                alert("err: " + err);
            });
        }
    };

    function LoginSvc($q) {
        return {
            login: function (userName, password) {
                return $q(function (resolve, reject) {
                    if (userName === 'edgar') {
                        resolve('Welcome');
                    } else {
                        reject('The credentials are invalid!');
                    }
                });
            }
        }
    }
})();
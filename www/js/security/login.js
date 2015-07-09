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

    function LoginCtrl($location, $mdDialog, LoginSvc) {
        this._$location = $location;
        this._$mdDialog = $mdDialog;
        this._loginSrv = LoginSvc;
        this.userName = '';
        this.password = '';
        this.loginAnimate = "login-animate";
    }

    LoginCtrl.prototype = {
        next: function (event) {
            if (event.keyCode === 13) {
                angular.element(document.querySelector('#password')).focus();
            }
        },
        login: function () {
            var self = this;
            this._loginSrv.login(this.userName, this.password).then(function (data) {
                self._$location.url('main');
            }, function (err) {
                self._$mdDialog.show(
                    self._$mdDialog.alert()
                        .parent(angular.element(document.body))
                        .title('Access denied')
                        .content(err)
                        .ok('Got it!')
                );
            });
        }
    };

    function LoginSvc($q) {
        return {
            login: function (userName, password) {
                return $q(function (resolve, reject) {
                    if (userName === 'user') {
                        resolve('Welcome');
                    } else {
                        reject('The credentials are invalid!');
                    }
                });
            }
        }
    }
})();
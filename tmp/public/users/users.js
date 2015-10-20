var console = console;
var usersModule = angular.module('ar-users', ['ui.router', 'ngResource', 'ngMessages', 'ar-auth'])
    .config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state({
        name: 'users',
        url: '/users',
        templateUrl: 'users/views/userList.html',
        controllerAs: 'ctr',
        controller: 'userList',
        data: { access: { roles: ['users'] }, icon: 'fa-users' },
        resolve: {
            restricted: ["$q", "authService", "$state", function ($q, authService, $state) {
                return authService.HasAccess('users');
            }],
            commonRes: ["locale", function (locale) { return locale.ready('common'); }],
            usersRes: ["locale", function (locale) { return locale.ready('users'); }]
        }
    });
    $stateProvider.state({
        name: 'users.edit',
        url: '/edit/{id:[0-9]*}',
        templateUrl: 'users/views/userEdit.html',
        controllerAs: 'ctr',
        controller: ('userEdit'),
        data: { access: { roles: ['users'] } },
        resolve: {
            restricted: ["$q", "authService", "$state", function ($q, authService, $state) {
                return authService.HasAccess('users');
            }],
            usersRes: ["locale", function (locale) { return locale.ready('users'); }],
            validationRes: ["locale", function (locale) { return locale.ready('validation'); }],
            params: ["$stateParams", function ($stateParams) {
                return { id: $stateParams["id"] };
            }]
        }
    });
}]);

var userEdit = (function () {
    function userEdit() {
    }
    return userEdit;
})();
usersModule.controller('userEdit', userEdit);

var userList = (function () {
    function userList() {
    }
    return userList;
})();
usersModule.controller('userList', userList);

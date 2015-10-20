var moduleSettings = angular.module('ar-settings', ['ui.router', 'ngResource', 'angular-jwt', 'LocalStorageModule'])
    .config(["$stateProvider", "$httpProvider", "localStorageServiceProvider", function ($stateProvider, $httpProvider, localStorageServiceProvider) {
    $stateProvider.state('settings', {
        url: '/settings',
        data: { icon: 'fa-cogs', access: { onlyAuthorized: true } },
        resolve: {
            restricted: ["authService", function (authService) { return authService.IsAuthorized(); }],
            commonLan: ["locale", function (locale) { return locale.ready('common'); }],
            settingsLan: ["locale", function (locale) { return locale.ready('settings'); }]
        },
        templateUrl: 'settings/views/settings.html'
    });
    //
    //
    // $stateProvider.state('settings.summary', {
    //   url: '/summary',
    //   data: { icon: 'fa-cogs', access : <application.auth.IAuthAccess>{ onlyAuthorized : true } },
    //   resolve: {
    //     restricted: (authService: application.auth.IAuthService) => authService.IsAuthorized()
    //   },
    //   template: '<div>summary</div>'
    // });
    $stateProvider.state('settings.account', {
        url: '/account',
        resolve: {
            restricted: ["authService", function (authService) { return authService.HasAccess('settings.account'); }]
        },
        templateUrl: 'settings/views/account.html'
    });
}]);

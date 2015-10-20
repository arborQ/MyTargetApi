var moduleSettings = angular.module('ar-settings', ['ui.router', 'ngResource', 'angular-jwt', 'LocalStorageModule'])
  .config((
  $stateProvider: angular.ui.IStateProvider,
  $httpProvider: angular.IHttpProvider,
  localStorageServiceProvider: any) => {

  $stateProvider.state('settings', {
    url: '/settings',
    data: { icon: 'fa-cogs', access : <application.auth.IAuthAccess>{ onlyAuthorized : true } },
    resolve: {
      restricted: (authService: application.auth.IAuthService) => authService.IsAuthorized(),
      commonLan: (locale: any) => locale.ready('common'),
      settingsLan: (locale: any) => locale.ready('settings')
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
      restricted: (authService: application.auth.IAuthService) => { return authService.HasAccess('settings.account'); }
    },
    templateUrl: 'settings/views/account.html'
  });
})

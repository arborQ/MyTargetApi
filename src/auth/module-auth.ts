var auth = angular.module('ar-auth', ['ui.router', 'ngResource', 'angular-jwt', 'LocalStorageModule'])
  .config((
    $stateProvider: angular.ui.IStateProvider,
    $httpProvider: angular.IHttpProvider,
    localStorageServiceProvider: any) => {
  localStorageServiceProvider
    .setPrefix('ar')
    .setStorageType('localStorage')
    .setNotify(true, true);
  $httpProvider.interceptors.push('jwtInterceptor');

  $stateProvider.state({
    name: 'login',
    url: '/login',
    data : { access : <application.auth.IAuthAccess>{ onlyAnonymous : true }, icon : 'fa-sign-in' },
    resolve : {
      restricted : (authService : application.auth.IAuthService) => { return authService.IsAnnonymous();} ,
      authRes : (locale : any) => locale.ready('auth')
    },
    templateUrl: 'auth/views/login.html',
    controller: 'logInCtr',
    controllerAs: 'ctr'
  });
})

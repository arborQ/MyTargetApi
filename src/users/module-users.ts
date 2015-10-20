var console = console;
var usersModule = angular.module('ar-users', ['ui.router', 'ngResource' ,'ngMessages', 'ar-auth'])
  .config(($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider.state({
    name: 'users',
    url: '/users',
    templateUrl: 'users/views/userList.html',
    controllerAs : 'ctr',
    controller : 'userList',
    data : { access : <application.auth.IAuthAccess>{ roles : [ 'users' ] }, icon : 'fa-users' },
    resolve: {
      restricted: ($q: ng.IQService, authService: application.auth.IAuthService, $state : ng.ui.IStateService) => {
        return authService.HasAccess('users');
      } ,
      commonRes  : (locale : any) => locale.ready('common'),
      usersRes  : (locale : any) => locale.ready('users')
    }
  });

  $stateProvider.state({
    name: 'users.edit',
    url: '/edit/{id:[0-9]*}',
    templateUrl: 'users/views/userEdit.html',
    controllerAs : 'ctr',
    controller : ('userEdit'),
    data : { access : { roles : [ 'users' ] } },
    resolve: {
      restricted: ($q: ng.IQService, authService: application.auth.IAuthService, $state : ng.ui.IStateService) => {
        return authService.HasAccess('users');
      },
      usersRes  : (locale : any) => locale.ready('users'),
      validationRes : (locale : any) => locale.ready('validation') ,
      params : ($stateParams : ng.ui.IStateParamsService) : application.params.IByIdentity =>{
        return { id : $stateParams["id"] };
      }
    }
  });
})

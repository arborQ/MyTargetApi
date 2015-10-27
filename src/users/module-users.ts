var console = console;
var usersModule = angular.module('ar-users', ['ui.router', 'ngResource' ,'ngMessages', 'ar-auth'])
  .config(($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider.state({
    name: 'users',
    url: '/users',
    views: {
      '@' : {
        templateUrl: 'users/views/userList.html',
        controllerAs : 'ctr',
        controller : 'userList'
      },

      'top' : { template : '<a ui-sref=".create"><i class="fa fa-plus-circle"></i></a>' }
    },
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
    name: 'users.create',
    url: '/create',
    views : {
      "@" : {
        templateUrl: 'users/views/userEdit.html',
        controller : 'userCreate',
        controllerAs : 'ctr'
      }
    }
  });

  $stateProvider.state({
    name: 'users.edit',
    url: '/edit/{id:[0-9]*}',
    views : {
      "@" : {
        templateUrl: 'users/views/userEdit.html',
        controller : 'userEdit',
        controllerAs : 'ctr'
      }
    },
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

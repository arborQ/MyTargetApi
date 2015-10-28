
class logInCtr {
  public save: (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => void;
  constructor($http : angular.IHttpService, $rootScope : any, authService : application.auth.IAuthService, $state : ng.ui.IStateService) {
    this.save = (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => {
      $event.preventDefault();
      if (form.$valid) {
        $http.post('/authorization/login', model)
        .success((response : any) => {
          authService.SetToken(response.token);
          $state.go('users');
        });
      }
    }
  }
}

auth.controller('logInCtr', logInCtr);

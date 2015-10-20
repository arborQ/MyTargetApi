
class logInCtr {
  public save: (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => void;
  constructor($resource : angular.resource.IResourceService, $rootScope : any, authService : application.auth.IAuthService, $state : ng.ui.IStateService) {
    this.save = (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => {
      $event.preventDefault();
      $event.stopPropagation();
      if (form.$valid) {
        $rootScope.$loading = true;
        $resource('/api/auth').save(model)
        .$promise.then((res) => {
          if(res.token){
            authService.SetToken(res.token);
            $state.go('users');
          }
          $rootScope.$loading = false;
        });
      }
    }
  }
}

auth.controller('logInCtr', logInCtr);

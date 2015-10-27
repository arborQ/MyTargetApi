
class logInCtr {
  public save: (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => void;
  constructor($http : angular.IHttpService, $rootScope : any, authService : application.auth.IAuthService, $state : ng.ui.IStateService) {
    this.save = (model: any, form: angular.IFormController, $event : ng.IAngularEvent) => {
      $event.preventDefault();
      $event.stopPropagation();

      if (form.$valid) {
        $rootScope.$loading = true;
        $http.post('/authorization/login', model)
        .success((response : any) => {
          authService.SetToken(response.token);
          $state.go('users');
        })
        .finally(() => $rootScope.$loading = false);
        // .save(model)
        // .$promise.then((res) => {
        //   if(res.token){
        //     authService.SetToken(res.token);
        //     $state.go('users');
        //   }
        // }).finally(() =>{
        //   $rootScope.$loading = false;
        // });
      }
    }
  }
}

auth.controller('logInCtr', logInCtr);

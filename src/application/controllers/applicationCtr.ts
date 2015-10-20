var console = console;
class applicationCtr {
  public listOfAllStates: Array<ng.ui.IState>;
  public listOfMenuPositons: Array<string>;
  public userData: application.auth.IUserData;

  public logOut : ($event : ng.IAngularEvent) => void;
  constructor($scope: ng.IScope, $state: ng.ui.IStateService, authService : application.auth.IAuthService) {
    this.listOfAllStates = $state.get();
    this.listOfMenuPositons = ['login', 'users' ,'settings'];
    $scope.$on("newUserData", ($event : ng.IAngularEvent, userData: application.auth.IUserData) => {
      this.userData = userData;
    });

    this.logOut = ($event : ng.IAngularEvent)=> {
      $event.stopPropagation();
      $event.preventDefault();
      authService.LogOut();
      $state.go('home');
    };
  }
}

app.controller('applicationCtr', applicationCtr);

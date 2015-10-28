class spinerCtr{
  public isLoading : boolean;
  constructor($rootScope : ng.IScope){
    this.isLoading = false;
    $rootScope.$on("cfpLoadingBar:started", () => {
      this.isLoading = true;
    });
    $rootScope.$on("cfpLoadingBar:completed", () => {
      this.isLoading = false;
    });
  }
}

app.controller('spinerCtr', spinerCtr);

class spinerCtr{
  constructor($rootScope : ng.IScope){
    $rootScope.$on("cfpLoadingBar:started", () => {
      console.log('started :)')
    });
    $rootScope.$on("cfpLoadingBar:completed", () => {
      console.log('completed :)')
    });
  }
}

app.controller('spinerCtr', spinerCtr);

class availableStates{
  constructor(){
    return (userData : application.auth.IUserData, listOfMenuPositons : Array<string>, listOfAllStates : Array<application.auth.IAuthState>) : Array<ng.ui.IState> =>{
      var filterResult = <Array<ng.ui.IState>>[];
      var authorized = !!userData;
      listOfMenuPositons.forEach(( item : string )=>{
        var [ stateRelated ] = listOfAllStates.filter((state : ng.ui.IState) => state.name === item);
        if(stateRelated) {
          var { access } = stateRelated.data;
          if(access){
            if(access.onlyAuthorized && authorized){
              filterResult.push(stateRelated);
            }
            else if(access.onlyAnonymous && !authorized){
              filterResult.push(stateRelated);
            }
            else if(access.roles && authorized){
              filterResult.push(stateRelated);
            }
          }else{
            filterResult.push(stateRelated);
          }
        }
      });
      return filterResult;
    };
  }
}

app.filter('availableStates', availableStates);

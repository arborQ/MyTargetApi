declare module application.auth{
  interface IUserData{
    id : number;
    login : string;
    roles : Array<string>;
  }
  interface IAuthService{
      SetToken(token : string) : IUserData;
      GetUserData() : IUserData;
      HasAccess(role : string) : ng.IPromise<boolean>;
      IsAnnonymous() : ng.IPromise<boolean>;
      IsAuthorized() : ng.IPromise<boolean>;
      LogOut(): void;
  }
  interface IAuthAccess{
    onlyAnonymous? : boolean;
    onlyAuthorized? : boolean;
    roles? : Array<string>;
  }

  interface IAuthData{
    access? : IAuthAccess;
    icon? : string;
  }
  interface IAuthState extends ng.ui.IState{
    data : IAuthData;
  }
}

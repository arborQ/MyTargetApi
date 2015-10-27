class userCreate{
  constructor(public $resource : ng.resource.IResourceService, public $state : ng.ui.IStateService){
  }
  public save = (model : any) => {
    this.$resource('/user').save(model, () => { this.$state.go('^'); });
  }
}

usersModule.controller('userCreate', userCreate);

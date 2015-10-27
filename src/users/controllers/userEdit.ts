class userEdit{
  public model : any;
  public originModel : any;
  constructor(public $resource : ng.resource.IResourceService, public $state : ng.ui.IStateService, params : application.params.IByIdentity){
    this.model = $resource('/user').get(params, () => {
      this.originModel = angular.copy(this.model);
    });

  }
  public save = (model : ng.resource.IResource<any>) => {
    model.$save(() => { this.$state.go('^'); });
    // this.$resource('/user').save(model, () => { this.$state.go('^'); });
  }
}

usersModule.controller('userEdit', userEdit);

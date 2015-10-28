class userEdit implements application.vm.IEditViewModel<models.users.IUser>{
  public model : models.users.IUser;
  public originModel : models.users.IUser;
  constructor(public $state : ng.ui.IStateService, $resource : ng.resource.IResourceService, params : application.params.IByIdentity){
    this.model = $resource<models.users.IUser>('/user/:id', params, { 'update': { method:'PUT' } }).get(params, () => {
      this.originModel = angular.copy(this.model);
    });

  }
  public save = (form : ng.IFormController, model :  models.users.IUser, $event : ng.IAngularEvent) => {
    $event.preventDefault();
    if(form.$valid){
      model.$update(() => { this.$state.go('^'); });
    }
  }
}

usersModule.controller('userEdit', userEdit);

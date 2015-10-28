class userCreate implements application.vm.IDefaultViewModel<models.users.IUser>{
  public model : models.users.IUser;

  constructor(public $resource : ng.resource.IResourceService, public $state : ng.ui.IStateService){
    var ResourceClass = $resource<models.users.IUser>('/user');
    this.model = new ResourceClass({});
  }

  public save = (form : ng.IFormController, model :  models.users.IUser, $event : ng.IAngularEvent) => {
    $event.preventDefault();
    if(form.$valid){
      model.$save((saveModel : models.users.IUser) => { this.$state.go('^.edit', { id : saveModel.id }); });
    }
  }
}

usersModule.controller('userCreate', userCreate);

class userList implements application.vm.IListViewModel<models.users.IUser>{
  model : ng.resource.IResourceArray<models.users.IUser>;
  constructor($resource: ng.resource.IResourceService){
    this.model = $resource<models.users.IUser>('/user').query();
  }
}

usersModule.controller('userList', userList);

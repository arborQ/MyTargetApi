class userList{
  model : Array<ng.resource.IResource<any>>;
  constructor($resource: ng.resource.IResourceService){
    this.model = $resource('/user').query();
  }
}

usersModule.controller('userList', userList);

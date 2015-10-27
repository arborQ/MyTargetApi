class userList{
  model : Array<any>;
  constructor($resource: ng.resource.IResourceService){
    this.model = $resource('/user').query()
  }
}

usersModule.controller('userList', userList);

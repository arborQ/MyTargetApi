class userList{
  model : Array<any>;
  constructor($resource: ng.resource.IResourceService){
    alert('q?');
    this.model = $resource('/user').query()
  }
}

usersModule.controller('userList', userList);

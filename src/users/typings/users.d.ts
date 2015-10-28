declare module models.users{
  interface IUser extends ng.resource.IResource<IUser>, application.vm.IEditableResource<IUser> {
    id : number;
    name : string;
    email : string;
    created : Date;
    isActive : boolean;
  }
}

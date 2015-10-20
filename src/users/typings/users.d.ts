declare module users{
  interface IUser {
    id : number;
    name : string;
    email : string;
    created : Date;
    isActive : boolean;
  }
}

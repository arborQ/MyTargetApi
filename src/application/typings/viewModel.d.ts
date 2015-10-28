declare module application.vm {
  interface IEditableResource<T> {
    $update(): angular.IPromise<T>;
    $update(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
    $update(success: Function, error?: Function): angular.IPromise<T>;
  }

  interface IDefaultViewModel<T> {
    model: T;
  }
  interface IListViewModel<T> extends IDefaultViewModel<ng.resource.IResourceArray<T>> {
  }

  interface IEditViewModel<T> extends IDefaultViewModel<T> {
    originModel: T;
  }

}

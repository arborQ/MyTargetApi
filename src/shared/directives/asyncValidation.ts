interface IValidationItem {
  name: string;
  url: string;
}
sharedModule.directive('asyncValidation', ($q: ng.IQService, $http: ng.IHttpService, $timeout: ng.ITimeoutService) => {
  return <ng.IDirective>{
    restrict: 'A',
    require: 'ngModel',
    scope: { validations: '=asyncValidation', modelOptions : '=ngModelOptions' },
    link: (scope: { validations: Array<IValidationItem>, modelOptions : any },
      instanceElement: ng.IAugmentedJQuery,
      instanceAttributes: ng.IAttributes,
      controller: ng.INgModelController) => {
      var inProgress = <{ [index: string]: ng.IPromise<void> }>{};
      scope.validations.forEach((item: IValidationItem) => {
        controller.$asyncValidators[item.name] = (modelValue, viewValue) => {
          var def = $q.defer();

          if (controller.$isEmpty(modelValue)) {
            def.resolve();
          } else {
            if (inProgress[item.name]) {
              $timeout.cancel(inProgress[item.name]);
            }
            inProgress[item.name] = $timeout(() => {
              $http.post(item.url, { value: modelValue })
                .success((isValid) => {
                if (isValid) {
                  def.resolve();
                } else {
                  def.reject();
                }
              })
                .catch(def.reject);
            }, scope.modelOptions && scope.modelOptions.debounce ? 0 : 400);
          }
          return def.promise;
        }
      });

    }
  };
})

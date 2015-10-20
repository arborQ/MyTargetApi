app.factory('errorInterceptorFactory', ($q: angular.IQService, toaster: any) => {
  return {
    'responseError': function(rejection: any) {
      if (rejection.status !== 401) { // don't handle unauthenticated errors
        toaster.pop({
          type: 'error',
          title: 'Ajax',
          body: 'ajax error occured',
          showCloseButton: true
        });
      }
      return $q.reject(rejection);
    }
  };
});

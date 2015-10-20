auth.factory('authJwtInterceptor', ($q : angular.IQService, $rootScope : angular.IRootScopeService)=>{
  return {
   'responseError': function(response : any) {
       if (response.status === 401) {
         $rootScope.$broadcast('unauthenticated', response);
       }
       return $q.reject(response);
    }
  };
})

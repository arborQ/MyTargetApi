var logInCtr = (function () {
    function logInCtr($http, $rootScope, authService, $state) {
        this.save = function (model, form, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            if (form.$valid) {
                $rootScope.$loading = true;
                $http.post('/authorization/login', model)
                    .success(function (response) { return authService.SetToken(response.token); })
                    .finally(function () { return $rootScope.$loading = false; });
            }
        };
    }
    return logInCtr;
})();
auth.controller('logInCtr', logInCtr);

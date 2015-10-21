
app.directive('spiner', () => {
  return {
    restrict : 'EA',
    templateUrl : 'application/views/spiner.html',
    controller : 'spinerCtr',
    controllerAs : 'ctr',
    scope : { isVisible : '=' }
  }
});

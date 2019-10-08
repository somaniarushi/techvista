(function(app) {

  var routeLoadingIndicator = function($rootScope) {
    return {
      restrict: 'E',
      template: "<div ng-if='isRouteLoading'><h1>Loading</h1></div>",
      link: function(scope, elem, attrs) {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
      }
    };
  };
  routeLoadingIndicator.$inject = ['$rootScope'];

  app.directive('routeLoadingIndicator', routeLoadingIndicator);

}(angular.module('route-change-loader')));
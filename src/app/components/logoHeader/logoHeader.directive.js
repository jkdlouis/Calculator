(function() {

  angular
    .module('newCalculator')
    .directive('logoHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/logoHeader/logoHeader.html',
        replace: true
      }
    });
})();


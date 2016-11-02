(function() {

  angular
    .module('newCalculator')
    .directive('calHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/header/header.html',
        replace: true
      }
    });
})();


(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, carDetailsService) {

    $scope.selectedCarYear = carDetailsService.get();
    $scope.selectedCarMake = carDetailsService.get();
    $scope.selectedCarModel = carDetailsService.get();

    console.log($scope.selectedCarYear);

  }





})();

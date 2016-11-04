(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, carDetailsService, stateService, insuranceService) {

    $scope.selectedCarDetails = carDetailsService.getData();
    $scope.selectedStateHeader = stateService.getData();
    $scope.selectedInsuranceDetails = insuranceService.getData();
  }





})();

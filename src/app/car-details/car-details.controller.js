(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('CarDetailsController', CarDetailsController);

  /** @ngInject */
  function CarDetailsController($http, $log, $location, $scope, carDetailsService) {
    // car year options
    var carYears = [];
    $scope.carYears = carYears;
    for (var i = 2017; i >= 1970; i--) {
      carYears.push(i);
    }

    $scope.data = {
      option1: 'Car Year',
      option2: 'Car Make',
      option3: 'Car Model'
    };

    $scope.getCarMake = function() {
      var chosenYear = $scope.selectedCarYear;
      var edmundsUrl = 'https://forms.smartfinancial.com/api/v1/vehicle/makes?year=' + chosenYear + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';

      if (chosenYear >= 1990) {
        $http.get(edmundsUrl)
          .success(function(result) {
            $scope.carMakes = result.makes;
          })
          .error(function(data) {
            $log(data);
          });
      }
    };

    $scope.getCarModel = function() {
      var url = 'https://forms.smartfinancial.com/api/v1/vehicle/models?year=' + $scope.selectedCarYear + '&make=' + $scope.selectedCarMake + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
      $http.get(url)
        .success(function(result) {
          $scope.carModels = result.models;
        })
        .error(function(data) {
          $log(data);
        });

    };

    carDetailsService.set($scope.selectedCarYear);
    carDetailsService.set($scope.selectedCarMake);
    carDetailsService.set($scope.selectedCarModel);

    $scope.goTo = function() {
      var carYear = $scope.selectedCarYear;
      var carMake = $scope.selectedCarMake;
      var carModel = $scope.selectedCarModel;
      if(carYear !== '' && carMake !== '' && carModel !== '') {
        $location.path('/state');
      } else if (carYear !== undefined && carMake !== undefined && carModel !== undefined) {
        $location.path('/state');
      } else {
        $location.path('/driver-details');
      }
    };

}




})();

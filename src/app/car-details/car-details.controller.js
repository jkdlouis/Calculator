(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('CarDetailsController', CarDetailsController);

  /** @ngInject */
  function CarDetailsController($http, $log, $location, $scope, $state) {
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
      console.log($scope.selectedCarYear);
      console.log($scope.selectedCarMake);
      var url = 'https://forms.smartfinancial.com/api/v1/vehicle/models?year=' + $scope.selectedCarYear + '&make=' + $scope.selectedCarMake + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
      $http.get(url)
        .success(function(result) {
          $scope.carModels = result.models;
        })
        .error(function(data) {
          $log(data);
        });

    };

    $scope.required = true;

    $scope.goTo = function() {
      var carYear = $scope.selectedCarYear;
      var carMake = $scope.selectedCarMake;
      var carModel = $scope.selectedCarModel;
      if(carYear !== '' && carMake !== '' && carModel !== '') {
        $location.path('/state.html');
      } else if (carYear !== undefined && carMake !== undefined && carModel !== undefined) {
        $location.path('/state.html');
      } else {
        $location.path('/driver-details');
      }
    };






    // car makes options

    // $scope.getVehicleMakes = function() {
    //   if (!$scope.carYear) {
    //     $location.path('/car-details');
    //   }
    //   var chosenYear = parseInt($scope.selectCarYear);
    //   var edmundsUrl = 'https://forms.smartfinancial.com/api/v1/vehicle/makes?year=' + chosenYear + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
    //   var smartUrl = 'https://forms.smartfinancial.com/api/v1/vehicle_makes?callback=JSON_CALLBACK&make_year=' + chosenYear;
    //
    //   if (chosenYear >= 1990) {
    //     $http.get(edmundsUrl).then(function success(response) {
    //
    //       console.log('response'+response);
    //
    //       if(response.status === 200) {
    //         var makesArray = [];
    //
    //         response.data.makes.forEach(function (make) {
    //           var carMake = {};
    //
    //           for (var i = 0; i < $scope.car_logos.length; i++) {
    //             if ($scope.car_logos[i].make.toLowerCase() === make.name.toLowerCase()) {
    //               carMake.logo_url = $scope.car_logos[i].logo_url;
    //             }
    //           }
    //
    //           carMake.make = make.name;
    //           carMake.edmunds = make;
    //           makesArray.push(carMake);
    //
    //
    //         });
    //       }
    //     })
    //   }
    // };

    //
    // $scope.getVehicleModels = function() {
    //   var url = 'https://forms.smartfinancial.com/api/v1/vehicle/models?year=' + $scope.carYear + '&make=' + $scope.carMake.name + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
    //   $scope.showLoader = true;
    //
    //   $http.get(url).then(function success(response) {
    //
    //     if (response.status === 200) {
    //       var models = [];
    //
    //       response.data.models.forEach(function (model) {
    //         models.push(model.name);
    //       });
    //
    //       $scope.car_models = models;
    //     }
    //   }, function error(response) {
    //     console.error('Unable to retrieve models from Edmunds');
    //     $location.path('/car-details');
    //   });
    //
    //
    // }

    // $scope.goToIf = function() {
    //   var carYear = selectCarYear;
    //   var carMake = selectCarMake;
    //   var carModel = selectCarModel;
    //
    //   if(carYear !== angular.undefined && carMake !== angular.undefined && carModel !== angular.undefined ) {
    //     $location.path('/state.html');
    //   } else if (carYear !== '' && carMake !== '' && carModel !== '' ) {
    //     $location.path('/state.html');
    //   } else {
    //     $location.path('/car-details');
    //   }
    // }

}




})();

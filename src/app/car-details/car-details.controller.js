(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('CarDetailsController', CarDetailsController);

  /** @ngInject */
  function CarDetailsController($http, $log, $location, $scope) {
    var vm = this;
    // car year options
    var carYears = [];
    vm.carYears = carYears;
    for (var i = 2017; i >= 1970; i--) {
      carYears.push(i);
    }

    vm.data = {
      option1: 'Car Year',
      option2: 'Car Make',
      option3: 'Car Model'
    };

    vm.getCarMake = function() {
      var chosenYear = $scope.selectedCarYear;
      var edmundsUrl = 'https://forms.smartfinancial.com/api/v1/vehicle/makes?year=' + chosenYear + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';

      if (chosenYear >= 1990) {
        $http.get(edmundsUrl)
          .success(function(result) {
            vm.carMakes = result.makes;
          })
          .error(function(data) {
            $log(data);
          });
      }
    };

    vm.getCarModel = function() {
      console.log($scope.selectedCarYear);
      console.log($scope.selectedCarMake);
      var url = 'https://forms.smartfinancial.com/api/v1/vehicle/models?year=' + $scope.selectedCarYear + '&make=' + $scope.selectedCarMake + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
      $http.get(url)
        .success(function(result) {
          vm.carModels = result.models;
        })
        .error(function(data) {
          $log(data);
        });

    };






    // car makes options

    // vm.getVehicleMakes = function() {
    //   if (!vm.carYear) {
    //     $location.path('/car-details');
    //   }
    //   var chosenYear = parseInt(vm.selectCarYear);
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
    // vm.getVehicleModels = function() {
    //   var url = 'https://forms.smartfinancial.com/api/v1/vehicle/models?year=' + vm.carYear + '&make=' + vm.carMake.name + '&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr';
    //   vm.showLoader = true;
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

    // vm.goToIf = function() {
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

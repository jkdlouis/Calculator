(function() {
  'use strict';

  angular
    .module('newCalculator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('car-details', {
        url: '/car-details',
        templateUrl: 'app/car-details/car-details.html',
        controller: "CarDetailsController"
      })

      .state('state', {
        url: '/state',
        templateUrl: 'app/state/state.html',
        controller: "StateController"
      })

      .state('save', {
        url: '/save',
        templateUrl: 'app/save/save.html',
        controller: "SaveController"
      })

      .state('insurance', {
        url: '/insurance',
        templateUrl: 'app/insurance/insurance.html',
        controller: "InsuranceController"
      });

    $urlRouterProvider.otherwise('/');
  }

})();

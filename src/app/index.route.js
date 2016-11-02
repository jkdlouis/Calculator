(function() {
  'use strict';

  angular
    .module('newCalculator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })

      .state('car-details', {
        url: '/car-details',
        templateUrl: 'app/car-details/car-details.html',
        controller: "CarDetailsController",
        controllerAs: 'carDetails'
      })

      .state('state', {
        url: '/state',
        templateUrl: 'app/state/state.html'
      })

      .state('save', {
        url: '/save',
        templateUrl: 'app/save/save.html'
        // controller: "SaveController",
        // controllerAs: 'save'
      })

      .state('insurance', {
        url: '/insurance',
        templateUrl: 'app/insurance/insurance.html'
        // controller: "InsuranceController",
        // controllerAs: 'insurance'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

(function() {
  'use strict';

  angular
    .module('newCalculator')
    .controller('InsuranceController', InsuranceController);

  /** @ngInject */
  function InsuranceController($location, $scope, insuranceService) {

    $scope.insuranceCompanies = [
      {
        name: '21st Century Insurance',
        code: '21st Century Insurance'
      },
      {
        name: 'AAA Insurance Co.',
        code: 'AAA Insurance Co.'
      },
      {
        name: 'Allied',
        code: 'Allied'
      },
      {
        name: 'Allstate Insurance',
        code: 'Allstate Insurance'
      },
      {
        name: 'American Family Insurance',
        code: 'American Family Insurance'
      },
      {
        name: 'American National Insurance',
        code: 'American National Insurance'
      },
      {
        name: 'Amica Insurance',
        code: 'Amica Insurance'
      },
      {
        name: 'Cotton States Insurance',
        code: 'Cotton States Insurance'
      },
      {
        name: 'Country Financial',
        code: 'Country Financial'
      },
      {
        name: 'Erie Insurance Company',
        code: 'Erie Insurance Company'
      },
      {
        name: 'Esurance',
        code: 'Esurance'
      },
      {
        name: 'Farm Bureau',
        code: 'Farm Bureau'
      },
      {
        name: 'Farmers Insurance',
        code: 'Farmers Insurance'
      },
      {
        name: 'GEICO',
        code: 'GEICO'
      },
      {
        name: 'GMAC Insurance',
        code: 'GMAC Insurance'
      },
      {
        name: 'Independent Agency',
        code: 'Independent agency'
      },
      {
        name: 'Infinity Insurance',
        code: 'Infinity Insurance'
      },
      {
        name: 'Liberty Mutual',
        code: 'Liberty Mutual'
      },
      {
        name: 'Mercury',
        code: 'Mercury'
      },
      {
        name: 'Metropolitan Insurance Co.',
        code: 'Metropolitan Insurance Co.'
      },
      {
        name: 'Nationwide',
        code: 'Nationwide'
      },
      {
        name: 'Other',
        code: 'Other'
      },
      {
        name: 'Plymouth Rock',
        code: 'Plymouth Rock'
      },
      {
        name: 'Progressive Insurance',
        code: 'Progressive Insurance'
      },
      {
        name: 'SAFECO',
        code: 'SAFECO'
      },
      {
        name: 'Sentry Insurance Co.',
        code: 'Sentry Insurance Co.'
      },
      {
        name: 'Shelter Insurance Co.',
        code: 'Shelter Insurance Co.'
      },
      {
        name: 'State Farm',
        code: 'State Farm'
      },
      {
        name: 'The Hartford',
        code: 'The Hartford'
      },
      {
        name: 'The Hartford AARP',
        code: 'The HArtford AARP'
      },
      {
        name: 'Travelers Insurance Co.',
        code: 'Travelers Insurance Co.'
      },
      {
        name: 'Unitrin Direct',
        code: 'Unitrin Direct'
      },
      {
        name: 'USAA',
        code: 'USAA'
      }
    ];

    $scope.goTo = function() {
      var selectedInsuranceComp = $scope.selectedInsuranceComp;
      console.log(selectedInsuranceComp);
      var premiumAmount = $scope.premiumAmount;
      var fixedAmount = $scope.premiumAmount;
      if(selectedInsuranceComp !== '' && premiumAmount !== '') {
        $location.path('/save');
        insuranceService.setData(selectedInsuranceComp, premiumAmount, fixedAmount);
      } else if (selectedInsuranceComp !== undefined && premiumAmount !== undefined) {
        $location.path('/save');
        insuranceService.setData(selectedInsuranceComp, premiumAmount, fixedAmount);
      } else {
        $location.path('/insurance');
      }
    };







  }




})();

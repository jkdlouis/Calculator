(function() {
  'use strict';

  angular
    .module('newCalculator')
    .factory('insuranceService', insuranceService);

  function insuranceService() {
    var savedData;

    return {
      getData: function() {
        return savedData;
      },
      setData: function(value1, value2, value3, value4) {
        savedData = {
          insuranceCompany: value1,
          amount: value2,
          fixedAmount: value3,
          insuranceCompanyList: value4
        }
      }
    };
  }

})();

(function() {
  'use strict';

  angular
    .module('newCalculator')
    .factory('stateService', stateService);

  function stateService() {
    var savedData;

    return {
      getData: function() {
        return savedData;
      },
      setData: function(value) {
        savedData = value;
      }
    };
  }

})();

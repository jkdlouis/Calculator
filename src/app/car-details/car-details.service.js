(function() {
  'use strict';

  angular
    .module('newCalculator')
    .factory('carDetailsService', carDetailsService);

  function carDetailsService() {
    var savedData = '';

    function set(data) {
      savedData = data;
    }

    function get() {
      return savedData;
    }

    return {
      set: set,
      get: get
    }
  }

})();

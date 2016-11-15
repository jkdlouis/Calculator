(function() {
  'use strict';

  angular
    .module('newCalculator')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();

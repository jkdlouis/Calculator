(function() {
  'use strict';

  angular
    .module('newCalculator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

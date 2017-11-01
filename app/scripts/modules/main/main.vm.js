'use strict';

angular.module('blockchain.main')
  .service('mainViewModel', function() {
    var self = this;

    const hashPattern = '';
    const records = 12;
    const blockchainNumber = 2;

    self.blockchains = [];


    self.mine = function(block) {
      console.log(CryptoJS.HASH.sha256("message"));
    };

    function init() {
      for (var i = 0; i < records; i++) {

      }
    }

    init();
  });

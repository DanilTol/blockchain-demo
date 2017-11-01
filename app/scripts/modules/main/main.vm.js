'use strict';

angular.module('blockchain.main')
  .service('mainViewModel', function() {
    var self = this;
    const hashPattern = '';

    self.mine = function(block) {
      console.log(Crypt.HASH.sha256("message"));
    };



  });

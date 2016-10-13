(function() {
  'use strict';

  var app = angular.module('cameraApp', []);

  app.filter('rating', function () {
    return function(input) {
      var rating = '';
      for (var i = 0; i < input; i++) {
        rating += '* ';
      }
      return rating;
    }
  });

  $('select').material_select();

})();
